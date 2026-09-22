import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getNewsPageHeading = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.getNewsHeaderEndpoint
    );

    return response?.data?.data || null;
  } catch (error) {
    console.error("Error fetching News page heading:", error);
    throw error;
  }
};

export const getNewsPageCategory = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.getNewsCardsCategoryEndpoint
    );

    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching News page categories:", error);
    throw error;
  }
};


// -----------------------------------------
// GET NEWS DETAIL BY SLUG
// -----------------------------------------
export const getNewsBySlug = async (slug) => {
  try {
    // 1. Get documentId + slug
    const slugResponse = await axiosInstance.get(
      apiEndpoints.getNewsDocumentsIdEndpoint
    );

    const documents = slugResponse?.data?.data || [];

    // 2. Find matching slug
    const matchedDocument = documents.find(
      (item) => item.slug === slug
    );

    if (!matchedDocument) {
      return null;
    }

    // 3. Get complete news detail using documentId
    const detailResponse = await axiosInstance.get(
      apiEndpoints.getNewsInnerBySlugEndpoint(
        matchedDocument.documentId
      )
    );

    return detailResponse?.data?.data || null;
  } catch (error) {
    console.error("Error fetching News detail:", error);
    throw error;
  }
};