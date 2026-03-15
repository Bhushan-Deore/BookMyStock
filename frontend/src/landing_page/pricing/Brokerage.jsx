import React from "react";
import { Outlet,Link } from "react-router-dom";


function Brokerage() {
    return (
        <>
            <div className="container border-bottom mt-5 pt-5">
                <ul className="nav nav-underline m-2">
                    <li className="nav-item fs-3 me-5">
                        <Link className="nav-link" to={"/pricing"} >Equity</Link>
                    </li>
                    <li className="nav-item fs-3 me-5">
                        <Link className="nav-link" to={"/pricing/currency"}>Currency</Link>
                    </li>
                    <li className="nav-item fs-3 me-5">
                        <Link className="nav-link" to={"/pricing/commodity"} >Commodity</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
            
        </>
    );
}

export default Brokerage;