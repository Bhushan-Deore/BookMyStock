import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <section className="container product-showcase responsive-section-block">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-5 order-2 order-lg-1">
          <div className="product-content">
            <h2>{productName}</h2>
            <p>{productDescription}</p>
            <div className="product-links">
              <a href={learnMore || "/products"} className="section-link">Learn More <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7 order-1 order-lg-2">
          <div className="product-image-shell">
            <img src={imageURL} alt={productName} className="product-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
