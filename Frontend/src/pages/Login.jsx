import React, { useContext, useState } from "react";
import "../assets/css/login.css";
import axios from "axios";
import { ThemeContext } from "../context/themeContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

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
      const res = await axios.post("http://localhost:4000/api/login", formData);
      console.log("Login response:", res.data);
      alert(res.data.message);

      // Example: Save user data to localStorage
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("userName", JSON.stringify(res.data.name));


      console.log("User Role:", res.data.user.role);
      // Redirect to dashboard based on role

      switch (res.data.user.role) {
        case "student":
          navigate("/student-dashboard");
          break;

        case "admin":
          navigate("/admin-dashboard");
          break;

        default:
          alert("Unknown role, redirecting to student dashboard.");
          navigate("/student-dashboard");
          break;
      }
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
          <label>
            <i className="fas fa-envelope"></i> Email
          </label>
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
          <label>
            <i className="fas fa-lock"></i> Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
