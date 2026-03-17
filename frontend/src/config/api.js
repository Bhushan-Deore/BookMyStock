import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://bookmystock.onrender.com";

export const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL ||
  "https://main.d2zver9i797lx.amplifyapp.com";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => {
    if (response?.data?.redirect) {
      window.location.href = "/";
    }
    return response;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.data?.redirect) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
