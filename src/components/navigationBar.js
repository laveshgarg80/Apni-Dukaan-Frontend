import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/home"} className="navbar-brand">
        Apni Dukaan
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li>
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
