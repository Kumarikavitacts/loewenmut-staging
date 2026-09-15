import axios from "axios";

// const baseURL = "https://backend-strapi.loewenmut.ch/"
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!baseURL) {
  console.warn(
    "NEXT_PUBLIC_BACKEND_URL is not configured. Strapi requests will not work until it is added to .env.local."
  );
}

const axiosInstance =  axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
