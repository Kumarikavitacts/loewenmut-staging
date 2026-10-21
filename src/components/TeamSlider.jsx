"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

import { teamMembers as staticTeamMembers } from "@/helper/TeamUtil";
import { getMediaUrl } from "@/helper/MediaUrl";
import YellowFrame from "@/components/ResuableComponents/YellowFrame";
import PinkFrame from "@/components/ResuableComponents/PinkFrame";
import BlueFrame from "@/components/ResuableComponents/BlueFrame";

const SHAPE_SETS = {
  yellow: ["crosshatch", "eye", "eye-small", "scribble", "curve", "blob-small"],
  pink: ["scribble", "dots", "blob", "blob-small", "branch", "bottom-wave"],
  blue: ["top-wave", "blob", "blob-small", "star", "curve", "bottom-blob"],
  green: ["dots", "blob", "star", "curve", "blob-small", "bottom-wave"],
  purple: ["crosshatch", "blob", "eye-small", "branch", "blob-small", "top-wave"],
};

const frameComponents = {
  yellow: <YellowFrame />,
  blue: <BlueFrame />,
  pink: <PinkFrame />,
};

const getShapes = (color) => SHAPE_SETS[color] || SHAPE_SETS.yellow;

// Flattens the first paragraph of a Strapi block-editor "Text"
// field into a short plain-text teaser for the slider card.
const getFirstParagraphText = (content = []) => {
  if (!Array.isArray(content)) return "";

  const firstParagraph = content.find((block) => block?.type === "paragraph");
  if (!firstParagraph) return "";

  return firstParagraph.children?.map((child) => child.text || "").join("") || "";
};

// Renders every paragraph block of the Strapi "Text" field (used in popup).
const RichParagraphs = ({ content = [] }) => {
  if (!Array.isArray(content)) return null;

  return (
    <>
      {content.map((block, index) => {
        if (block?.type !== "paragraph") return null;

        const text = block.children?.map((child) => child.text).join("") || "";
        if (!text) return null;

        return <p key={index}>{text}</p>;
      })}
    </>
  );
};

