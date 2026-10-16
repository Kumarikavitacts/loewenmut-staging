"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import $ from "jquery";

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

const TeamSlider = ({ teams }) => {
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

  const carouselRef = useRef(null);
  const owlInstance = useRef(null);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  // Owl Carousel init (unchanged)
  useEffect(() => {
    window.$ = $;
    window.jQuery = $;

    let mounted = true;

    import("owl.carousel/dist/owl.carousel.min.js")
      .then(() => {
        if (!mounted || !carouselRef.current) return;

        const $carousel = $(carouselRef.current);

        if ($carousel.hasClass("owl-loaded")) return;

        if (typeof $carousel.owlCarousel !== "function") {
          console.error("Owl Carousel is not loaded correctly.");
          return;
        }

        $carousel.owlCarousel({
          loop: false,
          autoplay: false,
          smartSpeed: 800,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          nav: true,
          dots: false,
          margin: 24,
          responsive: {
            0: { items: 1, margin: 12 },
            576: { items: 2, margin: 16 },
            992: { items: 3, margin: 24 },
          },
        });

        owlInstance.current = $carousel;
      })
      .catch((error) => {
        console.error("Failed to load Owl Carousel:", error);
      });

    return () => {
      mounted = false;

      const $carousel = owlInstance.current;
      if (!$carousel || !$carousel.length) return;

      try {
        if ($carousel.hasClass("owl-loaded")) {
          $carousel.trigger("destroy.owl.carousel");
        }
      } catch (error) {
        console.warn("Owl Carousel cleanup warning:", error);
      }

      owlInstance.current = null;
    };
  }, []);

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
      <div ref={carouselRef} className="owl-carousel owl-theme team-carousel">
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