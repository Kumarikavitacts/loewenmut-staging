import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    number: "1",
    title: "Planung",
    description: "Gemeinsam den richtigen Weg definieren",
    text: "Wir analysieren Ihre Anforderungen, verstehen Ihre Ziele und entwickeln eine klare Grundlage für das gesamte Projekt.",
    image: "/images/image-planing.png",
  },
  {
    number: "2",
    title: "Strategie & Ziele",
    description: "Eine klare Strategie für messbare Ergebnisse",
    text: "Wir entwickeln eine individuelle Strategie und definieren konkrete Ziele, damit jede Maßnahme einen klaren Zweck verfolgt.",
    image: "/images/image-strategie.png",
  },
  {
    number: "3",
    title: "Research",
    description: "Verstehen, bevor wir gestalten",
    text: "Wir recherchieren Zielgruppen, Markt und Wettbewerb, um fundierte Entscheidungen zu treffen.",
    image: "/images/image-research.png",
  },
];

const StackingCards = () => {
  return (
    <div className="stacking-card-wrapper">
        {cards.map((card, index) => (
        <div className="stacking-card" key={card.number} style={{ "--i": index }}>
            <div className="stacking-content">
                <span className="card-number">{card.number}</span>
                <h2 className="text-white fs_50 fw-bold mb-0">{card.title}</h2>
                <hr />
                <h3>{card.description}</h3>
                <p>{card.text}</p>
            </div>
            <div className="stacking-image">
                <img src={card.image} alt={card.title} />
            </div>
        </div>
        ))}
    </div>
  );
};

export default StackingCards;