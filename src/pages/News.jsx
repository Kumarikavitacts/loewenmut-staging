import React, { useState } from "react";
import FilterTabs from "../components/FilterTabs";
import InnerBnanner from "../components/InnerBanner";
import NewsCard from "../components/ResuableComponents/NewsCard";

import { newsTabs, newsData } from "../helper/Utils";

const News = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNews =
    activeTab === "all"
      ? newsData
      : newsData.filter(
          (news) => news.categoryValue === activeTab
        );

  return (
    <main>

      {/* Hero */}
      <section className="inner_hero_section">
        <InnerBnanner
          title={"Nibh vel velit Auctor Aliquet"}
          heading={
            <>
              Aenean sollicitudin, lorem quis bibendum auctor
            </>
          }
          description={
            <>
              Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
              bibendum auctor, nisi elit consequat
            </>
          }
        />
      </section>

      {/* News Section */}
      <section className="news-page-section news_section pt_pb_3">

        {/* Filter Tabs */}
        <div className="d-flex justify-content-center w-100">
          <FilterTabs
            tabs={newsTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* News Cards */}
        <NewsCard
          newsData={filteredNews}
          showHeader={false}
          showFooter={true}
          button={"mehr"}
          buttonLink={"/news"}
        />

      </section>

    </main>
  );
};

export default News;