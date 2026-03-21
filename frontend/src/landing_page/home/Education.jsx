import React from "react";

function Education() {
  return (
    <section className="container responsive-section-block">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-6 px-lg-5 order-2 order-lg-1">
          <img src="media/images/education.svg" alt="Education" className="section-illustration" />
        </div>
        <div className="col-12 col-lg-6 px-lg-4 order-1 order-lg-2">
          <h2 className="section-heading text-start">Free and open market education</h2>
          <p className="section-copy text-start mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" className="section-link">Varsity <span aria-hidden="true">→</span></a>
          <p className="section-copy text-start mt-4">
            TradingQ&amp;A, the most active trading and investment community in India
            for all your market related queries.
          </p>
          <a href="/" className="section-link">TradingQ&amp;A <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

export default Education;
