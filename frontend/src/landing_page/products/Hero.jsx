import React from "react";

function Hero() {
  return (
    <section className="container responsive-section-block border-bottom product-hero-section">
      <div className="text-center product-hero-copy">
        <p className="support-kicker">Products</p>
        <h1 className="section-heading">BookMyStock Products</h1>
        <p className="section-copy">Sleek, modern, and intuitive trading platforms.</p>
        <p className="section-copy">
          Check out our <a href="/products" className="section-link">investment offerings</a>.
        </p>
      </div>
    </section>
  );
}

export default Hero;
