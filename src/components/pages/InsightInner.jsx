"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProjectCarousel from "@/components/Carousel/ProjectCarousel";
import InnerBnanner from "@/components/InnerBanner";
import ProjectInfoCard from "@/components/ResuableComponents/ProjectInfoCard";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";
import InsightInnerSkeleton from "@/components/Skeleton/InsightInnerSkeleton";

import { getReferenzBySlug } from "@/Apis/insightPage/api";
import { getMediaUrl } from "@/helper/MediaUrl";
import { insights } from "@/helper/Utils";

// Flattens a Strapi block-editor "list" field (Inhaltsabschnitt.Inhalt[].Text)
// into a plain string array, since ProjectInfoCard expects items: string[]
const extractListItems = (blocks = []) => {
  const items = [];

  blocks.forEach((block) => {
    if (block.type === "list") {
      block.children?.forEach((listItem) => {
        const text =
          listItem.children?.map((child) => child.text).join("") || "";

        if (text) items.push(text);
      });
    }
  });

  return items;
};

const InsightInner = () => {
  const params = useParams();

  // URL: /insights/bg-zurlinden  ->  params.id = "bg-zurlinden"
  const slug = params?.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const result = await getReferenzBySlug(slug);

        if (!result) {
          setError(true);
          return;
        }

        setData(result);
      } catch (err) {
        console.error("Insight detail error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <InsightInnerSkeleton />;
  }

  if (error || !data) {
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
        buttonLink="/insights"
      />
    );
  }

  const {
    Titel,
    Kurztitel,
    Text,
    Inhaltsabschnitt,
    Bildbereich,
    Projekte,
  } = data;

  const infoCards = Inhaltsabschnitt?.Inhalt || [];

  // ===================================================
  // AVAILABILITY CHECKS — decide what actually renders
  // ===================================================

  const hasHero = Boolean(Titel || Kurztitel || Text);

  const hasIntro = Boolean(Inhaltsabschnitt?.Titel || Inhaltsabschnitt?.Text);
  const hasShowcaseImage = Boolean(Inhaltsabschnitt?.Bild?.url);
  const hasInfoCards = infoCards.length > 0;
  const hasShowcase = hasShowcaseImage || hasInfoCards;
  const hasProjectDetailSection = hasIntro || hasShowcase;

  const hasBildbereichHeading = Boolean(
    Bildbereich?.Kurztitel || Bildbereich?.Titel
  );
  const hasBildbereichImage = Boolean(Bildbereich?.Bild?.url);
  const hasBildbereichText1 = Boolean(Bildbereich?.Text_1);
  const hasBildbereichText2 = Boolean(Bildbereich?.Text_2);
  const hasBildbereichTextRow = hasBildbereichText1 || hasBildbereichText2;
  const hasBildbereichSection =
    hasBildbereichHeading || hasBildbereichImage || hasBildbereichTextRow;

  const hasProjekte = Boolean(
    Projekte?.Titel || Projekte?.Text_1 || Projekte?.Text_2
  );

  return (
    <main>
      {/* ================= INNER HERO ================= */}
      {hasHero && (
        <section className="inner_hero_section">
          <InnerBnanner
            title={Kurztitel || ""}
            heading={Titel || ""}
            description={Text || ""}
          />
        </section>
      )}

      {/* ================= PROJECT DETAIL ================= */}
      {hasProjectDetailSection && (
        <section className="project_detail_section pt_pb_3">
          <div className="container">
            {/* Intro */}
            {hasIntro && (
              <div className="row">
                {Inhaltsabschnitt?.Titel && (
                  <div className="col-12 col-lg-4 title-col">
                    <div className="sub_title">{Inhaltsabschnitt.Titel}</div>
                  </div>
                )}

                {Inhaltsabschnitt?.Text && (
                  <div className="col-12 col-lg-8 content-col">
                    <p
                      className="intro-text mb-0"
                      dangerouslySetInnerHTML={{
                        __html: Inhaltsabschnitt.Text,
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Project Showcase */}
            {hasShowcase && (
              <div className="project-showcase py-4 py-md-5">
                <div className="row g-3 g-lg-4 align-items-stretch">
                  {/* LEFT IMAGE */}
                  {hasShowcaseImage && (
                    <div className="col-12 col-lg-6">
                      <div className="project-image-card position-relative overflow-hidden rounded-4 h-100">
                        <img
                          src={getMediaUrl(Inhaltsabschnitt.Bild.url)}
                          alt={
                            Inhaltsabschnitt.Bild.alternativeText ||
                            Titel ||
                            ""
                          }
                          className="project-main-image w-100 h-100"
                        />

                        {(Inhaltsabschnitt?.Bild_Titel ||
                          Inhaltsabschnitt?.Bild_Text ||
                          Inhaltsabschnitt?.Logo?.url) && (
                          <div className="project-image-info position-absolute start-0 end-0 bottom-0 d-flex align-items-center justify-content-between m-3 p-3 p-md-4 rounded-4">
                            {(Inhaltsabschnitt?.Bild_Titel ||
                              Inhaltsabschnitt?.Bild_Text) && (
                              <div className="project-image-content">
                                {Inhaltsabschnitt?.Bild_Titel && (
                                  <h3 className="mb-1">
                                    {Inhaltsabschnitt.Bild_Titel}
                                  </h3>
                                )}
                                {Inhaltsabschnitt?.Bild_Text && (
                                  <p className="mb-0">
                                    {Inhaltsabschnitt.Bild_Text}
                                  </p>
                                )}
                              </div>
                            )}

                            {Inhaltsabschnitt?.Logo?.url && (
                              <img
                                className="project-logo-svg"
                                src={getMediaUrl(Inhaltsabschnitt.Logo.url)}
                                alt={
                                  Inhaltsabschnitt.Logo.alternativeText || ""
                                }
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* RIGHT INFO CARDS */}
                  {hasInfoCards && (
                    <div className="col-12 col-lg-6">
                      <div className="project-info-list d-flex flex-column gap-3 h-100 list_tick">
                        {infoCards.map((card, index) => (
                          <ProjectInfoCard
                            key={card.id || index}
                            icon={
                              card.Icon?.url
                                ? getMediaUrl(card.Icon.url)
                                : ""
                            }
                            title={card.Titel}
                            items={extractListItems(card.Text)}
                            active={index === 0}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= PROJECT CONTENT ================= */}
      {hasBildbereichSection && (
        <section
          className="pt_pb_3 search_section"
          style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
        >
          <div className="container">
            {hasBildbereichHeading && (
              <div className="sec-heading mb-4">
                {Bildbereich?.Kurztitel && (
                  <div className="sub_title">{Bildbereich.Kurztitel}</div>
                )}

                {Bildbereich?.Titel && (
                  <h2
                    dangerouslySetInnerHTML={{ __html: Bildbereich.Titel }}
                  />
                )}
              </div>
            )}

            {hasBildbereichImage && (
              <div className="overflow-hidden project-detail-image mb-4">
                <img
                  src={getMediaUrl(Bildbereich.Bild.url)}
                  alt={Bildbereich.Bild.alternativeText || Titel || ""}
                  className="w-100 d-block"
                />
              </div>
            )}

            {hasBildbereichTextRow && (
              <div className="row article_in_detail">
                {hasBildbereichText1 && (
                  <div className="col-12 col-lg-6 content-col">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: Bildbereich.Text_1,
                      }}
                    />
                  </div>
                )}

                {hasBildbereichText2 && (
                  <div className="col-12 col-lg-6">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: Bildbereich.Text_2,
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= PROJECT CAROUSEL ================= */}
      {hasProjekte && (
        <section className="pt_pb_3 project-carousel-section overflow-hidden">
          <ProjectCarousel
            title={Projekte?.Titel || ""}
            description={Projekte?.Text_1 || ""}
            description2={
              Projekte?.Text_2 ? (
                <span
                  dangerouslySetInnerHTML={{ __html: Projekte.Text_2 }}
                />
              ) : null
            }
            project={insights}
            button={Projekte?.button_text || "Case ansehen"}
          />
        </section>
      )}
    </main>
  );
};

export default InsightInner;