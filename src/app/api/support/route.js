import { NextResponse, after } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/support
 *
 * The browser talks ONLY to this route. The Strapi token stays on the
 * server (STRAPI_SUPPORT_API_TOKEN has no NEXT_PUBLIC_ prefix, so Next.js
 * never sends it to the browser).
 *
 * Flow: Turnstile check -> validate -> save in Strapi -> respond ->
 * (in the background) send confirmation email to the customer + admin.
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const STRAPI_SUPPORT_API_TOKEN = process.env.STRAPI_SUPPORT_API_TOKEN;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

const SUPPORT_ENDPOINT = "api/supportanfrages";

// Same SMTP variables the contact form already uses – nothing new to add.
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------------------------------------------------------
   Turnstile
--------------------------------------------------------- */
async function verifyTurnstileToken(token, remoteIp) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: remoteIp,
      }),
    }
  );

  return response.json();
}

/* ---------------------------------------------------------
   Company contact details for the email footer
   (same Strapi "Kontakt" content type as the contact form).
   Never breaks sending if this fails.
--------------------------------------------------------- */
async function getKontaktInfo() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/kontakt?populate=*`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Failed to fetch Kontakt info:", response.status);
      return null;
    }

    const data = (await response.json())?.data;
    if (!data) return null;

    return {
      telefon: data.Telefon || "",
      adresse: data.Adresse || "",
      email: data.Email || "",
    };
  } catch (error) {
    console.error("Error fetching Kontakt info:", error);
    return null;
  }
}

/* ---------------------------------------------------------
   SMTP transporter (pooled = one connection reused)
--------------------------------------------------------- */
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  pool: true,
  maxConnections: 3,
  maxMessages: 100,
  auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  tls: { minVersion: "TLSv1.2" },
});

/* ---------------------------------------------------------
   Helpers
--------------------------------------------------------- */
function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Brand tokens copied from Style.css (:root) – emails can't use CSS variables
const FONT = "'Roboto', Arial, Helvetica, sans-serif";
const P = `margin:0 0 20px;font-size:16px;font-weight:300;line-height:1.65;`;
const H2 = `margin:0 0 16px;font-family:${FONT};font-size:20px;font-weight:400;color:#373737;`;

const footerHtml = (kontaktInfo) => {
  const telefon = kontaktInfo?.telefon || "";
  const adresse = kontaktInfo?.adresse || "";
  const email = kontaktInfo?.email || "";

  if (!telefon && !adresse && !email) return "";

  return `
    <div style="margin-top:10px;padding-top:30px;border-top:1px solid #EFEFEF;text-align:left;">
      <p style="margin:35px 0 0;font-size:16px;font-weight:300;line-height:1.65;">Freundliche Grüsse</p>
      ${adresse ? `<p style="margin:0;font-size:15px;font-weight:300;line-height:1.6;">${adresse}</p>` : ""}
      ${
        email
          ? `<p style="margin:0 0 10px;font-size:15px;font-weight:300;line-height:1.5;">
               <strong style="font-weight:600;">E-Mail:</strong>
               <a href="mailto:${escapeHtml(email)}" style="color:#373737;text-decoration:underline;">${escapeHtml(email)}</a>
             </p>`
          : ""
      }
      ${
        telefon
          ? `<p style="margin:0 0 10px;font-size:15px;font-weight:300;line-height:1.5;">
               <strong style="font-weight:600;">Telefon:</strong>
               <a href="tel:${escapeHtml(telefon.replace(/\s+/g, ""))}" style="color:#373737;text-decoration:underline;">${escapeHtml(telefon)}</a>
             </p>`
          : ""
      }
    </div>`;
};

// One shared layout so the two emails don't repeat 100 lines of HTML
const emailLayout = ({ title, headerHtml, bodyHtml }) => `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&display=swap" rel="stylesheet" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f8f8f8;font-family:${FONT};color:#373737;">
    <div style="max-width:650px;margin:40px auto;background:#ffffff;border-radius:20px;overflow:hidden;font-family:${FONT};">
      <div style="background-color:#FFD900;padding:28px 40px;">${headerHtml}</div>
      <div style="padding:40px;">${bodyHtml}</div>
    </div>
  </body>
</html>`;

const tableRow = (label, value, last = false) => `
  <tr>
    <td style="padding:12px 0;${last ? "" : "border-bottom:1px solid #EFEFEF;"}font-size:15px;font-weight:600;color:#373737;width:35%;">${label}</td>
    <td style="padding:12px 0;${last ? "" : "border-bottom:1px solid #EFEFEF;"}font-size:15px;font-weight:300;color:#373737;">${escapeHtml(value || "-")}</td>
  </tr>`;

