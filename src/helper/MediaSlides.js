import { getMediaUrl } from "@/helper/MediaUrl";

// Picks the first available size of a Strapi media file (falls back to the original)
const pickUrl = (file, formats = []) => {
  for (const name of formats) {
    const url = file?.url;
    if (url) return url;
  }
  return file?.url || "";
};

// Strapi block-editor "Text" field -> array of plain paragraphs
const blocksToParagraphs = (blocks) => {
  if (typeof blocks === "string") return blocks.trim() ? [blocks.trim()] : [];
  if (!Array.isArray(blocks)) return [];

  return blocks
    .filter((block) => block?.type === "paragraph")
    .map((block) =>
      (block.children || []).map((child) => child.text || "").join("").trim()
    )
    .filter(Boolean);
};

// The button already gets an arrow icon -> remove a typed arrow ("... →")
const cleanButtonText = (text = "") =>
  String(text || "")
    .replace(/\s*[→➔➜➝⟶>»]+\s*$/u, "")
    .trim();

/**
 * Converts one "Projektinformationen" entry into a slide:
 *   { id, type: "video" | "image", src, poster, thumb, alt,
 *     subtitle, title, paragraphs, buttonText, buttonLink }
 *
 * Media rule:  video available -> video,  else image available -> image,
 *              neither -> null (slide is skipped).
 * If the editor explicitly picked "Bild" and an image exists, the image wins.
 */
export const normalizeMediaSlide = (item) => {
  if (!item) return null;

  const videoUrl = item?.Video?.url || "";
  const imageUrl = item?.Bild?.url || "";

  const preferImage = item?.Bild_oder_Video === "Bild" && Boolean(imageUrl);
  const isVideo = Boolean(videoUrl) && !preferImage;

  if (!isVideo && !imageUrl) return null;

  const text = {
    subtitle: item?.Kurztitel || "",
    title: item?.Titel || "",
    paragraphs: blocksToParagraphs(item?.Text),
    buttonText: cleanButtonText(item?.button_text),
    buttonLink: item?.button_link || "#",
  };

  if (isVideo) {
    const posterFile = item?.Videominiatur?.url ? item.Videominiatur : item?.Bild;

    return {
      id: item.id,
      type: "video",
      src: getMediaUrl(videoUrl),
      poster: posterFile?.url
        ? getMediaUrl(pickUrl(posterFile, ["large", "medium"]))
        : undefined,
      thumb: posterFile?.url
        ? getMediaUrl(pickUrl(posterFile, ["thumbnail", "small"]))
        : undefined,
      alt: item?.Titel || "",
      ...text,
    };
  }

  return {
    id: item.id,
    type: "image",
    src: getMediaUrl(pickUrl(item.Bild, ["large", "medium"])),
    poster: undefined,
    thumb: getMediaUrl(pickUrl(item.Bild, ["thumbnail", "small"])),
    alt: item?.Bild?.alternativeText || item?.Titel || "",
    ...text,
  };
};

export const normalizeMediaSlides = (items = []) =>
  (Array.isArray(items) ? items : []).map(normalizeMediaSlide).filter(Boolean);
