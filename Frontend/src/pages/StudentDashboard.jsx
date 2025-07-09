import React, { useContext } from "react";
import "../assets/css/dashboard.css";
import { ThemeContext } from "../context/themeContext";

function StudentDashboard() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`dashboard-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="dashboard-card">
        <h2 className="dashboard-title">
          <i className="fas fa-user-graduate"></i> Student Dashboard
        </h2>
        <div className="dashboard-content">
          <p>Welcome, Student! 📚</p>
          <ul>
            <li><i className="fas fa-book"></i> My Courses</li>
            <li><i className="fas fa-file-alt"></i> Assignments</li>
            <li><i className="fas fa-calendar-alt"></i> Schedule</li>
            <li><i className="fas fa-sign-out-alt"></i> Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
