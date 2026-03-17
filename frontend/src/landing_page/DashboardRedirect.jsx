import { useEffect } from "react";
import { DASHBOARD_URL } from "../config/api";

const DashboardRedirect = () => {
  useEffect(() => {
    window.location.href = DASHBOARD_URL;
  }, []);

  return null;
};

export default DashboardRedirect;
