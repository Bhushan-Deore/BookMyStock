import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return(
        <div className="container">
            <div className="row">
            <div className="col-5">
                    <h2 className="m-5">{productName}</h2>
                    <p className="fs-5 text-muted ms-5 pe-5">{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}} className="m-5 ">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    
                </div>
                <div className="col-7">
                    <img src={imageURL} alt="ProductImage" style={{width:"100%", height:"80%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;