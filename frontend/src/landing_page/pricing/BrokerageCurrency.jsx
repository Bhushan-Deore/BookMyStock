import React from "react";

function BrokerageCurrency() {
    return (
        <>
            <div className="container my-5 pb-5">
                <table className="table border table-striped align-middle " style={{ fontSize: "1rem" }}>
                    <thead>
                        <tr>
                            <td scope="col"></td>
                            <td scope="col">Currency futures</td>
                            <td scope="col">Currency options</td>
                        </tr>
                    </thead>
                    <tbody className="text-muted">
                        <tr>
                            <td className="text-secondary">Brokerage</td>
                            <td className="text-secondary">0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="text-secondary">₹ 20/executed order</td>
                        </tr>
                        <tr>
                            <td className="text-secondary">STT/CTT</td>
                            <td className="text-secondary">No STT</td>
                            <td className="text-secondary">No STT</td>
                            
                        </tr>
                        <tr>
                            <td className="text-secondary">Transaction charges</td>
                            <td className="text-secondary">NSE: 0.00035% <br />
                            BSE: 0.00045%</td>
                            <td className="text-secondary">NSE: 0.0311% <br />
                            BSE: 0.001%</td>
                        </tr>
                        <tr>
                            <td className="text-secondary">GST</td>
                            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td className="text-secondary">SEBI charges</td>
                            <td className="text-secondary">₹10 / crore</td>
                            <td className="text-secondary">₹10 / crore</td>
                        </tr>
                        <tr>
                            <td className="text-secondary">Stamp charges</td>
                            <td className="text-secondary">0.0001% or ₹10 / crore on buy side</td>
                            <td className="text-secondary">0.0001% or ₹10 / crore on buy side</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default BrokerageCurrency;