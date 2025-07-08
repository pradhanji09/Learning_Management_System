import { useContext } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { ThemeContext, ThemeProvider } from "./context/themeContext";
import Login from "./pages/Login";

function AppContent() {
  // UseContext to access theme context
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
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
