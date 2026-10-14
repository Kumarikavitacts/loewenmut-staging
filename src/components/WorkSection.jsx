"use client";

import React, { useEffect, useState } from "react";
import { getGermanyTime, getIndiaTime } from "@/helper/Timer";
import { useSelector } from "react-redux";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

function WorkSection() {
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
    setMessage((prev) =>
      prev.trim().toLowerCase() === item.toLowerCase() ? "" : item
    );
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setMessage("");
  };

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
    <div className="pt_3 bg_theme_work_station" data-aos="zoom-in">
      <div className="work-section">
        {/* =========================
            Floating Cards
        ========================= */}
        {cards.map((card) => {
          const isVisible = !hasMatch || matchedCard.title === card.title;

          return (
            <div
              key={card.id || card.number}
              className={`work-info-card ${card.className}`}
              style={{ display: isVisible ? "" : "none" }}
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