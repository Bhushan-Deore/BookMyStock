import React from "react";
import { Link } from "react-router-dom";

const pricingHighlights = [
  {
    image: "media/images/pricing-eq.svg",
    title: "Free account opening",
  },
  {
    image: "media/images/pricing-eq.svg",
    title: "Free equity delivery and direct mutual funds",
  },
  {
    image: "media/images/other-trades.svg",
    title: "Intraday and F&O",
  },
];

function Pricing() {
  return (
    <section className="container responsive-section-block">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-5 pe-lg-5">
          <h2 className="section-heading text-start">Unbeatable pricing</h2>
          <p className="section-copy text-start mb-4">
            We pioneered the concept of discount broking and price transparency in
            India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" className="section-link">
            See pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="col-12 col-lg-7">
          <div className="pricing-grid">
            {pricingHighlights.map((item) => (
              <article key={item.title} className="pricing-tile">
                <img src={item.image} alt="Pricing icon" className="pricing-icon" />
                <p>{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
