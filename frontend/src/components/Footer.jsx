import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>ShopSphere</h3>
          <p>Find the best products at amazing prices.</p>
        </div>
        <div className="footer-links">
          <h4>Shop</h4>
          <Link to="/products">All Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/contact">Contact</Link>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-links">
          <h4>Follow us</h4>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 ShopSphere. All rights reserved.</p>
        <div className="payment-icons">💳 Visa &nbsp;💳 Mastercard &nbsp;💳 UPI</div>
      </div>
    </footer>
  );
}
