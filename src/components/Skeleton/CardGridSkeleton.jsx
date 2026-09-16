"use client";

import React from "react";

/*
 * Shared by the Insights and News home sections: both render a
 * "sub title + heading + button" header followed by a 3-card row
 * with an image, a title and a couple of text lines.
 */
const CardGridSkeleton = ({ sectionClassName, count = 3 }) => {
  return (
    <section className={`${sectionClassName} skeleton-fade-in`}>
      <div className="container">
        <div className="sec-content">
          <div className="skeleton skeleton-badge"></div>
          <div className="title_btn_flex">
            <div className="skeleton skeleton-title" style={{ width: "45%" }}></div>
            <div className="skeleton skeleton-button" style={{ marginTop: 0 }}></div>
          </div>
        </div>

        <div className="row mt-lg-4">
          {Array.from({ length: count }).map((_, i) => (
            <div className="col-12 col-sm-6 col-lg-4 item-col mt-4" key={i}>
              <div className="skeleton-card p-0 overflow-hidden">
                <div
                  className="skeleton skeleton-image"
                  style={{ height: "220px", borderRadius: "16px 16px 0 0" }}
                ></div>
                <div className="p-3">
                  <div className="skeleton skeleton-title" style={{ height: "22px" }}></div>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text skeleton-text-short"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGridSkeleton;