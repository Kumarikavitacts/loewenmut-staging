"use client";

import React, { useEffect, useRef, useState } from "react";

// Static fallback, used only when no API data is passed in.
const staticStats = [
  {
    title: "PROJEKTE",
    value: 72,
    description:
      "Jedes Projekt ist einzigartig und in Zusammenarbeit mit unseren Kunden umgesetzt.",
    color: "#405cff",
  },
  {
    title: "ZUFRIEDENE KUNDEN",
    value: 100,
    description:
      "Zufriedene Kunden sind die beste Werbung - denn Sie kommen immer wieder!",
    color: "#6bd36b",
  },
  {
    title: "KOPFSCHMERZEN",
    value: 0,
    description:
      "Kopfschmerzen mögen weder unsere Kunden noch wir selbst.",
    color: "#cdd9f5",
  },
];

// The API doesn't provide a color per counter, so cycle through
// the same palette the design already uses.
const STAT_COLORS = ["#405cff", "#6bd36b", "#cdd9f5", "#f5c542", "#e57cd8"];

const TOTAL_SEGMENTS = 40;

const StatsCards = ({ counters }) => {
  // Map API data (Thekenbereich.Counter) into the shape this
  // component renders. Falls back to the static list only when
  // no API data is available at all.
  const stats =
    Array.isArray(counters) && counters.length > 0
      ? counters.map((item, index) => ({
          title: item?.Titel || "",
          value: Number(item?.Wert) || 0,
          description: item?.Text || "",
          color: STAT_COLORS[index % STAT_COLORS.length],
        }))
      : staticStats;

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(
    stats.map(() => 0)
  );
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );
 
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
 
    return () => observer.disconnect();
  }, []);
 
  useEffect(() => {
    if (!isVisible) return;
 
    const duration = 1800;
    const startTime = performance.now();
 
    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );
 
      // Smooth easing
      const easedProgress =
        1 - Math.pow(1 - progress, 3);
 
      setAnimatedValues(
        stats.map((item) =>
          Math.round(item.value * easedProgress)
        )
      );
 
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Make absolutely sure final values are exact
        setAnimatedValues(stats.map((item) => item.value));
      }
    };
 
    requestAnimationFrame(animate);
  }, [isVisible]);
 
  return (
    <div className="row" ref={sectionRef}>
      {stats.map((item, index) => {
        const currentValue = animatedValues[index];
 
        const activeSegments = Math.round(
          (currentValue / 100) * TOTAL_SEGMENTS
        );
 
        return (
          <div
            className="col-12 col-sm-6 col-md-4 mt-4"
            key={index}
          >
            <div className="stat-card h-100">
 
              {/* Title */}
              <div className="stat-title">
                <span
                  className="stat-dot"
                  style={{
                    backgroundColor: "var(--bs-themecolor)",
                  }}
                />
                <span>{item.title}</span>
              </div>
 
              {/* Progress Bar */}
              <div className="segment-bar">
                {Array.from({
                  length: TOTAL_SEGMENTS,
                }).map((_, i) => (
                  <span
                    key={i}
                    className={`segment ${
                      i < activeSegments ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        i < activeSegments
                          ? item.color
                          : "#dce3f8",
 
                      transitionDelay: isVisible
                        ? `${i * 25}ms`
                        : "0ms",
                    }}
                  />
                ))}
              </div>
 
              {/* Animated Percentage */}
              <h2 className="fw-semibold fs_60 mt-4">
                {currentValue}%
              </h2>
 
              {/* Description */}
              <p className="fw-regular mb-0">
                {item.description}
              </p>
 
            </div>
          </div>
        );
      })}
    </div>
  );
};
 
export default StatsCards;
 
 