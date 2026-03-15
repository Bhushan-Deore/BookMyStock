import React from "react";

function Pricing() {
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-5 p-5">
                    <h2>Unbeatable pricing</h2>
                    <p className="mt-4 ">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-7 d-flex justify-content-start">
                    <img src="media/images/pricing-eq.svg" alt="pricing-eq" className="mt-5 pt-3" style={{width:"20%"}} />
                    <p className="mt-5 pt-5 fw-light" style={{fontSize:"12px"}}>Free account opening</p>
                    <img src="media/images/pricing-eq.svg" alt="pricing-eq" className="mt-5 pt-3" style={{width:"20%"}} />
                    <p className="mt-5 pt-5 fw-light" style={{fontSize:"12px"}}>Free equity delivery and direct mutual funds</p>
                    <img src="media/images/other-trades.svg" alt="other-trades" className="mt-5 pt-3" style={{width:"20%"}} />
                    <p className="mt-5 pt-5 fw-light" style={{fontSize:"12px"}}>Intraday and F&O</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Pricing;