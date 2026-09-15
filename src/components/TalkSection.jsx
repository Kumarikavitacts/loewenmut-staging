"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

const DEFAULT_THEME = "yellow";

const TalkSection = ({
  img,
  title,
  heading,
  description,
}) => {
  const router = useRouter();

  const themeContext = useTheme();
  const theme = themeContext?.theme || DEFAULT_THEME;

  const themeImages = {
    yellow: "/images/image-loewenmut-yellow.png",
    blue: "/images/image-loewenmut-blue.png",
    green: "/images/image-loewenmut-green.png",
    pink: "/images/image-loewenmut-pink.png",
  };

  /*
   * If an image is manually passed, use it.
   * Otherwise use the image belonging to the selected theme.
   */
  const talkImage =
    img || themeImages[theme] || themeImages[DEFAULT_THEME];

  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center">
        {/* Image */}
        <div
          className="col-12 col-lg-4 img-col cursorPointer text-center"
          data-aos="zoom-in"
          onClick={() => router.push("/kontakt")}
        >
          <img
            src={talkImage}
            alt={title || "Genug geredet"}
            className="img-fluid mx-auto"
          />
        </div>

        {/* Content */}
        <div
          className="col-12 col-lg-8 content-col mt-4 mt-lg-0"
          data-aos="fade-right"
        >
          <div className="sec-content">
            <div className="sub_title">
              Aenean sollicitudin
            </div>

            <h2>
              Genug geredet.
              <br />
              Was dürfen <span>wir für Sie bewegen?</span>
            </h2>

            <p>
              Lassen Sie uns über Ihr Projekt sprechen.
            </p>

            <div className="theme_btn_wrap mt-4">
              <Link href="/kontakt" className="button theme_btn">
                Los geht’s
                <img src="/images/btn-arrow.svg" alt="Arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkSection;
