import React, { useEffect, useState } from "react";
import { getGermanyTime, getIndiaTime } from "../helper/Timer";

const cards = [
  {
    number: 1,
    title: "Verstehen",
    text: "Wir hören zu, stellen die richtigen Fragen und verstehen Ihr Geschäft.",
    className: "work-card-1",
  },
  {
    number: 2,
    title: "Schärfen",
    text: "Wir schärfen die Ziele, priorisieren und definieren die Strategie.",
    className: "work-card-2",
  },
  {
    number: 3,
    title: "Gestalten",
    text: "Wir gestalten Marken, Erlebnisse und Interfaces, die wirken.",
    className: "work-card-3",
  },
  {
    number: 4,
    title: "Entwickeln",
    text: "Wir entwickeln performant, sauber und zukunftssicher.",
    className: "work-card-4",
  },
  {
    number: 5,
    title: "Aktivieren",
    text: "Wir bringen Ihre Lösung zielgerichtet an den Markt.",
    className: "work-card-5",
  },
  {
    number: 6,
    title: "Weiterdenken",
    text: "Wir messen, optimieren und entwickeln kontinuierlich weiter.",
    className: "work-card-6",
  },
];

const suggestions = [
  "Verstehen",
  "Schärfen",
  "Gestalten",
  "Entwickeln",
  "Aktivieren",
  "Weiterdenken",
];

function WorkSection() {
  const [message, setMessage] = useState("");
  const [germanyTime, setGermanyTime] = useState(getGermanyTime());
  const [indiaTime, setIndiaTime] = useState(getIndiaTime());
  /*
   * Find the card based on the current input.
   *
   * Example:
   * "Ver"       -> Verstehen
   * "Verstehen" -> Verstehen
   * "Gest"      -> Gestalten
   * "Ent"       -> Entwickeln
   */
  const matchedCard = cards.find((card) => {
    const input = message.trim().toLowerCase();

    if (!input) {
      return false;
    }

    return card.title.toLowerCase().startsWith(input);
  });

  /*
   * true only when the input matches a card.
   */
  const hasMatch = Boolean(message.trim() && matchedCard);

  /*
   * Suggestion click
   */
  const handleSuggestionClick = (item) => {
    setMessage(item);
  };

  /*
   * Input change
   */
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  /*
   * Form submit
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Message:", message);
  };
  const handleClear =()=>{
    console.log("clear button trigger")
    setMessage("")
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setGermanyTime(getGermanyTime());
      setIndiaTime(getIndiaTime());
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
   
  return (
    <div className="pt_3 bg_theme_work_station">
      <div className="work-section">

        {/* =========================
            Floating Cards
        ========================= */}
        {cards.map((card) => {
          /*
           * No input / no matching card:
           * show ALL cards.
           *
           * Matching input:
           * show ONLY matching card.
           */
          const isVisible =
            !hasMatch || matchedCard.title === card.title;

          return (
            <div
              key={card.number}
              className={`work-info-card ${card.className}`}
              style={{
                display: isVisible ? "" : "none",
              }}
            >
              <span className="work-card-number">
                {card.number}
              </span>

              <h4>{card.title}</h4>

              <p>{card.text}</p>
            </div>
          );
        })}

        {/* =========================
            Mobile
        ========================= */}
        <div className="work-phone">

          {/* Status Bar */}
          <div className="work-status-bar">
            <span>{germanyTime}</span>

            <div className="work-status-icons">
              <img
                src="/images/mobile-icons.svg"
                alt=""
              />
            </div>
          </div>

          {/* Content */}
          <div className="work-phone-content">

            <h3>
              SO ARBEITEN
              <br />
              WIR
            </h3>

            <p className="work-intro">
              Aenean sollicitudin, lorem
              <br />
              quis bibendum auctor, nisi elit
              <br />
              consequat
            </p>

            {/* =========================
                Suggestions
            ========================= */}
            <div className="work-suggestions">
              {suggestions.map((item, index) => {

                /*
                 * IMPORTANT:
                 *
                 * The suggestion is active when its title
                 * matches the card that is currently visible.
                 */
                const isActive =
                  hasMatch &&
                  matchedCard.title.toLowerCase() ===
                    item.toLowerCase();

                return (
                  <button
                    key={index}
                    type="button"
                    className={isActive ? "active" : ""}
                    onClick={() =>
                      handleSuggestionClick(item)
                    }
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
            <form
              className="work-search"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                value={message}
                onChange={handleInputChange}
                readOnly={true}
                placeholder="Gib eine Nachricht ein..."
              />

              {message && (
                 <span className="cursorPointer" onClick={handleClear}>
                 <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="var(--bs-themecolor)"/>
<path d="M25.09 12.3691C24.6474 11.8764 23.9299 11.8764 23.4874 12.3691L19 17.3655L14.5126 12.3692C14.07 11.8764 13.3525 11.8764 12.91 12.3692C12.4674 12.8619 12.4674 13.6608 12.91 14.1536L17.3973 19.1499L12.91 24.1462C12.4674 24.639 12.4674 25.4379 12.91 25.9306C13.3526 26.4234 14.0701 26.4234 14.5126 25.9306L19 20.9343L23.4874 25.9307C23.9299 26.4234 24.6474 26.4234 25.09 25.9307C25.5326 25.4379 25.5325 24.639 25.09 24.1463L20.6026 19.1499L25.09 14.1535C25.5326 13.6608 25.5326 12.8619 25.09 12.3691Z" fill="black"/>
</svg>

                 </span>
              )}
            </form>

          </div>

          {/* Home indicator */}
          {/* <div className="work-home-indicator"></div> */}
        </div>
      </div>
    </div>
  );
}

export default WorkSection;