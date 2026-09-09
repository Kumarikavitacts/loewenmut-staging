import React, { useEffect, useRef } from "react";
import $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";

// Slider data
const services = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
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
    id: "04",
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

const ServiceSlider = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate()
  const handleLeistungenClick = (id) => {
    navigate(`/leistungen/${id}`)
    console.log(id)
  }
  useEffect(() => {
    let mounted = true;
    let resizeTimer;

    const initializeSlider = async () => {
      // Make jQuery globally available
      window.jQuery = $;
      window.$ = $;

      // Load Owl Carousel after jQuery
      await import("owl.carousel");

      if (!mounted || !sliderRef.current) return;

      const slider = $(sliderRef.current);

      if (typeof $.fn.owlCarousel !== "function") {
        console.error("Owl Carousel was not attached to jQuery");
        return;
      }

      // Initialize Owl Carousel
      slider.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        dots: false,
        nav: true,
        navText: [
          '<img src="/images/prev-arrow.svg" alt="Previous" />',
          '<img src="/images/next-arrow.svg" alt="Next" />'
        ],

        responsive: {
          0: {
            items: 1,
          },
          460: {
            items: 1,
          },
          768: {
            items: 2,
          },
          900: {
            items: 2,
          },
          1200: {
            items: 2,
          },
        },
      });

      // Equal height function
      const equalHeight = () => {
        // Reset heights
        slider.find(".item h3").css("height", "auto");
        slider.find(".item p").css("height", "auto");
        slider.find(".item .item-tags").css("height", "auto");

        // Equal H3 height
        let maxH3Height = 0;

        slider.find(".item h3").each(function () {
          const height = $(this).outerHeight();

          if (height > maxH3Height) {
            maxH3Height = height;
          }
        });

        slider.find(".item h3").height(maxH3Height);

        // Equal P height
        let maxPHeight = 0;

        slider.find(".item p").each(function () {
          const height = $(this).outerHeight();

          if (height > maxPHeight) {
            maxPHeight = height;
          }
        });

        slider.find(".item p").height(maxPHeight);

        // Equal Tags height
        let maxTagHeight = 0;

        slider.find(".item .item-tags").each(function () {
          const height = $(this).outerHeight();

          if (height > maxTagHeight) {
            maxTagHeight = height;
          }
        });

        slider.find(".item .item-tags").height(maxTagHeight);
      };

      // Run after Owl initialization
      setTimeout(() => {
        if (mounted) {
          equalHeight();
        }
      }, 100);

      // Recalculate on resize
      $(window).on("resize.serviceSlider", function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          equalHeight();
        }, 150);
      });
    };

    initializeSlider();

    // Cleanup
    return () => {
      mounted = false;

      $(window).off("resize.serviceSlider");

      clearTimeout(resizeTimer);

      if (sliderRef.current) {
        const slider = $(sliderRef.current);

        if (slider.hasClass("owl-loaded")) {
          slider.trigger("destroy.owl.carousel");
        }
      }
    };
  }, []);

  // Previous slide
  const prevSlide = () => {
    if (sliderRef.current) {
      $(sliderRef.current).trigger("prev.owl.carousel");
    }
  };

  // Next slide
  const nextSlide = () => {
    if (sliderRef.current) {
      $(sliderRef.current).trigger("next.owl.carousel");
    }
  };

  return (
    <div className="row service-slider-row">
      {/* Left Content */}
      <div className="col-12 col-lg-4 content-col align-self-end mt-4">
        <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat</p>
        <div className="slider-buttons d-none d-lg-block">
          <button type="button" className="btn-previous" onClick={prevSlide}>
            <img src="/images/prev-arrow.svg" alt="Previous" />
          </button>
          <button type="button" className="btn-next" onClick={nextSlide}>
            <img src="/images/next-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
      {/* Slider */}
      <div className="col-12 col-lg-7 ms-auto slider-col mt-4">
        <div className="service-slider">
          <div ref={sliderRef} className="owl-carousel owl-theme">
            {services.map((service) => (
              <div className="item" key={service.id}>
                <div onClick={()=>handleLeistungenClick(service.id)}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;