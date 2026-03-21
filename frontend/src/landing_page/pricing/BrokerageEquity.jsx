import React from "react";

function BrokerageEquity() {
  return (
    <div className="pricing-table-shell">
      <table className="table pricing-table border table-striped align-middle">
        <thead>
          <tr>
            <td scope="col"></td>
            <td scope="col">Equity delivery</td>
            <td scope="col">Equity intraday</td>
            <td scope="col">F&amp;O - Futures</td>
            <td scope="col">F&amp;O - Options</td>
          </tr>
        </thead>
        <tbody className="text-muted">
          <tr>
            <td className="text-secondary">Brokerage</td>
            <td className="text-secondary">Zero Brokerage</td>
            <td className="text-secondary">0.03% or Rs. 20/executed order whichever is lower</td>
            <td className="text-secondary">0.03% or Rs. 20/executed order whichever is lower</td>
            <td className="text-secondary">Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td className="text-secondary">STT/CTT</td>
            <td className="text-secondary">0.1% on buy &amp; sell</td>
            <td className="text-secondary">0.025% on the sell side</td>
            <td className="text-secondary">0.02% on the sell side</td>
            <td className="text-secondary">
              <ul className="mb-0">
                <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                <li>0.1% on sell side (on premium)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-secondary">Transaction charges</td>
            <td className="text-secondary">NSE: 0.00297%<br />BSE: 0.00375%</td>
            <td className="text-secondary">NSE: 0.00297%<br />BSE: 0.00375%</td>
            <td className="text-secondary">NSE: 0.00173%<br />BSE: 0</td>
            <td className="text-secondary">NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
          </tr>
          <tr>
            <td className="text-secondary">GST</td>
            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
            <td className="text-secondary">18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td className="text-secondary">SEBI charges</td>
            <td className="text-secondary">₹10 / crore</td>
            <td className="text-secondary">₹10 / crore</td>
            <td className="text-secondary">₹10 / crore</td>
            <td className="text-secondary">₹10 / crore</td>
          </tr>
          <tr>
            <td className="text-secondary">Stamp charges</td>
            <td className="text-secondary">0.015% or ₹1500 / crore on buy side</td>
            <td className="text-secondary">0.03% or Rs. 20/executed order whichever is lower</td>
            <td className="text-secondary">0.002% or ₹200 / crore on buy side</td>
            <td className="text-secondary">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BrokerageEquity;
