import { NextResponse, after } from "next/server";
import nodemailer from "nodemailer";
import path from "node:path";

export const runtime = "nodejs";

/**
 * ---------------------------------------------------------
 * Environment variables
 * ---------------------------------------------------------
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

/**
 * ---------------------------------------------------------
 * Logo
 * ---------------------------------------------------------
 */

const LOGO_PATH = path.join(
  process.cwd(),
  "public",
  "images",
  "loewenmut-logo-mail.png"
);

const LOGO_CID = "loewenmut-logo";

/**
 * ---------------------------------------------------------
 * Escape HTML
 * ---------------------------------------------------------
 */

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}



function formatAddressHtml(address = "") {
  if (!address) {
    return "";
  }

  let formatted = escapeHtml(address);

  // Allow <br>
  formatted = formatted
    .replace(/&lt;br\s*\/?&gt;/gi, "<br />")

    // Allow <strong>
    .replace(/&lt;strong&gt;/gi, "<strong>")
    .replace(/&lt;\/strong&gt;/gi, "</strong>")

    // Allow <b>
    .replace(/&lt;b&gt;/gi, "<b>")
    .replace(/&lt;\/b&gt;/gi, "</b>");

  return formatted;
}

/**
 * ---------------------------------------------------------
 * Verify Cloudflare Turnstile
 * ---------------------------------------------------------
 */

async function verifyTurnstileToken(token, remoteIp) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: remoteIp,
      }),
    }
  );

  return response.json();
}

/**
 * ---------------------------------------------------------
 * Fetch company contact details from Strapi
 * ---------------------------------------------------------
 */

