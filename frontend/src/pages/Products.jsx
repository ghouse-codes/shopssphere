import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from '../context/CartContext';
import { products } from "../data/products";
import { Helmet } from 'react-helmet-async';
import toast from "react-hot-toast";

function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(120000);
  const [sortBy, setSortBy] = useState("featured");
  const { addToCart } = useCart();

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });

    const sorted = [...result];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === "newest") sorted.sort((a, b) => b.id - a.id);
    else if (sortBy === "popularity") sorted.sort((a, b) => b.rating - a.rating);

    return sorted;
  }, [maxPrice, search, selectedCategory, sortBy]);

  return (
    <div className="page-shell">
      <Helmet><title>Products — ShopSphere</title></Helmet>

      <div className="page-header">
        <div>
          <p className="eyebrow">Shop all essentials</p>
          <h1>Explore curated tech picks.</h1>
          <p>Search, filter, and compare the latest devices in one place.</p>
        </div>
        <Link className="secondary-btn" to="/">Back home</Link>
      </div>

      <div className="products-layout">
        <aside className="sidebar-card">
          <h2>Filters</h2>

          <div className="filter-group">
            <h3>Categories</h3>
            <div className="filter-list">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`chip-btn ${selectedCategory === category ? "is-active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Max price</h3>
            <input
              type="range"
              min="30000"
              max="120000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <p className="price-label">Up to ₹{maxPrice.toLocaleString()}</p>
          </div>
        </aside>

        <section className="products-section">
          <div className="products-toolbar">
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label className="sort-control">
              <span>Sort by</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="popularity">Popularity</option>
              </select>
            </label>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => {
                    addToCart(product);
                    toast.success("Added to cart!");
                  }}
                />
              ))
            ) : (
              <div className="empty-state">
                <h3>No products match your filters.</h3>
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setMaxPrice(120000);
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
