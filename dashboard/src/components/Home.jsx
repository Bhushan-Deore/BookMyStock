import React, { useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-shell">
      <TopBar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((current) => !current)}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      />
      <Dashboard isSidebarOpen={isSidebarOpen} onCloseSidebar={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default Home;
