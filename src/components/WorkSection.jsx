import React, { useState } from "react";

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
  "Aenean sollicitudin",
  "Nibh vel velit auctor",
  "nisi elit consequat?",
];

function WorkSection() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Message:", message);
  };

  return (
    
    <div className="pt_3 bg_theme_work_station">
        <div className="work-section">
            {/* Floating Cards */}
            {cards.map((card) => (
                <div key={card.number} className={`work-info-card ${card.className}`}>
                    <span className="work-card-number">{card.number}</span>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                </div>
            ))}
            {/* Mobile */}
            <div className="work-phone">
                {/* Status Bar */}
                <div className="work-status-bar">
                    <span>08:46</span>
                    <div className="work-status-icons"><img src="/images/mobile-icons.svg" /></div>
                </div>
                {/* Content */}
                <div className="work-phone-content">
                    <h3>SO ARBEITEN<br />WIR</h3>
                    <p className="work-intro">Aenean sollicitudin, lorem<br />quis bibendum auctor, nisi elit<br />consequat</p>
                    {/* Suggestions */}
                    <div className="work-suggestions">
                        {suggestions.map((item, index) => (
                        <button key={index} type="button" onClick={() => setMessage(item)}>{item}</button>
                        ))}
                    </div>
                    {/* Search / Message */}
                    <form className="work-search" onSubmit={handleSubmit}>
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Gib eine Nachricht ein..." />
                        {message && (
                            <button type="submit" className="work-submit">↑</button>
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