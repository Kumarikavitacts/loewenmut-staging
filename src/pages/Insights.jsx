import React, { useState } from "react";
import FilterTabs from "../components/FilterTabs";
import InnerBnanner from "../components/InnerBanner";
import { InsightCard } from "../components/InsightsCards";
import { insights, tabs } from "../helper/Utils";


const Insights = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredInsights =
    activeTab === "all"
      ? insights
      : insights.filter(
        (insight) => insight.category === activeTab
      );

  return (
    <>
      <InnerBnanner
        title="Nibh vel velit Auctor Aliquet"
        heading={
          <>
            Getane Arbeit. Der beste <br />
            Beweis unserer Fähigkeiten.
          </>
        }
        description={
          <>
            Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
            bibendum auctor,
            <br />
            nisi elit consequat
          </>
        }
      />

      <section className="py-5">
        <div className="container">

          {/* FILTER TABS */}
          <div className="mb-5 d-flex justify-content-center w-100">
            <FilterTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* INSIGHTS GRID */}
          <div className="row g-3">
            {filteredInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Insights;