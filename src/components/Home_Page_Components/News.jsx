"use client";

import React from "react";
import { useSelector } from "react-redux";

import NewsCard from "@/components/ResuableComponents/NewsCard";

const News = () => {
  const newsData = useSelector(
    (state) => state.home.data?.news
  );

  if (!newsData) {
    return null;
  }

  const newsItems =
    newsData?.news || [];

  const button =
    newsData?.Button?.[0];

  return (
    <section className="pt_pb_3 news_section">

      <NewsCard
        newsData={newsItems.slice(0, 3)}
        showHeader={true}
        showFooter={true}
        subTitle={
          newsData?.Kurztitel ||
          "Related news"
        }
        heading={
          newsData?.Titel || ""
        }
        button={
          button?.button_text ||
          "Alle News"
        }
        buttonLink={
          button?.button_link ||
          "/news"
        }
      />

    </section>
  );
};

export default News;