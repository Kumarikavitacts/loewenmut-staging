"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollFillText from "@/components/ResuableComponents/ScrollFillText";

// Must be a bit longer than the fade in Style.css (.ext_slide) so the frame
// does not jump back to 0:00 while the video is still visible.
const VIDEO_RESET_DELAY = 650;

// Minimum horizontal swipe distance (px) that changes the slide
const SWIPE_THRESHOLD = 40;

const pad = (n) => String(n).padStart(2, "0");

// Thumbnail strip: how many thumbnails fit next to each other for a given
// container width. More thumbnails than that -> the strip becomes a slider.
const getThumbLayout = (width) => {
  if (width >= 900) return { visible: 7.5, gap: 6 };
  if (width >= 680) return { visible: 6.5, gap: 5 };
  if (width >= 480) return { visible: 5.5, gap: 4 };
  return { visible: 3.5, gap: 5 }; // phones: last thumbnail peeks out
};

// Mouse movement (px) before a click on a thumbnail counts as a drag
const DRAG_THRESHOLD = 5;

// ---------------------------------------------------------------------------
// One slide: shows the VIDEO if slide.type === "video", otherwise the IMAGE.
// Only the active video plays; all others are paused (and not preloaded).
// ---------------------------------------------------------------------------
const SlideMedia = ({ slide, active }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    clearTimeout(video._resetTimer);

    if (active) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Slider video could not play:", error);
        });
      }
    } else {
      video._resetTimer = setTimeout(() => {
        video.pause();
        try {
          video.currentTime = 0;
        } catch {
          // video may not be loaded enough to seek yet
        }
      }, VIDEO_RESET_DELAY);
    }

    return () => clearTimeout(video._resetTimer);
  }, [active]);

  if (slide.type === "video") {
    return (
      <video
        ref={videoRef}
        className="ext_slide_media"
        src={slide.src}
        poster={slide.poster}
        muted
        loop
        playsInline
        preload={active ? "auto" : "none"}
      />
    );
  }

  return (
    <img
      className="ext_slide_media"
      src={slide.src}
      alt={slide.alt || ""}
      loading={active ? "eager" : "lazy"}
      draggable={false}
    />
  );
};

// ---------------------------------------------------------------------------
// Thumbnail picture: image, video poster, or (no poster) a paused video frame
// ---------------------------------------------------------------------------
const ThumbMedia = ({ slide }) => {
  if (slide.thumb) {
    return <img src={slide.thumb} alt="" loading="lazy" draggable={false} />;
  }

  if (slide.type === "video") {
    return (
      <video
        src={`${slide.src}#t=0.5`}
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
    );
  }

  return null;
};

