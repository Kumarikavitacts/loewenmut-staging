// src/helper/Metadata.js

/*
 * Every Strapi page/collection type in this project carries a
 * "Metadaten" component with Meta_Titel / Meta_Beschreibung
 * fields. This turns that component into the object Next.js's
 * generateMetadata() expects, with a sensible fallback so a page
 * still gets a title/description if the API call fails or the
 * editor hasn't filled the SEO fields in yet.
 */

const SITE_NAME = "Loewenmut";

const DEFAULT_TITLE = "Loewenmut";
const DEFAULT_DESCRIPTION = "Loewenmut";

export function createMetadata(pageData, fallback = {}) {
  const metadata = pageData?.Metadaten;

  const title =
    metadata?.Meta_Titel ||
    fallback.title ||
    DEFAULT_TITLE;

  const description =
    metadata?.Meta_Beschreibung ||
    fallback.description ||
    DEFAULT_DESCRIPTION;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}