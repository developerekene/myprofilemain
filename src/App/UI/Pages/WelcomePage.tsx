import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/WelcomePage.css";
import { Link } from "react-router-dom";

const WelcomePage: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="main_content">
        <div className="welcome_content">
          <h1>Ekenedilichukwu Okoli</h1>
          <p>
            Creating beautiful, scalable and award winning applications since
            2018 using JavaScript and Python
          </p>

          <div className="links_container">
            <Link to="/about" className="link_dev">
              About me
              <span className="arrow">↓</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