const MediaShowcaseSlider = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);

  const thumbsWrapRef = useRef(null);
  const thumbsRef = useRef(null);
  const thumbRefs = useRef([]);
  const touchStartX = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const [thumbLayout, setThumbLayout] = useState({
    visible: 9,
    gap: 12,
    width: null,
  });
  const [isDragging, setIsDragging] = useState(false);

  const total = slides.length;
  const hasMultiple = total > 1;

  // More thumbnails than fit in one row -> slider mode
  const isThumbSlider = total > thumbLayout.visible;

  const goTo = useCallback(
    (index) => {
      if (!total) return;
      setCurrent(((index % total) + total) % total); // wraps around
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  // Keep the active thumbnail visible inside the thumbnail strip.
  // (Scrolls only the strip itself, never the whole page.)
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = thumbRefs.current[current];
    if (!strip || !thumb) return;

    const target =
      thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;

    strip.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [current]);

  // Thumbnail size depends on the container width (so it is fully responsive):
  // thumbnails always have the same size and are left aligned.
  useEffect(() => {
    const wrap = thumbsWrapRef.current;
    if (!wrap) return undefined;

    const measure = () => {
      const width = wrap.clientWidth;
      if (!width) return;

      const { visible, gap } = getThumbLayout(width);
      const thumbWidth = Math.floor(((width + gap) / visible - gap) * 100) / 100;

      setThumbLayout((prevLayout) =>
        prevLayout.visible === visible &&
        prevLayout.gap === gap &&
        prevLayout.width === thumbWidth
          ? prevLayout
          : { visible, gap, width: thumbWidth }
      );
    };

    measure();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [hasMultiple]);

  // Drag the thumbnail slider with the mouse (touch uses native scrolling)
  const handleThumbsMouseDown = (event) => {
    if (!isThumbSlider || event.button !== 0 || !thumbsRef.current) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: thumbsRef.current.scrollLeft,
      moved: false,
    };

    const handleMove = (moveEvent) => {
      const state = drag.current;
      if (!state.active || !thumbsRef.current) return;

      const diff = moveEvent.clientX - state.startX;

      if (!state.moved && Math.abs(diff) > DRAG_THRESHOLD) {
        state.moved = true;
        setIsDragging(true);
      }

      if (state.moved) {
        thumbsRef.current.scrollLeft = state.startScroll - diff;
      }
    };

    const handleUp = () => {
      drag.current.active = false;
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  // A drag must not be treated as a click on a thumbnail
  const handleThumbsClickCapture = (event) => {
    if (drag.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      drag.current.moved = false;
    }
  };

  // If the slides change (e.g. API data arrives) make sure the index is valid.
  useEffect(() => {
    if (current > total - 1) setCurrent(0);
  }, [total, current]);

  const handleKeyDown = (event) => {
    if (!hasMultiple) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || !hasMultiple) return;

    const diff = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(diff) < SWIPE_THRESHOLD) return;
    if (diff < 0) next();
    else prev();
  };

  if (!total) return null;

  // Text + button belong to the active slide (each API entry has its own)
  const active = slides[Math.min(current, total - 1)];
  const { subtitle, title, paragraphs = [], buttonText, buttonLink } = active;
  const isExternalLink = /^https?:\/\//i.test(buttonLink || "");

  return (
    <div className="ext_comm_slider">
      <div className="row  g-4 g-lg-5">
        {/* ================= LEFT: TEXT ================= */}
        <div className="col-12 col-lg-5 ext_comm_content">
          <div className="ext_comm_content_inner" key={active.id ?? current}>
            {subtitle && <div className="sub_title">{subtitle}</div>}

            {title && (
              <h2 className="ext_comm_title">
                <ScrollFillText
                  html={title}
                  startColor="var(--bs-textdarkgrey)"
                  fillColor="var(--bs-textdarkgrey)"
                  initialFilledWords={3}
                />
              </h2>
            )}

            {paragraphs.map((paragraph, i) => (
              <p className="ext_comm_text" key={i}>
                {paragraph}
              </p>
            ))}

            {buttonText &&
              (isExternalLink ? (
                <div className="theme_btn_wrap mt-auto">
                  <a
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button theme_btn"
                  >
                    {buttonText}
                    <img src="/images/btn-arrow.svg" alt="" />
                  </a>
                </div>
              ) : (
                <div className="theme_btn_wrap mt-auto">
                  <Link href={buttonLink || "#"} className="button theme_btn">
                    {buttonText}
                    <img src="/images/btn-arrow.svg" alt="" />
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* ================= RIGHT: SLIDER ================= */}
        <div className="col-12 col-lg-7">
          <div
            className="ext_slider_stage"
            role="group"
            aria-roledescription="carousel"
            aria-label={title ? String(title).replace(/<[^>]*>/g, "") : "Slider"}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id ?? index}
                className={`ext_slide${index === current ? " is-active" : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${total}`}
                aria-hidden={index !== current}
              >
                <SlideMedia slide={slide} active={index === current} />
              </div>
            ))}
          </div>

          {hasMultiple && (
            <div className="ext_slider_controls">
              <div className="ext_slider_counter" aria-live="polite">
                <span className="ext_counter_current">({pad(current + 1)})</span>
                       <span>/</span>
                <span className="ext_counter_total">({pad(total)})</span>
              </div>

              <div className="ext_slider_buttons">
                <button
                  type="button"
                  className="ext_btn_prev"
                  onClick={prev}
                  aria-label="Zurück"
                >
                  <img src="/images/prev-arrow.svg" alt="" />
                </button>
                <button
                  type="button"
                  className="ext_btn_next"
                  onClick={next}
                  aria-label="Weiter"
                >
                  <img src="/images/next-arrow.svg" alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= THUMBNAILS ================= */}
      {hasMultiple && (
        <div
          className="ext_thumbs_wrap"
          ref={thumbsWrapRef}
          style={{
            "--ext-gap": `${thumbLayout.gap}px`,
            ...(thumbLayout.width
              ? { "--ext-thumb-w": `${thumbLayout.width}px` }
              : {}),
          }}
        >
          <div
            className={`ext_thumbs${isThumbSlider ? " is-slider" : ""}${
              isDragging ? " is-dragging" : ""
            }`}
            ref={thumbsRef}
            onMouseDown={handleThumbsMouseDown}
            onClickCapture={handleThumbsClickCapture}
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id ?? index}
                type="button"
                ref={(el) => {
                  thumbRefs.current[index] = el;
                }}
                className={`ext_thumb${index === current ? " is-active" : ""}${
                  slide.type === "video" ? " is-video" : ""
                }`}
                onClick={() => goTo(index)}
                aria-label={`${index + 1} / ${total}`}
                aria-current={index === current ? "true" : undefined}
              >
                <span className="ext_thumb_no">({pad(index + 1)})</span>
                <span className="ext_thumb_frame">
                  <ThumbMedia slide={slide} />
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaShowcaseSlider;
