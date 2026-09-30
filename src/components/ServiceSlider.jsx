"use client";

import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useRouter } from "next/navigation";
import { homepageApiStructure } from "@/Apis/HomePage/apis";
import AOS from "aos";
import { ServiceCardsSkeleton } from "@/components/Skeleton/ServicesSkeleton";

const ServiceSlider = ({ paragraph }) => {
  const sliderRef = useRef(null);
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ------------------------------------
  // Navigate to service detail page
  // ------------------------------------
  const handleLeistungenClick = (slug) => {
    if (!slug) return;

    router.push(`/leistungen/${slug}`);
  };

  // ------------------------------------
  // Fetch services
  // ------------------------------------
  useEffect(() => {
    let mounted = true;

    const fetchServices = async () => {
      try {
        const result =
          await homepageApiStructure.getLeistungens();

        if (!mounted) return;

        const mapped = (result?.data || []).map(
          (item) => ({
            id: item.documentId || item.id,
            slug: item.Slug,
            displayId: String(item.id).padStart(
              2,
              "0"
            ),
            title: item.Titel,
            description: item.Text,

            tags: (item.tag || []).map(
              (tag) => ({
                id:
                  tag.documentId ||
                  tag.id,
                title: tag.Titel,
              })
            ),
          })
        );

        setServices(mapped);
      } catch (err) {
        console.error(
          "Failed to fetch services:",
          err
        );

        if (mounted) {
          setError(err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchServices();

    return () => {
      mounted = false;
    };
  }, []);

  // ------------------------------------
  // Initialize Owl Carousel
  // ------------------------------------
  useEffect(() => {
    if (
      loading ||
      error ||
      services.length === 0
    ) {
      return;
    }

    let mounted = true;
    let cleanupHeightHandler = null;

    const initializeSlider = async () => {
      // Make jQuery available globally
      window.jQuery = $;
      window.$ = $;

      // Load Owl Carousel
      await import("owl.carousel");

      if (
        !mounted ||
        !sliderRef.current
      ) {
        return;
      }

      const slider = $(sliderRef.current);

      // Check Owl Carousel
      if (
        typeof $.fn.owlCarousel !==
        "function"
      ) {
        console.error(
          "Owl Carousel was not attached to jQuery"
        );

        return;
      }

      // Destroy previous instance if exists
      if (
        slider.hasClass("owl-loaded")
      ) {
        slider.trigger(
          "destroy.owl.carousel"
        );

        slider.removeClass(
          "owl-loaded"
        );
      }

      // Remove previous event
      slider.off(
        "initialized.owl.carousel"
      );

      // ------------------------------------
      // Owl initialized event
      // ------------------------------------
      slider.on(
        "initialized.owl.carousel",
        () => {
          requestAnimationFrame(() => {
            AOS.refreshHard();
          });
        }
      );

      // ------------------------------------
      // Initialize Owl Carousel
      // ------------------------------------
      slider.owlCarousel({
        loop: true,
        margin: 30,

        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,

        smartSpeed: 400,

        dots: false,
        nav: true,

        // Keep this false.
        // We handle card heights ourselves.
        autoHeight: false,

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
            items: 1.6,
          },

          1200: {
            items: 1.7,
          },
        },
      });

      // ------------------------------------
      // Set card height
      // ------------------------------------
      const setCardHeight = () => {
        if (
          !sliderRef.current
        ) {
          return;
        }

        const cards = $(
          sliderRef.current
        ).find(".service-card");

        if (!cards.length) {
          return;
        }

        // --------------------------------
        // IMPORTANT:
        // Always remove old inline height
        // first.
        // --------------------------------
        cards.css(
          "height",
          "auto"
        );

        // --------------------------------
        // MOBILE
        // Let content decide height.
        // --------------------------------
        if (
          window.innerWidth < 768
        ) {
          return;
        }

        // --------------------------------
        // DESKTOP / TABLET
        // Make all cards equal height.
        // --------------------------------
        let maxHeight = 0;

        cards.each(function () {
          const height =
            $(this).outerHeight();

          if (
            height > maxHeight
          ) {
            maxHeight = height;
          }
        });

        if (
          maxHeight > 0
        ) {
          cards.css(
            "height",
            `${maxHeight}px`
          );
        }
      };

      // ------------------------------------
      // Wait for browser/Owl rendering
      // ------------------------------------
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!mounted) return;

          setCardHeight();
        });
      });

      // ------------------------------------
      // Recalculate when window resizes
      // ------------------------------------
      window.addEventListener(
        "resize",
        setCardHeight
      );

      // Save cleanup function
      cleanupHeightHandler = () => {
        window.removeEventListener(
          "resize",
          setCardHeight
        );
      };
    };

    initializeSlider();

    // ------------------------------------
    // Cleanup
    // ------------------------------------
    return () => {
      mounted = false;

      if (
        cleanupHeightHandler
      ) {
        cleanupHeightHandler();
      }

      if (
        sliderRef.current
      ) {
        const slider = $(
          sliderRef.current
        );

        slider.off(
          "initialized.owl.carousel"
        );

        if (
          slider.hasClass(
            "owl-loaded"
          )
        ) {
          slider.trigger(
            "destroy.owl.carousel"
          );
        }
      }
    };
  }, [
    loading,
    error,
    services,
  ]);

  // ------------------------------------
  // Previous slide
  // ------------------------------------
  const prevSlide = () => {
    if (
      sliderRef.current
    ) {
      $(sliderRef.current).trigger(
        "prev.owl.carousel"
      );
    }
  };

  // ------------------------------------
  // Next slide
  // ------------------------------------
  const nextSlide = () => {
    if (
      sliderRef.current
    ) {
      $(sliderRef.current).trigger(
        "next.owl.carousel"
      );
    }
  };

  return (
    <div
      className="row service-slider-row"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* ==================================
          Left Content
      ================================== */}
      <div className="col-12 col-lg-4 content-col align-self-end mt-4">
        <p>{paragraph}</p>

        <div className="slider-buttons d-none d-lg-block">
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

      {/* ==================================
          Slider
      ================================== */}
      <div className="col-12 col-lg-7 ms-auto slider-col mt-4">
        <div className="service-slider">
          {/* Loading */}
          {loading && (
            <ServiceCardsSkeleton count={3} />
          )}

          {/* Error */}
          {error && (
            <p>
              Leistungen konnten nicht
              geladen werden.
            </p>
          )}

          {/* No services */}
          {!loading &&
            !error &&
            services.length === 0 && (
              <p>
                Keine Leistungen gefunden.
              </p>
            )}

          {/* Services */}
          {!loading &&
            !error &&
            services.length > 0 && (
              <div
                ref={sliderRef}
                className="owl-carousel owl-theme service-owl-carousel"
              >
                {services
                  .slice(0, 4)
                  .map(
                    (
                      service,
                      index
                    ) => (
                      <div
                        className="item"
                        key={
                          service.id
                        }
                      >
                        <div
                          className="service-card"
                          onClick={() =>
                            handleLeistungenClick(
                              service.slug
                            )
                          }
                        >
                          {/* Card count */}
                          <div className="item-count">
                            {`0${
                              index +
                              1
                            }/0${
                              services.length
                            }`}
                          </div>

                          {/* Title */}
                          <h3>
                            {
                              service.title
                            }
                          </h3>

                          {/* Description */}
                          <p>
                            {
                              service.description
                            }
                          </p>

                          <hr />

                          {/* Tags */}
                          <div className="item-tags">
                            {service.tags.map(
                              (
                                tag
                              ) => (
                                <span
                                  key={
                                    tag.id
                                  }
                                >
                                  {
                                    tag.title
                                  }
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;