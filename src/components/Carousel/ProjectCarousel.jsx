import React, { useEffect, useRef } from "react";
import $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";

const ProjectCarousel = ({
    title,
    description,
    description2,
    project = [],
    button
}) => {
    const carouselRef = useRef(null);
    const navigate =useNavigate()
    const handleInsightClick =(id)=>{
      console.log(id)
      navigate(`/insights/${id}`)
    }
    useEffect(() => {
        window.$ = $;
        window.jQuery = $;

        let $carousel = null;

        import("owl.carousel/dist/owl.carousel.min.js")
            .then(() => {
                if (!carouselRef.current) return;

                $carousel = $(carouselRef.current);

                if (typeof $carousel.owlCarousel !== "function") {
                    console.error("Owl Carousel is not loaded correctly.");
                    return;
                }

                $carousel.owlCarousel({
                    loop: true,

                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,

                    smartSpeed: 800,

                    mouseDrag: true,
                    touchDrag: true,
                    pullDrag: true,

                    nav: false,
                    dots: false,
                    rewind: false,

                    margin: 16,

                    responsive: {
                        0: {
                            items: 1.2,
                            margin: 12,
                        },

                        576: {
                            items: 1.8,
                            margin: 16,
                        },

                        768: {
                            items: 2.3,
                            margin: 16,
                        },

                        992: {
                            items: 3.2,
                            margin: 16,
                        },

                        1200: {
                            items: 4,
                            margin: 16,
                        },

                        1400: {
                            items: 4.5,
                            margin: 16,
                        },
                    },
                });
            })
            .catch((error) => {
                console.error("Failed to load Owl Carousel:", error);
            });

        return () => {
            if ($carousel && $carousel.hasClass("owl-loaded")) {
                $carousel.trigger("destroy.owl.carousel");
            }
        };
    }, []);


    return (
            <div className="container">

                {/* =========================
            HEADING
        ========================== */}
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto">
                        <div className="project-carousel-heading">
                            <h2 className="mb-3">{title}</h2>
                            {description && (
                                <p className="text-dark mb-4 fw-regular">{description} </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* =========================
            CAROUSEL
        ========================== */}
                <div ref={carouselRef} className="owl-carousel project-carousel">
                    {project.map((item) => (
                        <div
                            className="project-carousel-item"
                            key={item.id}
                         
                        >
                            <div
                                className="project-carousel-card position-relative overflow-hidden d-flex align-items-center justify-content-center"
                                style={{
                                    backgroundColor: item.bgColor ,
                                }}
                                onClick={() => handleInsightClick(item.id)}
                            >

                                {/* =========================
                    HOVER IMAGE
                ========================== */}
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title || ""}
                                        className="project-carousel-image position-absolute top-0 start-0 w-100 h-100"
                                    />
                                )}

                                {/* =========================
                    CENTER LOGO
                ========================== */}
                                {item.logo && (
                                    <div className="project-carousel-logo-wrapper position-relative d-flex align-items-center justify-content-center">
                                        <img src={item.logo} alt={item.title || ""}
                                            className="project-carousel-logo img-fluid"
                                        />
                                    </div>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

                {/* =========================
            DESCRIPTION
        ========================== */}
                <div className="row mt-4">
                    <div className="col-12 col-lg-8 mx-auto project-carousel-heading">
                        {description2 && (
                            <p className="text-dark fw-regular">{description2}</p>
                        )}
                        <button  className="button theme_btn">{button} <img src="/images/btn-arrow.svg" alt="" /></button>
                    </div>
                </div>
            </div>
    );
};

export default ProjectCarousel;