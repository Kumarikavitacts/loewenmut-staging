import React from "react";

const stats = [
  {
    title: "PROJEKTE",
    value: 72,
    description: "Jedes Projekt ist einzigartig und in Zusammenarbeit mit unseren Kunden umgesetzt.",
    color: "#405cff",
  },
  {
    title: "ZUFRIEDENE KUNDEN",
    value: 100,
    description: "Zufriedene Kunden sind die beste Werbung - denn Sie kommen immer wieder!",
    color: "#6bd36b",
  },
  {
    title: "KOPFSCHMERZEN",
    value: 0,
    description: "Kopfschmerzen mögen weder unsere Kunden noch wir selbst.",
    color: "#cdd9f5",
  },
];

const TOTAL_SEGMENTS = 40;

const StatsCards = () => {
return (
    <div className="row">
        {stats.map((item, index) => {
        const activeSegments = Math.round(
            (item.value / 100) * TOTAL_SEGMENTS
        );
        return (
        <div className="col-12 col-sm-6 col-md-4 mt-4" key={index}>
            <div className="stat-card h-100">
                <div className="stat-title">
                    <span className="stat-dot" style={{ backgroundColor: "var(--bs-themecolor)" }}/>
                    <span>{item.title}</span>
                </div>
                <div className="segment-bar">
                    {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => (
                        <span key={i} className={`segment ${ i < activeSegments ? "active" : ""}`} style={{backgroundColor: i < activeSegments ? item.color : "#dce3f8", }} />
                    ))}
                </div>
                <h2 className="fw-semibold fs_60 mt-4">{item.value}%</h2>
                <p className="fw-regular mb-0">{item.description}</p>
            </div>
        </div>
        );
        })}
    </div>
  );
};

export default StatsCards;