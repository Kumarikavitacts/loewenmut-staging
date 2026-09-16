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

import HeroSkeleton from "@/components/Skeleton/HeroSkeleton";
import ServicesSkeleton from "@/components/Skeleton/ServicesSkeleton";
import ProjectSkeleton from "@/components/Skeleton/ProjectSkeleton";
import CardGridSkeleton from "@/components/Skeleton/CardGridSkeleton";
import TalkSkeleton from "@/components/Skeleton/TalkSkeleton";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";

const DEFAULT_THEME = "yellow";

/*
 * One skeleton per home section, matching each section's real
 * layout so the page doesn't "jump" once the API call resolves.
 * "work" has no API data of its own (it's a static search /
 * timezone widget), so it keeps the lightweight fallback.
 */
const HOME_SECTION_SKELETONS = {
  hero: () => <HeroSkeleton />,
  services: () => <ServicesSkeleton />,
  project: () => <ProjectSkeleton />,
  insights: () => (
    <CardGridSkeleton sectionClassName="pt_pb_3 insight_section" />
  ),
  work: () => <SectionFallback />,
  news: () => (
    <CardGridSkeleton sectionClassName="pt_pb_3 news_section" />
  ),
  talk: () => <TalkSkeleton />,
};

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
   *
   * Instead of a single spinner for the whole page, render a
   * skeleton for every section in the real section order, so the
   * page already "looks like itself" while the API call is in
   * flight and there's no layout jump once it resolves.
   */
  if (
    status === "loading" ||
    status === "idle"
  ) {
    return (
      <main
        className={`home-page theme-${theme}`}
        data-theme={theme}
        aria-busy="true"
        aria-label="Seite wird geladen"
      >
        {sectionOrder.map((key) => {
          const SectionSkeletonComponent =
            HOME_SECTION_SKELETONS[key];

          if (!SectionSkeletonComponent) {
            return null;
          }

          return (
            <React.Fragment key={key}>
              {SectionSkeletonComponent()}
            </React.Fragment>
          );
        })}
      </main>
    );
  }

  /*
   * Error state.
   */
  if (status === "failed") {
    return (
      <StatusHeader
      statusType="wrong"
      title={
        <>
          Diese Seite konnte leider <br />
          nicht gefunden werden
        </>
      }
      buttonText="Zurück zur Startseite"
      buttonLink="/"
    />
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

        const SectionSkeletonComponent =
          HOME_SECTION_SKELETONS[key];

        return (
          <Suspense
            key={key}
            fallback={
              SectionSkeletonComponent ? (
                SectionSkeletonComponent()
              ) : (
                <SectionFallback />
              )
            }
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