import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="container responsive-section-block open-account-section">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-lg-10">
          <h3 className="section-heading">Open a BookMyStock account</h3>
          <p className="section-copy">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O
            trades.
          </p>
          <Link className="btn btn-primary hero-cta" to="/signup">
            Sign up now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
