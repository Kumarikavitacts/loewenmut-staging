"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import InnerBnanner from '@/components/InnerBanner';
import TalkSection from '@/components/TalkSection';
import AnimatedText from '@/components/AnimatedText';
import ProjectCarousel from '@/components/Carousel/ProjectCarousel';
import { mapReferenzForCarousel } from '@/helper/Utils';
import StatsCards from '@/components/StatsCards';
import TeamSlider from '@/components/TeamSlider';
import InnerBannerSkeleton from '@/components/Skeleton/InnerBannerSkeleton';
import SectionSkeleton from '@/components/Skeleton/SectionSkeleton';
import TalkSkeleton from '@/components/Skeleton/TalkSkeleton';
import StatusHeader from '@/components/ResuableComponents/StatusHeader';
import { renderHtmlText } from '@/components/ResuableComponents/renderHtmlText';
import { getMediaUrl } from '@/helper/MediaUrl';
import { getAgenturPageData } from '@/Apis/agenturPage/api';
import { getInsightPageCategory } from '@/Apis/insightPage/api';
import ScrollFillText from '@/components/ResuableComponents/ScrollFillText';

// =====================================================
// RICH TEXT
//
// "Text" / "Beschreibung" fields coming from Strapi's block
// editor are arrays of paragraph blocks. Some inline children
// carry raw HTML in a "code" flag (e.g. highlighted <span>s).
// =====================================================

const RichText = ({ content = [] }) => {
    if (!Array.isArray(content)) return null;

    return (
        <>
            {content.map((block, blockIndex) => {
                if (block.type !== "paragraph") return null;

                return (
                    <p key={blockIndex}>
                        {block.children?.map((child, childIndex) => {
                            // HTML/span coming from Strapi
                            if (child.code) {
                                return (
                                    <span
                                        key={childIndex}
                                        dangerouslySetInnerHTML={{
                                            __html: child.text || "",
                                        }}
                                    />
                                );
                            }

                            if (child.bold) {
                                return (
                                    <strong key={childIndex}>{child.text}</strong>
                                );
                            }

                            return (
                                <React.Fragment key={childIndex}>
                                    {child.text}
                                </React.Fragment>
                            );
                        })}
                    </p>
                );
            })}
        </>
    );
};

const Agentur = () => {
    const [pageData, setPageData] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
                setProjects((referenzen || []).map(mapReferenzForCarousel));
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
    // ERROR / NOT FOUND
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

    const talkData = Array.isArray(Kontaktbereich)
        ? Kontaktbereich[0]
        : Kontaktbereich;

    // --------------------------------
    // BILDRE_TEXT ("Das macht uns einzigartig") MEDIA + BUTTON
    // --------------------------------
    const aboutImage = Bildre_Text?.Bild?.[0];
    const aboutVideo = Bildre_Text?.Video;
    const aboutVideoUrl = aboutVideo?.url ? getMediaUrl(aboutVideo.url) : "";
    const aboutVideoThumbnail = Bildre_Text?.Videominiatur;
    const aboutVideoThumbnailUrl = aboutVideoThumbnail?.url
        ? getMediaUrl(aboutVideoThumbnail.url)
        : "";
    const aboutMediaType = Bildre_Text?.Bild_oder_Video;

    const aboutButton = Bildre_Text?.Button?.[0];
    const showAboutButton = Boolean(aboutButton);

    return (
        <main>
            <section className="inner_hero_section">
                <InnerBnanner
                    title={Bannerbereich?.Kurztitel || ""}
                    heading={Bannerbereich?.Titel || ""}
                    description={Bannerbereich?.Text || ""}
                />
            </section>
            <section className="content_emo_section agen_emo_sec pt_pb_3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="sub_title">{Kurztitel}</div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <h2>{renderHtmlText(Titel)}</h2>
                        </div>
                        <div className="col-12 col-lg-4 img-col mt-4">
                            <div className="anim_circle">
                                <AnimatedText />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 content-col mt-4">
                            <div className="sec-content">
                                <RichText content={Text || []} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="uber_unique_section pt_pb_3" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 content-col mb-4 mb-lg-0">
                            <div className="sec-content pe-lg-4">
                                <div className="sub_title">{Bildre_Text?.Kurztitel}</div>
                                <h2>{renderHtmlText(Bildre_Text?.Titel)}</h2>
                                <RichText content={Bildre_Text?.Beschreibung || []} />

                                {showAboutButton && (
                                    <div className="theme_btn_wrap mt-4">
                                        <Link
                                            href={aboutButton?.button_link || "#"}
                                            className="button theme_btn"
                                        >
                                            {aboutButton?.button_text}
                                            <img src="/images/btn-arrow.svg" alt="button arrow" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 img-col">
                            {aboutMediaType === "Bild" && aboutImage?.url && (
                                <img
                                    src={getMediaUrl(aboutImage.url)}
                                    alt={aboutImage?.alternativeText || Bildre_Text?.Titel || ""}
                                    className='rounded'
                                />
                            )}

                            {aboutMediaType === "Video" && aboutVideoUrl && (
                                <video
                                    className="rounded w-100"
                                    controls
                                    playsInline
                                    preload="metadata"
                                    poster={aboutVideoThumbnailUrl || undefined}
                                >
                                    <source
                                        src={aboutVideoUrl}
                                        type={aboutVideo?.mime || "video/mp4"}
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className='agentur_team_section pt_3 overflow-hidden'>
                <div className='container'>
                    <div className='sec-heading mb-4'>
                        <div className='sub_title'>{Team_Bereich?.Kurztitel}</div>
                        <h2>{renderHtmlText(Team_Bereich?.Titel)}</h2>
                    </div>
                    <TeamSlider teams={Team_Bereich?.teams} />
                </div>
            </section>
            <section className='project_stats_section pt_pb_3'>
                <div className='container'>
                    <div className='sec-heading mb-4'>
                        <div className='sub_title'>{Thekenbereich?.Kurztitel}</div>
                        <h2> 
                             <ScrollFillText
                        html={Thekenbereich?.Titel}
                        className="Agentur_fill_title"
                        startColor="var(--bs-textdarkgrey)"
                        fillColor="var(--bs-textdarkgrey)"
                    /></h2>
                    </div>
                    <StatsCards counters={Thekenbereich?.Counter} />
                </div>
            </section>
            <section className='pt_pb_3 project-carousel-section overflow-hidden' style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
                <ProjectCarousel
                    title={renderHtmlText(Projekte?.Titel)}
                    description={Projekte?.Text_1}
                    description2={renderHtmlText(Projekte?.Text_2)}
                    project={projects}
                    button={Projekte?.button_text}
                />
            </section>
         {talkData &&   <section className="pt_pb_3 talk_section">
                <TalkSection talkData={talkData} />
            </section>}
        </main>
    );
}




export default Agentur;