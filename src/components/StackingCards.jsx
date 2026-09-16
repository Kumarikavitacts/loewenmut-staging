"use client";

import React, { useEffect, useRef } from "react";
import { getMediaUrl } from "@/helper/MediaUrl";

const StackingCards = ({ cardsData = [] }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    let ticking = false;

    const updateCards = () => {
      const isMobile = window.innerWidth <= 767;
      const cardsEls = cardRefs.current.filter(Boolean);

      cardsEls.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const vh = window.innerHeight;

        const start = vh * 0.92;
        const end = vh * 0.28;

        let progress = (start - rect.top) / (start - end);

        progress = Math.max(0, Math.min(1, progress));

        const eased = 1 - Math.pow(1 - progress, 2.4);

        const maxRotate = isMobile ? 28 : 42;
        const maxScale = isMobile ? 0.22 : 0.38;
        const maxY = isMobile ? 40 : 70;

        const rotateX = maxRotate * (1 - eased);
        const scale = 1 + maxScale * (1 - eased);
        const translateY = maxY * (1 - eased);

        card.style.transform = `
          translate3d(0, ${translateY}px, 0)
          rotateX(${rotateX}deg)
          scale(${scale})
        `;
      });
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        updateCards();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    updateCards();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cardsData]);

  if (!cardsData?.length) {
    return null;
  }

  return (
    <div className="stacking-card-wrapper">
      {cardsData.map((card, index) => {
        const imageUrl = card?.Bild?.url
          ? getMediaUrl(card.Bild.url)
          : "";

        return (
          <div
            key={card.id || index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="stacking-card"
            style={{
              "--i": index,
            }}
          >
            <div className="stacking-content">

              {/* NUMBER */}
              <span className="card-number">
                {index + 1}
              </span>

              {/* TITLE */}
              <h2 className="text-white fs_50 fw-bold mb-0">
                {card.Titel || ""}
              </h2>

              <hr />

              {/* CONTENT */}
              {card.Inhalt?.map((block, blockIndex) => {
                if (block.type === "heading") {
                  return (
                    <h3 key={blockIndex}>
                      {block.children?.map(
                        (child, childIndex) => (
                          <React.Fragment key={childIndex}>
                            {child.text}
                          </React.Fragment>
                        )
                      )}
                    </h3>
                  );
                }

                if (block.type === "paragraph") {
                  return (
                    <p key={blockIndex}>
                      {block.children?.map(
                        (child, childIndex) => (
                          <React.Fragment key={childIndex}>
                            {child.text}
                          </React.Fragment>
                        )
                      )}
                    </p>
                  );
                }

                return null;
              })}
            </div>

            {/* IMAGE */}
            <div className="stacking-image">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={
                    card?.Bild?.alternativeText ||
                    card?.Titel ||
                    ""
                  }
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StackingCards;