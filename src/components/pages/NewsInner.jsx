"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import InnerBnanner from "@/components/InnerBanner";
import NewsCard from "@/components/ResuableComponents/NewsCard";
import TalkSection from "@/components/TalkSection";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";
import InsightInnerSkeleton from "@/components/Skeleton/InsightInnerSkeleton";

import {
  getNewsBySlug,
  getNewsPageCategory,
} from "@/Apis/NewsPage/api";
import { getMediaUrl } from "@/helper/MediaUrl";

const BADGE_CLASSES = [
  "purple_badge",
  "blue_badge",
  "red_badge",
];

const NewsInner = () => {
  const params = useParams();
  const slug = params?.id;

  const [data, setData] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const [result, newsResult] = await Promise.all([
          getNewsBySlug(slug),
          getNewsPageCategory(),
        ]);

        if (!result) {
          setError(true);
          return;
        }

        setData(result);
        setAllNews(newsResult || []);
      } catch (err) {
        console.error("News detail error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const relatedNews = useMemo(() => {
    if (!data?.documentId) return [];

    const categoryClassMap = {};

    (allNews || []).forEach((item) => {
      (item?.news_kategories || []).forEach((category, index) => {
        if (
          category?.documentId &&
          !categoryClassMap[category.documentId]
        ) {
          categoryClassMap[category.documentId] =
            BADGE_CLASSES[
            Object.keys(categoryClassMap).length %
            BADGE_CLASSES.length
            ];
        }
      });
    });

    return (allNews || [])
      .filter(
        (item) => item?.documentId !== data?.documentId
      )
      .slice(0, 3)
      .map((item) => {
        const firstCategory =
          item?.news_kategories?.[0];

        return {
          id: item?.id,
          documentId: item?.documentId,
          slug: item?.slug || "",
          title: item?.Titel || "",
          description: item?.Text || "",
          date: formatDate(item?.Publikation),
          image: item?.Bild?.url || "",
          alternativeText:
            item?.Bild?.alternativeText ||
            item?.Titel ||
            "",
          category: firstCategory?.Titel || "",
          categoryClass:
            firstCategory?.documentId
              ? categoryClassMap[
              firstCategory.documentId
              ] || ""
              : "",
          categoryIds: (
            item?.news_kategories || []
          ).map((category) => category?.documentId),
        };
      });
  }, [allNews, data?.documentId]);

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
        buttonText="Zurück zu den News"
        buttonLink="/news"
      />
    );
  }

  const {
    Titel,
    Kurztitel,
    Text,
    Publikation,
    Button,
    Bild_Text_Abschnitt,
    Bildre_Text,
    Kontaktbereich,
  } = data;

  const firstSectionImages =
    Bild_Text_Abschnitt?.Bild || [];

  const contentImage =
    Bildre_Text?.Bild?.[0] || null;

  const contentVideo =
    Bildre_Text?.Video?.[0] || null;

  const videoThumbnail =
    Bildre_Text?.Videominiatur?.[0] || null;

  const hasHero = Boolean(
    Titel || Kurztitel || Text
  );

  const hasFirstSection = Boolean(
    Bild_Text_Abschnitt?.Kurztitel ||
    Bild_Text_Abschnitt?.Text?.length ||
    firstSectionImages.length
  );

  const hasSecondSection = Boolean(
    Bildre_Text?.Kurztitel ||
    Bildre_Text?.Titel ||
    Bildre_Text?.Beschreibung?.length ||
    contentImage?.url ||
    contentVideo?.url ||
    Bildre_Text?.Button?.length
  );

  const isExternalHeroButton =
    Button?.Ziel === "Extern";

  return (
    <main>
      {/* ================= INNER HERO ================= */}
      {hasHero && (
        <section className="inner_hero_section">
          <InnerBnanner
            title={Kurztitel || ""}
            heading={Titel || ""}
            description={Text || ""}
            footer={Boolean(Button?.button_text)}
            button={Button?.button_text || ""}
            buttonLink={Button?.button_link || "#"}
            buttonTarget={
              isExternalHeroButton
                ? "_blank"
                : undefined
            }
            buttonRel={
              isExternalHeroButton
                ? "noopener noreferrer"
                : undefined
            }
          />
        </section>
      )}

      {/* ================= IMAGE + TEXT ================= */}
      {hasFirstSection && (
        <section className="image_layout_section pt_pb_3">
          <div className="container">
            <div className="row g-4">
              {Bild_Text_Abschnitt?.Kurztitel && (
                <div className="col-12 col-md-4">
                  <div className="intro-svg mx-auto mx-md-0">
                    <div className="sub_title">
                      {Bild_Text_Abschnitt.Kurztitel}
                    </div>
                  </div>
                </div>
              )}

              {Bild_Text_Abschnitt?.Text?.length > 0 && (
                <div className="col-12 col-md-8">
                  <div className="intro-text mb-0">
                    <StrapiRichText
                      content={
                        Bild_Text_Abschnitt.Text
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            {firstSectionImages.length > 0 && (
              <div className="row g-4 mt-4">
                {firstSectionImages.map(
                  (image, index) => {
                    if (!image?.url) return null;

                    return (
                      <div
                        className="col-12 col-lg-6"
                        key={
                          image?.id ||
                          image?.documentId ||
                          index
                        }
                      >
                        <div className="image_layout_item">
                          <img
                            src={getMediaUrl(
                              image.url
                            )}
                            alt={
                              image?.alternativeText ||
                              Titel ||
                              ""
                            }
                            className="w-100"
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= IMAGE / VIDEO + TEXT ================= */}
      {hasSecondSection && (
        <section className="content_image_section my-4">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-6">
                <div className="content_image_content">
                  {Bildre_Text?.Kurztitel && (
                    <div className="sub_title">
                      {Bildre_Text.Kurztitel}
                    </div>
                  )}

                  {Bildre_Text?.Titel && (
                    <h2>
                      {Bildre_Text.Titel}
                    </h2>
                  )}

                  {Bildre_Text?.Beschreibung?.length >
                    0 && (
                      <StrapiRichText
                        content={
                          Bildre_Text.Beschreibung
                        }
                      />
                    )}

                  {Bildre_Text?.Button?.length > 0 && (
                    <div className="theme_btn_wrap mt-4">
                      {Bildre_Text.Button.map(
                        (button, index) => {
                          if (!button?.button_text) {
                            return null;
                          }

                          const isExternal =
                            button?.Ziel === "Extern";

                          return (
                            <a
                              key={
                                button?.id ||
                                index
                              }
                              href={
                                button?.button_link ||
                                "#"
                              }
                              className="button theme_btn"
                              target={
                                isExternal
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                isExternal
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {button.button_text}
                              <img
                                src="/images/btn-arrow.svg"
                                alt=""
                              />
                            </a>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-12 col-lg-6">
                {Bildre_Text?.Bild_oder_Video ===
                  "Video" &&
                  contentVideo?.url ? (
                  <div className="content_video">
                    <video
                      controls
                      poster={
                        videoThumbnail?.url
                          ? getMediaUrl(
                            videoThumbnail.url
                          )
                          : undefined
                      }
                      className="w-100"
                    >
                      <source
                        src={getMediaUrl(
                          contentVideo.url
                        )}
                        type={
                          contentVideo?.mime ||
                          "video/mp4"
                        }
                      />
                      Your browser does not support
                      the video tag.
                    </video>
                  </div>
                ) : (
                  contentImage?.url && (
                    <div className="content_image">
                      <img
                        src={getMediaUrl(
                          contentImage.url
                        )}
                        alt={
                          contentImage?.alternativeText ||
                          Bildre_Text?.Titel ||
                          Titel ||
                          ""
                        }
                        className="w-100"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= RELATED NEWS ================= */}
      {relatedNews.length > 0 && (
        <section className="news-page-section news_section pt_3">
          <NewsCard
            newsData={relatedNews}
            showHeader={false}
            showFooter={false}
          />
        </section>
      )}

      {/* ================= CONTACT ================= */}
      {Kontaktbereich && (
        <section className="pt_pb_3 talk_section">
          <TalkSection talkData={Kontaktbereich} />
        </section>
      )}
    </main>
  );
};

const StrapiRichText = ({ content }) => {
  if (!content) return null;

  if (typeof content === "string") {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    );
  }

  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <div className="strapi_rich_text">
      {content.map((block, blockIndex) => {
        if (!block) return null;

        const blockType =
          block?.type || "paragraph";

        const children =
          block?.children || [];

        const renderedChildren =
          children.map(
            (child, childIndex) => {
              if (!child) return null;

              const text =
                child?.text || "";

              if (child?.bold) {
                return (
                  <strong
                    key={childIndex}
                  >
                    {text}
                  </strong>
                );
              }

              if (child?.italic) {
                return (
                  <em key={childIndex}>
                    {text}
                  </em>
                );
              }

              return (
                <React.Fragment
                  key={childIndex}
                >
                  {text}
                </React.Fragment>
              );
            }
          );

        if (blockType === "heading") {
          const level = Math.min(
            Math.max(block?.level || 2, 1),
            6
          );

          const HeadingTag = `h${level}`;

          return (
            <HeadingTag key={blockIndex}>
              {renderedChildren}
            </HeadingTag>
          );
        }

        if (blockType === "quote") {
          return (
            <blockquote key={blockIndex}>
              {renderedChildren}
            </blockquote>
          );
        }

        return (
          <p key={blockIndex}>
            {renderedChildren}
          </p>
        );
      })}
    </div>
  );
};

/* ========================================================= DATE FORMATTER ========================================================= */
const formatDate = (date) => {
  if (!date) { return ""; }
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) { return date; }

  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const year = parsedDate.getFullYear(); return `${day}.${month}.${year}`;
};
export default NewsInner;
