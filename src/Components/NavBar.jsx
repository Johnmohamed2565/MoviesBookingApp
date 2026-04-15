import { Link } from "react-router-dom";

export default function Navbar({ wishlistCount }) {
  return (
    <nav className="navbar">
      
      <div className="nav-left">
        
        <div className="logo">
          <span className="logo-icon">📽️</span>
          <span className="logo-text">MoviesBooking App</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/movies">MoviesList</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

      </div>

      <div className="nav-icons">
        <span>🔍</span>
        <span>🔔</span>

        {/* ❤️ COUNT */}
        <span className="wishlist-nav">
          ❤️ {wishlistCount}
        </span>
      </div>

    </nav>
  );
}