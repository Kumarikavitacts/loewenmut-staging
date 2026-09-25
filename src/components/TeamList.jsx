"use client";

import React, { useState } from "react";
import { getMediaUrl } from "@/helper/MediaUrl";

// Decorative shapes aren't part of the API — pick a consistent
// combo per Class_Name so members of the same color still look varied.
const SHAPE_SETS = {
  yellow: ["crosshatch", "eye", "eye-small", "scribble", "curve", "blob-small"],
  pink: ["scribble", "dots", "blob", "blob-small", "branch", "bottom-wave"],
  blue: ["top-wave", "blob", "blob-small", "star", "curve", "bottom-blob"],
  green: ["dots", "blob", "star", "curve", "blob-small", "bottom-wave"],
  purple: ["crosshatch", "blob", "eye-small", "branch", "blob-small", "top-wave"],
};

const getShapes = (color) => SHAPE_SETS[color] || SHAPE_SETS.yellow;

// Team members' bio (Text) is a Strapi block-editor field — an array
// of paragraph blocks. Flatten each block into a <p>.
const RichParagraphs = ({ content = [] }) => {
  if (!Array.isArray(content)) return null;

  return (
    <>
      {content.map((block, index) => {
        if (block.type !== "paragraph") return null;

        const text =
          block.children?.map((child) => child.text).join("") || "";

        if (!text) return null;

        return <p key={index}>{text}</p>;
      })}
    </>
  );
};

const Shape = ({ type, index }) => {
  return (
    <span className={`animated-shape shape-${type} shape-index-${index}`} />
  );
};

const TeamList = ({ teamData = [], loading = false }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  // -----------------------------------------
  // MAP API DATA
  // -----------------------------------------
  const members = teamData.map((item) => ({
    id: item?.id,
    name: item?.Titel || "",
    role: item?.Bezeichnung || "",
    image: item?.Bild?.url ? getMediaUrl(item.Bild.url) : "",
    color: item?.Class_Name || "yellow",
    shapes: getShapes(item?.Class_Name),
    text: item?.Text || [],
    skills: item?.Skill || [],
  }));

  if (!loading && members.length === 0) {
    return null;
  }

  return (
    <>
      <div className="row g-4">
        {members.map((member) => (
          <div className="col-6 col-lg-4 team-column" key={member.id}>
            <div
              className="team-card"
              onClick={() => openModal(member)}
              role="button"
            >
              <div className={`team-image tm-img-bgcolor ${member.color}`}>
                {/* Animated background elements */}
                <div className="animated-background">
                  {member.shapes.map((shape, shapeIndex) => (
                    <Shape key={shapeIndex} type={shape} index={shapeIndex} />
                  ))}
                </div>
                {/* Person */}
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-person"
                  />
                )}
              </div>
              <div className="team-info">
                <div>
                  <div className="team-role">{member.role}</div>
                  <h3>{member.name}</h3>
                </div>
                <button className="team-arrow" type="button">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="34" cy="34" r="34" fill="var(--bs-themecolor)" />
                    <path
                      d="M52.9381 34.3368L38.8989 48.9256L36.8233 46.7682L47.3874 35.7894H15.6914V32.76H47.1105L36.5429 21.78L38.6256 19.6152L52.9381 34.3368Z"
                      fill="#373737"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          TEAM MODAL
      ========================= */}

      {selectedMember && (
        <div className="team-modal-backdrop" onClick={closeModal}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              type="button"
              className="team-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <img src="./images/modal-close.svg"  alt="Close" />
            </button>
            <div className="row align-items-center">
              <div className="col-md-5">
                <div
                  className={`team-modal-image tm-img-bgcolor ${selectedMember.color}`}
                >
                  {/* Animated background elements */}
                  <div className="animated-background">
                    {selectedMember.shapes.map((shape, shapeIndex) => (
                      <Shape key={shapeIndex} type={shape} index={shapeIndex} />
                    ))}
                  </div>
                  {selectedMember.image && (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="team-person"
                    />
                  )}
                </div>
              </div>
              {/* Content */}
              <div className="col-md-7">
                <div className="team-modal-content">
                  <div className="team-role">{selectedMember.role}</div>
                  <h2 className="fs_50 fw-bold">{selectedMember.name}</h2>

                  {selectedMember.skills.length > 0 && (
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

                  <RichParagraphs content={selectedMember.text} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamList;