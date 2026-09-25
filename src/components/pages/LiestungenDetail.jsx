"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import InnerBnanner from "@/components/InnerBanner";
import TalkSection from "@/components/TalkSection";
import AnimatedText from "@/components/AnimatedText";
import { getLeistungBySlug } from "@/Apis/leistungenDetailPage/api";
import { getMediaUrl } from "@/helper/MediaUrl";
import LeistungenDetailSkeleton from "@/components/Skeleton/LeistungenDetailSkeleton";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";

// =====================================================
// RICH TEXT
// =====================================================

const RichText = ({ content = [] }) => {
  if (!Array.isArray(content)) return null;

  return (
    <>
      {content.map((block, blockIndex) => {

        // ---------------------------------------------
        // Paragraph
        // ---------------------------------------------

        if (block.type === "paragraph") {
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

                // Bold text
                if (child.bold) {
                  return (
                    <strong key={childIndex}>
                      {child.text}
                    </strong>
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
        }


        // ---------------------------------------------
        // Heading
        // ---------------------------------------------

        if (block.type === "heading") {
          const level = block.level || 3;

          const HeadingTag = `h${level}`;

          return (
            <HeadingTag key={blockIndex}>
              {block.children?.map(
                (child, childIndex) => (
                  <React.Fragment key={childIndex}>
                    {child.text}
                  </React.Fragment>
                )
              )}
            </HeadingTag>
          );
        }


        // ---------------------------------------------
        // List
        // ---------------------------------------------

        if (block.type === "list") {
          const ListTag =
            block.format === "ordered" ? "ol" : "ul";

          return (
            <ListTag key={blockIndex}>
              {block.children?.map(
                (listItem, itemIndex) => (
                  <li key={itemIndex}>
                    {listItem.children?.map(
                      (child, childIndex) => (
                        <React.Fragment key={childIndex}>
                          {child.text}
                        </React.Fragment>
                      )
                    )}
                  </li>
                )
              )}
            </ListTag>
          );
        }

        return null;
      })}
    </>
  );
};


// =====================================================
// COMPONENT
// =====================================================

const LeistungenDetail = () => {

  const params = useParams();

  // URL:
  // /leistungen/marke-kommunikation
  //
  // params.id = "marke-kommunikation"

  const slug = params?.id;


  const [leistungData, setLeistungData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  // ===================================================
  // FETCH DATA
  // ===================================================

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getLeistungBySlug(slug);

        if (!data) {
          setError(true);
          return;
        }

        setLeistungData(data);

      } catch (err) {
        console.error("Leistung detail error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [slug]);


  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {
    return <LeistungenDetailSkeleton />;
  }


  // ===================================================
  // NOT FOUND
  // ===================================================

  if (error || !leistungData) {
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
    Titel,
    Text,
    Untertitel,
    Inhalt = [],
    Tag_Titel,
    Tag_Kurztitel,
    Button = [],
    tag = [],
    Bildre_Text,
    Kontaktbereich,

  } = leistungData;


  return (
    <main>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="inner_hero_section">

        <InnerBnanner
          title={Tag_Titel || ""}
          heading={Titel || ""}
          description={Text || ""}
        />

      </section>


      {/* =================================================
          SECTION 1
      ================================================= */}

      <section className="content_emo_section liestung_emo_sec pt_pb_3">

        <div className="container">

          <div className="row">

            {/* -------------------------------------------
                Animated Circle
            ------------------------------------------- */}

            <div className="col-12 col-lg-4 ms-auto img-col">

              <div className="anim_circle mx-auto">

                <AnimatedText />

              </div>

            </div>


            {/* -------------------------------------------
                CONTENT
            ------------------------------------------- */}

            <div className="col-12 col-lg-8 content-col mt-4 mt-lg-0">

              <div className="sec-content">

                <RichText content={Inhalt} />


                {/* ---------------------------------------
                    MAIN BUTTON
                --------------------------------------- */}

                {Button?.length > 0 && (
                  <div className="theme_btn_wrap mt-4">

                    {Button.map((button) => (

                      <Link
                        key={button.id}
                        href={button.button_link }
                        className="button theme_btn"
                      >

                        {button.button_text}

                        <img
                          src="/images/btn-arrow.svg"
                          alt="Arrow"
                        />

                      </Link>

                    ))}

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          SECTION 2 - TAG CARDS
      ================================================= */}

      <section className="ld_section_2 pt_pb_3">

        <div className="container">

          <div className="heading-content mb-4">

            <div className="sub_title">
              {Tag_Kurztitel || ""}
            </div>

            <h2
              dangerouslySetInnerHTML={{
                __html: Tag_Titel || "",
              }}
            />

          </div>


          <div className="service-grid">

            {tag.map((card, index) => (

              <div
                key={card.id || index}
                className={`service-card ${
                  index === 0 ? "active" : ""
                }`}
              >

                {/* ICON */}

                <div className="service-icon">

                  {card.Icon?.url && (
                    <img
                      src={getMediaUrl(card.Icon.url)}
                      alt={card.Icon.alternativeText || card.Titel || ""}
                    />
                  )}

                </div>


                {/* TITLE */}

                <h3>
                  {card.Titel}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {card.Text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          SECTION 3 - IMAGE + CONTENT
      ================================================= */}

      {Bildre_Text && (

        <section
          className="ld_section_3 pt_pb_3 position-relative"
          style={{
            backgroundImage:
              "url('/images/bg-pattern.png')",
          }}
        >

          <div className="container">

            <div className="row flex-lg-row-reverse">


              {/* -----------------------------------------
                  IMAGE
              ----------------------------------------- */}

              <div className="col-12 col-lg-5 ms-auto img-col">

                {Bildre_Text.Bild?.length > 0 && (

                  <img
                    src={getMediaUrl(
                      Bildre_Text.Bild[0]?.url
                    )}
                    alt={
                      Bildre_Text.Bild[0]?.alternativeText ||
                      Bildre_Text.Titel ||
                      Titel ||
                      ""
                    }
                  />

                )}

              </div>


              {/* -----------------------------------------
                  CONTENT
              ----------------------------------------- */}

              <div className="col-12 col-lg-7 content-col mt-4 mt-lg-0">

                <div className="sec-content list_tick">


                  {/* SUB TITLE */}

                  {Bildre_Text.Kurztitel && (
                    <div className="sub_title">

                      {Bildre_Text.Kurztitel}

                    </div>
                  )}


                  {/* TITLE */}

                  {Bildre_Text.Titel && (

                    <h2
                      dangerouslySetInnerHTML={{
                        __html: Bildre_Text.Titel,
                      }}
                    />

                  )}


                  {/* DESCRIPTION */}

                  <RichText
                    content={
                      Bildre_Text.Beschreibung || []
                    }
                  />


                  {/* BUTTON */}

                  {Bildre_Text.Button?.length > 0 && (

                    <div className="theme_btn_wrap mt-4">

                      {Bildre_Text.Button.map(
                        (button) => (

                          <Link
                            key={button.id}
                            href={
                              button.button_link || "#"
                            }
                            className="button theme_btn"
                          >

                            {button.button_text}

                            <img
                              src="/images/btn-arrow.svg"
                              alt="Arrow"
                            />

                          </Link>

                        )
                      )}

                    </div>

                  )}

                </div>

              </div>

            </div>

          </div>

        </section>

      )}


      {/* =================================================
          TALK
      ================================================= */}

      {leistungData && leistungData?.Kontaktbereich &&
       <section className="pt_pb_3 talk_section">

      <TalkSection talkData={leistungData?.Kontaktbereich} />
      </section>
      }

    </main>
  );
};

export default LeistungenDetail;