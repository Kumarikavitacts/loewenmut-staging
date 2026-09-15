"use client";

import { getMediaUrl } from "@/helper/MediaUrl";
import { useEffect, useState } from "react";

export default function SvgIcon({ src, className = "" }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(getMediaUrl(src));

        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.status}`);
        }

        let svgText = await response.text();

        // Replace hard-coded SVG colors with currentColor
        svgText = svgText
          .replace(/fill="[^"]*"/gi, 'fill="currentColor"')
          .replace(/stroke="[^"]*"/gi, 'stroke="currentColor"');

        setSvg(svgText);
      } catch (error) {
        console.error("Failed to load SVG:", error);
      }
    };

    loadSvg();
  }, [src]);

  if (!svg) return null;

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}