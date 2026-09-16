"use client";

import React from "react";

/*
 * Mirrors Services.jsx header + the ServiceSlider card row.
 * Exported so ServiceSlider.jsx can reuse just the card list
 * while its own data is loading, without duplicating markup.
 */
export const ServiceCardsSkeleton = ({ count = 3 }) => (
  <div className="row" data-aos="fade-up">
    {Array.from({ length: count }).map((_, i) => (
      <div className="col-12 col-lg-4 mt-4" key={i}>
        <div className="skeleton-card h-100">
          <div className="skeleton skeleton-small"></div>
          <div className="skeleton skeleton-title" style={{ height: "26px" }}></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text skeleton-text-short"></div>
        </div>
      </div>
    ))}
  </div>
);

const ServicesSkeleton = () => {
  return (
    <section
      className="pt_pb_3 services_section overflow-hidden skeleton-fade-in"
      style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 content-col">
            <div className="skeleton skeleton-badge"></div>
          </div>
          <div className="col-12 col-lg-7 ms-auto content-col">
            <div className="skeleton skeleton-title" style={{ width: "90%" }}></div>
          </div>
        </div>

        <ServiceCardsSkeleton count={3} />
      </div>
    </section>
  );
};

export default ServicesSkeleton;