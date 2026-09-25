// src/helper/Metadata.js

const SITE_NAME = "Loewenmut";
const DEFAULT_TITLE = "Loewenmut";
const DEFAULT_DESCRIPTION = "Loewenmut";
const DEFAULT_OG_IMAGE = "/images/website_image.png";


const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

// Some content types have Metadaten as a single component (object),
// others have it set to "repeatable" in Strapi (array). Normalize both.
const normalizeMetadaten = (metadaten) => {
  if (!metadaten) return null;
  if (Array.isArray(metadaten)) return metadaten[0] || null;
  return metadaten;
};

function resolveOgImage(metadata) {
  const raw =
    metadata?.Meta_Bild?.data?.attributes?.url ||
    metadata?.Meta_Bild?.url ||
    null;

  if (!raw) return DEFAULT_OG_IMAGE;
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;

  return `${STRAPI_BASE_URL}${raw}`;
}

export function createMetadata(pageData, fallback = {},path = "/") {
  const metadata = normalizeMetadaten(pageData?.Metadaten);

  const title = metadata?.Meta_Titel || fallback.title || DEFAULT_TITLE;
  const description =
    metadata?.Meta_Beschreibung || fallback.description || DEFAULT_DESCRIPTION;

  const ogImage = resolveOgImage(metadata);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}