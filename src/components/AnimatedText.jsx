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
    yellow: "/images/image-loewenmut-yellow.png",
    blue: "/images/image-loewenmut-blue.png",
    green: "/images/image-loewenmut-green.png",
    pink: "/images/image-loewenmut-pink.png",
  };

  const talkImage =
    themeImages[theme] || themeImages[DEFAULT_THEME];

  const handleGoToContact = () => {
    router.push("/kontakt");
  };

  return (
    <>
      <span>
        <Image
          src={talkImage}
          alt="talk image"
          width={800}
          height={800}
          sizes="(max-width: 767px) 150px, 200px"
        />
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
