import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const STRAPI_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Public site URL — same env var used in src/app/layout.jsx — for the
// website link/banner in the confirmation email.
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
 * Fetch company contact details (Telefon, Adresse, Email)
 * from the same Strapi "Kontakt" content type the /kontakt
 * page uses, for display in the confirmation email footer.
 * Never blocks/breaks email sending if this fails.
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
        response.status
      );
      return null;
    }

    const json = await response.json();
    const data = json?.data;

    if (!data) return null;
    console.log("Fetched Kontakt info:", data);
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
 * Send confirmation email
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

  const companyTelefon = kontaktInfo?.telefon || "";
  const companyAdresse = kontaktInfo?.adresse || "";
  const companyEmail = kontaktInfo?.email || "";
  const companyTelefonHref = companyTelefon.replace(/\s+/g, "");

  const strategyList =
    Array.isArray(strategien) && strategien.length > 0
      ? strategien
        .map(
          (strategy) =>
            `<li>${escapeHtml(strategy)}</li>`
        )
        .join("")
      : "<li>Keine Auswahl</li>";

  /**
   * ---------------------------------------------------------
   * Brand tokens — mirrored from src/css/Style.css (:root)
   * Email clients don't reliably load CSS custom properties,
   * so values are inlined directly, but kept in sync with:
   *   --bs-roboto:        "Roboto"
   *   --bs-textdarkgrey:  #373737   (body text)
   *   --bs-textlightgrey: #999999   (secondary text)
   *   --bs-bordergrey:    #EFEFEF   (dividers)
   *   --bs-lightgrey2:    #f8f8f8   (section background)
   *   --color_5:          #FFD900   (brand yellow / theme accent)
   *   --bs-darkgrey:      #222633   (on-yellow text)
   *   --radius-20:        20px
   * ---------------------------------------------------------
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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Vielen Dank für Ihre Anfrage</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          font-family: 'Roboto', Arial, Helvetica, sans-serif;
          color: #373737;
        "
      >

        <div
          style="
            max-width: 650px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            font-family: 'Roboto', Arial, Helvetica, sans-serif;
          "
        >

          <div
            style="
              background-color: #FFD900;
              padding: 28px 30px;
            "
          >
           <h2
              style="
                margin: 0 0 16px;
                font-family: 'Roboto', Arial, Helvetica, sans-serif;
                font-size: 20px;
                font-weight: 400;
                color: #373737;
              "
            >
              Sie haben eine neue Nachricht
            </h2>
          </div>

          <div style="padding: 40px;">

            <table
              style="
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 30px;
              "
            >

              <tr>
                <td
                  style="
                    padding: 12px 0;
                    border-bottom: 1px solid #EFEFEF;
                    font-size: 15px;
                    font-weight: 600;
                    color: #373737;
                    width: 35%;
                  "
                >
                  Name
                </td>

                <td
                  style="
                    padding: 12px 0;
                    border-bottom: 1px solid #EFEFEF;
                    font-size: 15px;
                    font-weight: 300;
                    color: #373737;
                  "
                >
                  ${escapeHtml(fullName)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px 0;
                    border-bottom: 1px solid #EFEFEF;
                    font-size: 15px;
                    font-weight: 600;
                    color: #373737;
                  "
                >
                  E-Mail
                </td>

                <td
                  style="
                    padding: 12px 0;
                    border-bottom: 1px solid #EFEFEF;
                    font-size: 15px;
                    font-weight: 300;
                    color: #373737;
                  "
                >
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px 0;
                    border-bottom: 1px solid #EFEFEF;
                    font-size: 15px;
                    font-weight: 600;
                    color: #373737;
                  "
                >
                  Telefon
                </td>

                <td
                  style="
                    padding: 12px 0;
                    border-bottom: 1px solid #EFEFEF;
                    font-size: 15px;
                    font-weight: 300;
                    color: #373737;
                  "
                >
                  ${escapeHtml(telefon || "-")}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px 0;
                    font-size: 15px;
                    font-weight: 600;
                    color: #373737;
                  "
                >
                  Betreff
                </td>

                <td
                  style="
                    padding: 12px 0;
                    font-size: 15px;
                    font-weight: 300;
                    color: #373737;
                  "
                >
                  ${escapeHtml(betreff || "-")}
                </td>
              </tr>

            </table>

            <h2
              style="
                margin: 0 0 16px;
                font-family: 'Roboto', Arial, Helvetica, sans-serif;
                font-size: 20px;
                font-weight: 400;
                color: #373737;
              "
            >
              Gewünschte Leistungen
            </h2>

            <ul
              style="
                margin: 0 0 30px;
                padding-left: 20px;
                font-size: 15px;
                font-weight: 300;
                color: #373737;
                line-height: 1.65;
              "
            >
              ${strategyList}
            </ul>

            <h2
              style="
                margin: 0 0 16px;
                font-family: 'Roboto', Arial, Helvetica, sans-serif;
                font-size: 20px;
                font-weight: 400;
                color: #373737;
              "
            >
              Kundendaten
            </h2>

            <div
              style="
                background-color: #f8f8f8;
                border: 1px solid #EFEFEF;
                padding: 20px;
                border-radius: 20px;
                font-size: 15px;
                font-weight: 300;
                color: #373737;
                white-space: pre-line;
                margin-bottom: 30px;
              "
            >
              ${escapeHtml(nachricht || "")}
            </div>

       


           <!-- Company Details -->
          ${companyTelefon || companyAdresse || companyEmail
      ? `
                <div
                  style="
                    margin-top: 10px;
                    padding-top: 30px;
                    border-top: 1px solid #EFEFEF;
                    text-align: left;
                  "
                >
    <p
            style="
              margin: 35px 0 0;
              font-size: 16px;
              font-weight: 300;
              line-height: 1.65;
            "
          >
            Freundliche Grüsse<br />
        
          </p>
               

                  ${companyAdresse
        ? `
                        <p
                          style="
                            margin: 0;
                            font-size: 15px;
                            font-weight: 300;
                            line-height: 1.6;
                          "
                        >
                           
                          ${companyAdresse}
                        </p>
                      `
        : ""
      }

                  ${companyEmail
        ? `
                        <p
                          style="
                            margin: 0 0 10px;
                            font-size: 15px;
                            font-weight: 300;
                            line-height: 1.5;
                          "
                        >
                          <strong style="font-weight: 600;">
                            E-Mail:
                          </strong>
                          <a
                            href="mailto:${companyEmail}"
                            style="
                              color: #373737;
                              text-decoration: underline;
                            "
                          >
                            ${escapeHtml(companyEmail)}
                          </a>
                        </p>
                      `
        : ""
      }


                  ${companyTelefon
        ? `
                        <p
                          style="
                            margin: 0 0 10px;
                            font-size: 15px;
                            font-weight: 300;
                            line-height: 1.5;
                          "
                        >
                          <strong style="font-weight: 600;">
                            Telefon:
                          </strong>
                          <a
                            href="tel:${companyTelefonHref}"
                            style="
                              color: #373737;
                              text-decoration: underline;
                            "
                          >
                            ${escapeHtml(companyTelefon)}
                          </a>
                        </p>
                      `
        : ""
      }



                </div>
              `
      : ""
    }

          </div>

        </div>

      </body>

    </html>
  `;



  const customerHtml = `
  <!DOCTYPE html>
  <html lang="de">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      <title>Vielen Dank für Ihre Anfrage</title>
    </head>

    <body
      style="
        margin: 0;
        padding: 0;
        background-color: #f8f8f8;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        color: #373737;
      "
    >

      <div
        style="
          max-width: 650px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
        "
      >

        <!-- Header -->
        <div
          style="
            background-color: #FFD900;
            padding: 28px 40px;
          "
        >
          <h1
            style="
              margin: 0;
              font-family: 'Roboto', Arial, Helvetica, sans-serif;
              font-size: 26px;
              font-weight: 600;
              color: #222633;
            "
          >
            Vielen Dank für Ihre Anfrage
          </h1>
        </div>


        <!-- Content -->
        <div style="padding: 40px;">

          <p
            style="
              margin: 0 0 20px;
              font-size: 16px;
              font-weight: 300;
              line-height: 1.65;
            "
          >
            Hallo ${escapeHtml(vorname || "")},
          </p>


          <p
            style="
              margin: 0 0 20px;
              font-size: 16px;
              font-weight: 300;
              line-height: 1.65;
            "
          >
            vielen Dank für Ihre Nachricht an Löwenmut.
            Wir haben Ihre Anfrage erfolgreich erhalten.
          </p>


          <p
            style="
              margin: 0 0 30px;
              font-size: 16px;
              font-weight: 300;
              line-height: 1.65;
            "
          >
            Unser Team wird Ihre Anfrage prüfen und sich
            so bald wie möglich bei Ihnen melden.
          </p>


          <p
            style="
              margin: 0 0 30px;
              font-size: 16px;
              font-weight: 300;
              line-height: 1.65;
            "
          >
            Wir freuen uns darauf, mit Ihnen ins Gespräch zu kommen.
          </p>


          <!-- Company Details -->
          ${companyTelefon || companyAdresse || companyEmail
      ? `
                <div
                  style="
                    margin-top: 10px;
                    padding-top: 30px;
                    border-top: 1px solid #EFEFEF;
                    text-align: left;
                  "
                >
 <p
            style="
              margin: 35px 0 0;
              font-size: 16px;
              font-weight: 300;
              line-height: 1.65;
            "
          >
            Freundliche Grüsse
           
          </p>
     ${companyAdresse
        ? `
                        <p
                          style="
                            margin: 0;
                            font-size: 15px;
                            font-weight: 300;
                            line-height: 1.6;
                          "
                        >
                         
    
                          ${companyAdresse}
                        </p>
                      `
        : ""
      }

                  ${companyEmail
        ? `
                        <p
                          style="
                            margin: 0 0 10px;
                            font-size: 15px;
                            font-weight: 300;
                            line-height: 1.5;
                          "
                        >
                          <strong style="font-weight: 600;">
                            E-Mail:
                          </strong>
                          <a
                            href="mailto:${companyEmail}"
                            style="
                              color: #373737;
                              text-decoration: underline;
                            "
                          >
                            ${escapeHtml(companyEmail)}
                          </a>
                        </p>
                      `
        : ""
      }


                  ${companyTelefon
        ? `
                        <p
                          style="
                            margin: 0 0 10px;
                            font-size: 15px;
                            font-weight: 300;
                            line-height: 1.5;
                          "
                        >
                          <strong style="font-weight: 600;">
                            Telefon:
                          </strong>
                          <a
                            href="tel:${companyTelefonHref}"
                            style="
                              color: #373737;
                              text-decoration: underline;
                            "
                          >
                            ${escapeHtml(companyTelefon)}
                          </a>
                        </p>
                      `
        : ""
      }


             

                </div>
              `
      : ""
    }


         
        </div>
      </div>

    </body>
  </html>
`;





  // return transporter.sendMail({
  //   from: `"Löwenmut" <${SMTP_FROM}>`,
  //   to: email,
  //   replyTo: email,
  //   subject: "Vielen Dank für Ihre Anfrage bei Löwenmut",
  //   html,
  // });


  await transporter.sendMail({
    from: `"Löwenmut" <${SMTP_FROM}>`,
    to: email,
    replyTo: email,
    subject: "Vielen Dank für Ihre Anfrage bei Löwenmut",
    html: customerHtml,
  });

  await transporter.sendMail({
    from: `"Löwenmut" <${SMTP_FROM}>`,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${fullName}`,
    html: adminHtml,
  });

  return {
    success: true,
    message: "Email sent successfully",
  };
}

/**
 * ---------------------------------------------------------
 * POST /api/contact
 * ---------------------------------------------------------
 */
