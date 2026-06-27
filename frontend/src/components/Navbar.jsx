import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link className="navbar__brand" to="/">
        <span className="navbar__brand-mark">S</span>
        <span>ShopSphere</span>
      </Link>

      <button
        className="navbar__toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar__menu">
        <div className={`navbar__links ${isMenuOpen ? "is-open" : ""}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      <Link className="navbar__cart" to="/cart" onClick={() => setIsMenuOpen(false)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L17 7H7" />
          <circle cx="10" cy="19" r="1.4" />
          <circle cx="17" cy="19" r="1.4" />
        </svg>
        <span className="navbar__cart-badge">{cartCount}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
