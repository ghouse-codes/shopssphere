import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from 'react-helmet-async'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );

  if (cartItems.length === 0) {
    return (
    
    <div className="empty-cart">
    <Helmet><title>Cart — ShopSphere</title></Helmet>
        <div className="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
              </div>

              <div className="cart-item-controls">
                <div className="qty-control">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>

                <p className="cart-item-total">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.error("Item removed from cart");
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free">FREE</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="btn-checkout">
            Proceed to Checkout
          </Link>
          <Link to="/products" className="btn-continue">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
