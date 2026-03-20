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

const AUTH_TOKEN_KEY = "bookmystock_token";

export const saveAuthToken = (token) => {
  if (token) {
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
};

export const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY);

export const clearAuthToken = () => {
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
};

export const buildDashboardUrl = (token, path = "/") => {
  const dashboardUrl = new URL(DASHBOARD_URL);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const [hashPath, hashQuery = ""] = normalizedPath.split("?");
  const hashParams = new URLSearchParams(hashQuery);

  if (token) {
    hashParams.set("token", token);
  }

  dashboardUrl.hash = hashParams.toString()
    ? `${hashPath}?${hashParams.toString()}`
    : hashPath;

  return dashboardUrl.toString();
};

apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    if (response?.data?.redirect) {
      clearAuthToken();
      window.location.href = "/";
    }
    return response;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.data?.redirect) {
      clearAuthToken();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
