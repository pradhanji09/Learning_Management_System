import React, { useContext, useState } from "react";
import "../assets/css/register.css";
import axios from "axios";
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

function Register() {
  const { darkMode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    role: "student",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/register", formData);
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        address: "",
        phone: "",
        role: "student",
        status: "active",
      });
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className={`register-page ${darkMode ? "dark-mode" : ""}`}>
      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="title">Create Your Account</h2>
        <div className="form-grid compact">
          <div className="form-group">
            <label>
              <i className="fas fa-user"></i> Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-calendar-alt"></i> Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-phone"></i> Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-venus-mars"></i> Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group full">
            <label>
              <i className="fas fa-map-marker-alt"></i> Address
            </label>
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-user-tag"></i> Role
            </label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-toggle-on"></i> Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
