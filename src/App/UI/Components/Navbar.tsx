import React, { useState } from "react";
import "./Navbar.css";
import { Assets } from "../../utils/constants/Assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleHireMeClick = () => {
    navigate("/contact"); // <-- change "/contact" to your desired route
  };

  return (
    <>
      <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <center>
          <div className="navbar-container">
            <div className="logo">
              <div className="icon" style={{ textTransform: "uppercase" }}>
                Ekenedilichukwu
              </div>
              <span className="separator">|</span>
              <span className="menu-text" onClick={toggleMenu}>
                {menuOpen ? "CLOSE" : "MENU"}
              </span>
            </div>

            <button className="hire-me" onClick={handleHireMeClick}>
              HIRE ME
            </button>
          </div>
        </center>
      </header>

      {/* Fullscreen overlay navigation that slides from top */}
      <div className={`nav-overlay ${menuOpen ? "show" : ""}`}>
        <div className="nav-overlay-content">
          <div className="nav-header">
            <div className="logo">
              <div className="icon">▲▲</div>
              <span className="separator">|</span>
              <span className="menu-text" onClick={toggleMenu}>
                CLOSE
              </span>
            </div>
          </div>

          <div className="nav-links">
            <ul>
              <li className="nav-item">
                <Link to="/ " onClick={closeMenu}>
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutme" onClick={closeMenu}>
                  <strong>About Me</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/podcast" onClick={closeMenu}>
                  <strong>Podcast</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" onClick={closeMenu}>
                  <strong>Contact</strong>
                </Link>
              </li>
            </ul>

            <div className="social-icons">
              <a href="#" aria-label="Twitter">
                <span>
                  <img
                    src={Assets.images.social_twitter}
                    alt="twitter_icon"
                    className="social_icon"
                  />
                </span>
              </a>
              <a href="#" aria-label="Instagram">
                <span>
                  {" "}
                  <img
                    src={Assets.images.social_linkedIn}
                    alt="linkedIn_icon"
                    className="social_icon"
                  />
                </span>
              </a>
              <a href="#" aria-label="GitHub">
                <span>
                  <img
                    src={Assets.images.social_github}
                    alt="github_icon"
                    className="social_icon"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