/* ---------------------------------------------------------
   Send confirmation (customer) + notification (admin)
--------------------------------------------------------- */
async function sendSupportEmails({
  email,
  vorname,
  nachname,
  telefon,
  supportanfrage,
  nachricht,
  kontaktInfo,
}) {
  const fullName = `${vorname || ""} ${nachname || ""}`.trim();
  // Strip line breaks so user input can never inject email headers
  const safeName = fullName.replace(/[\r\n]+/g, " ");

  const adminHtml = emailLayout({
    title: "Neue Supportanfrage",
    headerHtml: `<h2 style="margin:0;font-family:${FONT};font-size:20px;font-weight:400;color:#373737;">Sie haben eine neue Supportanfrage</h2>`,
    bodyHtml: `
      <table style="width:100%;border-collapse:collapse;margin-bottom:30px;">
        ${tableRow("Name", fullName)}
        ${tableRow("E-Mail", email)}
        ${tableRow("Telefon", telefon)}
        ${tableRow("Supportanfrage", supportanfrage, true)}
      </table>

      <h2 style="${H2}">Nachricht</h2>
      <div style="background-color:#f8f8f8;border:1px solid #EFEFEF;padding:20px;border-radius:20px;font-size:15px;font-weight:300;color:#373737;white-space:pre-line;margin-bottom:30px;">${escapeHtml(nachricht || "-")}</div>
      ${footerHtml(kontaktInfo)}`,
  });

  const customerHtml = emailLayout({
    title: "Vielen Dank für Ihre Supportanfrage",
    headerHtml: `<h1 style="margin:0;font-family:${FONT};font-size:26px;font-weight:600;color:#222633;">Vielen Dank für Ihre Supportanfrage</h1>`,
    bodyHtml: `
      <p style="${P}">Hallo ${escapeHtml(vorname || "")},</p>
      <p style="${P}">vielen Dank für Ihre Nachricht an Löwenmut. Wir haben Ihre Supportanfrage erfolgreich erhalten.</p>
      <p style="${P}">Unser Team prüft Ihr Anliegen und meldet sich so bald wie möglich persönlich bei Ihnen.</p>
      ${footerHtml(kontaktInfo)}`,
  });

  // Both emails go out at the same time
  await Promise.all([
    transporter.sendMail({
      from: `"Löwenmut" <${SMTP_FROM}>`,
      to: email,
      replyTo: ADMIN_EMAIL,
      subject: "Vielen Dank für Ihre Supportanfrage bei Löwenmut",
      html: customerHtml,
    }),
    transporter.sendMail({
      from: `"Löwenmut" <${SMTP_FROM}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Neue Supportanfrage von ${safeName}`,
      html: adminHtml,
    }),
  ]);
}

const fail = (message, status) =>
  NextResponse.json({ success: false, message }, { status });

/* ---------------------------------------------------------
   POST /api/support
--------------------------------------------------------- */
export async function POST(request) {
  try {
    if (!STRAPI_URL || !STRAPI_SUPPORT_API_TOKEN) {
      console.error("Missing Strapi support configuration:", {
        STRAPI_URL: Boolean(STRAPI_URL),
        STRAPI_SUPPORT_API_TOKEN: Boolean(STRAPI_SUPPORT_API_TOKEN),
      });
      return fail("Strapi-Konfiguration fehlt.", 500);
    }

    if (!TURNSTILE_SECRET_KEY) {
      console.error("Missing TURNSTILE_SECRET_KEY");
      return fail("Turnstile-Konfiguration fehlt.", 500);
    }

    const body = await request.json();

    const {
      vorname,
      nachname,
      email,
      telefon,
      supportanfrage,
      nachricht,
      turnstileToken,
    } = body;

    // 1. Bot check
    if (!turnstileToken) {
      return fail("Bitte bestätigen Sie, dass Sie kein Bot sind.", 400);
    }

    const remoteIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const turnstileResult = await verifyTurnstileToken(turnstileToken, remoteIp);

    if (!turnstileResult.success) {
      console.error("Turnstile failed:", turnstileResult["error-codes"]);
      return fail(
        "Die Bot-Überprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
        400
      );
    }

    // 2. Validation
    if (!vorname || !nachname || !email || !telefon || !supportanfrage) {
      return fail("Bitte füllen Sie alle erforderlichen Felder aus.", 400);
    }

    if (!EMAIL_REGEX.test(email)) {
      return fail("Bitte geben Sie eine gültige E-Mail-Adresse ein.", 400);
    }

    // 3. Save to Strapi (+ load the email footer details at the same time)
    const [strapiResponse, kontaktInfo] = await Promise.all([
      fetch(`${STRAPI_URL}/${SUPPORT_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_SUPPORT_API_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            vorname,
            nachname,
            email,
            telefon,
            supportanfrage,
            nachricht,
          },
        }),
      }),
      getKontaktInfo(),
    ]);

    if (!strapiResponse.ok) {
      // Log the details on the server only. Never send them to the browser.
      console.error(
        "Strapi support save failed:",
        strapiResponse.status,
        await strapiResponse.text()
      );
      return fail("Ihre Anfrage konnte nicht gespeichert werden.", 500);
    }

    // 4. Emails – sent AFTER the response, so the visitor is not kept waiting.
    // The request is already saved in Strapi, so a mail problem never
    // turns into an error for the visitor; it is only logged.
    if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD && SMTP_FROM && ADMIN_EMAIL) {
      after(() =>
        sendSupportEmails({
          email,
          vorname,
          nachname,
          telefon,
          supportanfrage,
          nachricht,
          kontaktInfo,
        }).catch((emailError) => {
          console.error("Support email failed:", emailError);
        })
      );
    } else {
      console.error("Support saved, but emails skipped – SMTP config missing:", {
        SMTP_HOST: Boolean(SMTP_HOST),
        SMTP_USER: Boolean(SMTP_USER),
        SMTP_PASSWORD: Boolean(SMTP_PASSWORD),
        SMTP_FROM: Boolean(SMTP_FROM),
        ADMIN_EMAIL: Boolean(ADMIN_EMAIL),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank! Ihre Supportanfrage wurde erfolgreich gesendet. Sie erhalten eine Bestätigung per E-Mail.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Support form error:", error);
    return fail("Ein unerwarteter Fehler ist aufgetreten.", 500);
  }
}