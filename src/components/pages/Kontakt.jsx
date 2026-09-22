"use client";

import React, { useEffect, useState } from "react";

import InnerBnanner from "@/components/InnerBanner";
import VictoryIcon from "@/components/VictoryIcon";
import MapComponent from "@/components/MapComponent";
import ContactInfo from "@/components/ResuableComponents/ContactInfo";
import ContactForm from "@/components/ResuableComponents/ContactForm";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";
import { renderHtmlText } from "@/components/ResuableComponents/renderHtmlText";

import { getKontaktPage } from "@/Apis/kontaktPage/api";

const Kontakt = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchKontakt = async () => {
      try {
        setLoading(true);
        setError(false);

        const result = await getKontaktPage();

        if (!mounted) return;

        if (!result) {
          setError(true);
          return;
        }

        setData(result);
      } catch (err) {
        console.error("Error loading Kontakt page:", err);

        if (mounted) {
          setError(true);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchKontakt();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <main>
        <section className="inner_hero_section">
          <InnerBannerSkeleton />
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
            nicht geladen werden
          </>
        }
        buttonText="Zurück zur Startseite"
        buttonLink="/"
      />
    );
  }

  const {
    Telefon,
    Adresse,
    Email,
    Bannerbereich,
    Inhalt,
  } = data;

  return (
    <main>
      {/* ================= INNER HERO ================= */}
      <section className="inner_hero_section">
        <InnerBnanner
          title={Bannerbereich?.Kurztitel || ""}
          heading={
            <>
              {Bannerbereich?.Titel || ""}
              <VictoryIcon />
            </>
          }
          description={Bannerbereich?.Text || ""}
        />
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="common_info_section pt_3">
        <ContactInfo
          telefon={Telefon}
          adresse={Adresse}
          email={Email}
        />
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="kontakt_section pt_pb_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 map-col pe-lg-5">
              <div className="map-wrapper">
                <MapComponent />
              </div>

              <div className="fw-regular mt-4">
                {Inhalt?.Text || ""}
              </div>
            </div>

            <div className="col-lg-6 form-col">
              <div className="form_wrapper">
                <div className="sub_title">
                  {Inhalt?.Kurztitel || ""}
                </div>

                <h2 className="mb-4">
                  {renderHtmlText(Inhalt?.Titel)}
                </h2>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};


export default Kontakt;
