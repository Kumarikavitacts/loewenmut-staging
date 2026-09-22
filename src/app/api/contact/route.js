import { NextResponse } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const TURNSTILE_SECRET_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

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

export async function POST(request) {
  try {
    if (!STRAPI_URL || !STRAPI_API_TOKEN) {
      console.error("Missing Strapi environment variables");

      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!TURNSTILE_SECRET_KEY) {
      console.error("Missing TURNSTILE_SECRET_KEY environment variable");

      return NextResponse.json(
        { success: false, message: "Server configuration error" },
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

    // -----------------------------------------
    // CAPTCHA VERIFICATION — before anything else
    // -----------------------------------------
    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, message: "Bitte bestätigen Sie, dass Sie kein Bot sind." },
        { status: 400 }
      );
    }

    const remoteIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const turnstileResult = await verifyTurnstileToken(turnstileToken, remoteIp);

    if (!turnstileResult.success) {
      console.error("Turnstile verification failed:", turnstileResult["error-codes"]);

      return NextResponse.json(
        {
          success: false,
          message: "Die Bot-Überprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // FIELD VALIDATION
    // -----------------------------------------
    if (!vorname?.trim()) {
      return NextResponse.json(
        { success: false, message: "Vorname ist erforderlich." },
        { status: 400 }
      );
    }

    if (!nachname?.trim()) {
      return NextResponse.json(
        { success: false, message: "Nachname ist erforderlich." },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { success: false, message: "E-Mail ist erforderlich." },
        { status: 400 }
      );
    }

    if (!nachricht?.trim()) {
      return NextResponse.json(
        { success: false, message: "Nachricht ist erforderlich." },
        { status: 400 }
      );
    }

    const selectedStrategies = Array.isArray(strategien) ? strategien : [];

    // -----------------------------------------
    // SAVE TO STRAPI
    // -----------------------------------------
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
            strategien: selectedStrategies,
            vorname: vorname.trim(),
            nachname: nachname.trim(),
            email: email.trim(),
            telefon: telefon?.trim() || "",
            betreff: betreff?.trim() || "",
            nachricht: nachricht.trim(),
          },
        }),
      }
    );

    const strapiData = await strapiResponse.json();

    if (!strapiResponse.ok) {
      console.error("Strapi error:", strapiData);

      return NextResponse.json(
        {
          success: false,
          message: "Die Nachricht konnte nicht gespeichert werden.",
          error: strapiData,
        },
        { status: strapiResponse.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Nachricht erfolgreich gesendet.",
        data: strapiData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, message: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}