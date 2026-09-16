"use client";

import React from "react";

import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";
import { ServiceCardsSkeleton } from "@/components/Skeleton/ServicesSkeleton";

/*
 * Matches Leistungen.jsx (the /leistungen list page):
 *   1. Hero banner
 *   2. Leistungen slider (card row)
 *   3. "Wie funktioniert das?" heading + stacked cards
 */
const LeistungenListSkeleton = () => {
  return (
    <main>
      <section className="inner_hero_section news_banner">
        <InnerBannerSkeleton />
      </section>

      <section
        className="liestungen_section pb_3 overflow-hidden skeleton-fade-in"
        style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
      >
        <div className="container">
          <ServiceCardsSkeleton count={3} />
        </div>
      </section>

      <section className="liestungen_section pt_3 skeleton-fade-in">
        <div className="container small_container">
          <div className="heading-content text-center">
            <div className="skeleton skeleton-badge mx-auto"></div>
            <div className="skeleton skeleton-title mx-auto" style={{ width: "55%" }}></div>
            <div className="skeleton skeleton-text mx-auto" style={{ width: "60%" }}></div>
          </div>

          <div className="row g-4 mt-4">
            {[0, 1, 2].map((i) => (
              <div className="col-12 col-lg-4" key={i}>
                <div className="skeleton-card h-100">
                  <div className="skeleton skeleton-title" style={{ height: "22px" }}></div>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text skeleton-text-short"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeistungenListSkeleton;