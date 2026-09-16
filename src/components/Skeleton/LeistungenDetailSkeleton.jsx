"use client";

import React from "react";

import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";
import TalkSkeleton from "@/components/Skeleton/TalkSkeleton";
import SectionSkeleton from "@/components/Skeleton/SectionSkeleton";

/*
 * Matches LiestungenDetail.jsx section by section:
 *   1. Hero banner
 *   2. Animated circle + rich text + button
 *   3. Tag / service card grid
 *   4. Image + content ("Bildre_Text")
 *   5. Talk / contact CTA
 */
const LeistungenDetailSkeleton = () => {
  return (
    <main>
      {/* HERO */}
      <section className="inner_hero_section">
        <InnerBannerSkeleton />
      </section>

      {/* SECTION 1 — circle + rich text */}
      <section>
         <SectionSkeleton/>
      </section>
      <section className="content_emo_section liestung_emo_sec pt_pb_3 skeleton-fade-in">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 ms-auto img-col">
              <div
                className="skeleton skeleton-circle mx-auto"
                style={{ width: "220px", height: "220px" }}
              ></div>
            </div>

            <div className="col-12 col-lg-8 content-col mt-4 mt-lg-0">
              <div className="sec-content">
                <div className="skeleton skeleton-title" style={{ width: "70%" }}></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text skeleton-text-short"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      {/* SECTION 2 — tag / service card grid */}
      <section className="ld_section_2 pt_pb_3 skeleton-fade-in">
        <div className="container">
          <div className="heading-content mb-4">
            <div className="skeleton skeleton-badge"></div>
            <div className="skeleton skeleton-title" style={{ width: "50%" }}></div>
          </div>

          <div className="row g-4">
            {[0, 1, 2, 3].map((i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="skeleton-card h-100">
                  <div
                    className="skeleton skeleton-circle"
                    style={{ width: "40px", height: "40px" }}
                  ></div>
                  <div className="skeleton skeleton-title" style={{ height: "20px" }}></div>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text skeleton-text-short"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — image + content */}
      <section
        className="ld_section_3 pt_pb_3 position-relative skeleton-fade-in"
        style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
      >
        <div className="container">
          <div className="row flex-lg-row-reverse">
            <div className="col-12 col-lg-5 ms-auto img-col">
              <div
                className="skeleton skeleton-image"
                style={{ width: "100%", height: "320px" }}
              ></div>
            </div>

            <div className="col-12 col-lg-7 content-col mt-4 mt-lg-0">
              <div className="sec-content">
                <div className="skeleton skeleton-badge"></div>
                <div className="skeleton skeleton-title" style={{ width: "80%" }}></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text skeleton-text-short"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TALK */}
      <TalkSkeleton />
    </main>
  );
};

export default LeistungenDetailSkeleton;