export async function POST(request) {
  try {
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
        { status: 500 }
      );
    }

    if (!TURNSTILE_SECRET_KEY) {
      console.error("Missing TURNSTILE_SECRET_KEY");

      return NextResponse.json(
        {
          success: false,
          message: "Turnstile-Konfiguration fehlt.",
        },
        { status: 500 }
      );
    }

    if (
      !SMTP_HOST ||
      !SMTP_USER ||
      !SMTP_PASSWORD ||
      !SMTP_FROM
    ) {
      console.error("Missing SMTP configuration:", {
        SMTP_HOST: Boolean(SMTP_HOST),
        SMTP_USER: Boolean(SMTP_USER),
        SMTP_PASSWORD: Boolean(SMTP_PASSWORD),
        SMTP_FROM: Boolean(SMTP_FROM),
      });

      return NextResponse.json(
        {
          success: false,
          message: "E-Mail-Konfiguration fehlt.",
        },
        { status: 500 }
      );
    }

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

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Bitte bestätigen Sie, dass Sie kein Bot sind.",
        },
        { status: 400 }
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
        "Turnstile verification failed:",
        turnstileResult["error-codes"]
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Die Bot-Überprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
        },
        { status: 400 }
      );
    }

    if (
      !vorname ||
      !nachname ||
      !email ||
      !nachricht
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Bitte füllen Sie alle erforderlichen Felder aus.",
        },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        },
        { status: 400 }
      );
    }

    /**
     * -----------------------------------------------------
     * Save contact request to Strapi
     * -----------------------------------------------------
     */
    const strapiResponse = await fetch(
      `${STRAPI_URL}/api/contact-submissions`,
      {
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
      }
    );

    const strapiResponseText =
      await strapiResponse.text();

    console.log(
      "Strapi status:",
      strapiResponse.status
    );

    if (!strapiResponse.ok) {
      console.error(
        "Strapi response:",
        strapiResponseText
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Ihre Anfrage konnte nicht gespeichert werden.",
          strapiStatus: strapiResponse.status,
          strapiError: strapiResponseText,
        },
        { status: 500 }
      );
    }

    try {
      const kontaktInfo = await getKontaktInfo();

      await sendConfirmationEmail({
        email,
        vorname,
        nachname,
        telefon,
        betreff,
        nachricht,
        strategien,
        kontaktInfo,
      });

      console.log(
        `Confirmation email sent to: ${email}`
      );
    } catch (emailError) {
      console.error(
        "Confirmation email failed:",
        emailError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Ihre Anfrage wurde gespeichert, aber die Bestätigungs-E-Mail konnte nicht gesendet werden.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Sie erhalten eine Bestätigung per E-Mail.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Contact form error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Ein unerwarteter Fehler ist aufgetreten.",
      },
      { status: 500 }
    );
  }
}