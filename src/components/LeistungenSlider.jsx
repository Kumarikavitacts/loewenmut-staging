"use client";

import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { useRouter } from "next/navigation";

import { homepageApiStructure } from "@/Apis/HomePage/apis";
import { ServiceCardsSkeleton } from "@/components/Skeleton/ServicesSkeleton";
const LiestungenSlider = () => {
  const sliderRef = useRef(null);
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // =====================================================
  // CLICK -> /leistungen/[slug]
  // =====================================================

  const handleLeistungenClick = (slug) => {
    if (!slug) return;

    router.push(`/leistungen/${slug}`);
  };

  // =====================================================
  // FETCH LEISTUNGEN
  // =====================================================

  useEffect(() => {
    let mounted = true;

    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(false);

        const result =
          await homepageApiStructure.getLeistungens();

        if (!mounted) return;

        const mapped = (result?.data || []).map(
          (item) => ({
            id: item.documentId || item.id,

            // Important for detail page URL
            slug: item.Slug,

            // 01, 02, 03...
            displayId: String(item.id).padStart(2, "0"),

            title: item.Titel,

            description: item.Text,

            tags: (item.tag || []).map((tag) => ({
              id: tag.documentId || tag.id,
              title: tag.Titel,
            })),
          })
        );

        setServices(mapped);
      } catch (err) {
        console.error(
          "Failed to fetch Leistungen:",
          err
        );

        if (mounted) {
          setError(true);
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

  // =====================================================
  // OWL CAROUSEL
  // =====================================================

  useEffect(() => {
    if (
      loading ||
      error ||
      services.length === 0
    ) {
      return;
    }

    let mounted = true;
    let resizeTimer;

    const initializeSlider = async () => {
      window.jQuery = $;
      window.$ = $;

      await import("owl.carousel");

      if (
        !mounted ||
        !sliderRef.current
      ) {
        return;
      }

      const slider = $(sliderRef.current);

      if (
        typeof $.fn.owlCarousel !==
        "function"
      ) {
        console.error(
          "Owl Carousel was not attached to jQuery"
        );
        return;
      }

      // Prevent duplicate initialization
      if (slider.hasClass("owl-loaded")) {
        slider.trigger(
          "destroy.owl.carousel"
        );

        slider.removeClass("owl-loaded");
      }

      // =================================================
      // OWL
      // =================================================

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
            items: 2,
          },

          900: {
            items: 2,
          },

          1200: {
            items: 3,
          },
        },
      });

      // =================================================
      // EQUAL HEIGHT
      // =================================================

      const equalHeight = () => {
        if (
          !mounted ||
          !sliderRef.current
        ) {
          return;
        }

        const $originalItems =
          slider.find(
            ".owl-item:not(.cloned) .item"
          );

        if (!$originalItems.length) {
          return;
        }

        // Reset heights
        slider
          .find(".owl-item .item h3")
          .css("height", "auto");

        slider
          .find(".owl-item .item p")
          .css("height", "auto");

        slider
          .find(".owl-item .item .item-tags")
          .css("height", "auto");

        // ---------------------------------------------
        // H3
        // ---------------------------------------------

        let maxH3Height = 0;

        $originalItems
          .find("h3")
          .each(function () {
            const height =
              $(this).outerHeight();

            if (height > maxH3Height) {
              maxH3Height = height;
            }
          });

        // ---------------------------------------------
        // Paragraph
        // ---------------------------------------------

        let maxPHeight = 0;

        $originalItems
          .find("p")
          .each(function () {
            const height =
              $(this).outerHeight();

            if (height > maxPHeight) {
              maxPHeight = height;
            }
          });

        // ---------------------------------------------
        // Tags
        // ---------------------------------------------

        let maxTagHeight = 0;

        $originalItems
          .find(".item-tags")
          .each(function () {
            const height =
              $(this).outerHeight();

            if (height > maxTagHeight) {
              maxTagHeight = height;
            }
          });

        // ---------------------------------------------
        // Apply heights
        // ---------------------------------------------

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

        if (maxTagHeight > 0) {
          slider
            .find(
              ".owl-item .item .item-tags"
            )
            .height(maxTagHeight);
        }
      };

      // =================================================
      // UPDATE EQUAL HEIGHT
      // =================================================

      const updateEqualHeight = () => {
        if (!mounted) return;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (mounted) {
              equalHeight();
            }
          });
        });
      };

      // Initial calculation
      setTimeout(() => {
        updateEqualHeight();
      }, 100);

      // Owl resize
      slider.on(
        "resized.owl.carousel",
        () => {
          updateEqualHeight();
        }
      );

      // Owl refresh
      slider.on(
        "refreshed.owl.carousel",
        () => {
          updateEqualHeight();
        }
      );

      // Browser resize
      $(window).on(
        "resize.leistungenSlider",
        () => {
          clearTimeout(resizeTimer);

          resizeTimer = setTimeout(() => {
            updateEqualHeight();
          }, 200);
        }
      );
    };

    initializeSlider();

    // =================================================
    // CLEANUP
    // =================================================

    return () => {
      mounted = false;

      clearTimeout(resizeTimer);

      $(window).off(
        "resize.leistungenSlider"
      );

      if (sliderRef.current) {
        const slider = $(sliderRef.current);

        slider.off(
          "resized.owl.carousel"
        );

        slider.off(
          "refreshed.owl.carousel"
        );

        if (
          slider.hasClass("owl-loaded")
        ) {
          slider.trigger(
            "destroy.owl.carousel"
          );
        }
      }
    };
  }, [loading, error, services]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="service-slider-row">
      <ServiceCardsSkeleton count={4} />
    </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <div className="service-slider-row">
        <p>
          Leistungen konnten nicht geladen
          werden.
        </p>
      </div>
    );
  }

  // =====================================================
  // EMPTY
  // =====================================================

  if (!services.length) {
    return (
      <div className="service-slider-row">
        <p>
          Keine Leistungen gefunden.
        </p>
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="service-slider-row">
      <div className="service-slider">
        <div
          ref={sliderRef}
          className="owl-carousel owl-theme"
        >
          {services.map(
            (service, index) => (
              <div
                className="item"
                key={service.id}
              >
                <div
                  className="service-card"
                  onClick={() =>
                    handleLeistungenClick(
                      service.slug
                    )
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {/* NUMBER */}

                  <div className="item-count">
                    {`0${index + 1}/0${services?.length}`}
                  </div>

                  {/* TITLE */}

                  <h3>
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p>
                    {service.description}
                  </p>

                  <hr />

                  {/* TAGS */}

                  <div className="item-tags">
                    {service.tags.map(
                      (tag) => (
                        <span
                          key={tag.id}
                        >
                          {tag.title}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LiestungenSlider;