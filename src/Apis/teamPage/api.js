import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const getTeamPageHeading = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.teamSeiteEndpoint
    );
    return response?.data?.data || null;
  } catch (error) {
    console.error("Error fetching Team page heading:", error);
    throw error;
  }
};

export const getTeamMembers = async () => {
  try {
    const response = await axiosInstance.get(
      apiEndpoints.teamsEndpoint
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching Team members:", error);
    throw error;
  }
};