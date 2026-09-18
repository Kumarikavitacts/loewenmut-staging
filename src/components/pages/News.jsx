"use client";

import React, { useEffect, useMemo, useState } from "react";
import FilterTabs from "@/components/FilterTabs";
import InnerBnanner from "@/components/InnerBanner";
import NewsCard from "@/components/ResuableComponents/NewsCard";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";

import { getNewsPageCategory, getNewsPageHeading } from "@/Apis/NewsPage/api";

// Rotate through the existing badge color classes for variety across
// different categories — same classes your static newsData already used.
const BADGE_CLASSES = ["purple_badge", "blue_badge", "red_badge"];

// "2026-09-15" -> "15.09.2026" (matches your static date format)
const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  if (isNaN(d.getTime())) return isoDate;

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}.${month}.${year}`;
};

const News = () => {
  const [pageData, setPageData] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [headingResult, categoryResult] = await Promise.all([
          getNewsPageHeading(),
          getNewsPageCategory(),
        ]);

        setPageData(headingResult);
        setNewsList(categoryResult || []);
      } catch (error) {
        console.error("News page error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // -----------------------------------------
  // BUILD FILTER TABS FROM ACTUAL CATEGORIES
  // -----------------------------------------
  const { tabs, badgeClassByCategory } = useMemo(() => {
    const seen = new Map();

    newsList.forEach((item) => {
      (item?.news_kategories || []).forEach((cat) => {
        if (cat?.documentId && !seen.has(cat.documentId)) {
          seen.set(cat.documentId, cat.Titel);
        }
      });
    });

    const uniqueCategories = Array.from(seen.entries()); // [documentId, Titel]

    const classMap = {};
    uniqueCategories.forEach(([documentId], index) => {
      classMap[documentId] = BADGE_CLASSES[index % BADGE_CLASSES.length];
    });

    return {
      tabs: [
        { label: "Alle", value: "all" },
        ...uniqueCategories.map(([documentId, Titel]) => ({
          label: Titel,
          value: documentId,
        })),
      ],
      badgeClassByCategory: classMap,
    };
  }, [newsList]);

  // -----------------------------------------
  // MAP API DATA FOR NewsCard
  // -----------------------------------------
  const mappedNews = useMemo(() => {
    return newsList.map((item) => {
      const firstCategory = item?.news_kategories?.[0];

      return {
        id: item?.id,
        documentId: item?.documentId,
        slug: item?.slug || "",
        title: item?.Titel || "",
        description: item?.Text || "",
        date: formatDate(item?.Publikation),
        image: item?.Bild?.url || "",
        alternativeText: item?.Bild?.alternativeText || item?.Titel || "",

        category: firstCategory?.Titel || "",
        categoryClass: firstCategory?.documentId
          ? badgeClassByCategory[firstCategory.documentId]
          : "",

        categoryIds: (item?.news_kategories || []).map((c) => c.documentId),
      };
    });
  }, [newsList, badgeClassByCategory]);

  // -----------------------------------------
  // FILTER BY ACTIVE TAB
  // -----------------------------------------
  const filteredNews =
    activeTab === "all"
      ? mappedNews
      : mappedNews.filter((news) => news.categoryIds.includes(activeTab));

  const banner = pageData?.Bannerbereich;

  return (
    <main>
      {/* Hero */}
      <section className="inner_hero_section news_banner">
        {loading ? (
          <InnerBannerSkeleton />
        ) : (
          <InnerBnanner
            title={banner?.Kurztitel || ""}
            heading={banner?.Titel || ""}
            description={banner?.Text || ""}
          />
        )}
      </section>

      {/* News Section */}
      <section className="news-page-section news_section pt_pb_3">
        {/* Filter Tabs */}
        {tabs.length > 1 && (
          <div className="d-flex justify-content-center w-100">
            <FilterTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        )}

        {/* News Cards */}
        {!loading && filteredNews.length > 0 && (
          <NewsCard
            newsData={filteredNews}
            showHeader={false}
            showFooter={false}
          />
        )}
      </section>
    </main>
  );
};

export default News;