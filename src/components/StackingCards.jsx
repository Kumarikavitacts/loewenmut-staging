import React, { useEffect, useRef } from "react";

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
  const cardRefs = useRef([]);

  useEffect(() => {
    let ticking = false;

    const updateCards = () => {
      const isMobile = window.innerWidth <= 767;
      const cardsEls = cardRefs.current.filter(Boolean);

      cardsEls.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const vh = window.innerHeight;

        // Animation window – tuned to look like MDNT
        // Starts when card is near bottom of viewport
        // Finishes when card is nicely centered
        const start = vh * 0.92;
        const end = vh * 0.28;

        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));

        // Smooth ease-out (feels more natural than smoothstep here)
        const eased = 1 - Math.pow(1 - progress, 2.4);

        // Values matching the strong perspective in the screenshots
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

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateCards();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="stacking-card-wrapper">
      {cards.map((card, index) => (
        <div
          key={card.number}
          ref={(el) => (cardRefs.current[index] = el)}
          className="stacking-card"
          style={{ "--i": index }}
        >
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