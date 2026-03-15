import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-7">
                    <img src={imageURL} alt="ProductImage" style={{width:"80%", height:"80%"}}/>
                </div>
                
                <div className="col-5">
                    <h2 className="m-5">{productName}</h2>
                    <p className="fs-5 text-muted ms-5 pe-5">{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:"none"}} className="m-5 ">Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{textDecoration:"none"}} className="m-5 ">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    <br /><br />
                    <a href={googlePlay} style={{textDecoration:"none"}} className="m-5 "> <img src="media/images/googlePlayBadge.svg"/> </a>
                    <a href={appStore} style={{textDecoration:"none"}} className="m-5 "> <img src="media/images/appstoreBadge.svg"/></a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;