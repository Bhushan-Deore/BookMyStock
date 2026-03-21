import React from "react";

function BrokerageCommodity() {
  return (
    <div className="pricing-table-shell">
      <table className="table pricing-table border table-striped align-middle">
        <thead>
          <tr>
            <td scope="col"></td>
            <td scope="col">Commodity futures</td>
            <td scope="col">Commodity options</td>
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
            <td className="text-secondary">0.01% on sell side (Non-Agri)</td>
            <td className="text-secondary">0.05% on sell side</td>
          </tr>
          <tr>
            <td className="text-secondary">Transaction charges</td>
            <td className="text-secondary">MCX: 0.0021%<br />NSE: 0.0001%</td>
            <td className="text-secondary">MCX: 0.0418%<br />NSE: 0.001%</td>
          </tr>
          <tr>
            <td className="text-secondary">GST</td>
            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td className="text-secondary">SEBI charges</td>
            <td className="text-secondary">Agri: ₹1 / crore<br />Non-agri: ₹10 / crore</td>
            <td className="text-secondary">₹10 / crore</td>
          </tr>
          <tr>
            <td className="text-secondary">Stamp charges</td>
            <td className="text-secondary">0.002% or ₹200 / crore on buy side</td>
            <td className="text-secondary">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BrokerageCommodity;
