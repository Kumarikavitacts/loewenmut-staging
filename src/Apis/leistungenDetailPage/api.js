import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";



export const getLeistungenPage = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.getLeistungenPageEndpoint
    );

    return response?.data?.data || null;
  } catch (error) {
    console.error("Error fetching Leistungen page:", error);
    throw error;
  }
};
export const getLeistungBySlug = async (slug) => {
  try {
    // 1. Get documentId + Slug
    const slugResponse = await axiosInstance.get(
      apiEndpoints.getDocumentsIdEndpoint
    );

    const documents = slugResponse?.data?.data || [];

    // 2. Find matching slug
    const matchedDocument = documents.find(
      (item) => item.Slug === slug
    );

    if (!matchedDocument) {
      return null;
    }

    // 3. Get documentId
    const documentId = matchedDocument.documentId;

    // 4. Call second API
    const detailResponse = await axiosInstance.get(
      apiEndpoints.getleistungenInnerBySlugEndpoint(documentId)
    );

    return detailResponse?.data?.data || null;
  } catch (error) {
    console.error("Error fetching Leistung:", error);
    throw error;
  }
};