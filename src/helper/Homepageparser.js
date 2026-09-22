// src/helper/Homepageparser.js

export const Homepageparser = (apiData) => {
  if (!apiData) return null;

  // --------------------------------
  // NEWS
  // --------------------------------

  const normalizedNews = (apiData?.News?.news || []).map((item) => {
    const image =
      item?.Bild?.formats?.small ||
      item?.Bild?.formats?.thumbnail ||
      item?.Bild;

    const category = item?.news_kategories?.[0];

    // Get badge class directly from backend Farbe
    const categoryColor = category?.Farbe
      ?.toString()
      .trim()
      .toLowerCase();

    return {
      id: item?.id || null,
      documentId: item?.documentId || null,

      title: item?.Titel || "",
      description: item?.Text || "",
      date: item?.Publikation || "",
      slug: item?.slug || "",

      image: image?.url || "",

      alternativeText:
        item?.Bild?.alternativeText ||
        item?.Titel ||
        "News",

      // Category data from backend
      category: category?.Titel || "",

      // Farbe comes directly from Strapi
      categoryColor: categoryColor || "",

      // Convert backend Farbe into your existing CSS class
      categoryClass: categoryColor
        ? `${categoryColor}_badge`
        : "",
    };
  });

  // --------------------------------
  // RETURN NORMALIZED HOME DATA
  // --------------------------------

  return {
    // HERO
    hero: {
      untertitel: apiData?.Untertitel || "",
      titel1: apiData?.Titel_1 || "",
      titel2: apiData?.Titel_2 || "",
      beschreibung: apiData?.Beschreibung || "",
      benefits: apiData?.Benefits || [],
      kontaktbereich: apiData?.Kontaktbereich || null,
    },

    // SERVICES
    servicesIntro: apiData?.Leistungen_Inhalt || null,

    // PROJECT
    project: apiData?.Bildre_Text || null,

    // INSIGHTS / REFERENCES
    references: apiData?.References || {
      id: null,
      Kurztitel: "",
      Titel: "",
      Button: [],
      referenzens: [],
    },

    // WORK
    workMobile: apiData?.Arbeiten || null,

    // NEWS
    news: {
      id: apiData?.News?.id || null,
      Kurztitel: apiData?.News?.Kurztitel || "",
      Titel: apiData?.News?.Titel || "",
      Button: apiData?.News?.Button || [],
      news: normalizedNews,
    },
  };
};