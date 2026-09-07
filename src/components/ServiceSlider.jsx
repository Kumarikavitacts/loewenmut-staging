import React, { useEffect, useRef } from "react";
import $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ServiceSlider = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    let mounted = true;
    let resizeTimer;
    const initializeSlider = async () => {
      // Make jQuery globally available
      window.jQuery = $;
      window.$ = $;
      // Load Owl after jQuery
      await import("owl.carousel");
      if (!mounted || !sliderRef.current) return;
      const slider = $(sliderRef.current);
      if (typeof $.fn.owlCarousel !== "function") {
        console.error("Owl Carousel was not attached to jQuery");
        return;
      }

      slider.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        dots: false,
        nav: false,
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
            items: 1,
          },
          1200: {
            items: 2,
          },
        },
      });

      /* Equal height function */
      const equalHeight = () => {
        // Reset heights first
        slider.find(".item h3").css("height", "auto");
        slider.find(".item p").css("height", "auto");
        slider.find(".item .item-tags").css("height", "auto");

        /* Equal H3 height*/
        let maxH3Height = 0;
        slider.find(".item h3").each(function () {
          const height = $(this).outerHeight();
          if (height > maxH3Height) {
            maxH3Height = height;
          }
        });
        slider.find(".item h3").height(maxH3Height);

        /*Equal P height*/
        let maxPHeight = 0;
        slider.find(".item p").each(function () {
          const height = $(this).outerHeight();
          if (height > maxPHeight) {
            maxPHeight = height;
          }
        });
        slider.find(".item p").height(maxPHeight);

        /* Equal Tag height*/
        let maxTagHeight = 0;
        slider.find(".item .item-tags").each(function () {
          const height = $(this).outerHeight();
          if (height > maxTagHeight) {
            maxTagHeight = height;
          }
        });
        slider.find(".item .item-tags").height(maxTagHeight);
      };

      /* Run after Owl initialization */
      setTimeout(() => {
        if (mounted) {
          equalHeight();
        }
      }, 100);

      /* Recalculate on resize */
      $(window).on(
        "resize.serviceSlider",
        function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            equalHeight();
          }, 150);
        }
      );

      /* Cleanup */
      return () => {
        $(window).off("resize.serviceSlider");
        clearTimeout(resizeTimer);
      };
    };

    initializeSlider();
    return () => {
      mounted = false;
      $(window).off("resize.serviceSlider");
      if (sliderRef.current) {
        const slider = $(sliderRef.current);
        if (slider.hasClass("owl-loaded")) {
          slider.trigger("destroy.owl.carousel");
        }
      }
    };
  }, []);

  /* Previous */
  const prevSlide = () => {
    if (sliderRef.current) {
      $(sliderRef.current).trigger("prev.owl.carousel");
    }
  };

  /* Next*/
  const nextSlide = () => {
    if (sliderRef.current) {
      $(sliderRef.current).trigger("next.owl.carousel");
    }
  };


  return (
    <div className="row service-slider-row">

      <div className="col-12 col-lg-4 content-col align-self-end mt-4">

        <p>
          Nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat
        </p>

        <div className="slider-buttons">

          <button
            type="button"
            className="btn-previous"
            onClick={prevSlide}
          >
            <img
              src="/images/prev-arrow.svg"
              alt="Previous"
            />
          </button>

          <button
            type="button"
            className="btn-next"
            onClick={nextSlide}
          >
            <img
              src="/images/next-arrow.svg"
              alt="Next"
            />
          </button>

        </div>

      </div>


      <div className="col-12 col-lg-7 ms-auto slider-col mt-4">

        <div className="service-slider">

          <div
            ref={sliderRef}
            className="owl-carousel owl-theme"
          >

            <div className="item">

              <div className="item-count">
                01/04
              </div>

              <h3>
                Marke & Kommunikation
              </h3>

              <p>
                Marken, die kar positionieren und verbinden
              </p>

              <hr />

              <div className="item-tags">
                <span>Strategie</span>
                <span>Positionierung</span>
                <span>Markenbildung</span>
                <span>Corporate Design</span>
                <span>Inhalte</span>
                <span>Kampagnen</span>
              </div>

            </div>


            <div className="item">

              <div className="item-count">
                02/04
              </div>

              <h3>
                Digitale Produkte
              </h3>

              <p>
                Nutzerzentrierte Websites und Plattformen mit Wirkung.
              </p>

              <hr />

              <div className="item-tags">
                <span>Websites</span>
                <span>Webanwendungen</span>
                <span>Plattformen</span>
                <span>UX/UI</span>
                <span>Benutzeroberflächen</span>
                <span>Online-Shops</span>
              </div>

            </div>


            <div className="item">

              <div className="item-count">
                03/04
              </div>

              <h3>
                Sichtbarkeit & Wachstum
              </h3>

              <p>
                Mehr Sichtbarkeit, Mehr Relevanz Mehr qualifizierte Anfragers
              </p>

              <hr />

              <div className="item-tags">
                <span>SEO</span>
                <span>Webentwicklung</span>
                <span>App-Entwicklung</span>
                <span>SEA</span>
                <span>Künstliche Intelligenz</span>
                <span>Digital Marketing</span>
              </div>

            </div>


            <div className="item">

              <div className="item-count">
                04/04
              </div>

              <h3>
                Digitale Strategie
              </h3>

              <p>
                Strategien für den digitalen Wandel
              </p>

              <hr />

              <div className="item-tags">
                <span>Digitalisierung</span>
                <span>Webentwicklung</span>
                <span>App-Entwicklung</span>
                <span>Datenanalyse</span>
                <span>Künstliche Intelligenz</span>
                <span>Digital Marketing</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ServiceSlider;