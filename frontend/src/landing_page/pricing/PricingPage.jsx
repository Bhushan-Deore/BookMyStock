import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrokerageEquity from "./BrokerageEquity";
import BrokerageCurrency from "./BrokerageCurrency";
import BrokerageCommodity from "./BrokerageCommodity";
import NotFound from "../NotFound";


function PricingPage() {
    return (
        <>
            <Hero />

            <Routes>
                <Route path="/" element={<Brokerage />}>
                    <Route index element={<BrokerageEquity />}></Route>
                    <Route path='currency' element={<BrokerageCurrency />}></Route>
                    <Route path='commodity' element={<BrokerageCommodity />}></Route>
                    
                </Route>
            </Routes>
        </>

    );
}

export default PricingPage;