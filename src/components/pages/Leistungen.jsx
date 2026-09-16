"use client";

import React, { useEffect, useState } from "react";
import InnerBnanner from "@/components/InnerBanner";
import LiestungenSlider from "@/components/LeistungenSlider";
import StackingCards from "@/components/StackingCards";
import RollingEyes from "@/components/RollingEyes";

import { getLeistungenPage } from "@/Apis/leistungenDetailPage/api";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";
import SectionSkeleton from "@/components/Skeleton/SectionSkeleton";
import LeistungenListSkeleton from "@/components/Skeleton/LeistungenListSkeleton";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";


const Leistungen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const result = await getLeistungenPage();

        if (!result) {
          setError(true);
          return;
        }

        setData(result);
      } catch (err) {
        console.error("Leistungen page error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main
        className="leistungen-page"
        aria-busy="true"
        aria-label="Seite wird geladen"
      >
        {/* =========================================
            HERO SKELETON
        ========================================= */}
        <section className="inner_hero_section news_banner">
          <div className="container">
            <InnerBannerSkeleton />
          </div>
        </section>

        {/* =========================================
            LEISTUNGEN SKELETON
        ========================================= */}
        <section className="liestungen_section pb_3 overflow-hidden">
          <div className="container">
            <LeistungenListSkeleton />
          </div>
        </section>

        {/* =========================================
            WIE FUNKTIONIERT DAS? SKELETON
        ========================================= */}
        <section className="liestungen_section pt_3">
          <div className="container small_container">
            <SectionSkeleton />
          </div>
        </section>
      </main>
    );
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
      buttonLink="/"
    />
    );
  }

  const {
    Kurztitel,
    Titel,
    Text,
    Funktioniert,
  } = data;

  return (
    <main>
      {/* =================================================
          HERO
      ================================================= */}

      <section className="inner_hero_section news_banner">
        <InnerBnanner
          title={Kurztitel || ""}
          heading={
            <>
              {Titel || ""}
              <RollingEyes />
            </>
          }
          description={Text || ""}
        />
      </section>

      {/* =================================================
          LEISTUNGEN SLIDER
      ================================================= */}

      <section
        className="liestungen_section pb_3 overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-pattern.png')",
        }}
      >
        <div className="container">
          <LiestungenSlider />
        </div>
      </section>

      {/* =================================================
          WIE FUNKTIONIERT DAS?
      ================================================= */}

      {Funktioniert && (
        <section className="liestungen_section pt_3">
          <div className="container small_container">
            <div className="heading-content text-center">

              {Funktioniert.Kurztitel && (
                <div className="sub_title justify-content-center">
                  {Funktioniert.Kurztitel}
                </div>
              )}

              {Funktioniert.Titel && (
                <h2
                  dangerouslySetInnerHTML={{
                    __html: Funktioniert.Titel,
                  }}
                />
              )}

              {Funktioniert.Text && (
                <p>{Funktioniert.Text}</p>
              )}
            </div>

            <StackingCards
              cardsData={Funktioniert.Funktionsweise || []}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default Leistungen;