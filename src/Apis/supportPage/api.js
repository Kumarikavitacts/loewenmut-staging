import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

// Runs on the server. `cache()` makes generateMetadata() and the page share
// ONE request, and `revalidate` keeps the result for 5 minutes.
export const getSupportPage = async () => {
    try {
    const response = await axiosInstance.get(
      apiEndpoints.getSupportPageEndpoint
    );

    return response?.data?.data || null;
  } catch (error) {
    console.error("Error fetching Support page data:", error);
    throw error;
  }
};