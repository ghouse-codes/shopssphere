import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", address: "",
    city: "", zip: "", card: "", expiry: "", cvv: "",
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.zip.trim()) e.zip = "ZIP code is required";
    if (!form.card.trim()) e.card = "Card number is required";
    if (!form.expiry.trim()) e.expiry = "Expiry is required";
    if (!form.cvv.trim()) e.cvv = "CVV is required";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    clearCart();
    navigate("/order-success");
  };

  return (
   <div className="checkout-page">
   <Helmet><title>Checkout — ShopSphere</title></Helmet>
   
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-layout">
        <div className="checkout-forms">

          <div className="form-section">
            <h2>Shipping details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Full name</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="John Doe" />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" value={form.email} onChange={handleChange}
                  placeholder="john@example.com" />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group full">
                <label>Address</label>
                <input name="address" value={form.address} onChange={handleChange}
                  placeholder="123 Main Street" />
                {errors.address && <span className="form-error">{errors.address}</span>}
              </div>
              <div className="form-group">
                <label>City</label>
                <input name="city" value={form.city} onChange={handleChange}
                  placeholder="Mumbai" />
                {errors.city && <span className="form-error">{errors.city}</span>}
              </div>
              <div className="form-group">
                <label>ZIP code</label>
                <input name="zip" value={form.zip} onChange={handleChange}
                  placeholder="400001" />
                {errors.zip && <span className="form-error">{errors.zip}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Payment details</h2>
            <div className="form-grid">
              <div className="form-group full">
                <label>Card number</label>
                <input name="card" value={form.card} onChange={handleChange}
                  placeholder="1234 5678 9012 3456" maxLength={19} />
                {errors.card && <span className="form-error">{errors.card}</span>}
              </div>
              <div className="form-group">
                <label>Expiry date</label>
                <input name="expiry" value={form.expiry} onChange={handleChange}
                  placeholder="MM/YY" maxLength={5} />
                {errors.expiry && <span className="form-error">{errors.expiry}</span>}
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input name="cvv" value={form.cvv} onChange={handleChange}
                  placeholder="123" maxLength={3} />
                {errors.cvv && <span className="form-error">{errors.cvv}</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-summary">
          <h2>Order summary</h2>
          {cartItems.map((item) => (
            <div className="summary-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p className="summary-item-qty">Qty: {item.quantity}</p>
              </div>
              <span>₹{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div className="summary-divider" />
          <div className="summary-row">
            <span>Subtotal</span>
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
          <button className="btn-place-order" onClick={handleSubmit}>
            Place Order
          </button>
          <p className="secure-note">🔒 Secured checkout</p>
        </div>
      </div>
    </div>
  );
}
