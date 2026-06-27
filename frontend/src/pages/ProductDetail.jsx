import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import toast from "react-hot-toast";
import { Helmet } from 'react-helmet-async';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState("Midnight");
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => products.find((item) => item.id === Number(id)), [id]);

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, 4);
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({ ...product, quantity, variant: selectedVariant });
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) {
    return (
      <div className="page-shell">
        <h1>Product not found.</h1>
        <Link className="primary-btn" to="/products">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <Helmet><title>{product.name} — ShopSphere</title></Helmet>

      <Link className="secondary-btn" to="/products">← Back to products</Link>

      <div className="detail-layout">
        <div className="detail-media">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detail-meta">
            <span className="detail-rating">★ {product.rating}</span>
            <span className="detail-price">₹{product.price.toLocaleString()}</span>
          </div>
          <p className="detail-description">{product.description}</p>

          <div className="variant-group">
            <h3>Color</h3>
            <div className="variant-options">
              {['Midnight', 'Silver', 'Ocean'].map((variant) => (
                <button
                  key={variant}
                  type="button"
                  className={`chip-btn ${selectedVariant === variant ? 'is-active' : ''}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-row">
            <button
              type="button"
              className="quantity-btn"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >−</button>
            <span>{quantity}</span>
            <button
              type="button"
              className="quantity-btn"
              onClick={() => setQuantity((prev) => prev + 1)}
            >+</button>
          </div>

          <button type="button" className="primary-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related-products">
          <h2>Related products</h2>
          <div className="products-grid">
            {related.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={() => {
                  addToCart(item);
                  toast.success(`${item.name} added to cart!`);
                }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetail;
