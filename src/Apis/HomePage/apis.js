import { apiEndpoints } from "@/config";
import axiosInstance from "@/Apis/axiosInstance";

export const homepageApiStructure ={
    getHeader:async()=>{
        try {
            const response = await  axiosInstance.get(apiEndpoints.homeEndpoint);
            return response.data;
          } catch (error) {
            console.error("Error fetching leistungens:", error);
            throw error;
          }
    },
    getLeistungens: async () => {
        try {
          const response = await  axiosInstance.get(apiEndpoints.leistungensEndpoint);
          return response.data;
        } catch (error) {
          console.error("Error fetching leistungens:", error);
          throw error;
        }
      },
}