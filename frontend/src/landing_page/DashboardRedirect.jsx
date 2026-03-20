import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DASHBOARD_URL } from "../config/api";

const DashboardRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    const dashboardUrl = new URL(DASHBOARD_URL);
    const dashboardPath = location.pathname.replace(/^\/dashboard/, "") || "/";

    dashboardUrl.hash = dashboardPath.startsWith("/")
      ? dashboardPath
      : `/${dashboardPath}`;

    window.location.href = dashboardUrl.toString();
  }, [location.pathname]);

  return null;
};

export default DashboardRedirect;
