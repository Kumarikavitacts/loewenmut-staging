"use client";

import React, { useEffect, useState } from "react";
import InnerBnanner from "@/components/InnerBanner";
import PrivacyAccordion from "@/components/DatenData";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";

import { getDatenschutzPage } from "@/Apis/datenschutzPage/api";

const renderRichText = (blocks = []) => {
  if (!Array.isArray(blocks)) {
    return null;
  }

  return blocks.map((block, index) => {
    if (!block) return null;

    /* =========================
       PARAGRAPH
    ========================= */
    if (block.type === "paragraph") {
      const text = (block.children || [])
        .map((child) => child?.text || "")
        .join("");

      if (!text) return null;

      return <p key={index}>{text}</p>;
    }

    /* =========================
       LIST
    ========================= */
    if (block.type === "list") {
      const ListTag =
        block.format === "ordered" ? "ol" : "ul";

      return (
        <ListTag key={index}>
          {(block.children || []).map(
            (item, itemIndex) => {
              const text = (item?.children || [])
                .map((child) => child?.text || "")
                .join("");

              return (
                <li key={itemIndex}>
                  {text}
                </li>
              );
            }
          )}
        </ListTag>
      );
    }

    /* =========================
       HEADING
    ========================= */
    if (block.type === "heading") {
      const text = (block.children || [])
        .map((child) => child?.text || "")
        .join("");

      const level = Math.min(
        Math.max(block.level || 2, 1),
        6
      );

      const HeadingTag = `h${level}`;

      return (
        <HeadingTag key={index}>
          {text}
        </HeadingTag>
      );
    }

    /* =========================
       QUOTE
    ========================= */
    if (block.type === "quote") {
      const text = (block.children || [])
        .map((child) => child?.text || "")
        .join("");

      return (
        <blockquote key={index}>
          {text}
        </blockquote>
      );
    }

    return null;
  });
};

const Datenschutz = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDatenschutz = async () => {
      try {
        setLoading(true);

        const result = await getDatenschutzPage();



        setData(result);
      } catch (error) {
        console.error(
          "Error fetching Datenschutz page:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDatenschutz();
  }, []);

  /* =========================
     BANNER DATA
  ========================= */

  const banner = data?.Bannerbereich;

  /* =========================
     PRIVACY ACCORDION DATA
  ========================= */

  const privacySections = (data?.Inhalt || []).map(
    (item) => ({
      id: item?.id,

      title: item?.Titel || "",

      content: renderRichText(item?.Text || []),
    })
  );



  return (
    <main>
      {/* =========================
          BANNER
      ========================= */}

      <section className="inner_hero_section">
        {loading ? (
          <InnerBannerSkeleton />
        ) : (
          <InnerBnanner
            title={banner?.Kurztitel || ""}
            heading={banner?.Titel || ""}
            description={banner?.Text || ""}
          />
        )}
      </section>

      {/* =========================
          PRIVACY ACCORDION
      ========================= */}

      <section className="impressum_section pt_pb_3">
        <div className="container">
          {!loading && privacySections.length > 0 && (
            <PrivacyAccordion
              sections={privacySections}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Datenschutz;