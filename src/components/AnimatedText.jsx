"use client";

import React, { useId } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

const DEFAULT_THEME = "yellow";

// Shown when no text is passed.
const DEFAULT_TEXT = ["Strategie", "Technologio", "DesigN"];

const SEPARATOR = " • ";

// Geometry of the ring (SVG viewBox is 200 x 200)
const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TARGET_CHARS = 34;

// Replace ampersands with "und", remove HTML tags/entities,
// and collapse spaces.
const cleanText = (value) =>
  String(value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&nbsp;/gi, " ")
    .replace(/&/g, " und ")
    .replace(/\s+/g, " ")
    .trim();

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

  // A word must contain at least one letter or number.
  const hasLetterOrNumber = (word) => /[\p{L}\p{N}]/u.test(word);

  const toItems = (value) => {
    // Array: keep each entry as a phrase.
    if (Array.isArray(value)) {
      return value
        .map((entry) =>
          cleanText(entry)
            .split(" ")
            .filter(hasLetterOrNumber)
            .join(" ")
        )
        .filter(Boolean);
    }

    // String: each word becomes a separate item.
    return cleanText(value).split(" ").filter(hasLetterOrNumber);
  };

  let items = toItems(text);
  if (items.length === 0) items = DEFAULT_TEXT;

  const label = items.join(", ");

  // Repeat text around the circle.
  const unit = items.join(SEPARATOR) + SEPARATOR;
  const repeats = Math.max(1, Math.round(TARGET_CHARS / unit.length));
  const ringText = unit.repeat(repeats).replace(/ /g, "\u00A0");

  return (
    <>
      <span>
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