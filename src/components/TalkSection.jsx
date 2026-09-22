"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";
import { useSelector } from "react-redux";
import ScrollFillText from "@/components/ResuableComponents/ScrollFillText";

const DEFAULT_THEME = "yellow";

const TalkSection = ({talkData}) => {

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
   * STRAPI DATA
   */
  
  const title = talkData?.Kurztitel
  const heading = talkData?.Titel || "";
  const description = talkData?.Text ;

  /*
   * BUTTON
   */
  const showButton = talkData?.button_link ;

  const buttonText =talkData?.button_text ;


  const buttonLink =talkData?.button_link 

  /*
   * THEME IMAGE
   *
   * This section currently doesn't have an image
   * from Strapi, so we keep the theme-based image.
   */
  const talkImage =
    themeImages[theme] || themeImages[DEFAULT_THEME];



  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center">

        {/* IMAGE */}
        <div
          className="col-12 col-lg-4 img-col cursorPointer text-center"
          data-aos="zoom-in"
          onClick={() => router.push(buttonLink)}
        >
          <img
            src={talkImage}
            alt={title || "Genug geredet"}
            className="img-fluid mx-auto"
          />
        </div>

        {/* CONTENT */}
        <div
          className="col-12 col-lg-8 content-col mt-4 mt-lg-0"
          data-aos="fade-right"
        >
          <div className="sec-content">

            {/* KURZ TITEL */}
            {title && (
              <div className="sub_title">
                {renderHtmlText(title)}
              </div>
            )}

            {/* TITEL */}
            {heading && (
              <h2>
                 <ScrollFillText
                        html={heading}
                        className="leistungen_fill_title"
                        startColor="var(--bs-textdarkgrey)"
                        fillColor="var(--bs-textdarkgrey)"
                    />
              </h2>
            )}

            {/* BESCHREIBUNG */}
            <p>{renderHtmlText(description)}</p>

            {/* BUTTON */}
            {showButton && buttonText && (
              <div className="theme_btn_wrap mt-4">
                <Link
                  href={buttonLink}
                  className="button theme_btn"
                >
                  {buttonText}

                  <img
                    src="/images/btn-arrow.svg"
                    alt="Arrow"
                  />
                </Link>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default TalkSection;
