// Splits the Strapi "Modul" dynamic zone (an ordered array of differently
// shaped components) into named slots your section components can consume
// directly as props. Position-based, not just type-based, because your CMS
// reuses "modules.kurztitel-titel-text-button" twice for two different
// purposes (Services intro text vs. Insights heading) — the 1st occurrence
// is always Services, the 2nd is always Insights, matching how the modules
// were authored in the Strapi dynamic zone.
// Lives at: src/helper/homepageParser.js
export const Homepageparser = (apiData) => {
  if (!apiData) return null;

  const modules = apiData.Modul || [];

  let benefits = null;
  let servicesIntro = null;
  let project = null;
  let insightsIntro = null;
  let kurztitelSeen = 0; // tracks which occurrence of the reused component we're on
  let references = null;
  let workMobile = null;
  modules.forEach((mod) => {
    switch (mod.__component) {
      case "modules.benefits":
        benefits = mod.Benefits_Data || [];
        break;

      case "modules.kurztitel-titel-text-button":
        kurztitelSeen += 1;
        if (kurztitelSeen === 1) {
          servicesIntro = mod;
        } else {
          insightsIntro = mod;
        }
        break;

      case "modules.bild-re-text":
        project = mod;
        break;

      case "modules.references":
        references = mod;
        break;
      case "modules.arbeiten":
        workMobile = mod;
        break;


      default:
        break;
    }
  });

  return {
    hero: {
      untertitel: apiData.Untertitel,
      titel1: apiData.Titel_1,
      titel2: apiData.Titel_2,
      beschreibung: apiData.Beschreibung,
      benefits: benefits || [],
    },
    servicesIntro,
    project,
    insightsIntro,
    references: references || {
      id: null,
      Kurztitel: "",
      Titel: "",
      referenzens: [],
    },
    workMobile,
  };
};