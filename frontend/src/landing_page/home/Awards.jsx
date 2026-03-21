import React from "react";

function Awards() {
  return (
    <section className="container responsive-section-block">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-6 px-lg-5">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" className="section-illustration" />
        </div>
        <div className="col-12 col-lg-6 px-lg-4">
          <h2 className="section-heading text-start">Largest Stock Broker in India</h2>
          <p className="section-copy text-start mb-4">
            2+ million BookMyStock clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>
          <div className="row g-3 text-start">
            <div className="col-12 col-sm-6">
              <ul className="feature-list">
                <li>Futures and Options</li>
                <li>Commodity and Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="feature-list">
                <li>Stocks &amp; IPO</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Press Logos" className="press-logos mt-4" />
        </div>
      </div>
    </section>
  );
}

export default Awards;
