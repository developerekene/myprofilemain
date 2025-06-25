import React from "react";
import PageTransition from "../Components/PageTransition";
import "../Styles/About.css";
import AboutSidebar from "./AboutSidebar";
import AboutSections from "./AboutSections";

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="about-layout">
        <AboutSidebar />
        <AboutSections />
      </div>
    </PageTransition>
  );
};

export default About;
