import React from "react";

function Hero() {
    return(
        <div className="container pb-5 border-bottom">
            <div className="row text-center m-5">
                <h2>BookMyStock Products</h2>
                <p className="fs-3">Sleek, modern, and intuitive trading platforms</p>
                <p className="fs-5">Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;