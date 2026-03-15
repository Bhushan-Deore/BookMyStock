import React from "react";

function Stats() {
    return(
        <>
        <div className="container p-5">
            <div className="row ">
                <div className="col-6 p-5">
                    <h2 className="mb-5 fw-medium">Trust with confidence</h2>
                    <h3 className="fw-medium">Customer-first always</h3>
                    <p className="mb-5 text-muted">That's why 1.6+ crore customers trust BookMyStock with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3 className="fw-medium">No spam or gimmicks</h3>
                    <p className="mb-5 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className="fw-medium">The BookMyStock universe</h3>
                    <p className="mb-5 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className="fw-medium">Do better with money</h3>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6">
                    <img src="media/images/ecosystem.png" alt="Ecosystem" style={{width:"100%"}} />
                    <div className="text-center">
                        <a href="" className="me-5" style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="" className="ms-5" style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="text-center">
                    <img src="media/images/pressLogos.png" alt="Press Logos"  style={{width:"65%"}} />
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Stats;