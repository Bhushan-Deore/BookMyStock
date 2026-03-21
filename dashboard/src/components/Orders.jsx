import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../config/api";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    apiClient.get("/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="page-kicker">Orders</p>
          <h3 className="title">Open orders ({allOrders.length})</h3>
        </div>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Instrument</th>
              <th>Product</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => (
              <tr key={index}>
                <td>{stock.mode}</td>
                <td>{stock.name}</td>
                <td>CNC</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Orders;
