"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    let refreshTimer;
    let firstPendingAt = null;

    // How long to wait for things to go quiet before refreshing.
    const QUIET_WINDOW = 100;

    // Hard ceiling: refresh is guaranteed to run at least this often,
    // even if new mutations/resizes/image-loads keep arriving back to
    // back and would otherwise keep resetting a plain debounce forever.
    const MAX_WAIT = 400;

    const refreshAOS = () => {
      if (typeof window === "undefined") return;

      requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    };

    /*
     * Debounced refresh with a max-wait ceiling.
     * A plain debounce (clearTimeout + setTimeout on every event) can be
     * starved forever on a busy page: as long as something keeps mutating
     * the DOM / resizing / loading images less than QUIET_WINDOW apart,
     * the timer keeps getting pushed back and refreshAOS() never actually
     * runs. That's exactly what happens on first load (lots of images +
     * fonts + the services carousel settling in quick succession) but not
     * on a cached reload, where things settle fast enough to never hit
     * that starvation window. Tracking firstPendingAt forces a refresh
     * once MAX_WAIT has elapsed regardless of how busy things still are.
     */
    const scheduleRefresh = (delay = QUIET_WINDOW) => {
      const now = Date.now();

      if (firstPendingAt === null) {
        firstPendingAt = now;
      }

      clearTimeout(refreshTimer);

      if (now - firstPendingAt >= MAX_WAIT) {
        firstPendingAt = null;
        refreshAOS();
        return;
      }

      refreshTimer = setTimeout(() => {
        firstPendingAt = null;
        refreshAOS();
      }, delay);
    };

    /*
     * Initialize AOS
     */
    AOS.init({
      duration: 1500,
      once: true,
      offset: 80,
      easing: "ease-out",

      // Keep AOS disabled on screens below 1200px
      disable: () => window.innerWidth < 1200,
    });

    /*
     * Initial refresh
     */
    refreshAOS();

    /*
     * Refresh when everything is loaded
     */
    const handleLoad = () => {
      refreshAOS();
    };

    window.addEventListener("load", handleLoad);

    /*
     * Refresh when browser size changes
     */
    const handleResize = () => {
      scheduleRefresh(200);
    };

    window.addEventListener("resize", handleResize);

    /*
     * Observe dynamically added React/Redux/API content.
     */
    const observer = new MutationObserver((mutations) => {
      let shouldRefresh = false;

      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          shouldRefresh = true;
        }
      });

      if (shouldRefresh) {
        scheduleRefresh(100);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    /*
     * Observe layout/height changes on the page.
     * This is the piece a MutationObserver can't do:
     * an <img> that is already in the DOM but finishes
     * loading later pushes the page taller without ever
     * firing a childList mutation. If AOS calculated its
     * trigger offsets before that image loaded, every
     * element below it ends up with a stale (too small)
     * offset and never gets the .aos-animate class - so it
     * stays invisible until something forces a refresh
     * (e.g. a reload with the image already cached).
     */
    let resizeObserver;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        scheduleRefresh(100);
      });

      resizeObserver.observe(document.body);
    }

    /*
     * Refresh whenever any image (or other resource) finishes
     * loading or fails to load. "load"/"error" don't bubble,
     * so we capture them on the document instead of trying to
     * bind a listener to every <img> individually.
     */
    const handleResourceSettled = (event) => {
      if (event.target?.tagName === "IMG") {
        scheduleRefresh(50);
      }
    };

    document.addEventListener("load", handleResourceSettled, true);
    document.addEventListener("error", handleResourceSettled, true);

    /*
     * Refresh once web fonts have finished loading, since a
     * font swap can also change element heights/positions.
     */
    if (document.fonts?.ready) {
      document.fonts.ready.then(refreshAOS);
    }

    /*
     * Cleanup
     */
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);

      observer.disconnect();
      resizeObserver?.disconnect();

      document.removeEventListener("load", handleResourceSettled, true);
      document.removeEventListener("error", handleResourceSettled, true);

      clearTimeout(refreshTimer);
    };
  }, []);

  return null;
}