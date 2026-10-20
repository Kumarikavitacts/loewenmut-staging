"use client";

import React, { useEffect, useMemo, useState } from "react";
import FilterTabs from "@/components/FilterTabs";
import InnerBnanner from "@/components/InnerBanner";
import { InsightCard } from "@/components/InsightsCards";
import {
  getInsightPageHeading,
  getInsightPageCategory,
} from "@/Apis/insightPage/api";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";
import CardGridSkeleton from "@/components/Skeleton/CardGridSkeleton";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";

const MOBILE_PAGE_SIZE = 6;

const Insights = () => {
  const [headingData, setHeadingData] = useState(null);
  const [insights, setInsights] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // Mobile only: show 6 insights at first, "Mehr" loads the next 6
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(MOBILE_PAGE_SIZE);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 575.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // start again at 6 when the category changes
  useEffect(() => {
    setVisibleCount(MOBILE_PAGE_SIZE);
  }, [activeTab]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const [headingResult, categoryResult] = await Promise.all([
          getInsightPageHeading(),
          getInsightPageCategory(),
        ]);

        setHeadingData(headingResult);
        // Sort by sortOrder ascending, same as the Team page
        const sortedInsights = [...(categoryResult || [])].sort(
          (a, b) => (a?.sortOrder ?? 0) - (b?.sortOrder ?? 0)
        );

        setInsights(sortedInsights);
        // setInsights(categoryResult || []);
      } catch (error) {
        console.error("Insights page error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Create filter tabs dynamically from referenzen_kategories
  const tabs = useMemo(() => {
    const categoryMap = new Map();

    insights.forEach((insight) => {
      insight?.referenzen_kategories?.forEach((category) => {
        if (category?.Titel) {
          categoryMap.set(category.Titel, category.Titel);
        }
      });
    });

    return [
      {
        label: "Alle",
        value: "all",
      },
      ...Array.from(categoryMap.values()).map((category) => ({
        label: category,
        value: category,
      })),
    ];
  }, [insights]);

  // Filter insights based on selected category
  const filteredInsights = useMemo(() => {
    if (activeTab === "all") {
      return insights;
    }

    return insights.filter((insight) =>
      insight?.referenzen_kategories?.some(
        (category) => category?.Titel === activeTab
      )
    );
  }, [insights, activeTab]);

  const visibleInsights = isMobile
    ? filteredInsights.slice(0, visibleCount)
    : filteredInsights;
  const hasMore = isMobile && visibleCount < filteredInsights.length;

  if (loading) {
    return (
      <main>
        <section className="inner_hero_section news_banner">
          <div className="container">
            <InnerBannerSkeleton />
          </div>
        </section>

        <section className="insight-tab-section pt_pb_3">
          <div className="container">
            <CardGridSkeleton />
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <StatusHeader
      statusType="wrong"
      title={
        <>
          Diese Seite konnte leider <br />
          nicht gefunden werden
        </>
      }
      buttonText="Zurück zur Startseite"
      buttonLink="/"
    />
      </main>
    );
  }

  const banner = headingData?.Banner_Text;

  return (
    <main>
      {/* Banner */}
      <section className="inner_hero_section news_banner">
        <InnerBnanner
          title={banner?.Kurztitel || ""}
          heading={banner?.Titel || ""}
          description={banner?.Text || ""}
        />
      </section>

      {/* Filter + Cards */}
      <section className="insight-tab-section pt_pb_3">
        <div className="container">

          {/* Filter Tabs */}
          <div className="mb-4 mb-lg-5 d-flex justify-content-center w-100">
            <FilterTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* Insight Cards */}
          <div className="row g-3">
            {filteredInsights.length > 0 ? (
              visibleInsights.map((insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                />
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p>Keine Insights in dieser Kategorie gefunden.</p>
              </div>
            )}
          </div>

          {/* Mehr button (mobile only) */}
          {hasMore && (
            <div className="theme_btn_wrap mt-4 d-flex justify-content-center">
              <button
                type="button"
                className="button theme_btn"
                onClick={() =>
                  setVisibleCount((c) => c + MOBILE_PAGE_SIZE)
                }
              >
                mehr
                <img src="/images/btn-arrow.svg" alt="" />
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
};

export default Insights;