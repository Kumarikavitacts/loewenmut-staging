import React from "react";

const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="filter-tabs-wrapper container">
      <div className="filter-tabs filter_tabs">
        {tabs.map((tab) => (
          <button key={tab.value} type="button" className={`btn rounded-pill text-nowrap ${
              activeTab === tab.value
                ? " border-0"
                : " border "
            }`}
            style={
              activeTab === tab.value
                ? { backgroundColor: "var(--bs-themecolor)",
                    color: "var(--bs-themetext)"
                 }
                : {}
            }
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;