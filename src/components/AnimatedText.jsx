"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

const DEFAULT_THEME = "yellow";

const AnimatedText = () => {
  const router = useRouter();

  const themeContext = useTheme();
  const theme = themeContext?.theme || DEFAULT_THEME;

  const themeImages = {
    yellow: "/images/image-loewenmut-yellow_new.webp",
    blue: "/images/image-loewenmut-blue_new.webp",
    green: "/images/image-loewenmut-green_new.webp",
    pink: "/images/image-loewenmut-pink_new.webp",
  };

  const talkImage =
    themeImages[theme] || themeImages[DEFAULT_THEME];

  const handleGoToContact = () => {
    router.push("/kontakt");
  };

  return (
    <>
      <span>
                    <img src={talkImage} alt="talk image" />
      </span>

      <img
        src="/images/moving-text.svg"
        className="cursorPointer"
        onClick={handleGoToContact}
       alt="talk image" 
      />
    </>
  );
};

export default AnimatedText;
