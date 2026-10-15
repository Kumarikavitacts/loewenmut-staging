import React from "react";

/*
 * tabs: [{ label, value, className? }]
 * - A tab WITHOUT className (e.g. "Alle") is shown in the theme color
 *   when it is active.
 * - A tab WITH className (e.g. "green_badge") is shown in that category
 *   color when it is active. The color itself is defined in Style.css.
 */
const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="filter-tabs-wrapper container">
      <div className="filter-tabs filter_tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          const hasCategoryColor = Boolean(tab.className);

          return (
            <button
              key={tab.value}
              type="button"
              className={`btn rounded-pill text-nowrap ${
                isActive ? "border-0" : "border"
              } ${isActive && hasCategoryColor ? tab.className : ""}`}
              style={
                isActive && !hasCategoryColor
                  ? {
                      backgroundColor: "var(--bs-themecolor)",
                      color: "var(--bs-themetext)",
                    }
                  : {}
              }
              onClick={() => onTabChange(tab.value)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterTabs;