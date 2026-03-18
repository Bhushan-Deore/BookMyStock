import { useEffect, useState } from "react";
import {
  apiClient,
  bootstrapAuthTokenFromUrl,
  FRONTEND_URL,
  getAuthToken,
} from "../config/api";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verify = async () => {
      bootstrapAuthTokenFromUrl();

      if (!getAuthToken()) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await apiClient.get("/verify");
        setIsAuthenticated(Boolean(data?.success));
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verify();
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      window.location.href = FRONTEND_URL;
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
