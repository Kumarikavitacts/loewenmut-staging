import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const staticRoutes = [
    "", "agentur", "leistungen", "insights", "team", "news", "kontakt",
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));

  const [leistungenRes, referenzenRes] = await Promise.all([
    axiosInstance.get(apiEndpoints.getDocumentsIdEndpoint),
    axiosInstance.get(apiEndpoints.getReferenzenDocumentsIdEndpoint),
  ]);

  const leistungenRoutes = (leistungenRes?.data?.data || [])
    .filter((item) => item.Slug)
    .map((item) => ({
      url: `${baseUrl}/leistungen/${item.Slug}`,
      lastModified: new Date(),
    }));

  const referenzenRoutes = (referenzenRes?.data?.data || [])
    .filter((item) => item.Slug)
    .map((item) => ({
      url: `${baseUrl}/insights/${item.Slug}`,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...leistungenRoutes, ...referenzenRoutes];
}