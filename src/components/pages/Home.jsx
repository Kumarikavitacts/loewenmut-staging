"use client";

import React, {
  Suspense,
  useEffect,
  useRef,
} from "react";

import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@/context/ThemeContext";

import AOS from "aos";

import {
  DEFAULT_SECTION_ORDER,
  SECTION_REGISTRY,
} from "@/helper/sectionRegistry";

import { fetchHomeData } from "@/register/slices/homeSlice";

const DEFAULT_THEME = "yellow";

const themeAssets = {
  yellow: {
    icon1: "/images/hero-icon-1.png",
    icon2: "/images/hero-icon-2.png",
    icon3: "/images/hero-icon-3.png",
    icon4: "/images/hero-icon-4.png",
  },

  blue: {
    icon1: "/images/hero-icon-1-blue.png",
    icon2: "/images/hero-icon-2-blue.png",
    icon3: "/images/hero-icon-3-blue.png",
    icon4: "/images/hero-icon-4-blue.png",
  },

  green: {
    icon1: "/images/hero-icon-1-green.png",
    icon2: "/images/hero-icon-2-green.png",
    icon3: "/images/hero-icon-3-green.png",
    icon4: "/images/hero-icon-4-green.png",
  },

  pink: {
    icon1: "/images/hero-icon-1-pink.png",
    icon2: "/images/hero-icon-2-pink.png",
    icon3: "/images/hero-icon-3-pink.png",
    icon4: "/images/hero-icon-4-pink.png",
  },
};

const SectionFallback = () => (
  <div
    style={{
      minHeight: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    aria-label="Loading"
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        border: "3px solid rgba(0, 0, 0, 0.1)",
        borderTopColor: "var(--bs-themecolor)",
        borderRadius: "50%",
        animation:
          "section-loader-spin 0.8s linear infinite",
      }}
    />

    <style>
      {`
        @keyframes section-loader-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
  </div>
);

const Home = () => {
  /*
   * Get theme from ThemeContext.
   *
   * The fallback protects this component if it is ever
   * rendered without ThemeProvider.
   */
  const themeContext = useTheme();

  const theme =
    themeContext?.theme || DEFAULT_THEME;

  const nextSectionRef = useRef(null);

  const dispatch = useDispatch();

  const { status } = useSelector(
    (state) => state.home
  );

  /*
   * Get assets for the selected theme.
   */
  const assets =
    themeAssets[theme] ||
    themeAssets[DEFAULT_THEME];

  /*
   * Scroll to next section.
   */
  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
   * Fetch home data.
   */
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHomeData());
    }
  }, [status, dispatch]);

  /*
   * Refresh AOS after home data has loaded.
   */
  useEffect(() => {
    if (status === "succeeded") {
      requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    }
  }, [status]);

  const sectionOrder =
    DEFAULT_SECTION_ORDER;

  const sectionProps = {
    hero: {
      assets,
      scrollToNext,
    },

    services: {
      nextSectionRef,
    },
  };

  /*
   * Loading state.
   */
  if (
    status === "loading" ||
    status === "idle"
  ) {
    return (
      <main
        className={`home-page theme-${theme}`}
        data-theme={theme}
      >
        <SectionFallback />
      </main>
    );
  }

  /*
   * Error state.
   */
  if (status === "failed") {
    return (
      <main
        className={`home-page theme-${theme}`}
        data-theme={theme}
      >
        <p
          style={{
            padding: "3rem",
            textAlign: "center",
          }}
        >
          Die Seite konnte nicht geladen werden.
        </p>
      </main>
    );
  }

  /*
   * Normal home page.
   *
   * IMPORTANT:
   * There is NO suppressHydrationWarning here.
   *
   * We want React to render the same initial theme
   * on server and client instead of hiding a mismatch.
   */
  return (
    <main
      className={`home-page theme-${theme}`}
      data-theme={theme}
    >
      {sectionOrder.map((key) => {
        const entry =
          SECTION_REGISTRY[key];

        if (!entry) {
          return null;
        }

        const SectionComponent =
          entry.component;

        const extraProps =
          sectionProps[key] || {};

        return (
          <Suspense
            key={key}
            fallback={<SectionFallback />}
          >
            <SectionComponent
              {...extraProps}
            />
          </Suspense>
        );
      })}
    </main>
  );
};

export default Home;