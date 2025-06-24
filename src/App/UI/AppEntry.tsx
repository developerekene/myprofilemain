import React, { useEffect, useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Index from "../routes/Index";
import Footer from "./Components/Footer";
import "./AppEntry.css";

const AppEntry: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bgAnimation, setBgAnimation] = useState<boolean>(false);

  useEffect(() => {
    // Simulate loading (remove this in production)
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Start background animation
    const animationTimer = setTimeout(() => {
      setBgAnimation(true);
    }, 100);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          {/* Static noise on top */}
          <div className="bg-static-noise"></div>

          <div className="loading-content">
            <RiLoader2Fill className="spinner-icon" />
            <p className="loading-text">Loading...</p>
          </div>

          <div className={`bg-animation ${bgAnimation ? "active" : ""}`}>
            <div className="bg-circle circle-1"></div>
            <div className="bg-circle circle-2"></div>
            <div className="bg-circle circle-3"></div>
          </div>
        </div>
      ) : (
        <div className={`app-container ${bgAnimation ? "animated" : ""}`}>
          {/* Static noise on top */}
          <div className="bg-static-noise"></div>

          <div className="bg-animation">
            <div className="bg-circle circle-1"></div>
            <div className="bg-circle circle-2"></div>
            <div className="bg-circle circle-3"></div>
            <div className="bg-gradient-overlay"></div>
          </div>

          <Index />
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default AppEntry;
