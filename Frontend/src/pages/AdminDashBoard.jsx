import React, { useContext } from "react";
import "../assets/css/dashboard.css";
import { ThemeContext } from "../context/themeContext";

function AdminDashboard() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`dashboard-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="dashboard-card">
        <h2 className="dashboard-title">
          <i className="fas fa-user-shield"></i> Admin Dashboard
        </h2>
        <div className="dashboard-content">
          <p>Welcome, Admin! 🎉</p>
          <ul>
            <li>
              <i className="fas fa-users-cog"></i> Manage Users
            </li>
            <li>
              <i className="fas fa-chart-bar"></i> View Reports
            </li>
            <li>
              <i className="fas fa-cogs"></i> System Settings
            </li>
            <li>
              <i className="fas fa-sign-out-alt"></i> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
