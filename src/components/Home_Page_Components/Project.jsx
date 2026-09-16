"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import AnimatedText from "@/components/AnimatedText";
import { getMediaUrl } from "@/helper/MediaUrl";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

const Project = () => {
  const projectData = useSelector((state) => state.home.data?.project);

  if (!projectData) {
    return null;
  }



  const kurztitel = projectData?.Kurztitel || "";
  const titel = projectData?.Titel || "";

  /*
   * ----------------------------------------
   * IMAGE
   * ----------------------------------------
   */

  const image = projectData?.Bild?.[0];

  const imageFile =
    image?.url || image;

  const imageUrl =imageFile
    ? getMediaUrl(imageFile)
    : "";

  /*
   * ----------------------------------------
   * VIDEO
   * ----------------------------------------
   *
   * Video is an OBJECT in your API,
   * not an array.
   */

  const video = projectData?.Video;

  const videoUrl = video?.url
    ? getMediaUrl(video.url)
    : "";

  /*
   * ----------------------------------------
   * VIDEO THUMBNAIL
   * ----------------------------------------
   */

  const videoThumbnail = projectData?.Videominiatur;

  const videoThumbnailFile =
    videoThumbnail?.url ||
    videoThumbnail;

  const videoThumbnailUrl = videoThumbnailFile
    ? getMediaUrl(videoThumbnailFile)
    : "";

  /*
   * ----------------------------------------
   * MEDIA TYPE
   * ----------------------------------------
   */

  const mediaType = projectData?.Bild_oder_Video;



  /*
   * ----------------------------------------
   * OTHER DATA
   * ----------------------------------------
   */

  const beschreibung = projectData?.Beschreibung || [];

  const showButton =
    projectData?.Komponente === "Button";

  const buttonText =
    projectData?.Button?.[0]?.button_text || "";

  const buttonLink =
    projectData?.Button?.[0]?.button_link || "#";

  /**
   * Get text from Strapi rich-text children
   */
  const getText = (children = []) => {
    return children
      .map((child) => child?.text || "")
      .join("");
  };

  /**
   * Render every Strapi description block dynamically
   */
  const renderDescriptionBlock = (block, index) => {
    if (!block) return null;

    switch (block.type) {
      /*
       * HEADING
       */
      case "heading": {
        const level = block.level || 3;

        const HeadingTag = `h${Math.min(
          Math.max(level, 1),
          6
        )}`;

        return (
          <HeadingTag
            key={index}
            className={
              level === 3
                ? "fw-regular my-3"
                : ""
            }
          >
            {getText(block.children)}
          </HeadingTag>
        );
      }

      /*
       * PARAGRAPH
       */
      case "paragraph":
        return (
          <p key={index}>
            {getText(block.children)}
          </p>
        );

      /*
       * LIST
       */
      case "list": {
        const ListTag =
          block.format === "ordered"
            ? "ol"
            : "ul";

        return (
          <ListTag key={index}>
            {block.children?.map(
              (listItem, itemIndex) => (
                <li key={itemIndex}>
                  {getText(
                    listItem?.children
                  )}
                </li>
              )
            )}
          </ListTag>
        );
      }

      /*
       * QUOTE
       */
      case "quote":
        return (
          <blockquote key={index}>
            {getText(block.children)}
          </blockquote>
        );

      /*
       * CODE
       */
      case "code":
        return (
          <pre key={index}>
            <code>
              {getText(block.children)}
            </code>
          </pre>
        );

      /*
       * LINK
       */
      case "link":
        return (
          <Link
            key={index}
            href={block.url || "#"}
          >
            {getText(block.children)}
          </Link>
        );

      /*
       * DEFAULT
       */
      default:
        return (
          <div key={index}>
            {getText(block.children)}
          </div>
        );
    }
  };

  return (
    <section className="pt_3 project_section">
      <div className="container">
        <div
          className="border-wrapper position-relative"
          data-aos="slide-up"
        >
          <div className="row flex-lg-row-reverse">

            {/* MEDIA */}
            <div className="col-12 col-lg-6 ms-auto img-col">

              {/* =========================
                  IMAGE
                  ========================= */}
              {mediaType === "Bild" &&
                imageUrl && (
                  <img
                    src={imageUrl}
                    alt={
                      image?.alternativeText ||
                      titel ||
                      "Project"
                    }
                    className="w-100 img_radius"
                  />
                )}

              {/* =========================
                  VIDEO
                  ========================= */}
              {mediaType === "Video" &&
                videoUrl && (
                  <video
                    className="w-100 img_radius"
                    controls
                    playsInline
                    preload="metadata"
                    poster={
                      videoThumbnailUrl ||
                      undefined
                    }
                  >
                    <source
                      src={videoUrl}
                      type={
                        video?.mime ||
                        "video/mp4"
                      }
                    />

                    Your browser does not
                    support the video tag.
                  </video>
                )}

            </div>

            {/* CONTENT */}
            <div className="col-12 col-lg-6 content-col mt-4 mt-lg-0">
              <div className="sec-content">

                {/* SUB TITLE */}
                {kurztitel && (
                  <div className="sub_title">
                    {renderHtmlText(kurztitel)}
                  </div>
                )}

                {/* TITLE */}
                {titel && (
                  <h2>
                    {renderHtmlText(titel)}
                  </h2>
                )}

                {/* DESCRIPTION */}
                {beschreibung.map(
                  renderDescriptionBlock
                )}

                {/* BUTTON */}
                {showButton && (
                  <div className="theme_btn_wrap mt-4">
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
          </div>

          {/* ANIMATED TEXT */}
          <div className="anim_circle">
            <AnimatedText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
