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

const Insights = () => {
  const [headingData, setHeadingData] = useState(null);
  const [insights, setInsights] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

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
        setInsights(categoryResult || []);
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
        <section className="inner_hero_section news_banner">
          <div className="container py-5">
            <h2>Insights konnten nicht geladen werden.</h2>
          </div>
        </section>
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
              filteredInsights.map((insight) => (
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

        </div>
      </section>
    </main>
  );
};

export default Insights;