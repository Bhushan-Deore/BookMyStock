import { useState, useEffect } from "react";
import { apiClient } from "../config/api";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    apiClient.get("/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="page-kicker">Positions</p>
          <h3 className="title">Open positions ({allPositions.length})</h3>
        </div>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Positions;
