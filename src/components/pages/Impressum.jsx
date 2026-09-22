"use client";

import React, { useEffect, useState } from "react";
import InnerBnanner from '@/components/InnerBanner';
import ContactInfo from '@/components/ResuableComponents/ContactInfo'
import { getImpressumPage } from "@/Apis/impressumPage/api";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";
import InnerBannerSkeleton from "@/components/Skeleton/InnerBannerSkeleton";

const Impressum = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchImpressum = async () => {
            try {
                setLoading(true);
                setError(false);

                const result = await getImpressumPage();

                if (!result) {
                    setError(true);
                    return;
                }

                setData(result);
            } catch (error) {
                console.error("Error fetching Impressum:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchImpressum();
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
                        nicht gefunden werden
                    </>
                }
                buttonText="Zurück zur Startseite"
                buttonLink="/"
            />
        );
    }
    // distructure data 
    const {
        Telefon,
        Adresse,
        Email,
        Bannerbereich,
        Inhalt = [],
      } = data;
    return (
        <main>
            <section className="inner_hero_section">
            <InnerBnanner
            title={Bannerbereich?.Kurztitel || ""}
            heading={Bannerbereich?.Titel || ""}
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
      <section className="impressum_section pt_pb_3">
  <div className="container">
    {Inhalt?.map((item, index) => {
      const text = item?.Text
        ?.map((block) =>
          block?.children
            ?.map((child) => child?.text || "")
            .join("")
        )
        .join("\n");

      return (
        <div
          className={`imprsm_block ${
            index > 0 ? "mt-4 mt-lg-5" : ""
          }`}
          key={item?.id || index}
        >
          {item?.Titel && <h2>{item.Titel}</h2>}

          {text && <p>{text}</p>}
        </div>
      );
    })}
  </div>
</section>
        </main>
    )
}

export default Impressum
