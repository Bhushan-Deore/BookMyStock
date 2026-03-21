import React from "react";
import { Link } from "react-router-dom";

const partners = [
  {
    image: "media/images/zerodhaFundhouse.png",
    alt: "Zerodha Fund House",
    description: "Our asset management venture building simple and transparent index funds.",
  },
  {
    image: "media/images/sensibullLogo.svg",
    alt: "Sensibull",
    description: "Options trading platform for strategies, analysis, and rich data insights.",
  },
  {
    image: "media/images/tijori.svg",
    alt: "Tijori",
    description: "Investment research platform with detailed insights on stocks, sectors, and supply chains.",
  },
  {
    image: "media/images/streakLogo.png",
    alt: "Streak",
    description: "Systematic trading platform to create and backtest strategies without coding.",
  },
  {
    image: "media/images/smallcaseLogo.png",
    alt: "Smallcase",
    description: "Thematic investing platform for diversified baskets of stocks and ETFs.",
  },
  {
    image: "media/images/dittoLogo.png",
    alt: "Ditto",
    description: "Personalized advice on life and health insurance with no spam or mis-selling.",
  },
];

function Universe() {
  return (
    <section className="container responsive-section-block universe-section">
      <div className="text-center mb-4 mb-md-5">
        <h3 className="section-heading">The BookMyStock Universe</h3>
        <p className="section-copy">
          Extend your trading and investment experience even further with partner
          platforms built for focused use cases.
        </p>
      </div>

      <div className="universe-grid">
        {partners.map((partner) => (
          <article key={partner.alt} className="universe-card">
            <img src={partner.image} alt={partner.alt} className="universe-logo" />
            <p>{partner.description}</p>
          </article>
        ))}
      </div>

      <div className="text-center mt-4 mt-md-5">
        <Link className="btn btn-primary hero-cta" to="/signup">
          Sign up now
        </Link>
      </div>
    </section>
  );
}

export default Universe;
