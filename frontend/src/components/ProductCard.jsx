import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card">
      <Link to={`/products/${product.id}`} className="card__image-link" style={{ position: 'relative', display: 'block' }}>
  <img src={product.image} alt={product.name} />
  {product.inStock === false && (
    <span className="out-of-stock-badge">Out of stock</span>
  )}
</Link>
        
      <div className="card__body">
        <div className="card__title-row">
          <h3>{product.name}</h3>
          <span className="card__rating">★ {product.rating}</span>
        </div>
        <p className="card__meta">{product.category}</p>
        <p className="card__price">₹{product.price.toLocaleString()}</p>
        <div className="card__actions">
          <Link className="secondary-btn" to={`/products/${product.id}`}>View</Link>
         <button
         type="button"
         className="primary-btn"
         onClick={onAddToCart}
         disabled={product.inStock === false}
>
  {product.inStock === false ? "Out of Stock" : "Add to Cart"}
</button>
         
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
