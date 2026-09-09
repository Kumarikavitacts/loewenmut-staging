import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'
import $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { teamMembers } from "../helper/TeamUtil";

const Shape = ({ type, index }) => {
    return (
        <span
            className={`animated-shape shape-${type} shape-index-${index}`}
        />
    );
};

const TeamSlider = () => {
    const carouselRef = useRef(null);
    const owlInstance = useRef(null);

    useEffect(() => {
        window.$ = $;
        window.jQuery = $;

        let mounted = true;

        import("owl.carousel/dist/owl.carousel.min.js")
            .then(() => {
                if (!mounted || !carouselRef.current) return;

                const $carousel = $(carouselRef.current);

                // Prevent duplicate initialization
                if ($carousel.hasClass("owl-loaded")) {
                    return;
                }

                if (typeof $carousel.owlCarousel !== "function") {
                    console.error("Owl Carousel is not loaded correctly.");
                    return;
                }

                $carousel.owlCarousel({
                    loop: false,
                    autoplay: false,

                    smartSpeed: 800,

                    mouseDrag: true,
                    touchDrag: true,
                    pullDrag: true,

                    nav: false,
                    dots: false,

                    margin: 24,

                    responsive: {
                        0: {
                            items: 1,
                            margin: 12,
                        },

                        576: {
                            items: 2,
                            margin: 16,
                        },

                        992: {
                            items: 3,
                            margin: 24,
                        },
                    },
                });

                owlInstance.current = $carousel;
            })
            .catch((error) => {
                console.error(
                    "Failed to load Owl Carousel:",
                    error
                );
            });

        return () => {
            mounted = false;

            const $carousel = owlInstance.current;

            if (!$carousel || !$carousel.length) {
                return;
            }

            // Don't let React/Owl fight over the DOM
            try {
                if ($carousel.hasClass("owl-loaded")) {
                    $carousel.trigger("destroy.owl.carousel");
                }
            } catch (error) {
                console.warn(
                    "Owl Carousel cleanup warning:",
                    error
                );
            }

            owlInstance.current = null;
        };
    }, []);

    const visibleMembers = teamMembers?.slice(0, 3) || [];

    return (
        <div ref={carouselRef} className="owl-carousel owl-theme team-carousel" >
            {/* Team Members */}
            {visibleMembers.map((member, index) => (
                <div className="team-carousel-item" key={`${member.name}-${index}`} >
                    <div className="team-card">
                        <div className={`team-image tm-img-bgcolor ${member.color}`} >
                            <div className="animated-background">
                                {(member.shapes || ["blob","wave","dots",]).map((shape, shapeIndex) => (
                                    <Shape key={shapeIndex} type={shape} index={shapeIndex} />
                                ))}
                            </div>
                            <img src={member.image} alt={member.name} className="team-person" />
                        </div>
                        <div className="team-info">
                            <div>
                                <div className="team-role mb-2">{member.role}</div>
                                <h3>{member.name}</h3>
                                <p>{member.desciption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Last Item */}
            {teamMembers?.length > 3 && (
            <div className="team-carousel-item">
                <div className="team-last-card">
                    <Link to={`/team`}>LERN DAS GANZE TEAM KENNEN <img src="/images/more-button-arrow.svg" /></Link>
                </div>
            </div>
            )}
        </div>
    );
};

export default TeamSlider;