async function getKontaktInfo() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/kontakt?populate=*`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Failed to fetch Kontakt info:",
        response.status,
        response.statusText
      );

      return null;
    }

    const json = await response.json();

    const data = json?.data;

    if (!data) {
      return null;
    }

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

/**
 * ---------------------------------------------------------
 * SMTP transporter
 * ---------------------------------------------------------
 */

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,

  pool: true,

  maxConnections: 3,
  maxMessages: 100,

  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },

  tls: {
    minVersion: "TLSv1.2",
  },
});

/**
 * ---------------------------------------------------------
 * Logo HTML
 * ---------------------------------------------------------
 */

function getLogoHtml() {
  return `
    <div
      style="
        margin: 20px 0 0;
        padding: 0;
        text-align: left;
      "
    >
      <a
        href="${escapeHtml(
    SITE_URL || "https://staging2.loewenmut.ch"
  )}"
        target="_blank"
        rel="noopener noreferrer"
        style="
          display: inline-block;
          text-decoration: none;
        "
      >
        <img
          src="cid:${LOGO_CID}"
          alt="Löwenmut"
          width="220"
          style="
            display: block;
            width: 220px;
            max-width: 100%;
            height: auto;
            border: 0;
            outline: none;
            text-decoration: none;
          "
        />
      </a>
    </div>
  `;
}

/**
 * ---------------------------------------------------------
 * Company details
 *
 * Used only in customer confirmation email.
 * ---------------------------------------------------------
 */

function getCompanyDetailsHtml(kontaktInfo) {
  const companyTelefon = kontaktInfo?.telefon || "";
  const companyAdresse = kontaktInfo?.adresse || "";
  const companyEmail = kontaktInfo?.email || "";

  const companyTelefonHref = companyTelefon.replace(/\s+/g, "");

  if (!companyTelefon && !companyAdresse && !companyEmail) {
    return "";
  }

  return `
    <div>

      <p>
        Freundliche Grüsse
      </p>

      ${companyAdresse
      ? `
            <p>
              ${formatAddressHtml(companyAdresse)}
            </p>
          `
      : ""
    }
   ${companyTelefon
      ? `
            <p>
              <span>
                Tel:
              </span>

              <a
                href="tel:${escapeHtml(companyTelefonHref)}"
                >
                ${escapeHtml(companyTelefon)}
              </a>
            </p>
          `
      : ""
    }
      ${companyEmail
      ? `
            <p>
              <a
                href="mailto:${escapeHtml(companyEmail)}"
               >
                ${escapeHtml(companyEmail)}
              </a>
            </p>
          `
      : ""
    }
     <p>
        <a
          href="${escapeHtml(
    SITE_URL 
  )}"
          target="_blank"
          rel="noopener noreferrer"
          >
          ${escapeHtml(
    SITE_URL 
  )}
        </a>
      </p>
   

    </div>
  `;
}

/**
 * ---------------------------------------------------------
 * Send confirmation + admin emails
 * ---------------------------------------------------------
 */

async function sendConfirmationEmail({
  email,
  vorname,
  nachname,
  telefon,
  betreff,
  nachricht,
  strategien,
  kontaktInfo,
}) {
  const fullName = `${vorname || ""} ${nachname || ""}`.trim();

  /**
   * -------------------------------------------------------
   * Strategy list
   * -------------------------------------------------------
   */

  const strategyList =
Array.isArray(strategien) && strategien.length > 0
    ? strategien.map((strategy) => escapeHtml(strategy)).join(", ")
    : "Keine Auswahl";
  /**
   * -------------------------------------------------------
   * CUSTOMER EMAIL
   * -------------------------------------------------------
   */

  const customerHtml = `
    <!DOCTYPE html>

    <html lang="de">

      <head>
        <meta charset="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>
          Vielen Dank für Ihre Anfrage bei Löwenmut
        </title>
      </head>

      <body>

        <div>

          <p>
            Guten Tag ${escapeHtml(vorname || "")},
          </p>


          <p>
            Vielen Dank für Ihre Nachricht an Löwenmut.
            Wir haben Ihre Anfrage erfolgreich erhalten.
          </p>


          <p>
            Unser Team prüft Ihr Anliegen und meldet sich
            so bald wie möglich persönlich bei Ihnen.
          </p>


          <p>
            Wir freuen uns darauf, mit Ihnen ins Gespräch zu kommen.
          </p>


          <!-- Company details -->

          ${getCompanyDetailsHtml(kontaktInfo)}


          <!-- Clickable logo -->

          ${getLogoHtml()}

        </div>

      </body>

    </html>
  `;

  /**
   * -------------------------------------------------------
   * ADMIN EMAIL
   * -------------------------------------------------------
   */

  const adminHtml = `
    <!DOCTYPE html>

    <html lang="de">

      <head>
        <meta charset="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>
          Neue Kontaktanfrage von ${escapeHtml(fullName)}
        </title>
      </head>

      <body>

        <div>

          <h2>
            Sie haben eine neue Kontaktanfrage
          </h2>

 

          <table>
            <tr>
              <td>
                Projekt:
              </td>

              <td>
                ${strategyList}
              </td>
            </tr>
            <tr>

              <td>
                Vorname:
              </td>
              <td>
                ${escapeHtml(vorname || "-")}
              </td>

            </tr>


            <tr>

              <td>
                Nachname:
              </td>
              <td>
                ${escapeHtml(nachname || "-")}
              </td>

            </tr>


            <tr>

              <td>
                E-Mail:
              </td>

              <td>
                <a
                  href="mailto:${escapeHtml(email)}"
                  >
                  ${escapeHtml(email)}
                </a>
              </td>

            </tr>


            <tr>

              <td>
                Telefon:
              </td>

              <td>
                ${escapeHtml(telefon || "-")}
              </td>

            </tr>


            <tr>

              <td>
                Betreff:
              </td>

              <td>
                ${escapeHtml(betreff || "-")}
              </td>

            </tr>
             <tr>
             
              <td>
                Nachricht:
              </td>
              <td>
                ${escapeHtml(nachricht || "-")}
              </td>
            </tr>
          </table>

          <!-- Clickable logo -->

          ${getLogoHtml()}

        </div>

      </body>

    </html>
  `;

  /**
   * -------------------------------------------------------
   * Embedded logo
   * -------------------------------------------------------
   */

  const logoAttachment = {
    filename: "website_image.png",
    path: LOGO_PATH,
    cid: LOGO_CID,
    contentType: "image/png",
  };

  /**
   * -------------------------------------------------------
   * Send both emails
   * -------------------------------------------------------
   */

  await Promise.all([
    /**
     * Customer email
     */
    transporter.sendMail({
      from: `"Löwenmut" <${SMTP_FROM}>`,
      to: email,

      replyTo: SMTP_FROM,

      subject: "Fwd: Loewenmut GmbH - Kontaktanfrage",

      html: customerHtml,

      attachments: [logoAttachment],
    }),

    /**
     * Admin email
     */
    transporter.sendMail({
      from: `"Löwenmut" <${SMTP_FROM}>`,
      to: ADMIN_EMAIL,

      replyTo: email,

      subject: `Fwd: Loewenmut GmbH - Kontaktanfrage`,

      html: adminHtml,

      attachments: [logoAttachment],
    }),
  ]);

  return {
    success: true,
    message: "Emails sent successfully",
  };
}

/**
 * ---------------------------------------------------------
 * POST /api/contact
 * ---------------------------------------------------------
 */

export async function POST(request) {
  try {
    /**
     * -------------------------------------------------------
     * Strapi configuration
     * -------------------------------------------------------
     */

    if (!STRAPI_URL || !STRAPI_API_TOKEN) {
      console.error("Missing Strapi configuration:", {
        STRAPI_URL: Boolean(STRAPI_URL),
        STRAPI_API_TOKEN: Boolean(STRAPI_API_TOKEN),
      });

      return NextResponse.json(
        {
          success: false,
          message: "Strapi-Konfiguration fehlt.",
        },
        {
          status: 500,
        }
      );
    }

    /**
     * -------------------------------------------------------
     * Turnstile configuration
     * -------------------------------------------------------
     */

    if (!TURNSTILE_SECRET_KEY) {
      console.error("Missing TURNSTILE_SECRET_KEY");

      return NextResponse.json(
        {
          success: false,
          message: "Turnstile-Konfiguration fehlt.",
        },
        {
          status: 500,
        }
      );
    }

    /**
     * -------------------------------------------------------
     * SMTP configuration
     * -------------------------------------------------------
     */

    if (
      !SMTP_HOST ||
      !SMTP_USER ||
      !SMTP_PASSWORD ||
      !SMTP_FROM ||
      !ADMIN_EMAIL
    ) {
      console.error("Missing SMTP configuration:", {
        SMTP_HOST: Boolean(SMTP_HOST),
        SMTP_USER: Boolean(SMTP_USER),
        SMTP_PASSWORD: Boolean(SMTP_PASSWORD),
        SMTP_FROM: Boolean(SMTP_FROM),
        ADMIN_EMAIL: Boolean(ADMIN_EMAIL),
      });

      return NextResponse.json(
        {
          success: false,
          message: "E-Mail-Konfiguration fehlt.",
        },
        {
          status: 500,
        }
      );
    }

    /**
     * -------------------------------------------------------
     * Request body
     * -------------------------------------------------------
     */

    const body = await request.json();

    const {
      strategien,
      vorname,
      nachname,
      email,
      telefon,
      betreff,
      nachricht,
      turnstileToken,
    } = body;

    /**
     * -------------------------------------------------------
     * Turnstile
     * -------------------------------------------------------
     */

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Bitte bestätigen Sie, dass Sie kein Bot sind.",
        },
        {
          status: 400,
        }
      );
    }

    const remoteIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const turnstileResult = await verifyTurnstileToken(
      turnstileToken,
      remoteIp
    );

    if (!turnstileResult.success) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult["error-codes"]
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Die Bot-Überprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * -------------------------------------------------------
     * Required fields
     *
     * nachricht is optional.
     * -------------------------------------------------------
     */

    if (!vorname || !nachname || !email || !telefon) {
      return NextResponse.json(
        {
          success: false,
          message: "Bitte füllen Sie alle erforderlichen Felder aus.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * -------------------------------------------------------
     * Email validation
     * -------------------------------------------------------
     */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * -------------------------------------------------------
     * Save to Strapi and get company information
     * -------------------------------------------------------
     */

    const [strapiResponse, kontaktInfo] = await Promise.all([
      fetch(`${STRAPI_URL}/api/contact-submissions`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },

        body: JSON.stringify({
          data: {
            vorname,
            nachname,
            email,
            telefon,
            betreff,
            nachricht,
            strategien,
          },
        }),
      }),

      getKontaktInfo(),
    ]);

    /**
     * -------------------------------------------------------
     * Check Strapi response
     * -------------------------------------------------------
     */

    const strapiResponseText = await strapiResponse.text();

    if (!strapiResponse.ok) {
      console.error(
        "Strapi response:",
        strapiResponse.status,
        strapiResponseText
      );

      return NextResponse.json(
        {
          success: false,
          message: "Ihre Anfrage konnte nicht gespeichert werden.",
          strapiStatus: strapiResponse.status,
          strapiError: strapiResponseText,
        },
        {
          status: 500,
        }
      );
    }

    /**
     * -------------------------------------------------------
     * Send emails after response
     * -------------------------------------------------------
     */

    after(() =>
      sendConfirmationEmail({
        email,
        vorname,
        nachname,
        telefon,
        betreff,
        nachricht,
        strategien,
        kontaktInfo,
      })
        .then(() => {
          console.log(
            `Confirmation and admin emails sent successfully for ${email}`
          );
        })
        .catch((emailError) => {
          console.error("Email sending failed:", emailError);
        })
    );

    /**
     * -------------------------------------------------------
     * Success response
     * -------------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Sie erhalten eine Bestätigung per E-Mail.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Ein unerwarteter Fehler ist aufgetreten.",
      },
      {
        status: 500,
      }
    );
  }
}