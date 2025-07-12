import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import "../assets/css/footer.css";

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`modern-footer ${darkMode ? "dark-mode" : ""}`}>
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="logo">Padhai</h3>
          <p className="tagline">
            Empowering students and teachers through simplicity
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="links-group">
            <h4>Platform</h4>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Updates</a>
              </li>
            </ul>
          </div>

          <div className="links-group">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#">K-12 Schools</a>
              </li>
              <li>
                <a href="#">Higher Education</a>
              </li>
              <li>
                <a href="#">Corporate Training</a>
              </li>
              <li>
                <a href="#">Online Tutors</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Padhai. All rights reserved.
        </div>

        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>

        <button
          className="to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
