import React from "react";

const pricingCards = [
  {
    image: "media/images/pricing-eq.svg",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.",
  },
  {
    image: "media/images/other-trades.svg",
    title: "Intraday and F&O trades",
    description:
      "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.",
  },
  {
    image: "media/images/pricing-eq.svg",
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹0 commissions and DP charges.",
  },
];

function Hero() {
  return (
    <section className="container responsive-section-block pricing-page-hero">
      <div className="text-center mb-4 mb-md-5">
        <p className="support-kicker">Pricing</p>
        <h1 className="section-heading">Charges</h1>
        <p className="section-copy">List of all charges and taxes.</p>
      </div>

      <div className="pricing-overview-grid">
        {pricingCards.map((card) => (
          <article key={card.title} className="pricing-overview-card">
            <img src={card.image} alt={card.title} className="pricing-icon" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Hero;
