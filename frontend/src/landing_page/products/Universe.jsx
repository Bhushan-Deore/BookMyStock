import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center mb-5 ">
                <h3>The BookMyStock Universe</h3>
                <h5 className="mt-5">Extend your trading and investment experience even further with our partner platforms</h5>
                <div className="col-4 p-5">
                    <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" style={{ width: "55%" }} className="mt-5" />
                    <p className="text-muted p-3">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                    <br />
                    <img src="media/images/streakLogo.png" alt="streakLogo" style={{ width: "50%" }} className="mt-5" />
                    <p className="text-muted p-3">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" style={{ width: "70%" }} className="mt-5" />
                    <p className="text-muted p-3">Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                    <br />
                    <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo" style={{ width: "70%" }} className="mt-5" />
                    <p className="text-muted p-3">Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/tijori.svg" alt="tijori" style={{ width: "45%" }} className="mt-5" />
                    <p className="text-muted p-3">Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                    <br />
                    <img src="media/images/dittoLogo.png" alt="dittoLogo" style={{ width: "40%" }} className="mt-5" />
                    <p className="text-muted p-3">Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
                <button className ="p-2 mb-5 btn btn-primary fs-4 fw-semibold" style={{width:"20%",margin:"0 auto"}}>Sign up now</button>

            </div>
        </div>
    );
}

export default Universe;