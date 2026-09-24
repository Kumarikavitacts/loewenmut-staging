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

  const handleLeistungenClick = (slug) => {
    if (!slug) return;
    router.push(`/leistungen/${slug}`);
  };

  useEffect(() => {
    let mounted = true;

    const fetchServices = async () => {
      try {
        const result =
          await homepageApiStructure.getLeistungens();

        if (!mounted) return;

        const mapped = (result?.data || []).map((item) => ({
          id: item.documentId || item.id,
          slug: item.Slug,
          displayId: String(item.id).padStart(2, "0"),
          title: item.Titel,
          description: item.Text,
          tags: (item.tag || []).map((tag) => ({
            id: tag.documentId || tag.id,
            title: tag.Titel,
          })),
        }));

        setServices(mapped);
      } catch (err) {
        console.error("Failed to fetch services:", err);

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

  useEffect(() => {
    if (loading || error || services.length === 0) {
      return;
    }

    let mounted = true;

    const initializeSlider = async () => {
      window.jQuery = $;
      window.$ = $;

      await import("owl.carousel");

      if (!mounted || !sliderRef.current) {
        return;
      }

      const slider = $(sliderRef.current);

      if (typeof $.fn.owlCarousel !== "function") {
        console.error(
          "Owl Carousel was not attached to jQuery"
        );
        return;
      }

      if (slider.hasClass("owl-loaded")) {
        slider.trigger("destroy.owl.carousel");
        slider.removeClass("owl-loaded");
      }

      slider.off("initialized.owl.carousel");

      slider.on(
        "initialized.owl.carousel",
        () => {
          requestAnimationFrame(() => {
            AOS.refreshHard();
          });
        }
      );

      slider.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 400,
        dots: false,
        nav: true,

        // Important: prevents Owl from changing height
        // based on the active slide.
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

      // Calculate tallest card and apply its height
      // to every card.
      requestAnimationFrame(() => {
        if (!mounted || !sliderRef.current) {
          return;
        }

        const cards = slider.find(".service-card");

        let maxHeight = 0;

        cards.css("height", "auto");

        cards.each(function () {
          const height = $(this).outerHeight();

          if (height > maxHeight) {
            maxHeight = height;
          }
        });

        if (maxHeight > 0) {
          cards.css("height", `${maxHeight}px`);
        }
      });
    };

    initializeSlider();

    return () => {
      mounted = false;

      if (sliderRef.current) {
        const slider = $(sliderRef.current);

        slider.off("initialized.owl.carousel");

        if (slider.hasClass("owl-loaded")) {
          slider.trigger("destroy.owl.carousel");
        }
      }
    };
  }, [loading, error, services]);

  const prevSlide = () => {
    if (sliderRef.current) {
      $(sliderRef.current).trigger(
        "prev.owl.carousel"
      );
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
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
      {/* Left Content */}
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

      {/* Slider */}
      <div className="col-12 col-lg-7 ms-auto slider-col mt-4">
        <div className="service-slider">
          {loading && <ServiceCardsSkeleton count={3} />}

          {error && (
            <p>
              Leistungen konnten nicht geladen
              werden.
            </p>
          )}

          {!loading &&
            !error &&
            services.length === 0 && (
              <p>Keine Leistungen gefunden.</p>
            )}

          {!loading &&
            !error &&
            services.length > 0 && (
              <div
                ref={sliderRef}
                className="owl-carousel owl-theme service-owl-carousel"
              >
                {services.slice(0,4).map((service, index) => (
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
                    >
                      <div className="item-count">
                        {` 0${index + 1}/0${services?.length} `}
                      </div>

                      <h3>{service.title}</h3>

                      <p>{service.description}</p>

                      <hr />

                      <div className="item-tags">
                        {service.tags.map((tag) => (
                          <span key={tag.id}>
                            {tag.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;