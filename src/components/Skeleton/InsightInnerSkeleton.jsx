"use client";

import React from "react";

import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";
import SectionSkeleton from "@/components/Skeleton/SectionSkeleton";
import ProjectSkeleton from "@/components/Skeleton/ProjectSkeleton";

const InsightInnerSkeleton = () => {
  return (
    <main>
      <section className="inner_hero_section">
        <InnerBannerSkeleton />
      </section>

      <section className="project_detail_section pt_pb_3">
        <SectionSkeleton />
      </section>

      <section className="pt_pb_3 search_section">
        <SectionSkeleton />
      </section>

      <ProjectSkeleton />
    </main>
  );
};

export default InsightInnerSkeleton;