import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getInsightPageHeading = async () => {
    try {
      const response = await axiosInstance.get(
        apiEndpoints.getInsightPageHeadingEndpoint
      );
  
      return response?.data?.data || null;
    } catch (error) {
      console.error(
        "Error fetching Insight page heading:",
        error
      );
      throw error;
    }
  };
  
  export const getInsightPageCategory = async () => {
    try {
      const response = await axiosInstance.get(
        apiEndpoints.getInsightPageCategoryEndpoint
      );
  
      return response?.data?.data || [];
    } catch (error) {
      console.error(
        "Error fetching Insight page categories:",
        error
      );
      throw error;
    }
  };

  export const getReferenzBySlug = async (slug) => {
    try {
      // 1. Get documentId + Slug for every entry
      const slugResponse = await axiosInstance.get(
        apiEndpoints.getReferenzenDocumentsIdEndpoint
      );
  
      const documents = slugResponse?.data?.data || [];
  
      // 2. Find the entry whose Slug matches the URL param
      const matchedDocument = documents.find(
        (item) => item.Slug === slug
      );
  
      if (!matchedDocument) {
        return null;
      }
  
      // 3. Fetch the full detail payload for that documentId
      const detailResponse = await axiosInstance.get(
        apiEndpoints.getReferenzenInnerBySlugEndpoint(
          matchedDocument.documentId
        )
      );
  
      return detailResponse?.data?.data || null;
    } catch (error) {
      console.error("Error fetching Referenz:", error);
      throw error;
    }
  };