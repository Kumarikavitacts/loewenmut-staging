"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getMediaUrl } from "@/helper/MediaUrl";

export const InsightCard = ({ insight }) => {
  const router = useRouter();
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCardClick = () => {
    if (insight?.Detailseite === "Ja" && insight?.Slug) {
      router.push(`/insights/${insight.Slug}`);
      return;
    }

    if (insight?.Link_zur_Website) {
      window.open(
        insight.Link_zur_Website,
        insight?.Linkziel === "Extern" ? "_blank" : "_self"
      );
    }
  };

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <article
        className="insight-card position-relative overflow-hidden rounded-4"
        style={{
          aspectRatio: "375 / 345",
          backgroundColor,
          cursor:
            insight?.Slug || insight?.Link_zur_Website
              ? "pointer"
              : "default",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
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
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        )}

        {/* LOGO */}
        {logoUrl && (
          <div
            className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 px-4"
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
      </article>
    </div>
  );
};