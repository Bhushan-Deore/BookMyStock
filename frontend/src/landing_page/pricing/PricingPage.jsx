import React from "react";
import { Route, Routes } from "react-router-dom";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import BrokerageEquity from "./BrokerageEquity";
import BrokerageCurrency from "./BrokerageCurrency";
import BrokerageCommodity from "./BrokerageCommodity";

function PricingPage() {
  return (
    <>
      <Hero />
      <Routes>
        <Route path="/" element={<Brokerage />}>
          <Route index element={<BrokerageEquity />} />
          <Route path="currency" element={<BrokerageCurrency />} />
          <Route path="commodity" element={<BrokerageCommodity />} />
        </Route>
      </Routes>
    </>
  );
}

export default PricingPage;
