"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";
import ScrollFillText from "../ResuableComponents/ScrollFillText";

const ProjectCarousel = ({
    title,
    description,
    description2,
    project = [],
    button,
}) => {
    const carouselRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        window.$ = $;
        window.jQuery = $;

        let $carousel = null;

        const handleCarouselClick = (event) => {
            /*
             * Find the clicked project card.
             *
             * This works for both:
             * - original React cards
             * - Owl Carousel cloned cards
             */
            const card = event.target.closest(
                ".project-carousel-card-link"
            );

            if (!card) return;

            const href = card.getAttribute("data-href");
            const target = card.getAttribute("data-target");
            const isInternal = card.getAttribute("data-internal") === "true";

            if (!href || href === "#") {
                return;
            }

            /*
             * Prevent Owl Carousel from handling
             * this click as a drag/click conflict.
             */
            event.preventDefault();
            event.stopPropagation();

            if (target === "_blank") {
                // External website (Link_zur_Website) with
                // Linkziel === "Extern" -> always a new tab.
                window.open(
                    href,
                    "_blank",
                    "noopener,noreferrer"
                );
            } else if (isInternal) {
                // Internal case page (Detailseite === "Ja" + Slug)
                // -> client-side navigation, no full page reload.
                router.push(href);
            } else {
                // External website without Linkziel === "Extern"
                // -> same tab, but still a real site, so a full
                // navigation is correct here.
                window.location.href = href;
            }
        };

        import("owl.carousel/dist/owl.carousel.min.js")
            .then(() => {
                if (!carouselRef.current) return;

                $carousel = $(carouselRef.current);

                if (
                    typeof $carousel.owlCarousel !==
                    "function"
                ) {
                    console.error(
                        "Owl Carousel is not loaded correctly."
                    );
                    return;
                }

                /*
                 * Delegated click handler.
                 *
                 * IMPORTANT:
                 * This is attached to the carousel parent,
                 * so it also catches clicks on Owl clones.
                 */
                $carousel.on(
                    "click.projectCarousel",
                    ".project-carousel-card-link",
                    handleCarouselClick
                );

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
                console.error(
                    "Failed to load Owl Carousel:",
                    error
                );
            });

        return () => {
            if ($carousel) {
                /*
                 * Remove delegated click handler
                 */
                $carousel.off(
                    "click.projectCarousel",
                    ".project-carousel-card-link",
                    handleCarouselClick
                );

                /*
                 * Destroy Owl Carousel
                 */
                if (
                    $carousel.hasClass("owl-loaded")
                ) {
                    $carousel.trigger(
                        "destroy.owl.carousel"
                    );
                }
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

                        <h2 className="mb-3">
                            <ScrollFillText
                                html={title}
                                className="Agentur_fill_title"
                                startColor="var(--bs-textdarkgrey)"
                                fillColor="var(--bs-textdarkgrey)"
                            />
                            </h2>

                        {description && (
                            <p className="text-dark mb-4 fw-regular">
                                {description}
                            </p>
                        )}

                    </div>
                </div>
            </div>

            {/* =========================
                CAROUSEL
            ========================== */}
            <div
                ref={carouselRef}
                className="owl-carousel project-carousel"
            >
                {project.map((item, index) => {

                    /*
                     * INTERNAL DETAIL PAGE
                     */
                    const isInternal =
                        item?.detailseite === "Ja" &&
                        Boolean(item?.slug);

                    /*
                     * EXTERNAL WEBSITE
                     */
                    const isExternal =
                        !isInternal &&
                        Boolean(item?.websiteLink);

                    /*
                     * Determine URL
                     */
                    const href = isInternal
                        ? `/insights/${item.slug}`
                        : item?.websiteLink || "#";

                    /*
                     * External link should open
                     * in a new tab.
                     */
                    const openInNewTab =
                        isExternal &&
                        item?.linkziel === "Extern";

                    return (
                        <div
                            className="project-carousel-item"
                            key={
                                item?.id ||
                                item?.documentId ||
                                index
                            }
                        >

                            {/* =========================
                                CLICKABLE CARD
                            ========================== */}
                            <a
                                href={href}
                                data-href={href}
                                data-internal={isInternal}
                                data-target={
                                    openInNewTab
                                        ? "_blank"
                                        : "_self"
                                }
                                className="project-carousel-card-link"
                            >

                                <div
                                    className="project-carousel-card position-relative overflow-hidden d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor:
                                            item?.bgColor,
                                    }}
                                >

                                    {/* =========================
                                        IMAGE / VIDEO
                                    ========================== */}
                                    {item?.isVideo ? (
                                        <video
                                            src={item?.video}
                                            poster={
                                                item?.poster ||
                                                undefined
                                            }
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            className="project-carousel-image position-absolute top-0 start-0 w-100 h-100"
                                        />
                                    ) : (
                                        item?.image && (
                                            <img
                                                src={item.image}
                                                alt={
                                                    item?.title ||
                                                    ""
                                                }
                                                className="project-carousel-image position-absolute top-0 start-0 w-100 h-100"
                                            />
                                        )
                                    )}

                                    {/* =========================
                                        CENTER LOGO
                                    ========================== */}
                                    {item?.logo && (
                                        <div className="project-carousel-logo-wrapper position-relative d-flex align-items-center justify-content-center">

                                            <img
                                                src={item.logo}
                                                alt={
                                                    item?.title ||
                                                    ""
                                                }
                                                className="project-carousel-logo img-fluid"
                                            />

                                        </div>
                                    )}

                                </div>

                            </a>
                        </div>
                    );
                })}
            </div>

            {/* =========================
                DESCRIPTION
            ========================== */}
            <div className="row mt-4">
                <div className="col-12 col-lg-8 mx-auto project-carousel-heading">

                    {description2 && (
                        <p className="text-dark fw-regular">
                            {description2}
                        </p>
                    )}

                    <a
                        href="/insights"
                        className="button theme_btn"
                    >
                        {button}

                        <img
                            src="/images/btn-arrow.svg"
                            alt="button arrow"
                        />
                    </a>

                </div>
            </div>

        </div>
    );
};

export default ProjectCarousel;