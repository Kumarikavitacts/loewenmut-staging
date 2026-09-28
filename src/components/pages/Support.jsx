import InnerBnanner from "@/components/InnerBanner"

import SupportIcon from "@/components/ResuableComponents/SupportIcon"

import SupportForm from "@/components/ResuableComponents/SupportForm"
import SupportTools from "@/components/ResuableComponents/SupportTools";
const supportTools = [
  {
    id: "teamviewer",
    icon: "/images/teamviewer.svg",
    title: "TeamViewer",
    description:
      "Bei der Fernwartung vertrauen wir auf die meistgenutzte Lösung für Fernwartung, Fernzugriff und Online Meetings. Nach Ihrem Anruf bei uns geht es in wenigen Sekunden los: Ohne Installation - einfach herunterladen, doppelklicken und starten!",
    buttonText: "Teamviewer",
    buttonLink: "https://www.teamviewer.com/",
  },
  {
    id: "anydesk",
    icon: "/images/anydesk.svg",
    title: "Anydesk",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit..",
    buttonText: "Anydesk",
    buttonLink: "https://anydesk.com/",
  },
];
const Support = () => {
  return (
      <main>
              {/* ================= INNER HERO ================= */}
              <section className="inner_hero_section">
                <InnerBnanner
                  title={"Support"}
                  heading={  <>
              {"Haben Sie eine Frage?"}
              <SupportIcon />
            </>}
                  description={"Erzählen Sie uns kurz, worum es geht. Wir hören zu, denken mit und melden uns persönlich bei Ihnen."}
                />
              </section>
                 {/* ================= CONTACT CONTENT ================= */}
      <section className="kontakt_section pt_pb_3">
        <div className="container">
          <div className="row flex-lg-row-reverse">
            

            <div className="col-lg-6 form-col">
              <div className="form_wrapper">
                <div className="sub_title">
                  {"Wir freuen uns"}
                </div>

                <h2 className="mb-3">
                  {"Supportanfrage"}
                </h2>
                <p className="mb-2">
                    {"Wir sind gerne für Sie da und freuen uns über Ihre Nachricht oder Anfrage."}
                </p>
                <SupportForm />
              </div>
            </div>
            <div className="col-lg-6 map-col pe-lg-5">
              <div className="support-img-wrapper">
                 <img src="/images/support_img.png" alt="support" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SupportTools items={supportTools} />
      </section>
        </main>
  )
}

export default Support