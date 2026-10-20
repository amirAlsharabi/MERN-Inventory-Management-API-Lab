import React from "react";
import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/products" className="nav-link">
        All Products
      </Link>
      <Link to="/products/create" className="nav-link">
        Add Product
      </Link>
    </nav>
  );
}

export default NavBar;