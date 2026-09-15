export const getMediaUrl = (relativeUrl) => {
  if (!relativeUrl) return "";
  if (/^https?:\/\//i.test(relativeUrl)) return relativeUrl;

  const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return `${backendUrl.replace(/\/$/, "")}${relativeUrl}`;
};

export const getSvgAsText = async (relativeUrl) => {
  if (!relativeUrl) return "";

  const url = getMediaUrl(relativeUrl);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch SVG: ${response.status}`);
  }

  return await response.text();
}