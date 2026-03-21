import React from "react";

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <section className="container product-showcase responsive-section-block">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-lg-7">
          <div className="product-image-shell">
            <img src={imageURL} alt={productName} className="product-image" />
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="product-content">
            <h2>{productName}</h2>
            <p>{productDescription}</p>
            <div className="product-links">
              <a href={tryDemo || "/products"} className="section-link">Try Demo <span aria-hidden="true">→</span></a>
              <a href={learnMore || "/products"} className="section-link">Learn More <span aria-hidden="true">→</span></a>
            </div>
            <div className="product-badges">
              <a href={googlePlay || "/products"} aria-label={`${productName} on Google Play`}>
                <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
              </a>
              <a href={appStore || "/products"} aria-label={`${productName} on the App Store`}>
                <img src="media/images/appstoreBadge.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
