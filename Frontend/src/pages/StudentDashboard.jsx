import React, { useContext, useEffect } from "react";
import "../assets/css/dashboard.css";
import { ThemeContext } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

function StudentDashboard({ role }) {
  const { darkMode } = useContext(ThemeContext);
  const userName = localStorage.getItem("userName");
  console.log("User Name:", userName);
  const navigate = useNavigate();

  useEffect(() => {
    if (!role || role !== "student") {
      alert("Please try to login first");
      navigate("/");
    }
  }, [role, navigate]);
  return (
    <div className={`dashboard-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="dashboard-card">
        <h2 className="dashboard-title">
          <i className="fas fa-user-graduate"></i> Student Dashboard
        </h2>
        <div className="dashboard-content">
          <p>Welcome, {userName}! 📚</p>
          <ul>
            <li>
              <i className="fas fa-book"></i> My Courses
            </li>
            <li>
              <i className="fas fa-file-alt"></i> Assignments
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i> Schedule
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

export default StudentDashboard;
