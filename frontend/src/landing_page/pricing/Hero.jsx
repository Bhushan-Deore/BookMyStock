import React from "react";

function Hero() {
    return (
        <>

            <div className="container mt-5">
                <div className="row text-center mb-5 pt-5">
                    <h2>Charges</h2>
                    <p className="fs-4 mb-5" style={{ color: "#9b9b9b" }}>List of all charges and taxes</p>
                </div>
                <div className="row text-center pt-5">
                    <div className="col-4 mt-5">
                        <img src="media/images/pricing-eq.svg" alt="pricing-eq" style={{ width: "70%" }} />
                        <h2>Free equity delivery</h2>
                        <p className="text-muted mt-1 p-4 fs-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-4 mt-5">
                        <img src="media/images/other-trades.svg" alt="other-trades" style={{ width: "70%" }} />
                        <h2>Intraday and F&O trades</h2>
                        <p className="text-muted mt-1 p-4 fs-5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-4 mt-5">
                        <img src="media/images/pricing-eq.svg" alt="pricing-eq" style={{ width: "70%" }} />
                        <h2>Free direct MF</h2>
                        <p className="text-muted mt-1 p-4 fs-5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Hero;