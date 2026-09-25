"use client";

import React, { useEffect, useMemo, useState } from "react";
import FilterTabs from "@/components/FilterTabs";
import InnerBnanner from "@/components/InnerBanner";
import NewsCard from "@/components/ResuableComponents/NewsCard";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";

import {
  getNewsPageCategory,
  getNewsPageHeading,
} from "@/Apis/NewsPage/api";

// -----------------------------------------
// FORMAT DATE
// -----------------------------------------

const formatDate = (isoDate) => {
  if (!isoDate) return "";

  const d = new Date(isoDate);

  if (isNaN(d.getTime())) {
    return isoDate;
  }

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}.${month}.${year}`;
};

// -----------------------------------------
// NEWS PER LOAD
// -----------------------------------------

const NEWS_PER_LOAD = 6;

const News = () => {
  const [pageData, setPageData] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

  // Number of news currently visible
  const [visibleCount, setVisibleCount] =
    useState(NEWS_PER_LOAD);

  // -----------------------------------------
  // FETCH DATA
  // -----------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [headingResult, categoryResult] =
          await Promise.all([
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
  // BUILD FILTER TABS
  // -----------------------------------------

  const tabs = useMemo(() => {
    const seen = new Map();

    newsList.forEach((item) => {
      (item?.news_kategories || []).forEach((cat) => {
        if (
          cat?.documentId &&
          !seen.has(cat.documentId)
        ) {
          seen.set(
            cat.documentId,
            cat.Titel
          );
        }
      });
    });

    const uniqueCategories =
      Array.from(seen.entries());

    return [
      {
        label: "Alle",
        value: "all",
      },

      ...uniqueCategories.map(
        ([documentId, Titel]) => ({
          label: Titel,
          value: documentId,
        })
      ),
    ];
  }, [newsList]);

  // -----------------------------------------
  // MAP API DATA FOR NewsCard
  // -----------------------------------------

  const mappedNews = useMemo(() => {
    return newsList.map((item) => {
      const firstCategory =
        item?.news_kategories?.[0];

      const categoryColor =
        firstCategory?.Farbe
          ?.toString()
          .trim()
          .toLowerCase();

      return {
        id: item?.id,
        documentId: item?.documentId,

        slug: item?.slug || "",

        title: item?.Titel || "",

        description: item?.Text || "",

        date: formatDate(
          item?.Publikation
        ),

        image: item?.Bild?.url || "",

        alternativeText:
          item?.Bild?.alternativeText ||
          item?.Titel ||
          "",

        // Category title
        category:
          firstCategory?.Titel || "",

        // Backend color
        categoryColor:
          categoryColor || "",

        // Backend color -> CSS class
        categoryClass: categoryColor
          ? `${categoryColor}_badge`
          : "",

        categoryIds:
          (item?.news_kategories || []).map(
            (category) =>
              category?.documentId
          ),
      };
    });
  }, [newsList]);

  // -----------------------------------------
  // FILTER NEWS
  // -----------------------------------------

  const filteredNews =
    activeTab === "all"
      ? mappedNews
      : mappedNews.filter((news) =>
          news.categoryIds.includes(
            activeTab
          )
        );

  // -----------------------------------------
  // VISIBLE NEWS
  // -----------------------------------------

  const visibleNews = filteredNews.slice(
    0,
    visibleCount
  );

  // -----------------------------------------
  // LOAD MORE
  // -----------------------------------------

  const handleLoadMore = () => {
    setVisibleCount(
      (currentCount) =>
        currentCount + NEWS_PER_LOAD
    );
  };

  // -----------------------------------------
  // CATEGORY CHANGE
  // -----------------------------------------

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Start again from first 6
    setVisibleCount(NEWS_PER_LOAD);
  };

  // -----------------------------------------
  // CHECK MORE NEWS
  // -----------------------------------------

  const hasMoreNews =
    visibleCount < filteredNews.length;

  const banner =
    pageData?.Bannerbereich;

  return (
    <main>

      {/* =========================
          Hero
      ========================= */}

      <section className="inner_hero_section news_banner">

        {loading ? (
          <InnerBannerSkeleton />
        ) : (
          <InnerBnanner
            title={
              banner?.Kurztitel || ""
            }
            heading={
              banner?.Titel || ""
            }
            description={
              banner?.Text || ""
            }
          />
        )}

      </section>

      {/* =========================
          News Section
      ========================= */}

      <section className="news-page-section news_section pt_pb_3">

        {/* Filter Tabs */}
        {tabs.length > 1 && (
          <div className="d-flex justify-content-center w-100">
            <FilterTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
        )}

        {/* News Cards */}
        {!loading &&
          visibleNews.length > 0 && (
            <NewsCard
              newsData={visibleNews}
              showHeader={false}
              showFooter={false}
            />
          )}

        {/* =========================
            MEHR BUTTON
        ========================= */}

        {!loading && hasMoreNews && (
          <NewsCard
            newsData={[]}
            showHeader={false}
            showFooter={true}
            button="mehr"
            onButtonClick={handleLoadMore}
          />
        )}

      </section>

    </main>
  );
};

export default News;