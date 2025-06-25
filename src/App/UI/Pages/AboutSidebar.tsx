import React, { useState, useEffect } from "react";

const sections = ["bio", "skills", "experience", "education"];

const AboutSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("bio");

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="about-sidebar">
      <h1>my name</h1>
      <span>titlw</span>
      <p>my description </p>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => handleClick(section)}
            className={activeSection === section ? "active" : ""}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
      add my socials here
    </aside>
  );
};

export default AboutSidebar;
