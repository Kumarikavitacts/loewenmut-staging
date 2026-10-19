"use client";

import React, { useEffect, useRef, useState } from "react";
import { getGermanyTime, getIndiaTime } from "@/helper/Timer";
import { useSelector } from "react-redux";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

/*
 * Measures how far each card has to fall so that it starts just above the
 * top edge of the section and lands on its own position. The result is passed
 * to the CSS animation as --drop.
 */
function measureCardDrops(section) {
  const cardEls = Array.from(section.querySelectorAll(".work-info-card"));
  // Cards hidden by a suggestion filter (display: none) cannot be measured.
  if (cardEls.some((el) => el.offsetParent === null)) return;
  cardEls.forEach((el) => {
    el.style.setProperty("--drop", `${el.offsetTop + el.offsetHeight + 60}px`);
  });
}

function WorkSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [message, setMessage] = useState("");
  const [germanyTime, setGermanyTime] = useState(""); // ← fixed
  const [indiaTime, setIndiaTime] = useState("");

  const WorkData = useSelector((state) => state.home.data?.workMobile);


  const title = WorkData?.Titel;
  const description = WorkData?.Text;

  // Dynamic cards from API
  const cards =
    WorkData?.Prozess?.map((item, index) => ({
      number: index + 1,
      title: item.Titel,
      text: item.Text,
      className: `work-card-${index + 1}`,
      id: item.id,
    })) || [];

  // Dynamic suggestions from API
  const suggestions = cards.map((card) => card.title);

  /*
   * Find the card based on the current input.
   */
  const matchedCard = cards.find((card) => {
    const input = message.trim().toLowerCase();
    if (!input) return false;
    return card.title.toLowerCase().startsWith(input);
  });

  const hasMatch = Boolean(message.trim() && matchedCard);

  // Click a suggestion to select it; click the active one again to deselect.

const handleSuggestionClick = (item) => {
  const isDeselecting =
    message.trim().toLowerCase() === item.toLowerCase();

  setMessage(isDeselecting ? "" : item);

  // Scroll only on mobile devices
  if (window.innerWidth <= 767 && !isDeselecting) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const card = Array.from(
          section.querySelectorAll(".work-info-card")
        ).find(
          (el) =>
            el.querySelector("h4")?.textContent
              .trim()
              .toLowerCase() === item.trim().toLowerCase()
        );

        if (card) {
          card.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    });
  }
};


  // Play the "cards drop in" animation every time the section scrolls into
  // view, and reset it when the section leaves the screen so it can replay.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          measureCardDrops(section);
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Keep the drop distances correct when the cards load or the screen resizes.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const measure = () => measureCardDrops(section);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cards.length]);

  useEffect(() => {
    setGermanyTime(getGermanyTime());
    setIndiaTime(getIndiaTime());
    const timer = setInterval(() => {
      setGermanyTime(getGermanyTime());
      setIndiaTime(getIndiaTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt_2 bg_theme_work_station">
      <div
        ref={sectionRef}
        className={`work-section${inView ? " is-inview" : ""}`}
      >
        {/* =========================
            Floating Cards
        ========================= */}
        {cards.map((card, index) => {
          const isVisible = !hasMatch || matchedCard.title === card.title;

          return (
            <div
              key={card.id || card.number}
              className={`work-info-card ${card.className}`}
              style={{ display: isVisible ? "" : "none", "--i": index }}
            >
              <span className="work-card-number">{card.number}</span>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          );
        })}

        <div className="work-phone">
          {/* Status Bar */}
          <div className="work-status-bar">
            <span>{germanyTime}</span>
            <div className="work-status-icons">
              <img src="/images/mobile-icons.svg" alt="mobile icons" />
            </div>
          </div>

          {/* Content */}
          <div className="work-phone-content">
            <h3>{renderHtmlText(title)}</h3>
            <p className="work-intro">{renderHtmlText(description)}</p>

            {/* =========================
                Suggestions
            ========================= */}
            <div className="work-suggestions">
              {suggestions.map((item, index) => {
                const isActive =
                  hasMatch &&
                  matchedCard.title.toLowerCase() === item.toLowerCase();

                return (
                  <button
                    key={index}
                    type="button"
                    className={isActive ? "active" : ""}
                    onClick={() => handleSuggestionClick(item)}
                    style={{
                      backgroundColor: isActive
                        ? "var(--bs-themecolor)"
                        : undefined,
                    }}
                  >
                    {item}
                    {isActive && (
                      <span className="work-suggestion-close" aria-label="Zurücksetzen">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L7 7M7 1L1 7"
                            stroke="#000"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;