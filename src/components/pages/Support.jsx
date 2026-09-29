import InnerBnanner from "@/components/InnerBanner";
import SupportIcon from "@/components/ResuableComponents/SupportIcon";
import SupportForm from "@/components/ResuableComponents/SupportForm";
import SupportTools from "@/components/ResuableComponents/SupportTools";
import StatusHeader from "@/components/ResuableComponents/StatusHeader";
import { getMediaUrl } from "@/helper/MediaUrl";

// Strapi block-editor field (array of paragraph blocks) -> plain text
const blocksToText = (blocks) => {
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";

  return blocks
    .filter((block) => block?.type === "paragraph")
    .map((block) => block.children?.map((child) => child.text || "").join(""))
    .filter(Boolean)
    .join("\n\n");
};

const Support = ({ data }) => {
  if (!data) {
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

  const { Bannerbereich, Text, Bild, Inhalt } = data;

  // Use Strapi's "medium" version (658px) instead of the full-size upload
  const imageUrl = Bild?.formats?.medium?.url || Bild?.url;

  const supportTools = (Array.isArray(Inhalt) ? Inhalt : []).map((item) => ({
    id: item?.id,
    icon: item?.Icon?.url ? getMediaUrl(item.Icon.url) : "",
    iconAlt: item?.Icon?.alternativeText || item?.Titel || "",
    title: item?.Titel || "",
    description: blocksToText(item?.Text),
    buttonText: item?.Button?.button_text,
    buttonLink: item?.Button?.button_link,
    // Strapi field "Ziel": "Extern" opens a new tab
    newTab: item?.Button?.Ziel === "Extern",
  }));

  return (
    <main>
      {/* ================= INNER HERO ================= */}
      <section className="inner_hero_section">
        <InnerBnanner
          title={Bannerbereich?.Kurztitel || ""}
          heading={
            <>
              {Bannerbereich?.Titel || ""}
              <SupportIcon />
            </>
          }
          description={Bannerbereich?.Text || ""}
        />
      </section>

      {/* ================= SUPPORT CONTENT ================= */}
      <section className="kontakt_section pt_pb_3">
        <div className="container">
          <div className="row flex-lg-row-reverse">
            <div className="col-lg-6 form-col">
              <div className="form_wrapper">
                <div className="sub_title">{Text?.Kurztitel}</div>

                <h2 className="mb-3">{Text?.Titel}</h2>

                <p className="mb-2">{Text?.Text}</p>

                <SupportForm />
              </div>
            </div>

            <div className="col-lg-6 map-col pe-lg-5">
              {imageUrl && (
                <div className="support-img-wrapper">
                  <img
                    src={getMediaUrl(imageUrl)}
                    alt={Bild?.alternativeText || Text?.Titel || "Support"}
                    className="img-fluid"
                    width={Bild?.formats?.medium?.width || Bild?.width}
                    height={Bild?.formats?.medium?.height || Bild?.height}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <SupportTools items={supportTools} />
      </section>
    </main>
  );
};

export default Support;