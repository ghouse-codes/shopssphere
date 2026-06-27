import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <h1 className="notfound-code">404</h1>
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" className="btn-primary">Go back home</Link>
    </div>
  );
}

