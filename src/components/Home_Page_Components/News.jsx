"use client";

import React from "react";
import { useSelector } from "react-redux";

import NewsCard from "@/components/ResuableComponents/NewsCard";

const News = () => {
  const BADGE_CLASSES = [
    "purple_badge",
    "blue_badge",
    "red_badge",
  ];

  const newsData = useSelector(
    (state) => state.home.data?.news
  );

  if (!newsData) {
    return null;
  }

  const newsItems = newsData?.news || [];

  // Add badge class one by one
  const newsItemsWithClasses = newsItems
    .slice(0, 3)
    .map((item, index) => ({
      ...item,
      categoryClass:
        BADGE_CLASSES[index % BADGE_CLASSES.length],
    }));

  console.log("newsItemsWithClasses", newsItemsWithClasses);

  const button = newsData?.Button?.[0];

  return (
    <section className="pt_pb_3 news_section">
      <NewsCard
        newsData={newsItemsWithClasses}
        showHeader={true}
        showFooter={true}
        subTitle={
          newsData?.Kurztitel || "Related news"
        }
        heading={newsData?.Titel || ""}
        button={
          button?.button_text || "Alle News"
        }
        buttonLink={
          button?.button_link || "/news"
        }
      />
    </section>
  );
};

export default News;