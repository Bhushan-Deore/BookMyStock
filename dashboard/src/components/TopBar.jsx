import React from "react";

import Menu from "./Menu";

const TopBar = ({ isSidebarOpen, onToggleSidebar, onCloseSidebar }) => {
  return (
    <header className="topbar-container">
      <div className="topbar-primary">
        <button
          type="button"
          className="sidebar-toggle"
          aria-expanded={isSidebarOpen}
          aria-label="Toggle watchlist sidebar"
          onClick={onToggleSidebar}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="indices-container">
          <div className="nifty">
            <p className="index">NIFTY 50</p>
            <p className="index-points">100.2</p>
          </div>
          <div className="sensex">
            <p className="index">SENSEX</p>
            <p className="index-points">100.2</p>
          </div>
        </div>
      </div>

      <Menu onNavigate={onCloseSidebar} />
    </header>
  );
};

export default TopBar;
