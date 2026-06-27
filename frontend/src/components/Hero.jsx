import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">New arrivals • Premium tech</span>
        <h1>Elevate your everyday essentials.</h1>
        <p>Discover the latest gadgets, sleek accessories, and smart deals curated for modern living.</p>
        <Link className="hero__button" to="/products">Shop Now</Link>
      </div>
    </section>
  );
}

export default Hero;