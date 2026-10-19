// src/helper/NewsMedia.js
// Shared media normalizer for news items (home page, /news list, related news).
// Reads Strapi's `Bild_oder_Video` switch and returns what NewsCard needs.

export const getNewsMedia = (item) => {
  const bild = Array.isArray(item?.Bild) ? item.Bild[0] : item?.Bild;

  const imageUrl =
    bild?.formats?.large?.url ||
    bild?.formats?.medium?.url ||
    bild?.formats?.small?.url ||
    bild?.formats?.thumbnail?.url ||
    bild?.url ||
    "";

  const videoUrl = item?.Video?.url || "";
  const posterUrl = item?.Videominiatur?.url || "";

  // Show video only when backend says "Video" AND a video file exists.
  // Otherwise fall back to the image.
  const mediaType =
    item?.Bild_oder_Video === "Video" && videoUrl ? "Video" : "Bild";

  return {
    mediaType,
    image: imageUrl, // kept for backward compatibility
    videoUrl,
    videoMime: item?.Video?.mime || "video/mp4",
    posterUrl,
    alternativeText: bild?.alternativeText || item?.Titel || "News",
  };
};
