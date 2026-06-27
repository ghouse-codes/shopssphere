import { useState } from 'react'
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import { useCart } from '../context/CartContext'
import { products } from "../data/products"
import toast from "react-hot-toast"
import { Helmet } from 'react-helmet-async'

function Home() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { addToCart } = useCart()

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <Helmet><title>Home — ShopSphere</title></Helmet>
      <Hero />

      <section className="page-shell home-section">
        <div className="home-toolbar">
          <input
            type="text"
            className="search-input"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link className="secondary-btn" to="/products">Browse all products</Link>
        </div>

        <div className="section-heading">
          <h2 id="products">Featured Products</h2>
          <div className="filter-row">
            <button
              className={`filter-btn ${selectedCategory === "All" ? "is-active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >All</button>
            <button
              className={`filter-btn ${selectedCategory === "Mobiles" ? "is-active" : ""}`}
              onClick={() => setSelectedCategory("Mobiles")}
            >Mobiles</button>
            <button
              className={`filter-btn ${selectedCategory === "Laptops" ? "is-active" : ""}`}
              onClick={() => setSelectedCategory("Laptops")}
            >Laptops</button>
          </div>
        </div>

        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => {
                  addToCart(product)
                  toast.success("Added to cart!")
                }}
              />
            ))
          ) : (
            <p className="empty-state">No products found.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
