import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Orders", path: "/orders" },
  { label: "Holdings", path: "/holdings" },
  { label: "Positions", path: "/positions" },
  { label: "Funds", path: "/funds" },
  { label: "Apps", path: "/apps" },
];

const isRouteActive = (pathname, path) => {
  if (path === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(path);
};

const Menu = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = useMemo(() => {
    const currentPath = location.pathname || "/";
    return currentPath === "" ? "/" : currentPath;
  }, [location.pathname]);

  const userName = "BookMyStock User";
  const userInitials = "BM";

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="menu-container">
      <div className="menu-branding">
        <img src="logo.png" alt="BookMyStock logo" className="dashboard-logo" />
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle dashboard navigation"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`menus ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                className={isRouteActive(pathname, item.path) ? "menu selected" : "menu"}
                to={item.path}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu-divider" />

        <Link
          className={`profile-link ${isRouteActive(pathname, "/profile") ? "active" : ""}`}
          to="/profile"
          onClick={closeMenu}
        >
          <div className="profile">
            <div className="avatar">{userInitials}</div>
            <div className="profile-copy">
              <p className="username">{userName}</p>
              <span>Profile</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
