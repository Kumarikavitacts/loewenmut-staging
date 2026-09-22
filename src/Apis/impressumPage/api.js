import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getImpressumPage = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.getImpressumPageEndpoint
    );

    return response?.data?.data || null;
  } catch (error) {
    console.error("Error fetching Impressum page:", error);
    throw error;
  }
};