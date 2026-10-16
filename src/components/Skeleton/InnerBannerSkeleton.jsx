"use client";

import React from "react";

/*
 * Mirrors InnerBanner.jsx — used on every inner page hero
 * (Leistungen, Team, Kontakt, News, Insights, etc.).
 */
const InnerBannerSkeleton = ({ withBreadcrumb = false }) => {
  return (
    <div
      className="pt_pb_3 inner-banner skeleton-fade-in"
      style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
    >
      <div className="container">
        {withBreadcrumb && (
          <div className="breadcrumb_nav breadcrumb_skeleton" aria-hidden="true">
            <div className="skeleton breadcrumb_skeleton_home"></div>
            <div className="skeleton breadcrumb_skeleton_pill"></div>
            <div className="skeleton breadcrumb_skeleton_pill"></div>
          </div>
        )}
        <div className="inner-banner-content text-center">
          <div className="skeleton skeleton-badge mx-auto"></div>
          <div
            className="skeleton skeleton-title mx-auto"
            style={{ width: "60%", height: "48px" }}
          ></div>
          <div
            className="skeleton skeleton-text mx-auto"
            style={{ width: "70%" }}
          ></div>
          <div
            className="skeleton skeleton-text skeleton-text-short mx-auto"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InnerBannerSkeleton;