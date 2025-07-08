import React, { useContext, useState } from "react";
import "../assets/css/login.css";
import axios from "axios";
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

function Login() {
  const { darkMode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/login", formData);
      alert("Login successful!");
    } catch (err) {
      console.error("Login error:", err);
      alert("Invalid credentials.");
    }
  };

  return (
    <div className={`login-page ${darkMode ? "dark-mode" : ""}`}>
      <form className="login-box" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <div className="login-group">
          <label><i className="fas fa-envelope"></i> Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-group">
          <label><i className="fas fa-lock"></i> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        <p className="login-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
