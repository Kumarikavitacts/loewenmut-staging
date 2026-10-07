"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import InnerBnanner from "@/components/InnerBanner";
import TalkSection from "@/components/TalkSection";
import AnimatedText from "@/components/AnimatedText";
import ProjectCarousel from "@/components/Carousel/ProjectCarousel";
import StatsCards from "@/components/StatsCards";
import TeamSlider from "@/components/TeamSlider";

import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";
import SectionSkeleton from "@/components/Skeleton/SectionSkeleton";
import TalkSkeleton from "@/components/Skeleton/TalkSkeleton";

import StatusHeader from "@/components/ResuableComponents/StatusHeader";
import ScrollFillText from "@/components/ResuableComponents/ScrollFillText";

import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

import { getMediaUrl } from "@/helper/MediaUrl";
import { mapReferenzForCarousel } from "@/helper/Utils";

import { getAgenturPageData } from "@/Apis/agenturPage/api";
import { getInsightPageCategory } from "@/Apis/insightPage/api";

// =====================================================
// RICH TEXT
// =====================================================

const RichText = ({ content = [] }) => {
    if (!Array.isArray(content) || content.length === 0) {
        return null;
    }

    /**
     * Render inline Strapi blocks recursively.
     *
     * Supports:
     * - normal text
     * - bold
     * - italic
     * - code HTML
     * - links
     */
    const renderInlineContent = (children = []) => {
        if (!Array.isArray(children)) {
            return null;
        }

        return children.map((child, index) => {
            if (!child) {
                return null;
            }

            // -----------------------------------------
            // Strapi link
            // -----------------------------------------
            if (child.type === "link") {
                const linkText = renderInlineContent(child.children);

                const href = child.url || "#";
                const target = child.target || undefined;
                const rel =
                    child.rel ||
                    (target === "_blank"
                        ? "noopener noreferrer"
                        : undefined);

                return (
                    <a
                        className="strapi_link"
                        key={index}
                        href={href}
                        target={target}
                        rel={rel}
                    >
                        {linkText}
                    </a>
                );
            }

            // -----------------------------------------
            // HTML coming from Strapi code field
            // Example:
            // <span class="txt-004">digitalen Fragen.</span>
            // -----------------------------------------
            if (child.code) {
                return (
                    <span
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: child.text || "",
                        }}
                    />
                );
            }

            // -----------------------------------------
            // Bold
            // -----------------------------------------
            if (child.bold) {
                return (
                    <strong key={index}>
                        {child.text || ""}
                    </strong>
                );
            }

            // -----------------------------------------
            // Italic
            // -----------------------------------------
            if (child.italic) {
                return (
                    <em key={index}>
                        {child.text || ""}
                    </em>
                );
            }

            // -----------------------------------------
            // Underline
            // -----------------------------------------
            if (child.underline) {
                return (
                    <u key={index}>
                        {child.text || ""}
                    </u>
                );
            }

            // -----------------------------------------
            // Strikethrough
            // -----------------------------------------
            if (child.strikethrough) {
                return (
                    <s key={index}>
                        {child.text || ""}
                    </s>
                );
            }

            // -----------------------------------------
            // Normal text
            // -----------------------------------------
            return (
                <React.Fragment key={index}>
                    {child.text || ""}
                </React.Fragment>
            );
        });
    };

    return (
        <>
            {content.map((block, blockIndex) => {
                if (!block) {
                    return null;
                }

                // -----------------------------------------
                // Paragraph
                // -----------------------------------------
                if (block.type === "paragraph") {
                    return (
                        <p key={blockIndex}>
                            {renderInlineContent(block.children)}
                        </p>
                    );
                }

                // -----------------------------------------
                // Heading
                // -----------------------------------------
                if (block.type === "heading") {
                    const level = Math.min(
                        Math.max(block.level || 2, 1),
                        6
                    );

                    const HeadingTag = `h${level}`;

                    return (
                        <HeadingTag key={blockIndex}>
                            {renderInlineContent(block.children)}
                        </HeadingTag>
                    );
                }

                // -----------------------------------------
                // List
                // -----------------------------------------
                if (block.type === "list") {
                    const ListTag =
                        block.format === "ordered" ? "ol" : "ul";

                    return (
                        <ListTag key={blockIndex}>
                            {block.children?.map(
                                (item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {renderInlineContent(
                                            item.children
                                        )}
                                    </li>
                                )
                            )}
                        </ListTag>
                    );
                }

                // -----------------------------------------
                // Quote
                // -----------------------------------------
                if (block.type === "quote") {
                    return (
                        <blockquote key={blockIndex}>
                            {renderInlineContent(block.children)}
                        </blockquote>
                    );
                }

                return null;
            })}
        </>
    );
};

