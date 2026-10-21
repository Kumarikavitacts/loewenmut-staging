"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getMediaUrl } from "@/helper/MediaUrl";

// ---------------------------------------------------------------------------
// Text shown on the round cursor while hovering a card.
// Change the texts here.
// ---------------------------------------------------------------------------
export const INSIGHT_CURSOR_TEXT = {
  inner: "weiterlesen", // card opens an inner page of this website
  outer: "Besuchen Sie die Website", // card opens another website
};

// "inner" | "outer" | null (no link = no cursor)
export const getInsightLinkType = (insight) => {
  if (insight?.Detailseite === "Ja" && insight?.Slug) return "inner";

  const link = insight?.Link_zur_Website;
  if (!link) return null;

  if (insight?.Linkziel === "Extern") return "outer";
  if (link.startsWith("/") || link.startsWith("#")) return "inner";

  return "outer";
};

// Smooth fade (colour -> image/video) with a very slight zoom-out
const MEDIA_TRANSITION =
  "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)";

// Ring text geometry (SVG viewBox is 200 x 200)
const RING_RADIUS = 72;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;



const InsightCursorRing = ({ text }) => {
  const pathId = useId().replace(/:/g, "");

  const RING_RADIUS = 72;
  const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

  // Repeat short text; show long text only once.
  const isLongText = text.length > "weiterlesen".length;

  const unit = `${text} \u2022 `;
  const repeats = isLongText
    ? 1
    : Math.max(2, Math.round(28 / unit.length));

  const ringText = unit.repeat(repeats).replace(/ /g, "\u00A0");

  return (
    <svg
      className="insight-cursor-ring"
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <defs>
        <path
          id={pathId}
          d={`M 100,100 m -${RING_RADIUS},0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 ${
            RING_RADIUS * 2
          },0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 -${
            RING_RADIUS * 2
          },0`}
        />
      </defs>

      <text className="insight-cursor-ring-text">
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


export const InsightCard = ({
  insight,
  isTouchActive = false, // set by the page: card was tapped on a touch device
  onTouchActivate, // called when this card is tapped the first time
}) => {
  const router = useRouter();
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const pointerTypeRef = useRef("mouse");

  // image/video is shown on mouse hover (desktop) or on tap (mobile)
  const isActive = isHovered || isTouchActive;

  const linkType = getInsightLinkType(insight); // "inner" | "outer" | null

  const backgroundColor = insight?.Farbe || "#000";

  const imageUrl = insight?.Bild?.url
    ? getMediaUrl(insight.Bild.url)
    : null;

  const videoUrl = insight?.Video?.url
    ? getMediaUrl(insight.Video.url)
    : null;

  const logoUrl = insight?.Logo?.url
    ? getMediaUrl(insight.Logo.url)
    : null;

  const isVideo = insight?.Bild_oder_Video === "Video" && videoUrl;
  const isImage = insight?.Bild_oder_Video === "Bild" && imageUrl;

  // move the round cursor with the mouse (no re-render, direct transform)
  const moveCursor = (e) => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const rect = e.currentTarget.getBoundingClientRect();
    cursor.style.transform = `translate3d(${e.clientX - rect.left}px, ${
      e.clientY - rect.top
    }px, 0)`;
  };

  // mouse only: real hover (touch devices have no hover)
  const handlePointerEnter = (e) => {
    pointerTypeRef.current = e.pointerType;
    if (e.pointerType !== "mouse") return;

    setIsHovered(true);
    moveCursor(e); // start exactly under the mouse
  };

  const handlePointerMove = (e) => {
    if (e.pointerType === "mouse" && linkType) moveCursor(e);
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    setIsHovered(false);
  };

  const handlePointerDown = (e) => {
    pointerTypeRef.current = e.pointerType;
  };

  // play the video while active; on leave wait for the fade-out to finish
  // before pausing/resetting, otherwise the frame jumps while fading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {});
      return;
    }

    const timer = setTimeout(() => {
      video.pause();
      video.currentTime = 0;
    }, 650);

    return () => clearTimeout(timer);
  }, [isActive]);

  const handleCardClick = () => {
    // Touch devices: first tap shows the image/video, second tap opens the link
    if (pointerTypeRef.current !== "mouse" && !isTouchActive) {
      onTouchActivate?.(insight.id);
      return;
    }

    if (insight?.Detailseite === "Ja" && insight?.Slug) {
      router.push(`/insights/${insight.Slug}`);
      return;
    }

    if (insight?.Link_zur_Website) {
      if (insight?.Linkziel === "Extern") {
        window.open(insight.Link_zur_Website, "_blank", "noopener,noreferrer");
      } else {
        window.open(insight.Link_zur_Website, "_self");
      }
    }
  };

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <article
        className={`insight-card position-relative overflow-hidden rounded-4${
          linkType ? " has-link" : ""
        }`}
        style={{
          aspectRatio: "375 / 345",
          backgroundColor, // always stay visible; media fades in on top of it
        }}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onClick={handleCardClick}
      >
        {/* IMAGE */}
        {isImage && (
          <img
            src={imageUrl}
            alt={insight?.Bild?.alternativeText || insight?.Titel || ""}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            loading="lazy"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.06)",
              transition: MEDIA_TRANSITION,
              willChange: "opacity, transform",
            }}
          />
        )}

        {/* VIDEO */}
        {isVideo && (
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.06)",
              transition: MEDIA_TRANSITION,
              willChange: "opacity, transform",
            }}
          />
        )}

        {/* LOGO */}
        {logoUrl && (
          <div
            className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 px-md-4"
            style={{
              zIndex: 2,
            }}
          >
            <img
              src={logoUrl}
              alt={insight?.Logo?.alternativeText || insight?.Titel || ""}
              className="img-fluid"
              style={{
                maxWidth: "75%",
                maxHeight: "100px",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        {/* ROUND CURSOR: follows the mouse, text depends on the link type */}
        {linkType && (
          <div className="insight-cursor" ref={cursorRef} aria-hidden="true">
            <div
              className={`insight-cursor-disc is-${linkType}${
                isHovered ? " is-visible" : ""
              }`}
            >
              <InsightCursorRing text={INSIGHT_CURSOR_TEXT[linkType]} />
            </div>
          </div>
        )}
      </article>
    </div>
  );
};