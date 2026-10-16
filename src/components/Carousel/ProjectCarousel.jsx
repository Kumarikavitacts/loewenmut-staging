"use client";

import React, { useEffect, useId, useRef } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";
import ScrollFillText from "../ResuableComponents/ScrollFillText";

// ---------------------------------------------------------------------------
// Round cursor shown while hovering a project card.
// Change the texts here.
// ---------------------------------------------------------------------------
const PROJECT_CURSOR_TEXT = {
  inner: "weiterlesen", // card opens a page of this website
  outer: "Website besuchen", // card opens another website
};

// Ring text geometry (SVG viewBox is 200 x 200)
const RING_RADIUS = 72;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

const ProjectCursorRing = ({ text }) => {
  const pathId = `project-ring-${useId().replace(/:/g, "")}`;

  // "weiterlesen • weiterlesen • " (non-breaking spaces keep the gaps equal)
  const isLongText = text.length > "weiterlesen".length;
  const unit = `${text} \u2022 `;
  const repeats = isLongText
    ? 1
    : Math.max(2, Math.round(28 / unit.length));

  const ringText = unit.repeat(repeats).replace(/ /g, "\u00A0");

  // longer texts get a slightly smaller font so they always fit the ring
  const fontSize = Math.min(
    24,
    (0.9 * RING_LENGTH) / (ringText.length * 0.55)
  );

  return (
    <svg
      className="project-cursor-ring"
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <defs>
        <path
          id={pathId}
          d={`M 100,100 m -${RING_RADIUS},0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 ${
            RING_RADIUS * 2
          },0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 -${RING_RADIUS * 2},0`}
        />
      </defs>
      <text style={{ fontSize }}>
        <textPath
          href={`#${pathId}`}
          textLength={RING_LENGTH - 2}
          lengthAdjust="spacing"
        >
          {ringText}
        </textPath>
      </text>
    </svg>
  );
};

