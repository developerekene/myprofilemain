import React from "react";
import "../Styles/WelcomePage.css";
import { Link } from "react-router-dom";
import PageTransition from "../Components/PageTransition";
import { motion } from "framer-motion";

const WelcomePage: React.FunctionComponent = () => {
  return (
    <>
      <PageTransition>
        <div className="main_content">
          <div className="welcome_content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Ekenedilichukwu Okoli
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Creating beautiful, scalable and award winning applications since
              2018 using JavaScript and Python
            </motion.p>

            <motion.div
              className="links_container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link to="/aboutme" className="link_dev">
                About me
                <span className="arrow">↓</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default WelcomePage;
