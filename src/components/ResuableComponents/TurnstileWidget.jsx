"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Script from "next/script";

const TurnstileWidget = forwardRef(({ onVerify, onExpire }, ref) => {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [loadError, setLoadError] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  console.log("Turnstile site key exists:", !!siteKey);
  console.log(
    "Turnstile site key preview:",
    siteKey ? `${siteKey.substring(0, 8)}...` : "UNDEFINED"
  );
  const renderWidget = () => {
    if (!window.turnstile || !containerRef.current || widgetIdRef.current) {
      return;
    }

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => {
          onVerify?.(token);
        },
        "expired-callback": () => {
          onVerify?.("");
          onExpire?.();
        },
        "error-callback": (errorCode) => {
          console.error("Turnstile error:", {
            errorCode,
            hostname: window.location.hostname,
            origin: window.location.origin,
            siteKeyExists: !!siteKey,
            siteKeyPreview: siteKey
              ? `${siteKey.substring(0, 8)}...`
              : "undefined",
          });

          onVerify?.("");
        },
      });
    } catch (err) {
      console.error("Turnstile render() failed:", err);
      setLoadError(true);
    }
  };

  useEffect(() => {
    if (!siteKey) {
      console.error(
        "NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set — Turnstile widget cannot render."
      );
      return;
    }

    // Case 1: script tag already loaded from a previous mount/page —
    // window.turnstile exists immediately, render right away.
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Case 2: script hasn't loaded yet — poll for it, since next/script's
    // onLoad only fires the very first time the tag is injected, not on
    // every component remount.
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval);
        renderWidget();
      }
    }, 150);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (!window.turnstile) {
        console.error("Turnstile script did not load within 10s.");
        setLoadError(true);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
        onVerify?.("");
      }
    },
  }));

  if (!siteKey) {
    return (
      <div className="alert alert-danger py-2 px-3 mb-0">
        CAPTCHA-Konfigurationsfehler (Site Key fehlt).
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div ref={containerRef} className="cf-turnstile-container" />
      {loadError && (
        <div className="alert alert-danger py-2 px-3 mb-0 mt-2">
          CAPTCHA konnte nicht geladen werden. Bitte Seite neu laden.
        </div>
      )}
    </>
  );
});

TurnstileWidget.displayName = "TurnstileWidget";

export default TurnstileWidget;