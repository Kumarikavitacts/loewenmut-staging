import React from "react";

const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="overflow-auto mw-100">
      <div className="d-flex flex-nowrap justify-content-center gap-2 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={`btn rounded-pill text-nowrap px-3 py-2 ${
              activeTab === tab.value
                ? "btn-warning"
                : "bg-white border text-dark"
            }`}
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