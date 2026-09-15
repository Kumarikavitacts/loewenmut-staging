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

  const handleSuggestionClick = (item) => {
    setMessage(item);
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
              <img src="/images/mobile-icons.svg" alt="" />
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
                  </button>
                );
              })}
            </div>

            {/* =========================
                Search / Message
            ========================= */}
            <form className="work-search" onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={handleInputChange}
                readOnly={true}
                placeholder="Gib eine Nachricht ein..."
              />

              {message && (
                <span
                  className="cursorPointer d-flex justify-content-center"
                  onClick={handleClear}
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19"
                      cy="19"
                      r="19"
                      fill="var(--bs-themecolor)"
                    />
                    <path
                      d="M25.09 12.3691C24.6474 11.8764 23.9299 11.8764 23.4874 12.3691L19 17.3655L14.5126 12.3692C14.07 11.8764 13.3525 11.8764 12.91 12.3692C12.4674 12.8619 12.4674 13.6608 12.91 14.1536L17.3973 19.1499L12.91 24.1462C12.4674 24.639 12.4674 25.4379 12.91 25.9306C13.3526 26.4234 14.0701 26.4234 14.5126 25.9306L19 20.9343L23.4874 25.9307C23.9299 26.4234 24.6474 26.4234 25.09 25.9307C25.5326 25.4379 25.5325 24.639 25.09 24.1463L20.6026 19.1499L25.09 14.1535C25.5326 13.6608 25.5326 12.8619 25.09 12.3691Z"
                      fill="black"
                    />
                  </svg>
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;