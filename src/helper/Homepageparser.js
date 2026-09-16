// src/helper/homepageParser.js

export const Homepageparser = (apiData) => {
  if (!apiData) return null;

  const modules = apiData.Modul || [];

  let benefits = null;
  let servicesIntro = null;
  let project = null;
  let insightsIntro = null;
  let references = null;
  let workMobile = null;
  let news = null;

  let kurztitelSeen = 0;
  let bildReTextSeen = 0;

  modules.forEach((mod) => {
    switch (mod.__component) {
      /*
       * ----------------------------------------
       * BENEFITS
       * ----------------------------------------
       */
      case "modules.benefits":
        benefits = mod.Benefits_Data || [];
        break;

      /*
       * ----------------------------------------
       * KURZTITEL / TITEL / TEXT
       * ----------------------------------------
       *
       * This component is reused twice:
       * 1st = services intro
       * 2nd = insights intro
       */
      case "modules.kurztitel-titel-text-button":
        kurztitelSeen += 1;

        if (kurztitelSeen === 1) {
          servicesIntro = mod;
        } else if (kurztitelSeen === 2) {
          insightsIntro = mod;
        }

        break;

      /*
       * ----------------------------------------
       * BILD / VIDEO
       * ----------------------------------------
       *
       * This component is also reused:
       * 1st = Project
       * 2nd = CTA
       */
      case "modules.bild-re-text":
        bildReTextSeen += 1;

        if (bildReTextSeen === 1) {
          project = mod;
        }

        // Don't overwrite project with the second one.
        break;

      /*
       * ----------------------------------------
       * REFERENCES
       * ----------------------------------------
       */
      case "modules.references":
        references = mod;
        break;

      /*
       * ----------------------------------------
       * WORK / PROCESS
       * ----------------------------------------
       */
      case "modules.arbeiten":
        workMobile = mod;
        break;

      /*
       * ----------------------------------------
       * NEWS
       * ----------------------------------------
       */
      case "modules.news":
        news = mod;
        break;

      default:
        break;
    }
  });

  /*
   * ----------------------------------------
   * NORMALIZE NEWS DATA
   * ----------------------------------------
   */

  const normalizedNews = (news?.news || []).map((item) => {
    const image =
      item?.Bild?.formats?.small ||
      item?.Bild?.formats?.thumbnail ||
      item?.Bild;

    return {
      id: item?.id,
      documentId: item?.documentId,

      title: item?.Titel || "",

      description: item?.Text || "",

      date: item?.Publikation || "",

      slug: item?.slug || "",

      image: image?.url || "",

      alternativeText:
        item?.Bild?.alternativeText ||
        item?.Titel ||
        "News",

      // Your current API doesn't contain category.
      category: item?.category || "",

      categoryClass: item?.categoryClass || "",
    };
  });

  return {
    /*
     * HERO
     */
    hero: {
      untertitel: apiData.Untertitel,
      titel1: apiData.Titel_1,
      titel2: apiData.Titel_2,
      beschreibung: apiData.Beschreibung,
      benefits: benefits || [],
      kontaktbereich: apiData.Kontaktbereich || null,

    },

    /*
     * SERVICES
     */
    servicesIntro,

    /*
     * PROJECT
     */
    project,

    /*
     * INSIGHTS
     */
    insightsIntro,

    /*
     * REFERENCES
     */
    references: references || {
      id: null,
      Kurztitel: "",
      Titel: "",
      referenzens: [],
    },

    /*
     * WORK
     */
    workMobile,

    /*
     * NEWS
     */
    news: {
      id: news?.id || null,

      Kurztitel: news?.Kurztitel || "",

      Titel: news?.Titel || "",

      Button: news?.Button || [],

      news: normalizedNews,
    },
  };
};
