import React, { useEffect, useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import "./AppEntry.css";
import Index from "../routes/Index";

const AppEntry: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(loadTimer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="app-container" onMouseMove={handleMouseMove}>
      {/* Particle Background */}
      <div className="particles-container">
        <div
          className="particle-focus"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        ></div>
      </div>

      {loading ? (
        <div className="loading-screen">
          <div className="loading-content">
            <RiLoader2Fill className="spinner-icon" />
            <div className="loading-progress">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      ) : (
        <Index />
      )}
    </div>
  );
};

export default AppEntry;
