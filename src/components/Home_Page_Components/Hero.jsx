"use client";

import React from "react";
import { useSelector } from "react-redux";

import SvgIcon from "@/components/ResuableComponents/SvgIcon";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

const Hero = ({ assets, scrollToNext }) => {
  const heroData = useSelector(
    (state) => state.home.data?.hero
  );

  const untertitel = heroData?.untertitel || "";
  const titel1 = heroData?.titel1 || "";
  const titel2 = heroData?.titel2 || "";
  const beschreibung = heroData?.beschreibung || "";
  const benefits = heroData?.benefits || [];

  return (
    <>
      <section className="pb_3 hero_section">
        <div className="container position-relative">
          <div className="hero_row pb-0">

            <img
              src={assets.icon1}
              alt="icons"
              className="hro_icon_1"
              data-aos="zoom-in"
            />

            <img
              src={assets.icon2}
              alt="icons"
              className="hro_icon_2"
              data-aos="zoom-in"
            />

            <h1 className="text-center">
              <span>
                {renderHtmlText(untertitel)}
              </span>

              <div
                className="line"
                data-text={titel1}
              >
                {titel1}
              </div>

              <div
                className="line line-2"
                data-text={titel2}
              >
                {titel2}
              </div>
            </h1>

            <div className="hero_tech_text">

              <div className="htt_left">
                <img
                  src={assets.icon3}
                  alt="icons"
                  data-aos="zoom-in"
                />

                <p>{beschreibung}</p>
              </div>

              <div className="htt_right">

                <img
                  src={assets.icon4}
                  alt="icons"
                  data-aos="zoom-in"
                />

                <button
                  type="button"
                  className="scroll-down-btn"
                  onClick={scrollToNext}
                  aria-label="Scroll down"
                >
                  <span className="mouse-icon">
                    <span className="mouse-wheel"></span>
                  </span>
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section
        className="pb_3 feature_section"
        data-aos="fade-up"
      >
        <div className="container">

          <hr />

          <div className="row feature_row mt-4 mt-lg-5">

            {benefits.map((benefit) => (
              <div
                className="col-6 col-lg-3 feature-col text-center"
                key={benefit?.id}
              >
                {benefit?.Icon?.url && (
                  <SvgIcon src={benefit.Icon.url} />
                )}

                <div className="feature_content">
                  <h3>{benefit?.Titel}</h3>
                  <p>{benefit?.Text}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;