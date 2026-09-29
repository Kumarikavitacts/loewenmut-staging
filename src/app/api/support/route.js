import { NextResponse } from "next/server";

/**
 * POST /api/support
 *
 * The browser talks ONLY to this route. The Strapi token stays on the
 * server (STRAPI_SUPPORT_API_TOKEN has no NEXT_PUBLIC_ prefix, so Next.js
 * never sends it to the browser).
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
const STRAPI_SUPPORT_API_TOKEN = process.env.STRAPI_SUPPORT_API_TOKEN;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

// TODO: ask the backend developer for the exact collection name.
// "support-submissions" is a guess based on the existing "contact-submissions".
const SUPPORT_ENDPOINT = "api/supportanfrages";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyTurnstileToken(token, remoteIp) {
  // console.log("Verifying backend api :",`${STRAPI_URL}/${SUPPORT_ENDPOINT}`);
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

const fail = (message, status) =>
  NextResponse.json({ success: false, message }, { status });

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
    
    // 3. Save to Strapi
    const strapiResponse = await fetch(`${STRAPI_URL}/${SUPPORT_ENDPOINT}`, {
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
    });

    if (!strapiResponse.ok) {
      // Log the details on the server only. Never send them to the browser.
      console.error(
        "Strapi support save failed:",
        strapiResponse.status,
        await strapiResponse.text()
      );
      return fail("Ihre Anfrage konnte nicht gespeichert werden.", 500);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Vielen Dank! Ihre Supportanfrage wurde erfolgreich gesendet.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Support form error:", error);
    return fail("Ein unerwarteter Fehler ist aufgetreten.", 500);
  }
}