import React from "react";

const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="filter-tabs-wrapper">
      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={`btn rounded-pill text-nowrap px-3 py-2 tabs-font-family ${
              activeTab === tab.value
                ? "text-white border-0"
                : "bg-white border text-dark"
            }`}
            style={
              activeTab === tab.value
                ? { backgroundColor: "var(--bs-themecolor)" }
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