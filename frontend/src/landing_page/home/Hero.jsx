import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container responsive-section-block hero-section">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 text-center">
          <img src="media/images/homeHero.png" alt="Hero" className="hero-visual mb-4 mb-md-5" />
          <h1 className="hero-title">Invest in everything</h1>
          <p className="hero-copy">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>
          <Link className="btn btn-primary hero-cta" to="/signup">
            Sign up now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
