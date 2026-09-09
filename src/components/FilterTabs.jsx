import React from "react";

const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="overflow-auto mw-100 ">
      <div className="d-flex flex-nowrap justify-content-center gap-2 pb-2 filter_tabs">
        {tabs.map((tab) => (
          <button key={tab.value} type="button" className={`btn rounded-pill text-nowrap ${
              activeTab === tab.value
                ? "active"
                : "bg-white border"
            }`} onClick={() => onTabChange(tab.value)}>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;