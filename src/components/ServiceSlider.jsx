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
  let equalHeightTimer = null;

  const initializeSlider = async () => {
    // -----------------------------------
    // Make jQuery globally available
    // -----------------------------------

    window.jQuery = $;
    window.$ = $;

    // Load Owl Carousel after jQuery
    await import("owl.carousel");

    if (!mounted || !sliderRef.current) return;

    const slider = $(sliderRef.current);

    // -----------------------------------
    // Check Owl Carousel
    // -----------------------------------

    if (typeof $.fn.owlCarousel !== "function") {
      console.error("Owl Carousel was not attached to jQuery");
      return;
    }

    // -----------------------------------
    // EQUAL HEIGHT FUNCTION
    // -----------------------------------

    const equalHeight = () => {
      if (!mounted || !sliderRef.current) return;

      // -----------------------------------
      // IMPORTANT:
      // Only ORIGINAL items are used to
      // calculate the maximum height.
      // -----------------------------------

      const $originalItems = slider.find(
        ".owl-item:not(.cloned) .item"
      );

      if (!$originalItems.length) return;

      // -----------------------------------
      // Reset heights on ORIGINAL + CLONED
      // items before measuring
      // -----------------------------------

      slider.find(".owl-item .item h3").css("height", "auto");
      slider.find(".owl-item .item p").css("height", "auto");
      slider
        .find(".owl-item .item .item-tags")
        .css("height", "auto");

      // -----------------------------------
      // Calculate maximum H3 height
      // -----------------------------------

      let maxH3Height = 0;

      $originalItems.find("h3").each(function () {
        const height = $(this).outerHeight();

        if (height > maxH3Height) {
          maxH3Height = height;
        }
      });

      // -----------------------------------
      // Calculate maximum P height
      // -----------------------------------

      let maxPHeight = 0;

      $originalItems.find("p").each(function () {
        const height = $(this).outerHeight();

        if (height > maxPHeight) {
          maxPHeight = height;
        }
      });

      // -----------------------------------
      // Calculate maximum TAGS height
      // -----------------------------------

      let maxTagsHeight = 0;

      $originalItems.find(".item-tags").each(function () {
        const height = $(this).outerHeight();

        if (height > maxTagsHeight) {
          maxTagsHeight = height;
        }
      });

      // -----------------------------------
      // APPLY CALCULATED HEIGHTS
      // TO ORIGINAL + CLONED ITEMS
      // -----------------------------------

      if (maxH3Height > 0) {
        slider
          .find(".owl-item .item h3")
          .height(maxH3Height);
      }

      if (maxPHeight > 0) {
        slider
          .find(".owl-item .item p")
          .height(maxPHeight);
      }

      if (maxTagsHeight > 0) {
        slider
          .find(".owl-item .item .item-tags")
          .height(maxTagsHeight);
      }
    };

    // -----------------------------------
    // DELAYED EQUAL HEIGHT
    // -----------------------------------

    const updateEqualHeight = () => {
      if (!mounted) return;

      // Cancel previous timer
      clearTimeout(equalHeightTimer);

      // Wait for Owl/browser layout calculation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!mounted) return;

          equalHeight();
        });
      });
    };

    // -----------------------------------
    // INITIALIZE OWL
    // -----------------------------------

    slider.owlCarousel({
      loop: true,
      margin: 30,

      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3000,

      smartSpeed: 500,

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
          items: 1.5,
        },

        900: {
          items: 1.5,
        },

        1200: {
          items: 1.5,
        },
      },
    });

    // -----------------------------------
    // INITIAL HEIGHT
    // -----------------------------------

    setTimeout(() => {
      if (mounted) {
        updateEqualHeight();
      }
    }, 100);

    // -----------------------------------
    // OWL RESIZE EVENT
    // -----------------------------------

    slider.on("resized.owl.carousel.equalHeight", () => {
      updateEqualHeight();
    });

    // -----------------------------------
    // OWL REFRESH EVENT
    // -----------------------------------

    slider.on("refreshed.owl.carousel.equalHeight", () => {
      updateEqualHeight();
    });

    // -----------------------------------
    // WINDOW RESIZE
    // -----------------------------------

    $(window).on("resize.serviceSlider", () => {
      clearTimeout(equalHeightTimer);

      equalHeightTimer = setTimeout(() => {
        if (mounted) {
          updateEqualHeight();
        }
      }, 250);
    });

    // -----------------------------------
    // FONTS READY
    // -----------------------------------
    // Useful if custom fonts change the
    // H3/P wrapping after page load.
    // -----------------------------------

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (mounted) {
          updateEqualHeight();
        }
      });
    }

    // -----------------------------------
    // WINDOW LOAD
    // -----------------------------------
    // Useful if images/content affect
    // the final card dimensions.
    // -----------------------------------

    $(window).on("load.serviceSlider", () => {
      updateEqualHeight();
    });
  };

  initializeSlider();

  // -----------------------------------
  // CLEANUP
  // -----------------------------------

  return () => {
    mounted = false;

    clearTimeout(equalHeightTimer);

    // Remove window events
    $(window).off("resize.serviceSlider");
    $(window).off("load.serviceSlider");

    if (sliderRef.current) {
      const slider = $(sliderRef.current);

      // Remove Owl events
      slider.off(".equalHeight");

      // Destroy Owl
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
    <div className="row service-slider-row" data-aos="fade-up" data-aos-delay="200">
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