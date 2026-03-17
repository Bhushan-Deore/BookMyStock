import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://bookmystock.onrender.com";

export const FRONTEND_URL =
  import.meta.env.VITE_FRONTEND_URL ||
  "https://main.df2o8s39u2pcw.amplifyapp.com";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => {
    if (response?.data?.redirect) {
      window.location.href = FRONTEND_URL;
    }
    return response;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.data?.redirect) {
      window.location.href = FRONTEND_URL;
    }
    return Promise.reject(error);
  }
);
