"use client";

import React from "react";

const SectionSkeleton = () => {
  return (
    <div className="section-skeleton pt_pb_3">
      <div className="skeleton skeleton-small"></div>

      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text skeleton-text-short"></div>

      <div className="skeleton skeleton-button"></div>
    </div>
  );
};

export default SectionSkeleton;