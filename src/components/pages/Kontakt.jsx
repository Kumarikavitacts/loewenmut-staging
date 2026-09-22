"use client";

import React from "react";
import InnerBnanner from '@/components/InnerBanner';
import VictoryIcon from "@/components/VictoryIcon";
import MapComponent from "@/components/MapComponent";
import ContactInfo from "@/components/ResuableComponents/ContactInfo";
import ContactForm from "@/components/ResuableComponents/ContactForm";

const Kontakt = () => {
  return (
    <main>
      <section className="inner_hero_section">
        <InnerBnanner
          title={"Starten Sie jetzt Ihren Countdown"}
          heading={<> Wie können wir Sie unterstützen?<VictoryIcon /> </>}
          description={<>Erzählen Sie uns kurz, worum es geht. Wir hören zu, denken mit und melden uns persönlich bei Ihnen. </>}
        />
      </section>

      <section className="common_info_section pt_3">
        <ContactInfo />
      </section>

      <section className="kontakt_section pt_pb_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 map-col pe-lg-5">
              <div className="map-wrapper">
                <MapComponent />
              </div>
              <div className="fw-regular mt-4">
                Kommen Sie doch mal bei uns vorbei, rufen Sie uns an oder füllen dieses Formular aus, um mit uns ins Gespräch zu kommen!
              </div>
            </div>

            <div className="col-lg-6 form-col">
              <div className="form_wrapper">
                <div className="sub_title">WAS DÜRFEN WIR FÜR SIE ANPACKEN?</div>
                <h2 className="mb-4">Erzählen Sie uns von <span>Ihrem Projekt.</span></h2>
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