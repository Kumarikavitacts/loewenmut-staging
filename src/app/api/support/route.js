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

const STRAPI_SUPPORT_API_TOKEN =
  process.env.STRAPI_SUPPORT_API_TOKEN;

const TURNSTILE_SECRET_KEY =
  process.env.TURNSTILE_SECRET_KEY;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

const SUPPORT_ENDPOINT = "api/supportanfrages";

/**
 * SMTP
 */

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * ---------------------------------------------------------
 * Logo
 *
 * File:
 * public/images/website_image.png
 *
 * The logo is embedded into the email using CID.
 * This avoids problems with email clients blocking
 * external images.
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
 * Turnstile
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
 * Fetch Kontakt information from Strapi
 * ---------------------------------------------------------
 */

async function getKontaktInfo() {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/kontakt?populate=*`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Failed to fetch Kontakt info:",
        response.status,
        response.statusText
      );

      return null;
    }

    const data = (await response.json())?.data;

    if (!data) {
      return null;
    }

    return {
      telefon: data.Telefon || "",
      adresse: data.Adresse || "",
      email: data.Email || "",
    };
  } catch (error) {
    console.error(
      "Error fetching Kontakt info:",
      error
    );

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

/**
 * ---------------------------------------------------------
 * Format Strapi address
 *
 * Example coming from Strapi:
 *
 * Loewenmut Punkt GmbH<br>
 * Ida-Sträuli-Strasse 95<br>
 * <strong>CH-8404 Winterthur</strong>
 *
 * We allow only the formatting tags required for the
 * address.
 * ---------------------------------------------------------
 */

function formatAddressHtml(address = "") {
  if (!address) {
    return "";
  }

  let formatted = escapeHtml(address);

  formatted = formatted
    .replace(/&lt;br\s*\/?&gt;/gi, "<br />")
    .replace(/&lt;strong&gt;/gi, "<strong>")
    .replace(/&lt;\/strong&gt;/gi, "</strong>")
    .replace(/&lt;b&gt;/gi, "<b>")
    .replace(/&lt;\/b&gt;/gi, "</b>");

  return formatted;
}

/**
 * ---------------------------------------------------------
 * Logo HTML
 *
 * The logo is clickable.
 * Clicking it opens NEXT_PUBLIC_SITE_URL.
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
 * Used ONLY in the customer confirmation email.
 * ---------------------------------------------------------
 */

function getCompanyDetailsHtml(kontaktInfo) {
  const companyTelefon =
    kontaktInfo?.telefon || "";

  const companyAdresse =
    kontaktInfo?.adresse || "";

  const companyEmail =
    kontaktInfo?.email || "";

  const companyTelefonHref =
    companyTelefon.replace(/\s+/g, "");

  if (
    !companyTelefon &&
    !companyAdresse &&
    !companyEmail
  ) {
    return "";
  }

  return `
    <div>

      <p>
        Freundliche Grüsse
      </p>

      ${
        companyAdresse
          ? `
            <p>
              ${formatAddressHtml(companyAdresse)}
            </p>
          `
          : ""
      }

      ${
        companyTelefon
          ? `
            <p>
              <span>
                Tel:
              </span>

              <a
                href="tel:${escapeHtml(
                  companyTelefonHref
                )}"
                >
                ${escapeHtml(companyTelefon)}
              </a>
            </p>
          `
          : ""
      }
      ${
        companyEmail
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
 * Send customer + admin emails
 * ---------------------------------------------------------
 */

async function sendSupportEmails({
  email,
  vorname,
  nachname,
  telefon,
  supportanfrage,
  nachricht,
  kontaktInfo,
}) {
  const fullName =
    `${vorname || ""} ${nachname || ""}`.trim();

  /**
   * Remove line breaks from the name before using it
   * in the email subject.
   */

  const safeName =
    fullName.replace(/[\r\n]+/g, " ");

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
          Vielen Dank für Ihre Supportanfrage bei Löwenmut
        </title>

      </head>

      <body>

        <div>

          <!-- Greeting -->

          <p>
            Guten Tag ${escapeHtml(vorname || "")},
          </p>


          <!-- Main message -->

          <p>
            Vielen Dank für Ihre Nachricht an Löwenmut.
            Wir haben Ihre Supportanfrage erfolgreich
            erhalten.
          </p>


          <p>
            Unser Team prüft Ihr Anliegen und meldet sich
            so bald wie möglich persönlich bei Ihnen.
          </p>


          <p>
            Wir freuen uns darauf, Ihnen weiterzuhelfen.
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
   *
   * Shows exactly the data submitted through the
   * support form.
   *
   * No company address.
   * No company phone.
   * No company email.
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
          Neue Supportanfrage von ${escapeHtml(
            safeName
          )}
        </title>

      </head>

      <body>

        <div>

          <!-- Title -->

          <h2>
            Sie haben eine neue Supportanfrage
          </h2>


          <!-- Support information -->

          <table>

            <!-- Name -->

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


            <!-- Email -->

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


            <!-- Phone -->

            <tr>

              <td>
                Telefon:
              </td>

              <td>
                ${escapeHtml(telefon || "-")}
              </td>

            </tr>


            <!-- Support request -->

            <tr>

              <td>
                Supportanfrage:
              </td>

              <td>
                ${escapeHtml(
                  supportanfrage || "-"
                )}
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
   * Embedded logo attachment
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
     * Customer confirmation
     */

    transporter.sendMail({
      from: `"Löwenmut" <${SMTP_FROM}>`,

      to: email,

      replyTo: ADMIN_EMAIL,

      subject:
        "Fwd: Loewenmut GmbH - Supportanfrage",

      html: customerHtml,

      attachments: [logoAttachment],
    }),

    /**
     * Admin notification
     */

    transporter.sendMail({
      from: `"Löwenmut" <${SMTP_FROM}>`,

      to: ADMIN_EMAIL,

      replyTo: email,

      subject: `Fwd: Loewenmut GmbH - Supportanfrage`,

      html: adminHtml,

      attachments: [logoAttachment],
    }),
  ]);
}

