"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { RenderWordFillText } from "@/components/ResuableComponents/RenderWordFillText";

const ScrollFillText = ({
  html = "",
  className = "",
  startColor = "var(--bs-textdarkgrey)",
  fillColor = "var(--bs-textdarkgrey)",
  startPosition = 0.85,
  endPosition = 0.25,
  // ANIMATION FIX: how many words are filled from the very start,
  // before the user has even scrolled — e.g. for "Genug geredet. Was
  // dürfen wir für Sie bewegen?" the default of 2 pre-fills "Genug
  // geredet". Applies to every ScrollFillText instance by default;
  // pass 0 on a specific instance to disable it there.
  initialFilledWords = 2,
  // ANIMATION FIX: opacity of the not-yet-revealed base text. Your
  // call sites pass the SAME value for startColor and fillColor
  // (e.g. both "var(--bs-textdarkgrey)"), so with identical colors
  // there was nothing for the eye to see change. Dimming the base
  // layer by default guarantees a visible "not filled yet" vs.
  // "filled" contrast even when start/fill colors match. Pass
  // startOpacity={1} on a specific instance to disable this.
  startOpacity = 0.3,
}) => {
  const wrapperRef = useRef(null);
  // ANIMATION FIX: ref to the fill layer, used to look up its word
  // spans directly (see the effect below) instead of driving them
  // through CSS custom-property math.
  const fillLayerRef = useRef(null);
  // Cache of the fill layer's .sf-fill-word elements, in DOM order
  // (== word index order), refreshed whenever the text changes.
  const wordElementsRef = useRef([]);

  const { content, totalWords } = useMemo(
    () => RenderWordFillText(html),
    [html]
  );

  useEffect(() => {
    // ANIMATION FIX: previously each word's reveal amount was computed
    // by the browser via a nested clip-path/clamp()/calc() CSS
    // expression driven by custom properties. That turned out to be
    // unreliable — when a browser can't resolve that exact nested-math
    // expression it silently drops the *entire* clip-path declaration,
    // which leaves the fill layer permanently unclipped (fully
    // visible), so the text just looked static instead of animating.
    //
    // This version computes each word's clip-path in plain JavaScript
    // and sets it directly as that word's inline style. No CSS math
    // functions are involved, so there's nothing for a browser to
    // silently fail to parse.
    if (fillLayerRef.current) {
      wordElementsRef.current = Array.from(
        fillLayerRef.current.querySelectorAll(".sf-fill-word")
      );

      // Start every word fully hidden until the first updateProgress()
      // call below runs (avoids a flash of fully-visible text before
      // scroll position is known).
      wordElementsRef.current.forEach((el) => {
        el.style.clipPath = "inset(0 100% 0 0)";
      });
    }

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

      let value = (start - currentPosition) / (start - end);

      value = Math.max(0, Math.min(1, value));

      // Convert the 0-1 scroll progress into a "word units" number,
      // floored at initialFilledWords so those first words stay
      // filled even when scroll progress is 0.
      const words = Math.max(
        value * (totalWords || 1),
        Math.min(initialFilledWords, totalWords || 0)
      );

      // ANIMATION FIX: set each word's own clip-path directly — word i
      // is fully revealed once `words` passes i, fully hidden while
      // `words` is still below i, and partially (smoothly) revealed
      // in between. Because words are indexed in natural reading
      // order (see RenderWordFillText.jsx), this naturally fills every
      // word on line 1 before any word on line 2 starts.
      wordElementsRef.current.forEach((el, i) => {
        const localFraction = Math.max(0, Math.min(1, words - i));

        el.style.clipPath =
          localFraction <= 0
            ? "inset(0 100% 0 0)"
            : localFraction >= 1
              ? "inset(0 0 0 0)"
              : `inset(0 ${(1 - localFraction) * 100}% 0 0)`;
      });
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
  }, [startPosition, endPosition, totalWords, initialFilledWords, content]);

  if (!html) return null;

  return (
    <div
      ref={wrapperRef}
      className={`scroll-fill-text ${className}`}
      style={{
        "--scroll-start-color": startColor,
        "--scroll-fill-color": fillColor,
        "--scroll-start-opacity": startOpacity,
      }}
    >
      {/* Base text — dimmed to --scroll-start-opacity so it's visibly
         different from the filled text on top, even when startColor
         and fillColor are the same */}
      <div className="scroll-fill-text-base">
        {content}
      </div>

      {/* Filled text — identical word markup to the base layer, so
         both layers wrap at exactly the same points. Each word's
         clip-path is set directly in JS above (see the effect) —
         not via CSS custom-property math. */}
      <div className="scroll-fill-text-fill" ref={fillLayerRef}>
        {content}
      </div>
    </div>
  );
};

export default ScrollFillText;