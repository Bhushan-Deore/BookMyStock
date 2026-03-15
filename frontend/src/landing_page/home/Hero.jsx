import React from "react";

function Hero() {
    return(
       <div className="container p-5 mb-5">
        <div className="row text-center">
            <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/>
            <h2 className="mt-5">Invest in everything</h2>
            <h4 className="fw-normal">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h4>
            <button className ="p-2 mt-5 mb-5 btn btn-primary fs-4 fw-semibold" style={{width:"20%",margin:"0 auto"}}>Sign up now</button>
        </div>
        
       </div>
    );
}

export default Hero;