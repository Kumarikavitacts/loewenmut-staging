import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getDatenschutzPage = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.getDatenschutzPageEndpoint
    );

    return response?.data?.data || null;
  } catch (error) {
    console.error(
      "Error fetching Datenschutz page:",
      error
    );

    throw error;
  }
};