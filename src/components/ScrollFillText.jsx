"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollFillText = ({
  children,
  className = "",
  startColor = "#9B9B9B",
  fillColor = "#373737",
}) => {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const element = wrapperRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when element is around 85% of viewport
      const start = windowHeight * 0.85;

      // Finish filling when element reaches around 25% of viewport
      const end = windowHeight * 0.25;

      const current = rect.top;

      let value = (start - current) / (start - end);

      value = Math.max(0, Math.min(1, value));

      setProgress(value);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`scroll-fill-text ${className}`}
      style={{
        "--start-color": startColor,
        "--fill-color": fillColor,
      }}
    >
      {/* Gray text */}
      <div className="scroll-fill-text-base">
        {children}
      </div>

      {/* Dark text that fills on scroll */}
      <div
        className="scroll-fill-text-fill"
        style={{
          clipPath: `inset(0 ${100 - progress * 100}% 0 0)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollFillText;