import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getAgenturPageData = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.agenturSeiteEndpoint
    );
    return response?.data?.data || null;
  } catch (error) {
    console.error("Error fetching Agentur page data:", error);
    throw error;
  }
};