/**
 * ---------------------------------------------------------
 * Helper for errors
 * ---------------------------------------------------------
 */

const fail = (message, status) =>
  NextResponse.json(
    {
      success: false,
      message,
    },
    {
      status,
    }
  );

/**
 * ---------------------------------------------------------
 * POST /api/support
 * ---------------------------------------------------------
 */

export async function POST(request) {
  try {
    /**
     * -------------------------------------------------------
     * Strapi configuration
     * -------------------------------------------------------
     */

    if (
      !STRAPI_URL ||
      !STRAPI_SUPPORT_API_TOKEN
    ) {
      console.error(
        "Missing Strapi support configuration:",
        {
          STRAPI_URL: Boolean(STRAPI_URL),
          STRAPI_SUPPORT_API_TOKEN:
            Boolean(STRAPI_SUPPORT_API_TOKEN),
        }
      );

      return fail(
        "Strapi-Konfiguration fehlt.",
        500
      );
    }

    /**
     * -------------------------------------------------------
     * Turnstile configuration
     * -------------------------------------------------------
     */

    if (!TURNSTILE_SECRET_KEY) {
      console.error(
        "Missing TURNSTILE_SECRET_KEY"
      );

      return fail(
        "Turnstile-Konfiguration fehlt.",
        500
      );
    }

    /**
     * -------------------------------------------------------
     * Read request body
     * -------------------------------------------------------
     */

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

    /**
     * -------------------------------------------------------
     * Turnstile check
     * -------------------------------------------------------
     */

    if (!turnstileToken) {
      return fail(
        "Bitte bestätigen Sie, dass Sie kein Bot sind.",
        400
      );
    }

    const remoteIp =
      request.headers
        .get("x-forwarded-for")
        ?.split(",")[0]
        ?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const turnstileResult =
      await verifyTurnstileToken(
        turnstileToken,
        remoteIp
      );

    if (!turnstileResult.success) {
      console.error(
        "Turnstile failed:",
        turnstileResult["error-codes"]
      );

      return fail(
        "Die Bot-Überprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
        400
      );
    }

    /**
     * -------------------------------------------------------
     * Required fields
     *
     * supportanfrage IS required.
     * nachricht remains optional.
     * -------------------------------------------------------
     */

    if (
      !vorname ||
      !nachname ||
      !email ||
      !telefon ||
      !supportanfrage
    ) {
      return fail(
        "Bitte füllen Sie alle erforderlichen Felder aus.",
        400
      );
    }

    /**
     * -------------------------------------------------------
     * Email validation
     * -------------------------------------------------------
     */

    if (!EMAIL_REGEX.test(email)) {
      return fail(
        "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        400
      );
    }

    /**
     * -------------------------------------------------------
     * Save to Strapi + fetch Kontakt information
     * -------------------------------------------------------
     */

    const [
      strapiResponse,
      kontaktInfo,
    ] = await Promise.all([
      fetch(
        `${STRAPI_URL}/${SUPPORT_ENDPOINT}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization:
              `Bearer ${STRAPI_SUPPORT_API_TOKEN}`,
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
        }
      ),

      getKontaktInfo(),
    ]);

    /**
     * -------------------------------------------------------
     * Check Strapi response
     * -------------------------------------------------------
     */

    if (!strapiResponse.ok) {
      console.error(
        "Strapi support save failed:",
        strapiResponse.status,
        await strapiResponse.text()
      );

      return fail(
        "Ihre Anfrage konnte nicht gespeichert werden.",
        500
      );
    }

    /**
     * -------------------------------------------------------
     * Send emails after response
     *
     * The visitor does not have to wait for SMTP.
     * -------------------------------------------------------
     */

    if (
      SMTP_HOST &&
      SMTP_USER &&
      SMTP_PASSWORD &&
      SMTP_FROM &&
      ADMIN_EMAIL
    ) {
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
          console.error(
            "Support email failed:",
            emailError
          );
        })
      );
    } else {
      console.error(
        "Support saved, but emails skipped – SMTP config missing:",
        {
          SMTP_HOST: Boolean(SMTP_HOST),
          SMTP_USER: Boolean(SMTP_USER),
          SMTP_PASSWORD:
            Boolean(SMTP_PASSWORD),
          SMTP_FROM: Boolean(SMTP_FROM),
          ADMIN_EMAIL: Boolean(ADMIN_EMAIL),
        }
      );
    }

    /**
     * -------------------------------------------------------
     * Success
     * -------------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,

        message:
          "Vielen Dank! Ihre Supportanfrage wurde erfolgreich gesendet. Sie erhalten eine Bestätigung per E-Mail.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Support form error:",
      error
    );

    return fail(
      "Ein unerwarteter Fehler ist aufgetreten.",
      500
    );
  }
}