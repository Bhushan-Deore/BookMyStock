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

export const bootstrapAuthTokenFromUrl = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const searchToken = searchParams.get("token");

  const rawHash = window.location.hash.replace(/^#/, "");
  const [hashPath = "", hashQuery = ""] = rawHash.split("?");
  const hashParams = new URLSearchParams(hashQuery);
  const legacyHash = rawHash.startsWith("/") ? "" : rawHash;
  const legacyParams = new URLSearchParams(legacyHash);
  const token =
    searchToken || hashParams.get("token") || legacyParams.get("token");

  if (token) {
    saveAuthToken(token);
    searchParams.delete("token");
    hashParams.delete("token");
    legacyParams.delete("token");

    const cleanedSearch = searchParams.toString();
    const cleanedHash = rawHash.startsWith("/")
      ? `${hashPath}${hashParams.toString() ? `?${hashParams.toString()}` : ""}`
      : legacyParams.toString();
    const cleanedUrl = `${window.location.pathname}${
      cleanedSearch ? `?${cleanedSearch}` : ""
    }${cleanedHash ? `#${cleanedHash}` : ""}`;
    window.history.replaceState(null, "", cleanedUrl);
  }

  return token;
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
      window.location.href = FRONTEND_URL;
    }
    return response;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.data?.redirect) {
      clearAuthToken();
      window.location.href = FRONTEND_URL;
    }
    return Promise.reject(error);
  }
);
