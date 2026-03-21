import React from "react";

const trustPoints = [
  {
    title: "Customer-first always",
    description:
      "That's why 1.6+ crore customers trust BookMyStock with ~₹6 lakh crores of equity investments, making us India's largest broker and contributing to 15% of daily retail exchange volumes.",
  },
  {
    title: "No spam or gimmicks",
    description:
      'No gimmicks, spam, "gamification", or noisy push notifications. High-quality apps that you use at your pace, the way you like.',
  },
  {
    title: "The BookMyStock universe",
    description:
      "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services specific to your needs.",
  },
  {
    title: "Do better with money",
    description:
      "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you make better decisions with your money.",
  },
];

function Stats() {
  return (
    <section className="container responsive-section-block stats-section">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <div className="stats-copy">
            <h2 className="section-heading text-start">Trust with confidence</h2>
            <div className="stats-list">
              {trustPoints.map((item) => (
                <article key={item.title} className="stats-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 order-1 order-lg-2">
          <div className="stats-visual-card">
            <img src="media/images/ecosystem.png" alt="Ecosystem" className="stats-visual" />
            <div className="stats-links">
              <a href="/products" className="section-link">
                Explore our products <span aria-hidden="true">→</span>
              </a>
              <a href="/products" className="section-link">
                Try Kite demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-press-strip">
        <img src="media/images/pressLogos.png" alt="Press Logos" className="press-logos" />
      </div>
    </section>
  );
}

export default Stats;
