import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navabar.css"; // Assuming you have a CSS file for Navbar styles

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar navbar-expand-lg shadow-sm px-4 ${darkMode ? "navbar-dark custom-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">Padhai</Link>

        <div className="d-flex align-items-center">
          <div className="theme-toggle me-3">
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="darkModeToggle" className="toggle-label">
              <span className="toggle-ball"></span>
              <span className="icon sun">☀️</span>
              <span className="icon moon">🌙</span>
            </label>
          </div>

          <Link className={  ` me-2 btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`} to="/register">
            Sign In
          </Link>
          <Link className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`} to="/login">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
