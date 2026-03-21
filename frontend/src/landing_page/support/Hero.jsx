import React from "react";

function Hero() {
  return (
    <section className="support-hero">
      <div className="container support-hero-inner">
        <div className="support-hero-header">
          <div>
            <p className="support-kicker">Support</p>
            <h1>Support Portal</h1>
          </div>
          <button className="btn btn-primary support-hero-button">My tickets</button>
        </div>

        <div className="support-search-shell">
          <input
            type="text"
            className="support-search-input"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
