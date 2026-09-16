"use client";

import React from "react";
import { useSelector } from "react-redux";

import ServiceSlider from "@/components/ServiceSlider";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

const Services = ({ nextSectionRef }) => {
  const servicesIntro = useSelector(
    (state) => state.home.data?.servicesIntro
  );

  if (!servicesIntro) {
    return null;
  }

  const kurztitel = servicesIntro?.Kurztitel || "";
  const titel = servicesIntro?.Title || "";
  const paragraph = servicesIntro?.Text || "";

  return (
    <section
      ref={nextSectionRef}
      className="pt_pb_3 services_section overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-pattern.png')",
      }}
    >
      <div className="container">

        <div className="row">

          <div
            className="col-12 col-lg-4 content-col"
            data-aos="fade-right"
          >
            <div className="sub_title">
              {renderHtmlText(kurztitel)}
            </div>
          </div>

          <div
            className="col-12 col-lg-7 ms-auto content-col"
            data-aos="fade-left"
          >
            <h2>
              {renderHtmlText(titel)}
            </h2>
          </div>

        </div>

        <ServiceSlider paragraph={paragraph} />

      </div>
    </section>
  );
};

export default Services;