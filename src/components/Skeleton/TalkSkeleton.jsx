"use client";

import React from "react";

const TalkSkeleton = () => {
  return (
    <section className="pt_pb_3 talk_section skeleton-fade-in">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="skeleton skeleton-image"
              style={{ width: "100%", height: "300px" }}
            ></div>
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className="skeleton skeleton-badge"></div>
            <div className="skeleton skeleton-title" style={{ width: "80%" }}></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text skeleton-text-short"></div>
            <div className="skeleton skeleton-button"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkSkeleton;