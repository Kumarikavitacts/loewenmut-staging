import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getNewsPageHeading = async () => {
    try {
      const response = await axiosInstance.get(
        apiEndpoints.getNewsHeaderEndpoint
      );
  
      return response?.data?.data || null;
    } catch (error) {
      console.error(
        "Error fetching News page heading:",
        error
      );
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
      console.error(
        "Error fetching News page categories:",
        error
      );
      throw error;
    }
  };
