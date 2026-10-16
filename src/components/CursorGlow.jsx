"use client";

import { useEffect, useRef } from "react";

/**
 * Soft glow that follows the mouse cursor.
 * - Pure React/JS (no jQuery needed)
 * - Only runs on devices with a real mouse (hidden on touch devices)
 * - Disabled when the user prefers reduced motion
 * - The animation loop stops by itself when the glow has caught up
 */

// 0 = never moves, 1 = sticks to the cursor with no delay.
// Lower = more floaty/slow, higher = faster. Good range: 0.25 - 0.5
const FOLLOW_SPEED = 1;

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!canHover || reduceMotion) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId = null;
    let lastTime = 0;
    let started = false;

    const render = (time) => {
      // same speed on 60Hz, 120Hz and 144Hz screens
      const dt = lastTime ? Math.min((time - lastTime) / 16.67, 3) : 1;
      lastTime = time;
      const ease = 1 - Math.pow(1 - FOLLOW_SPEED, dt);

      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      const stillMoving =
        Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1;

      if (stillMoving) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = null;
        lastTime = 0;
      }
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!started) {
        // first move: start exactly at the cursor, then fade in
        started = true;
        currentX = mouseX;
        currentY = mouseY;
        glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
        glow.classList.add("is-visible");
      }

      if (rafId === null) rafId = requestAnimationFrame(render);
    };

    const onLeave = () => glow.classList.remove("is-visible");
    const onEnter = () => {
      if (started) glow.classList.add("is-visible");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="cursor-glow" ref={glowRef} aria-hidden="true" />;
};

export default CursorGlow;