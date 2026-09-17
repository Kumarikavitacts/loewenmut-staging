"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollFillText = ({ text, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".sf-word");

    const ctx = gsap.context(() => {
      gsap.to(words, {
        color: "var(--sf-fill-color, #000000)",
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, containerRef);

    // Recalculate trigger positions after fonts/images load, layout shifts, etc.
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [text]);

  return (
    <p ref={containerRef} className={`sf-text ${className}`}>
      {text.split(" ").map((word, i) => (
        <span className="sf-word" key={i}>
          {word}{" "}
        </span>
      ))}
    </p>
  );
};

export default ScrollFillText;