const ProjectCarousel = ({
  title,
  description,
  description2,
  project = [],
  button,
}) => {
  const carouselRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    window.$ = $;
    window.jQuery = $;

    let $carousel = null;

    // Handle project card clicks, including Owl Carousel clones.
    const handleCarouselClick = (event) => {
      const card = event.target.closest(
        ".project-carousel-card-link"
      );

      if (!card) return;

      const href = card.getAttribute("data-href");
      const target = card.getAttribute("data-target");
      const isInternal =
        card.getAttribute("data-internal") === "true";

      if (!href || href === "#") return;

      event.preventDefault();
      event.stopPropagation();

      if (target === "_blank") {
        window.open(href, "_blank", "noopener,noreferrer");
      } else if (isInternal) {
        router.push(href);
      } else {
        window.location.href = href;
      }
    };

    // Play videos muted when hovering over a card.
    const handleVideoMouseEnter = function () {
      const video = this.querySelector("video");

      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Project video could not play:", error);
        });
      }
    };

    // Pause and reset the video when leaving a card.
    const handleVideoMouseLeave = function () {
      const video = this.querySelector("video");

      if (!video) return;

      video.pause();

      try {
        video.currentTime = 0;
      } catch {
        // The video may not have loaded enough to seek yet.
      }
    };

    // Move the round cursor with the mouse. It works on Owl clones too,
    // because the cursor element is part of the card markup.
    const handleCursorMove = function (event) {
      const cursor = this.querySelector(".project-cursor");

      if (!cursor) return;

      const rect = this.getBoundingClientRect();

      cursor.style.transform = `translate3d(${
        event.clientX - rect.left
      }px, ${event.clientY - rect.top}px, 0)`;
    };

    import("owl.carousel/dist/owl.carousel.min.js")
      .then(() => {
        if (!carouselRef.current) return;

        $carousel = $(carouselRef.current);

        if (typeof $carousel.owlCarousel !== "function") {
          console.error("Owl Carousel is not loaded correctly.");
          return;
        }

        // Delegated events work for original cards and cloned cards.
        $carousel.on(
          "click.projectCarousel",
          ".project-carousel-card-link",
          handleCarouselClick
        );

        $carousel.on(
          "mouseenter.projectCarousel",
          ".project-carousel-card",
          handleVideoMouseEnter
        );

        $carousel.on(
          "mouseleave.projectCarousel",
          ".project-carousel-card",
          handleVideoMouseLeave
        );

        // Round cursor: start under the mouse, then follow it.
        $carousel.on(
          "mouseenter.projectCarousel mousemove.projectCarousel",
          ".project-carousel-card",
          handleCursorMove
        );

        $carousel.owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          smartSpeed: 800,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          nav: false,
          dots: false,
          rewind: false,
          margin: 16,

          responsive: {
            0: {
              items: 1.2,
              margin: 12,
            },
            576: {
              items: 1.8,
              margin: 16,
            },
            768: {
              items: 2.3,
              margin: 16,
            },
            992: {
              items: 3.2,
              margin: 16,
            },
            1200: {
              items: 4,
              margin: 16,
            },
            1400: {
              items: 4.5,
              margin: 16,
            },
          },
        });
      })
      .catch((error) => {
        console.error("Failed to load Owl Carousel:", error);
      });

    return () => {
      if (!$carousel) return;

      $carousel.off(".projectCarousel");

      // Pause videos before destroying the carousel.
      $carousel.find("video").each(function () {
        this.pause();
      });

      if ($carousel.hasClass("owl-loaded")) {
        $carousel.trigger("destroy.owl.carousel");
      }
    };
  }, [router]);

  return (
    <div className="container">
      {/* HEADING */}
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="project-carousel-heading">
            <h2 className="mb-3">
              <ScrollFillText
                html={title}
                className="Agentur_fill_title"
                startColor="var(--bs-textdarkgrey)"
                fillColor="var(--bs-textdarkgrey)"
              />
            </h2>

            {description && (
              <p className="text-dark mb-4 fw-regular">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="owl-carousel project-carousel"
      >
        {project.map((item, index) => {
          const isInternal =
            item?.detailseite === "Ja" && Boolean(item?.slug);

          const isExternal =
            !isInternal && Boolean(item?.websiteLink);

          const href = isInternal
            ? `/insights/${item.slug}`
            : item?.websiteLink || "#";

          const openInNewTab =
            isExternal && item?.linkziel === "Extern";

          // Round cursor text: "inner" = page of this website,
          // "outer" = other website, null = no link (no cursor).
          const link = item?.websiteLink || "";
          let linkType = null;

          if (isInternal) {
            linkType = "inner";
          } else if (link) {
            linkType =
              item?.linkziel !== "Extern" &&
              (link.startsWith("/") || link.startsWith("#"))
                ? "inner"
                : "outer";
          }

          // Support either an explicit boolean or a video URL.
          const videoUrl = item?.video || "";
          const isVideo = Boolean(item?.isVideo && videoUrl);

          return (
            <div
              className="project-carousel-item"
              key={item?.id || item?.documentId || index}
            >
              <a
                href={href}
                data-href={href}
                data-internal={isInternal}
                data-target={openInNewTab ? "_blank" : "_self"}
                className="project-carousel-card-link"
              >
                <div
                  className={`project-carousel-card position-relative overflow-hidden d-flex align-items-center justify-content-center${
                    linkType ? " has-link" : ""
                  }`}
                  style={{
                    backgroundColor: item?.bgColor,
                  }}
                >
                  {/* IMAGE / VIDEO */}
                  {isVideo ? (
                    <video
                      src={videoUrl}
                      poster={item?.poster || undefined}
                      muted
                      defaultMuted
                      loop
                      playsInline
                      preload="auto"
                      className="project-carousel-image position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        objectFit: "cover",
                        pointerEvents: "none",
                      }}
                    />
                  ) : (
                    item?.image && (
                      <img
                        src={item.image}
                        alt={item?.title || ""}
                        className="project-carousel-image position-absolute top-0 start-0 w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    )
                  )}

                  {/* CENTER LOGO */}
                  {item?.logo && (
                    <div className="project-carousel-logo-wrapper position-relative d-flex align-items-center justify-content-center">
                      <img
                        src={item.logo}
                        alt={item?.title || ""}
                        className="project-carousel-logo img-fluid"
                      />
                    </div>
                  )}

                  {/* ROUND CURSOR: follows the mouse, text depends on link type */}
                  {linkType && (
                    <div className="project-cursor" aria-hidden="true">
                      <div className="project-cursor-disc">
                        <ProjectCursorRing
                          text={PROJECT_CURSOR_TEXT[linkType]}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* DESCRIPTION */}
      <div className="row mt-4">
        <div className="col-12 col-lg-8 mx-auto project-carousel-heading">
          {description2 && (
            <p className="text-dark fw-regular">
              {description2}
            </p>
          )}

          <a href="/insights" className="button theme_btn">
            {button}
            <img src="/images/btn-arrow.svg" alt="button arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;