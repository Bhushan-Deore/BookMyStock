import React from "react";

function Hero() {
  return (
    <section className="container responsive-section-block about-section">
      <div className="about-intro text-center">
        <p className="support-kicker">About BookMyStock</p>
        <h1 className="section-heading">
          We pioneered the discount broking model in India.
          <br className="d-none d-md-block" />
          Now, we are breaking ground with technology.
        </h1>
      </div>

      <div className="about-story-grid">
        <article className="about-story-card">
          <p>
            We kick-started operations on August 15, 2010 with the goal of breaking
            barriers that traders and investors face in India in terms of cost,
            support, and technology.
          </p>
          <p>
            We named the company BookMyStock to reflect a simple belief: investing in
            stocks should be as easy as booking a service online.
          </p>
          <p>
            Today, our pricing model and in-house technology have made us one of the
            most trusted names in retail investing.
          </p>
        </article>

        <article className="about-story-card">
          <p>
            Over 1.6+ crore clients place billions of orders every year through our
            ecosystem of investment platforms, contributing over 15% of Indian retail
            trading volumes.
          </p>
          <p>
            We also run open educational and community initiatives that empower retail
            investors and traders with better financial knowledge.
          </p>
          <p>
            And we are always building what comes next—new experiences, stronger
            tools, and simpler ways to participate in the markets.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Hero;
