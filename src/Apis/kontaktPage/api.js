import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getKontaktPage = async () => {
    try {
      const response = await axiosInstance.get(
        apiEndpoints.getKontaktPageEndpoint
      );
  
      return response?.data?.data || null;
    } catch (error) {
      console.error("Error fetching Kontakt page:", error);
      throw error;
    }
  };