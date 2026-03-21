import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { label: "Equity", to: "/pricing" },
  { label: "Currency", to: "/pricing/currency" },
  { label: "Commodity", to: "/pricing/commodity" },
];

function Brokerage() {
  return (
    <section className="container responsive-section-block pt-0 pricing-tabs-section">
      <div className="pricing-tabs-shell">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === "/pricing"}
            className={({ isActive }) => `pricing-tab${isActive ? " active" : ""}`}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </section>
  );
}

export default Brokerage;
