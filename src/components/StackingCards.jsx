"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { getMediaUrl } from "@/helper/MediaUrl";

const renderChildren = (children = []) =>
  children.map((child, i) => (
    <React.Fragment key={i}>{child.text}</React.Fragment>
  ));

const StackingCards = ({ cardsData = [] }) => {
  const cardRefs = useRef([]);
  const tabRefs = useRef([]);
  const tabsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Find which card is currently "visible" (the one crossing ~40% of the viewport)
  useEffect(() => {
    if (!cardsData?.length) return;
    let ticking = false;

    const update = () => {
      const line = window.innerHeight * 0.4;
      let current = 0;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        // last card whose top has passed the reference line wins
        if (rect.top <= line) current = i;
      });

      setActiveIndex(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cardsData]);

  // On mobile the tabs are a horizontal strip: keep the active tab in view
  useEffect(() => {
    const tab = tabRefs.current[activeIndex];
    const strip = tabsRef.current;
    if (!tab || !strip) return;
    if (strip.scrollWidth <= strip.clientWidth) return;

    strip.scrollTo({
      left: tab.offsetLeft - strip.clientWidth / 2 + tab.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const scrollToCard = useCallback((index) => {
    const cards = cardRefs.current;
    const card = cards[index];
    const wrapper = card?.parentElement;
    if (!card || !wrapper) return;

    // Cards are position: sticky, so a card that is already pinned reports its
    // PINNED position from getBoundingClientRect(), not its real place in the
    // page. We therefore calculate the real (un-pinned) top ourselves:
    // wrapper top + height of all previous cards + the gaps between them.
    const wrapperStyle = window.getComputedStyle(wrapper);
    const gap = parseFloat(wrapperStyle.rowGap) || 0;
    const padTop = parseFloat(wrapperStyle.paddingTop) || 0;
    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;

    let naturalTop = wrapperTop + padTop;
    for (let i = 0; i < index; i++) {
      naturalTop += (cards[i]?.offsetHeight || 0) + gap;
    }

    // scroll so the card lands exactly on its own sticky position
    const stickyTop = parseFloat(window.getComputedStyle(card).top) || 0;

    window.scrollTo({
      top: Math.max(0, naturalTop - stickyTop),
      behavior: "smooth",
    });
  }, []);

  if (!cardsData?.length) return null;

  return (
    <div className="stacking-layout ">
      {/* SIDEBAR */}
      <div className="stacking-sidebar">
        <div className="stacking-tabs" ref={tabsRef} role="tablist">
          {cardsData.map((card, index) => (
            <button
              key={card.id || index}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className={`stacking-tab ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => scrollToCard(index)}
            >
              {card.Titel || ""}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="stacking-card-wrapper">
        {cardsData.map((card, index) => {
          const imageUrl = card?.Bild?.url ? getMediaUrl(card.Bild.url) : "";

          return (
            <div
              key={card.id || index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`stacking-card ${
                activeIndex === index ? "is-active" : ""
              }`}
              style={{ "--i": index }}
            >
              <div className="stacking-content">
                <span className="card-number">{index + 1}</span>

                <h3 className="stacking-title mb-0">
                  {card.Titel || ""}
                </h3>

                <hr />

                {card.Inhalt?.map((block, blockIndex) => {
                  if (block.type === "heading") {
                    return (
                      <h4 key={blockIndex}>{renderChildren(block.children)}</h4>
                    );
                  }
                  if (block.type === "paragraph") {
                    return (
                      <p key={blockIndex}>{renderChildren(block.children)}</p>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="stacking-image">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={card?.Bild?.alternativeText || card?.Titel || ""}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackingCards;
