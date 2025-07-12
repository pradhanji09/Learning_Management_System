import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/navabar.css"; // corrected filename from 'navabar.css'

function Navbar({ darkMode, toggleDarkMode, role, setRole }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    setRole("");
    navigate("/");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm px-4 ${
        darkMode ? "navbar-dark custom-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid justify-content-between">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
          Padhai
        </Link>

        {/* Right Controls */}
        <div className="d-flex align-items-center gap-3">

          {/* Dark Mode Toggle */}
          <div className="theme-toggle me-2">
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

          {/* Auth Buttons */}
          {!role && (
            <>
              <Link
                className={`btn btn-sm ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                }`}
                to="/register"
              >
                Sign In
              </Link>
              <Link
                className={`btn btn-sm ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                }`}
                to="/"
              >
                Login
              </Link>
            </>
          )}

          {/* Role-specific Links */}
          {role === "admin" && (
            <>
              <Link
                to="/admin-dashboard"
                className="btn btn-sm btn-primary"
              >
                Admin Dashboard
              </Link>
              <button
                className={`btn btn-sm ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                }`}
                onClick={handleLogOut}
              >
                Log out
              </button>
            </>
          )}

          {role === "student" && (
            <>
              <Link
                to="/student-dashboard"
                className="btn btn-sm btn-success"
              >
                Student Dashboard
              </Link>
              <button
                className={`btn btn-sm ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                }`}
                onClick={handleLogOut}
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
