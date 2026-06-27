import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>
        <h1>Order placed!</h1>
        <p className="order-num">Order number: <strong>{orderNumber}</strong></p>
        <p className="success-msg">
          Thank you for shopping with ShopSphere. Your order is confirmed
          and will be delivered within 3–5 business days.
        </p>
        <div className="success-details">
          <div className="detail-row">
            <span>Estimated delivery</span>
            <span>3–5 business days</span>
          </div>
          <div className="detail-row">
            <span>Confirmation email</span>
            <span>Sent to your inbox</span>
          </div>
        </div>
        <Link to="/products" className="btn-primary">Continue Shopping</Link>
      </div>
    </div>
  );
}