// =====================================================
// AGENTUR PAGE
// =====================================================

const Agentur = () => {
    const [pageData, setPageData] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // ===================================================
    // FETCH DATA
    // ===================================================

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);

                const [data, referenzen] = await Promise.all([
                    getAgenturPageData(),
                    getInsightPageCategory(),
                ]);

                if (!data) {
                    setError(true);
                    return;
                }

                setPageData(data);

                setProjects(
                    Array.isArray(referenzen)
                        ? referenzen.map(mapReferenzForCarousel)
                        : []
                );
            } catch (err) {
                console.error("Agentur page error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ===================================================
    // LOADING
    // ===================================================

    if (loading) {
        return (
            <main>
                <InnerBannerSkeleton />
                <SectionSkeleton />
                <SectionSkeleton />
                <SectionSkeleton />
                <TalkSkeleton />
            </main>
        );
    }

    // ===================================================
    // ERROR
    // ===================================================

    if (error || !pageData) {
        return (
            <StatusHeader
                statusType="wrong"
                title={
                    <>
                        Diese Seite konnte leider <br />
                        nicht gefunden werden
                    </>
                }
                buttonText="Zurück zur Startseite"
                buttonLink="/"
            />
        );
    }

    // ===================================================
    // DATA
    // ===================================================

    const {
        Kurztitel,
        Titel,
        Text,
        Projekte,
        Kontaktbereich,
        Bannerbereich,
        Bildre_Text,
        Thekenbereich,
        Team_Bereich,
    } = pageData;

    // ===================================================
    // CONTACT / TALK DATA
    // ===================================================

    const talkData = Array.isArray(Kontaktbereich)
        ? Kontaktbereich[0]
        : Kontaktbereich;

    // ===================================================
    // ABOUT MEDIA
    // ===================================================

    const aboutImage = Bildre_Text?.Bild?.[0];

    const aboutVideo = Bildre_Text?.Video;

    const aboutVideoUrl = aboutVideo?.url
        ? getMediaUrl(aboutVideo.url)
        : "";

    const aboutVideoThumbnail = Bildre_Text?.Videominiatur;

    const aboutVideoThumbnailUrl = aboutVideoThumbnail?.url
        ? getMediaUrl(aboutVideoThumbnail.url)
        : "";

    const aboutMediaType = Bildre_Text?.Bild_oder_Video;

    // ===================================================
    // ABOUT BUTTON
    // ===================================================

    const aboutButton = Array.isArray(Bildre_Text?.Button)
        ? Bildre_Text.Button[0]
        : null;

    const showAboutButton =
        Boolean(aboutButton?.button_text) &&
        Boolean(aboutButton?.button_link);

    // ===================================================
    // MEDIA TYPE
    // ===================================================

    const showAboutImage =
        aboutMediaType === "Bild" &&
        Boolean(aboutImage?.url);

    const showAboutVideo =
        aboutMediaType === "Video" &&
        Boolean(aboutVideoUrl);

    return (
        <main>

            {/* =================================================
                INNER BANNER
            ================================================= */}

            <section className="inner_hero_section">
                <InnerBnanner
                    title={Bannerbereich?.Kurztitel || ""}
                    heading={Bannerbereich?.Titel || ""}
                    description={Bannerbereich?.Text || ""}
                />
            </section>

            {/* =================================================
                ABOUT / INTRO
            ================================================= */}

            <section className="content_emo_section agen_emo_sec pt_pb_3">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-4">
                            <div className="sub_title">
                                {Kurztitel}
                            </div>
                        </div>

                        <div className="col-12 col-lg-8">
                            <h2>
                                {renderHtmlText(Titel)}
                            </h2>
                        </div>

                        <div className="col-12 col-lg-4 img-col mt-4">
                            <div className="anim_circle">
                                <AnimatedText />
                            </div>
                        </div>

                        <div className="col-12 col-lg-8 content-col mt-4">
                            <div className="sec-content">
                                <RichText
                                    content={Text || []}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =================================================
                UNIQUE / ABOUT MEDIA
            ================================================= */}

            <section
                className="uber_unique_section pt_pb_3"
                style={{
                    backgroundImage:
                        "url('/images/bg-pattern.webp')",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* CONTENT */}
                        <div className="col-12 col-lg-6 content-col mb-4 mb-lg-0">
                            <div className="sec-content pe-lg-4">

                                <div className="sub_title">
                                    {Bildre_Text?.Kurztitel || ""}
                                </div>

                                <h2>
                                    {renderHtmlText(
                                        Bildre_Text?.Titel
                                    )}
                                </h2>

                                <RichText
                                    content={
                                        Bildre_Text?.Beschreibung || []
                                    }
                                />

                                {/* BUTTON */}

                                {showAboutButton && (
                                    <div className="theme_btn_wrap mt-4">
                                        <Link
                                            href={
                                                aboutButton.button_link
                                            }
                                            className="button theme_btn"
                                        >
                                            {aboutButton.button_text}

                                            <img
                                                src="/images/btn-arrow.svg"
                                                alt="button arrow"
                                            />
                                        </Link>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* MEDIA */}
                        <div className="col-12 col-lg-6 img-co">

                            {/* IMAGE */}
                           <div className="ag_content_image_video">
                            {showAboutImage && (
                                <img
                                    src={getMediaUrl(
                                        aboutImage.url
                                    )}
                                    alt={
                                        aboutImage?.alternativeText ||
                                        Bildre_Text?.Titel ||
                                        ""
                                    }
                                    className="w-100 d-block rounded"
                                />
                            )}

                            {/* VIDEO */}

                            {showAboutVideo && (
                                <video
                                    className="w-100 d-block rounded"
                                     autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                    preload="metadata"
                                    poster={
                                        aboutVideoThumbnailUrl ||
                                        undefined
                                    }
                                >
                                    <source
                                        src={aboutVideoUrl}
                                        type={
                                            aboutVideo?.mime ||
                                            "video/mp4"
                                        }
                                    />

                                    Your browser does not support
                                    the video tag.
                                </video>
                            )}

</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =================================================
                TEAM
            ================================================= */}

            <section className="agentur_team_section pt_3 overflow-hidden">
                <div className="container">

                    <div className="sec-heading mb-4">

                        <div className="sub_title">
                            {Team_Bereich?.Kurztitel || ""}
                        </div>

                        <h2>
                            {renderHtmlText(
                                Team_Bereich?.Titel
                            )}
                        </h2>

                    </div>

                    <TeamSlider
                        teams={Team_Bereich?.teams || []}
                    />

                </div>
            </section>

            {/* =================================================
                STATS
            ================================================= */}

            <section className="project_stats_section pt_pb_3">
                <div className="container">

                    <div className="sec-heading mb-4">

                        <div className="sub_title">
                            {Thekenbereich?.Kurztitel || ""}
                        </div>

                        <h2>
                            <ScrollFillText
                                html={Thekenbereich?.Titel || ""}
                                className="Agentur_fill_title"
                                startColor="var(--bs-textdarkgrey)"
                                fillColor="var(--bs-textdarkgrey)"
                            />
                        </h2>

                    </div>

                    <StatsCards
                        counters={
                            Thekenbereich?.Counter || []
                        }
                    />

                </div>
            </section>

            {/* =================================================
                PROJECT / INSIGHTS CAROUSEL
            ================================================= */}

            <section
                className="pt_pb_3 project-carousel-section overflow-hidden"
                style={{
                    backgroundImage:
                        "url('/images/bg-pattern.webp')",
                }}
            >
                <ProjectCarousel
                    title={renderHtmlText(
                        Projekte?.Titel || ""
                    )}
                    description={
                        Projekte?.Text_1 || ""
                    }
                    description2={
                        renderHtmlText(
                            Projekte?.Text_2 || ""
                        )
                    }
                    project={projects}
                    button={
                        Projekte?.button_text || ""
                    }
                />
            </section>

            {/* =================================================
                TALK / CONTACT
            ================================================= */}

            {talkData && (
                <section className="pt_pb_3 talk_section">
                    <TalkSection
                        talkData={talkData}
                    />
                </section>
            )}

        </main>
    );
};

export default Agentur;