const TeamSlider = ({ teams, header = null }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers =
    Array.isArray(teams) && teams.length > 0
      ? teams.map((item) => ({
          id: item?.id,
          name: item?.Titel || "",
          role: item?.Bezeichnung || "",
          desciption: getFirstParagraphText(item?.Text),
          image: item?.Bild?.url ? getMediaUrl(item.Bild.url) : "",
          color: item?.Class_Name || "yellow",
          shapes: getShapes(item?.Class_Name),
          text: item?.Text || [], // full bio for the popup
          skills: item?.Skill || [], // tags for the popup
        }))
      : staticTeamMembers;

  // ---------------------------------------------------------------------
  // Scroll-driven horizontal slider (like the "vertical scroll, horizontal
  // slide" idea): the tall wrapper scrolls normally, the sticky part stays
  // pinned, and the vertical scroll progress moves the cards sideways.
  // Works in both directions; when the last card is reached (or the first one
  // when scrolling back up) the page simply continues to scroll.
  // ---------------------------------------------------------------------
  const outerRef = useRef(null);
  const stickyRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!outer || !sticky || !viewport || !track) return;

    let maxShift = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      const range = outer.offsetHeight - sticky.offsetHeight; // = maxShift
      const scrolled = stickyTop - outer.getBoundingClientRect().top;
      const progress =
        range > 0 ? Math.min(1, Math.max(0, scrolled / range)) : 0;

      track.style.transform = `translate3d(${-progress * maxShift}px,0,0)`;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const measure = () => {
      // keep the pinned area right below the fixed header
      const headerH = document.querySelector("header")?.offsetHeight || 0;
      outer.style.setProperty("--team-sticky-top", `${headerH}px`);

      // Card width: 3 cards per view (desktop), 2 (tablet), 1 (phone).
      // Calculated here (in px) so it never depends on CSS container units.
      const winW = window.innerWidth;
      const perView = winW >= 992 ? 3 : winW >= 576 ? 2 : 1;
      const gap = winW >= 992 ? 24 : winW >= 576 ? 16 : 12;
      const itemW = Math.floor(
        (viewport.clientWidth - gap * (perView - 1)) / perView
      );
      track.style.setProperty("--team-gap", `${gap}px`);
      track.style.setProperty("--team-item-w", `${itemW}px`);

      // how far the cards have to travel sideways
      maxShift = Math.max(0, track.offsetWidth - viewport.clientWidth);

      // 1px of vertical scroll = 1px of sideways movement
      outer.style.height = `${sticky.offsetHeight + maxShift}px`;
      requestUpdate();
    };

    measure();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(track);
      resizeObserver.observe(viewport);
    }

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [teamMembers.length]);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  // Close on Escape + lock page scroll while popup is open
  useEffect(() => {
    if (!selectedMember) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedMember]);

  const visibleMembers = teamMembers|| [];

  return (
    <>
      <div ref={outerRef} className="team-hscroll">
        <div ref={stickyRef} className="team-hscroll-sticky">
          {header}

          <div ref={viewportRef} className="team-carousel">
            <div ref={trackRef} className="team-hscroll-track">
        {/* Team Members */}
        {visibleMembers.map((member, index) => (
          <div className="team-carousel-item" key={`${member.name}-${index}`}>
            <div
              className="team-card"
              role="button"
              tabIndex={0}
              style={{ cursor: "pointer" }}
              onClick={() => openModal(member)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(member);
                }
              }}
            >
              <div className={`team-image tm-img-bgcolor ${member.color}`}>
                {frameComponents[member.color]}
                <img src={member.image} alt={member.name} className="team-person" />
              </div>
              <div className="team-info">
                <div>
                  <div className="team-role mb-2">{member.role}</div>
                  <h3>{member.name}</h3>
                  <p>{member.desciption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Last Item - CTA to the full team page */}
        <div className="team-carousel-item">
          <div className="team-last-card">
            <Link href={`/team`} className="team-last-link">
              LERN DAS GANZE TEAM KENNEN{" "}
              <img
                src="/images/more-button-arrow.svg"
                alt="right arrow"
                className="team-arrow"
              />
            </Link>
          </div>
        </div>
            </div>
          </div>

          {/* <div className="team-hscroll-progress" aria-hidden="true">
            <span ref={progressRef} />
          </div> */}
        </div>
      </div>

      {/* =========================
          TEAM POPUP
          (portal -> outside Owl Carousel DOM)
      ========================= */}
      {selectedMember &&
        createPortal(
          <div className="team-modal-backdrop" onClick={closeModal}>
            <div className="team-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="team-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <img src="/images/modal-close.svg" alt="Close" />
              </button>

              <div className="row align-items-center">
                <div className="col-md-5">
                  <div
                    className={`team-modal-image tm-img-bgcolor ${selectedMember.color}`}
                  >
                    {frameComponents[selectedMember.color]}
                    {selectedMember.image && (
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="team-person"
                      />
                    )}
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="team-modal-content">
                    <div className="team-role">{selectedMember.role}</div>
                    <h2 className="fs_50 fw-bold">{selectedMember.name}</h2>

                    {selectedMember.skills?.length > 0 && (
                      <div className="tags-wrapper">
                        {selectedMember.skills.map((skill) => (
                          <span
                            key={skill.id}
                            className={`tag tag-${skill.Skill_Farbe}`}
                          >
                            {skill.Titel}{" "}
                          </span>
                        ))}
                      </div>
                    )}

                    {Array.isArray(selectedMember.text) &&
                    selectedMember.text.length > 0 ? (
                      <RichParagraphs content={selectedMember.text} />
                    ) : (
                      // fallback for the static list (plain string)
                      selectedMember.desciption && <p>{selectedMember.desciption}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default TeamSlider;