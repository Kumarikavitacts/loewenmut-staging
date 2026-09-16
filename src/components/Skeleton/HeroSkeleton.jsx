"use client";

import React from "react";

/*
 * Mirrors Hero.jsx: big centered title block + 4 feature columns.
 * Uses the same section classes so spacing/padding never shifts
 * once the real content swaps in.
 */
const HeroSkeleton = () => {
  return (
    <div className="skeleton-fade-in">
      <section className="pb_3 hero_section">
        <div className="container position-relative">
          <div className="hero_row pb-0 text-center">
            <div
              className="skeleton skeleton-title mx-auto"
              style={{ width: "60%", height: "26px" }}
            ></div>
            <div
              className="skeleton skeleton-title mx-auto"
              style={{ width: "80%", height: "60px" }}
            ></div>
            <div
              className="skeleton skeleton-title mx-auto"
              style={{ width: "70%", height: "60px" }}
            ></div>
          </div>
        </div>
      </section>

      <section className="pb_3 feature_section">
        <div className="container">
          <hr />
          <div className="row feature_row mt-4 mt-lg-5">
            {[0, 1, 2, 3].map((i) => (
              <div
                className="col-6 col-lg-3 feature-col text-center"
                key={i}
              >
                <div
                  className="skeleton skeleton-circle mx-auto"
                  style={{
                    width: "48px",
                    height: "48px",
                    marginBottom: "18px",
                  }}
                ></div>
                <div className="feature_content">
                  <div
                    className="skeleton skeleton-text mx-auto"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                  <div
                    className="skeleton skeleton-text mx-auto"
                    style={{ width: "95%" }}
                  ></div>
                  <div
                    className="skeleton skeleton-text skeleton-text-short mx-auto"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSkeleton;