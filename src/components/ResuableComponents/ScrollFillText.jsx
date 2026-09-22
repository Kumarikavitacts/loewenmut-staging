"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

const ScrollFillText = ({
  html = "",
  className = "",
  startColor = "var(--bs-textdarkgrey)",
  fillColor = "var(--bs-textdarkgrey)",
  startPosition = 0.85,
  endPosition = 0.25,
}) => {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const element = wrapperRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Animation starts when element reaches
       * 85% of viewport height.
       */
      const start = viewportHeight * startPosition;

      /*
       * Animation finishes when element reaches
       * 25% of viewport height.
       */
      const end = viewportHeight * endPosition;

      const currentPosition = rect.top;

      let value =
        (start - currentPosition) /
        (start - end);

      value = Math.max(0, Math.min(1, value));

      setProgress(value);
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, [startPosition, endPosition]);

  if (!html) return null;

  return (
    <div
      ref={wrapperRef}
      className={`scroll-fill-text ${className}`}
      style={{
        "--scroll-start-color": startColor,
        "--scroll-fill-color": fillColor,
      }}
    >
      {/* Base text */}
      <div className="scroll-fill-text-base">
        {renderHtmlText(html)}
      </div>

      {/* Filled text */}
      <div
        className="scroll-fill-text-fill"
        style={{
          clipPath: `inset(0 ${
            100 - progress * 100
          }% 0 0)`,
        }}
      >
        {renderHtmlText(html)}
      </div>
    </div>
  );
};

export default ScrollFillText;