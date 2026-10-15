"use client";

import React, { useId } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

const DEFAULT_THEME = "yellow";

// Shown when no text is passed (e.g. on the home page).
// Every item is separated by a "•" on the ring.
const DEFAULT_TEXT = ['Digitale', 'Produkte'];

const SEPARATOR = " • ";

// Geometry of the ring (SVG viewBox is 200 x 200)
const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TARGET_CHARS = 34; // roughly how many characters fill the ring nicely

// Remove HTML tags / entities coming from the CMS and collapse spaces
const cleanText = (value) =>
  String(value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

/**
 * <AnimatedText text="Your text" />
 *
 * - text: a string OR an array of strings shown on the rotating ring.
 *         String: every white space becomes a "•" and lone symbols (&, +, /)
 *                 are removed.
 *         Array:  each entry stays together, entries are separated by a "•".
 *         If empty / not passed, DEFAULT_TEXT is used.
 *
 *   <AnimatedText text="Sichtbarkeit & Wachstum" />
 *       -> SICHTBARKEIT • WACHSTUM •   (words split, "&" removed)
 *   <AnimatedText text={["Lass uns reden", "Projekt starten"]} />
 *       -> LASS UNS REDEN • PROJEKT STARTEN •   (phrases stay together)
 */
const AnimatedText = ({ text }) => {
  const router = useRouter();
  const pathId = useId().replace(/:/g, "");

  const themeContext = useTheme();
  const theme = themeContext?.theme || DEFAULT_THEME;

  const themeImages = {
    yellow: "/images/image-loewenmut-yellow_new.webp",
    blue: "/images/image-loewenmut-blue_new.webp",
    green: "/images/image-loewenmut-green_new.webp",
    pink: "/images/image-loewenmut-pink_new.webp",
  };

  const talkImage = themeImages[theme] || themeImages[DEFAULT_THEME];

  const handleGoToContact = () => {
    router.push("/kontakt");
  };

  // ----- ring text -----
  // A word must contain at least one letter or number.
  // Standalone symbols like "&", "+", "/", "-" are removed.
  const hasLetterOrNumber = (word) => /[\p{L}\p{N}]/u.test(word);

  const toItems = (value) => {
    // Array -> every entry stays one item (a phrase), only symbols are removed
    if (Array.isArray(value)) {
      return value
        .map((entry) =>
          cleanText(entry).split(" ").filter(hasLetterOrNumber).join(" ")
        )
        .filter(Boolean);
    }

    // String -> every white space becomes a separator:
    // "Sichtbarkeit & Wachstum"  ->  ["Sichtbarkeit", "Wachstum"]
    return cleanText(value).split(" ").filter(hasLetterOrNumber);
  };

  let items = toItems(text);
  if (items.length === 0) items = DEFAULT_TEXT;

  const label = items.join(", "); // for screen readers

  // "A • B • C • " (trailing separator closes the circle)
  const unit = items.join(SEPARATOR) + SEPARATOR;
  const repeats = Math.max(1, Math.round(TARGET_CHARS / unit.length));
  // SVG collapses normal spaces (the trailing one gets lost, so the last "•"
  // would touch the first letter). Non-breaking spaces are never collapsed,
  // which keeps the gaps around every "•" equal all the way around the ring.
  const ringText = unit.repeat(repeats).replace(/ /g, "\u00A0");

  return (
    <>
      <span>
        {/* Small pre-optimized WebP (~17 KB), served directly: no image
            optimizer round-trip and no lazy-loading, so the logo always
            shows, also on iPhones / zoomed displays. */}
        <Image
          src={talkImage}
          alt="talk image"
          width={640}
          height={640}
          unoptimized
          loading="eager"
        />
      </span>

      <svg
        className="anim_circle_text cursorPointer"
        viewBox="0 0 200 200"
        role="link"
        aria-label={label}
        onClick={handleGoToContact}
      >
        <defs>
          {/* full circle, starting at the top, clockwise */}
          <path
            id={pathId}
            d={`M 100,100 m -${RADIUS},0 a ${RADIUS},${RADIUS} 0 1,1 ${
              RADIUS * 2
            },0 a ${RADIUS},${RADIUS} 0 1,1 -${RADIUS * 2},0`}
          />
        </defs>
        <text>
          <textPath
            href={`#${pathId}`}
            textLength={CIRCUMFERENCE - 2}
            lengthAdjust="spacing"
          >
            {ringText}
          </textPath>
        </text>
      </svg>
    </>
  );
};

export default AnimatedText;