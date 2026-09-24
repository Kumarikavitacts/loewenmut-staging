"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { getMediaUrl } from "@/helper/MediaUrl";
import {
  renderHtmlText,
} from "@/components/ResuableComponents/renderHtmlText";
import { truncateText } from "@/helper/TruncateString";
import ScrollFillText from "@/components/ResuableComponents/ScrollFillText";

const Insights = () => {
  const router = useRouter();

  const insights = useSelector(
    (state) => state.home.data?.references
  );

  const subTitle = insights?.Kurztitel || "";
  const titel = insights?.Titel || "";

  const buttonText =
    insights?.Button?.[0]?.button_text || "";

  const buttonLink =
    insights?.Button?.[0]?.button_link ;

  // --------------------------------
  // MAP API REFERENCES
  // --------------------------------
  const mappedReferences = (
    insights?.referenzens || []
  ).map((item) => {
    const isVideo =
      item?.Bild_oder_Video === "Video" && item?.Video?.url;

    return {
      id: item?.id,
      documentId: item?.documentId,
      title: item?.Titel || "",
      slug: item?.Slug || "",
      text: item?.Text || "",

      isVideo,

      image: item?.Bild,

      imageUrl: item?.Bild?.url
        ? getMediaUrl(item.Bild.url)
        : null,

      videoUrl: item?.Video?.url
        ? getMediaUrl(item.Video.url)
        : null,

      posterUrl: item?.Videominiatur?.url
        ? getMediaUrl(item.Videominiatur.url)
        : null,

      alternativeText:
        item?.Bild?.alternativeText ||
        item?.Titel ||
        "Insight",

      detailseite: item?.Detailseite || "",
      websiteLink: item?.Link_zur_Website || "",
      linkziel: item?.Linkziel || "",
    };
  });

  // --------------------------------
  // HANDLE CARD CLICK
  // --------------------------------
  const handleInsightClick = (insight) => {
    // If Slug exists → internal page
    if (insight?.slug) {
      router.push(`/insights/${insight.slug}`);
      return;
    }

    // If Slug doesn't exist → external website
    if (insight?.websiteLink) {
      window.open(
        insight.websiteLink,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section className="pt_pb_3 insight_section">
      <div className="container">

        {/* HEADER */}
        <div
          className="sec-content"
          data-aos="fade-up"
        >
          <div className="sub_title">
            {renderHtmlText(subTitle)}
          </div>

          <div className="title_btn_flex">

            <h2 className="mb-0">
              {/* {renderHtmlText(titel)} */}
                <ScrollFillText
                                      html={titel}
                                      className="Insight_fill_title"
                                      startColor="var(--bs-textdarkgrey)"
                                      fillColor="var(--bs-textdarkgrey)"
                                  />
            </h2>

            {buttonText && (
              <div className="theme_btn_wrap">
                <Link
                  href={buttonLink}
                  className="button theme_btn"
                >
                  {buttonText}

                  <img
                    src="/images/btn-arrow.svg"
                    alt=""
                  />
                </Link>
              </div>
            )}

          </div>
        </div>

        {/* CARDS */}
        <div
          className="row mt-lg-4"
          data-aos="fade-up"
        >
          {mappedReferences.map((insight) => (
            <div
              className="col-12 col-sm-6 col-lg-4 item-col mt-4"
              key={insight.id}
            >

              <div
                onClick={() =>
                  handleInsightClick(insight)
                }
                className="insight_item"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" ||
                    e.key === " "
                  ) {
                    handleInsightClick(insight);
                  }
                }}
              >

                {/* IMAGE / VIDEO */}
                <div className="insight_img">
                  {insight.isVideo ? (
                    <video
                      src={insight.videoUrl}
                      poster={insight.posterUrl || undefined}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    insight.imageUrl && (
                      <img
                        src={insight.imageUrl}
                        alt={
                          insight.alternativeText
                        }
                      />
                    )
                  )}
                </div>

                {/* CONTENT */}
                <div className="insight_content_btn">

                  <div className="insight_content">
                    <h3>
                      {renderHtmlText(insight.title)}
                    </h3>

                    <p>
                      {truncateText(renderHtmlText(insight.text),30)}
                    </p>
                  </div>

                  <div className="arrow_btn">
                    <svg
                      width="62"
                      height="62"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7031 15.3516L45.8089 15.3516L45.8089 39.4574"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M12.0547 49.1094L45.4732 15.6908"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;