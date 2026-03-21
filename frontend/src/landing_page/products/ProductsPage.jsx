import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const products = [
  {
    layout: "left",
    imageURL: "/media/images/kite.png",
    productName: "Kite",
    productDescription:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on Android and iOS devices.",
  },
  {
    layout: "right",
    imageURL: "/media/images/console.png",
    productName: "Console",
    productDescription:
      "The central dashboard for your BookMyStock account. Gain insights into your trades and investments with in-depth reports and visualisations.",
  },
  {
    layout: "left",
    imageURL: "/media/images/coin.png",
    productName: "Coin",
    productDescription:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the experience on Android and iOS devices.",
  },
  {
    layout: "right",
    imageURL: "/media/images/kiteconnect.png",
    productName: "Kite Connect API",
    productDescription:
      "Build powerful trading platforms and experiences with our simple HTTP/JSON APIs and ship products for serious investors.",
  },
  {
    layout: "left",
    imageURL: "/media/images/varsity.png",
    productName: "Varsity mobile",
    productDescription:
      "An easy-to-grasp collection of stock market lessons with illustrations and bite-size cards to help you learn on the go.",
  },
];

function ProductsPage() {
  return (
    <>
      <Hero />
      {products.map((product) =>
        product.layout === "left" ? (
          <LeftSection key={product.productName} {...product} />
        ) : (
          <RightSection key={product.productName} {...product} />
        ),
      )}
      <section className="container responsive-section-block pt-0 text-center">
        <p className="section-copy">
          Want to know more about our technology stack? Check out the{" "}
          <a href="/" className="section-link">BookMyStock.tech</a> blog.
        </p>
      </section>
      <Universe />
    </>
  );
}

export default ProductsPage;
