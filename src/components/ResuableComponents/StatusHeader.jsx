"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const DEFAULT_THEME = "yellow";

const StatusHeader = ({
  statusType = "correct",
  title,
  description,
  buttonText = "Zurück zur Startseite",
  buttonLink = "/",
}) => {
  /*
   * useTheme() can theoretically return null if this component
   * is rendered outside ThemeProvider.
   *
   * The fallback prevents the production build from crashing.
   */
  const themeContext = useTheme();
  const theme = themeContext?.theme || DEFAULT_THEME;

  const statusImages = {
    yellow: {
      correct: "/images/status/yellow-correct.svg",
      wrong: "/images/status/yellow-wrong.svg",
    },

    blue: {
      correct: "/images/status/blue-correct.svg",
      wrong: "/images/status/blue-wrong.svg",
    },

    green: {
      correct: "/images/status/green-correct.svg",
      wrong: "/images/status/green-wrong.svg",
    },

    pink: {
      correct: "/images/status/pink-correct.svg",
      wrong: "/images/status/pink-wrong.svg",
    },
  };

  const currentThemeImages =
    statusImages[theme] || statusImages[DEFAULT_THEME];

  const statusImage =
    currentThemeImages[statusType] ||
    currentThemeImages.correct ||
    statusImages[DEFAULT_THEME].correct;

  return (
    <section
      className="status-header-section pb_3"
      style={{
        backgroundImage: "url('/images/bg-pattern.webp')",
      }}
    >
      <div className="container">
        <div className="status-header-icon text-center">
          <img
            src={statusImage}
            alt={statusType === "correct" ? "Success" : "Error"}
            className="img-fluid"
          />
        </div>

        <div className="inner-banner-content text-center">
          {title && <h1>{title}</h1>}

          {description && <p>{description}</p>}

          {buttonText && buttonLink && (
            <div className="mt-4">
              <Link href={buttonLink} className="button theme_btn">
                {buttonText}
                <img src="/images/btn-arrow.svg" alt="button arrow" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StatusHeader;
