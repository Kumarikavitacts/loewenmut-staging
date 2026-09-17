// src/helper/Metadata.js

const SITE_NAME = "Loewenmut";
const DEFAULT_TITLE = "Loewenmut";
const DEFAULT_DESCRIPTION = "Loewenmut";
const DEFAULT_OG_IMAGE = "/images/og-image.png";

// Your Strapi backend's base URL (where uploaded media actually lives).
// Adjust the env var name to whatever you already use elsewhere in the project.
const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

function resolveOgImage(metadata) {
  // Handles both Strapi v4 (data.attributes.url) and v5 (flat url) shapes
  const raw =
    metadata?.Meta_Bild?.data?.attributes?.url || // v4
    metadata?.Meta_Bild?.url ||                   // v5
    null;

  if (!raw) return DEFAULT_OG_IMAGE; // no image uploaded — use static fallback

  // If Strapi already returned a full URL, use it as-is.
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;

  // Otherwise it's relative to the Strapi backend — prefix it.
  return `${STRAPI_BASE_URL}${raw}`;
}

export function createMetadata(pageData, fallback = {}) {
  const metadata  = pageData?.Metadaten;

  const title = metadata?.Meta_Titel || fallback.title || DEFAULT_TITLE;
  const description =
    metadata?.Meta_Beschreibung || fallback.description || DEFAULT_DESCRIPTION;

  const ogImage = resolveOgImage(metadata);

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
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