import React, { useEffect, useRef } from "react";
import $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Slider data
const services = [
  {
    id: "01/04",
    title: "Marke & Kommunikation",
    description: "Marken, die klar positionieren und verbinden",
    tags: [
      "Strategie",
      "Positionierung",
      "Markenbildung",
      "Corporate Design",
      "Inhalte",
      "Kampagnen",
    ],
  },
  {
    id: "02/04",
    title: "Digitale Produkte",
    description: "Nutzerzentrierte Websites und Plattformen mit Wirkung.",
    tags: [
      "Websites",
      "Webanwendungen",
      "Plattformen",
      "UX/UI",
      "Benutzeroberflächen",
      "Online-Shops",
    ],
  },
  {
    id: "03/04",
    title: "Sichtbarkeit & Wachstum",
    description:
      "Mehr Sichtbarkeit, mehr Relevanz, mehr qualifizierte Anfragen.",
    tags: [
      "SEO",
      "Webentwicklung",
      "App-Entwicklung",
      "SEA",
      "Künstliche Intelligenz",
      "Digital Marketing",
    ],
  },
  {
    id: "04/04",
    title: "Digitale Strategie",
    description: "Strategien für den digitalen Wandel",
    tags: [
      "Digitalisierung",
      "Webentwicklung",
      "App-Entwicklung",
      "Datenanalyse",
      "Künstliche Intelligenz",
      "Digital Marketing",
    ],
  },
];

const LiestungenSlider = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    let mounted = true;
    let resizeTimer;
    const initializeSlider = async () => {
      window.jQuery = $;
      window.$ = $;
      await import("owl.carousel");
      if (!mounted || !sliderRef.current) return;
      const slider = $(sliderRef.current);
      if (typeof $.fn.owlCarousel !== "function") {
        console.error("Owl Carousel was not attached to jQuery");
        return;
      }

      // Owl Carousel
      slider.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        smartSpeed: 450,
        dots: false,
        nav: true,
        navText: [
          '<img src="/images/prev-arrow.svg" alt="Previous" />',
          '<img src="/images/next-arrow.svg" alt="Next" />',
        ],
        responsive: {
          0: {
            items: 1,
          },
          460: {
            items: 1,
          },
          768: {
            items: 1,
          },
          900: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });

      // Equal height
      const equalHeight = () => {
        slider.find(".item h3").css("height", "auto");
        slider.find(".item p").css("height", "auto");
        slider.find(".item .item-tags").css("height", "auto");

        let maxH3Height = 0;
        slider.find(".item h3").each(function () {
          maxH3Height = Math.max(maxH3Height, $(this).outerHeight());
        });
        slider.find(".item h3").height(maxH3Height);

        let maxPHeight = 0;
        slider.find(".item p").each(function () {
          maxPHeight = Math.max(maxPHeight, $(this).outerHeight());
        });
        slider.find(".item p").height(maxPHeight);

        let maxTagHeight = 0;
        slider.find(".item-tags").each(function () {
          maxTagHeight = Math.max(maxTagHeight, $(this).outerHeight());
        });
        slider.find(".item-tags").height(maxTagHeight);
      };

      setTimeout(() => {
        if (mounted) {
          equalHeight();
        }
      }, 100);

      $(window).on("resize.serviceSlider", function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          equalHeight();
        }, 150);
      });
    };

    initializeSlider();

    return () => {
      mounted = false;
      clearTimeout(resizeTimer);
      $(window).off("resize.serviceSlider");
      if (sliderRef.current) {
        const slider = $(sliderRef.current);
        if (slider.hasClass("owl-loaded")) {
          slider.trigger("destroy.owl.carousel");
        }
      }
    };
  }, []);

return (
    <div className="service-slider-row">
      <div className="service-slider">
        <div ref={sliderRef} className="owl-carousel owl-theme">
          {services.map((service) => (
            <div className="item" key={service.id}>
              <div className="item-count">{service.id}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <hr />
              <div className="item-tags">
                {service.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiestungenSlider;