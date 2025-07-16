import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { ThemeContext, ThemeProvider } from "./context/themeContext";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashBoard";
import StudentDashboard from "./pages/StudentDashboard";
import Footer from "./components/Footer";

function AppContent() {
  // UseContext to access theme context
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [role, setRole] = useState(localStorage.getItem("role"));

  return (
    <Router>
      <Navbar
        darkMode={darkMode}
        role={role}
        setRole={setRole}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login setRole={setRole} />} />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard role={role} />}
        />
        <Route
          path="/student-dashboard"
          element={<StudentDashboard role={role} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
