import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row">
                <h4 className="text-center my-5 ">People</h4>
            </div>
            <div className="row text-muted " style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-5 p-5 text-center">
                    <img src="media/images/Bhushan.jpeg" alt="Bhushan" style={{borderRadius:"100%", width:"60%"}} />
                    <h4 className="mt-4">Bhushan Deore</h4>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-7 p-5">
                    <p>Bhushan bootstrapped and founded BookMyStock to simplify stock market investing and remove the complexities he observed while learning and building in the fintech space. What started as a project-driven initiative has evolved into a platform focused on making stock investing more accessible and user-friendly.</p>

                    <p>Today, BookMyStock aims to contribute to a more transparent and technology-driven investing experience.</p>

                    <p>When he’s not building or learning, Bhushan finds clarity and balance in personal growth and continuous upskilling.</p>

                    <p>Connect on &nbsp;
                    <a href="" style={{textDecoration:"none"}}> Homepage </a>/
                    <a href="https://www.linkedin.com/in/bhushan-deore-85a012365/" style={{textDecoration:"none"}}> LinkedIn </a>/
                    <a href="https://github.com/Bhushan-Deore" style={{textDecoration:"none"}}> GitHub </a>
                    </p>
                    
                </div>

            </div>
        </div>
    );
}

export default Team;