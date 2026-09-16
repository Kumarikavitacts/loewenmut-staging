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