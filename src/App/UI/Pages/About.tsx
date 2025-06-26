import React, { useEffect, useState } from "react";
import "../Styles/About.css";
import PageTransition from "../Components/PageTransition";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const sections = ["bio", "experience", "education"];

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState("bio");

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 70;
      setActiveSection("bio"); // Default to bio on initial load

      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            el.classList.add("active-section");
          } else {
            el.classList.remove("active-section");
          }
        }
      });
    };

    handleScroll(); // Run once initially
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="about-layout">
        {/* Sidebar */}
        <aside className="about-sidebar">
          <div className="sidebar-content">
            <div className="profile-header">
              <h1>Ekene Okoli</h1>
              <h2>Software Engineer</h2>
              <p className="description">
                Building exceptional digital experiences with JavaScript and
                Python.
              </p>
            </div>

            <nav className="section-nav">
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
            </nav>

            <div className="social-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a href="mailto:your@email.com">
                <FiMail />
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="about-content">
          <section id="bio">
            <h2 className="section-heading">About Me</h2>
            <div className="section-content">
              <p>
                Hello! I'm Ekene, a software engineer based in Nigeria who
                enjoys building things that live on the internet.
              </p>
              <p>
                I develop websites and apps with intuitive, pixel-perfect user
                experiences.
              </p>
              <p>Recently working with:</p>
              <ul className="skills-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
              </ul>
            </div>
          </section>

          <section id="experience">
            <h2 className="section-heading">Where I've Worked</h2>
            <div className="section-content">
              <div className="experience-item">
                <h3>
                  <span>Company ABC</span>
                  <span className="company-role">Frontend Dev</span>
                </h3>
                <p className="experience-date">Jan 2022 – Present</p>
                <ul className="experience-details">
                  <li>Built performant UIs using React & TypeScript</li>
                  <li>Collaborated with cross-functional teams</li>
                  <li>Implemented best UI/UX practices</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="education">
            <h2 className="section-heading">Where I Studied</h2>
            <div className="section-content">
              <div className="education-item">
                <h3>University of Cross River State</h3>
                <p className="education-degree">
                  B.Sc. Computer Science • 2018 - 2022
                </p>
                <ul className="education-details">
                  <li>Specialized in AI and Fullstack Development</li>
                  <li>Graduated with First Class Honors</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default About;
