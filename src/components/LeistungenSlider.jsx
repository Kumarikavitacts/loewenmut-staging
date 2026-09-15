"use client";

import React, { useEffect, useRef } from "react";
import $ from "jquery";

import { useRouter } from "next/navigation";

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

const LiestungenSlider = () => {
  const sliderRef = useRef(null);
  const router = useRouter()
  const handleLeistungenClick =(id)=>{
    router.push(`/leistungen/${id}`)

  }
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
  
      // ----------------------------------------
      // Owl Carousel
      // ----------------------------------------
  
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
  
      // ----------------------------------------
      // Equal Height
      // ----------------------------------------
  
      const equalHeight = () => {
        if (!mounted || !sliderRef.current) return;
  
        // IMPORTANT:
        // Calculate only from original items
        const $originalItems = slider.find(
          ".owl-item:not(.cloned) .item"
        );
  
        if (!$originalItems.length) return;
  
        // Reset original + cloned items
        slider.find(".owl-item .item h3").css("height", "auto");
        slider.find(".owl-item .item p").css("height", "auto");
        slider.find(".owl-item .item .item-tags").css("height", "auto");
  
        // ----------------------------------------
        // Calculate max H3 height
        // ----------------------------------------
  
        let maxH3Height = 0;
  
        $originalItems.find("h3").each(function () {
          const height = $(this).outerHeight();
  
          if (height > maxH3Height) {
            maxH3Height = height;
          }
        });
  
        // ----------------------------------------
        // Calculate max paragraph height
        // ----------------------------------------
  
        let maxPHeight = 0;
  
        $originalItems.find("p").each(function () {
          const height = $(this).outerHeight();
  
          if (height > maxPHeight) {
            maxPHeight = height;
          }
        });
  
        // ----------------------------------------
        // Calculate max tags height
        // ----------------------------------------
  
        let maxTagHeight = 0;
  
        $originalItems.find(".item-tags").each(function () {
          const height = $(this).outerHeight();
  
          if (height > maxTagHeight) {
            maxTagHeight = height;
          }
        });
  
        // ----------------------------------------
        // Apply to ORIGINAL + CLONED items
        // ----------------------------------------
  
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
            .find(".owl-item .item .item-tags")
            .height(maxTagHeight);
        }
      };
  
      // ----------------------------------------
      // Update after layout changes
      // ----------------------------------------
  
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
      slider.on("resized.owl.carousel", () => {
        updateEqualHeight();
      });
  
      // Owl refresh
      slider.on("refreshed.owl.carousel", () => {
        updateEqualHeight();
      });
  
      // Browser resize
      $(window).on("resize.serviceSlider", () => {
        clearTimeout(resizeTimer);
  
        resizeTimer = setTimeout(() => {
          updateEqualHeight();
        }, 200);
      });
    };
  
    initializeSlider();
  
    // ----------------------------------------
    // Cleanup
    // ----------------------------------------
  
    return () => {
      mounted = false;
  
      clearTimeout(resizeTimer);
  
      $(window).off("resize.serviceSlider");
  
      if (sliderRef.current) {
        const slider = $(sliderRef.current);
  
        slider.off("resized.owl.carousel");
        slider.off("refreshed.owl.carousel");
  
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
            <div className="item" key={service.id} >
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
  );
};

export default LiestungenSlider;