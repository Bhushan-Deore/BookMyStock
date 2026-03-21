import React from "react";

function Team() {
  return (
    <section className="container responsive-section-block team-section">
      <div className="text-center mb-4 mb-md-5">
        <p className="support-kicker">Leadership</p>
        <h2 className="section-heading">People</h2>
      </div>

      <div className="team-card">
        <div className="team-profile">
          <img src="media/images/Bhushan.jpeg" alt="Bhushan Deore" className="team-avatar" />
          <h3>Bhushan Deore</h3>
          <p>Founder, CEO</p>
        </div>

        <div className="team-bio">
          <p>
            Bhushan founded BookMyStock to simplify stock market investing and remove
            the complexity he observed while learning and building in fintech.
          </p>
          <p>
            What started as a project-driven initiative has evolved into a platform
            focused on making investing more accessible, transparent, and
            technology-first.
          </p>
          <p>
            When he’s not building or learning, Bhushan focuses on personal growth,
            clarity, and continuous upskilling.
          </p>
          <div className="team-links">
            <a href="/">Homepage</a>
            <a href="https://www.linkedin.com/in/bhushan-deore-85a012365/">LinkedIn</a>
            <a href="https://github.com/Bhushan-Deore">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
