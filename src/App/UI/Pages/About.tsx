import { useEffect, useState } from "react";
import styles from "../Styles/about.module.css";
import PageTransition from "../Components/PageTransition";
import FloatingTechLogosA from "../Components/FloatingTechLogosA";
import { Link } from "react-router-dom";

export default function About() {
  const [activeSection, setActiveSection] = useState("about");

  const projectsData = [
    {
      id: 1,
      title: "Ecobank Mobile App",
      description:
        "A comprehensive mobile banking application built with React Native, featuring secure authentication, real-time transaction processing, and intuitive user interface for seamless banking experience.",
      image:
        "https://www.droidtechhq.com/static/media/ecobankmobile.de9e25f7a38280f34575.png",
      link: "https://github.com/yourusername/ecobank-mobile",
      stars: 45,
      technologies: ["React Native", "TypeScript", "Firebase", "AWS"],
    },
    {
      id: 2,
      title: "Cash Basket",
      description:
        "A mobile app for tracking workouts, diets, and scheduling virtual consultations.",
      image:
        "https://www.droidtechhq.com/static/media/newcashbasket.d26ef8e9cac5c263277e.png",
      link: "https://github.com/yourusername/rapid-transfer",
      stars: 78,
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 3,
      title: "Knowledge City App",
      description:
        "Comprehensive e-learning platform with interactive courses, progress tracking, and personalized learning paths designed to enhance educational experiences for students and professionals.",
      image:
        "https://www.droidtechhq.com/static/media/knowledge-product-image.451f0f4c77ab46ae1e6f.png",
      link: "https://github.com/yourusername/knowledge-city",
      stars: 125,
      technologies: ["Next.js", "React", "PostgreSQL", "Vercel"],
    },
    {
      id: 4,
      title: "@-tech/react-droidinput",
      description:
        "The DroidInput is a highly customizable input component for React applications. It provides a unified interface for various input types including text fields, textareas, and dropdown selects. This component offers extensive styling options and supports both controlled and uncontrolled forms.",
      image:
        "https://www.droidtechhq.com/static/media/droidinput.775476ca8867e6f9b4ed.png",
      link: "https://github.com/yourusername/home-zone",
      stars: 92,
      technologies: ["React Native", "IoT", "MQTT", "AWS IoT"],
    },
    {
      id: 5,
      title: "mySME App",
      description:
        "mySME App from Ecobank is your one-stop digital platform for all your business needs. It enables your business send and receive payments quickly and securely. You can now complete business and banking transactions at your fingertips. You don’t have an account with Ecobank, no worries. Simply visit the Google Playstore and IOS store for Andriod and Apple devices to download the app, open an account and start transacting.",
      image:
        "https://www.droidtechhq.com/static/media/smeappp.734f326009efdf5202d0.png",
      link: "https://github.com/yourusername/home-zone",
      stars: 92,
      technologies: ["React Native", "IoT", "MQTT", "AWS IoT"],
    },
    {
      id: 6,
      title: "D'roid One Dashboard",
      description:
        "D'roid One Dashboard is a comprehensive platform designed to streamline project management and team collaboration. It features real-time analytics, task tracking, and seamless integration with various tools to enhance productivity.",
      image:
        "https://i.postimg.cc/Wb84PvPG/D-roid-Technologies-Ltd-Custom-Software-AI-and-Digital-Innovation-Google-Chrome-11-07-2025-20.png",
      link: "https://www.droidtechhq.com/auth/dashboard",
      stars: 92,
      technologies: ["React", "Firebase", "Typescript", "AWS IoT"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FloatingTechLogosA />
      <PageTransition>
        <div className={styles.portfolio}>
          <div className={styles.container}>
            <div className={styles.layout}>
              {/* Left Column - Fixed sidebar */}
              <div className={styles.sidebar}>
                <div className={styles.sidebarContent}>
                  <div className={styles.headerSection}>
                    <h1 className={styles.mainTitle}>Who is Ekenedilichukwu</h1>
                    <p className={styles.description}>
                      Ekenedilichukwu is a Software Engineer and Founder of
                      D'roid Technologies Ltd, specializing in user-focused web
                      and mobile solutions using React Native, Next.js,
                      Firebase, and AWS.
                    </p>

                    {/* Navigation */}
                    <nav className={styles.navigation}>
                      <ul>
                        <li>
                          <button
                            onClick={() => scrollToSection("about")}
                            className={`${styles.navLink} ${
                              activeSection === "about" ? styles.active : ""
                            }`}
                          >
                            <span className={styles.navIndicator}></span>
                            <span className={styles.navText}>ABOUT</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => scrollToSection("experience")}
                            className={`${styles.navLink} ${
                              activeSection === "experience"
                                ? styles.active
                                : ""
                            }`}
                          >
                            <span className={styles.navIndicator}></span>
                            <span className={styles.navText}>EXPERIENCE</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => scrollToSection("projects")}
                            className={`${styles.navLink} ${
                              activeSection === "projects" ? styles.active : ""
                            }`}
                          >
                            <span className={styles.navIndicator}></span>
                            <span className={styles.navText}>PROJECTS</span>
                          </button>
                        </li>
                      </ul>
                    </nav>
                    <div className={styles.socialLinks}>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>

                      <a
                        href="https//x.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.154 2H21.5L14.327 10.04L22.825 22H16.418L11.111 14.979L5.036 22H1.684L9.317 13.39L1.125 2H7.704L12.51 8.466L18.154 2ZM17.006 20H18.839L7.09 3.939H5.122L17.006 20Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Main content */}
              <div className={styles.mainContent}>
                <section id="about" className={styles.section}>
                  <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>
                      Ekenedilichukwu Okoli is an accomplished Software
                      Engineer, Tech Trainer, and Entrepreneur with a passion
                      for solving real-world problems through innovative digital
                      solutions. With a career spanning over half a decade in
                      the tech industry, he has honed his skills in creating
                      cutting-edge mobile and web applications, leading teams,
                      and nurturing technical talents, especially in emerging
                      technologies. His experience covers diverse sectors such
                      as FinTech, E-commerce, and E-learning, where he has
                      consistently delivered high-quality user-centric products.
                    </p>
                    <p className={styles.paragraph}>
                      Ekenedilichukwu is a highly skilled and versatile Software
                      Engineer, proficient in various modern technologies
                      including React Native, React.js, Next.js, and Redux. His
                      deep understanding of JavaScript, TypeScript and Python
                      allows him to build scalable, maintainable, and efficient
                      software solutions. He has extensive experience in
                      front-end development, crafting smooth and responsive user
                      interfaces. Ekenedilichukwu also specializes in mobile app
                      development, where his work with React Native has resulted
                      in several high-performing applications on both Android
                      and iOS platforms.
                    </p>
                    <p className={styles.paragraph}>
                      His expertise extends to API integration, cloud computing
                      with Amazon Web Services (AWS) and Microsoft Azure
                      serverless architecture. He has a strong grasp of back-end
                      technologies, which gives him the ability to build
                      full-stack solutions, and he thrives in environments where
                      collaboration and technical leadership are required.
                      Throughout his career, he has played pivotal roles in
                      different projects including Ecobank Mobile App, Rapid
                      Transfer Mobile, Knowlecge City App and Home Zone
                      contributing to the development process from
                      conceptualization to deployment.
                    </p>
                  </div>
                </section>

                <section id="experience" className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.experienceList}>
                      <div className={styles.experienceItem}>
                        <div className={styles.experienceHeader}>
                          <div className={styles.experienceDate}>
                            2023 — PRESENT
                          </div>
                          <div className={styles.experienceDetails}>
                            <h3 className={styles.experienceTitle}>
                              <a
                                href="https://www.droidtechhq.com/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.experienceLink}
                              >
                                D’roid Technologies Ltd | Lead Software Engineer
                                <svg
                                  className={styles.externalIcon}
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                </svg>
                              </a>
                            </h3>
                            <p className={styles.experienceDescription}>
                              <ul>
                                <li>
                                  Spearheaded the development of scalable
                                  React.js applications, leveraging modular
                                  component libraries to optimize flexibility,
                                  reusability, and long-term maintainability.
                                </li>
                                <li>
                                  Engineered and optimized backend processes,
                                  achieving a 30% reduction in development time
                                  and streamlining the development process.
                                </li>
                                <li>
                                  Directed the seamless migration of
                                  applications to the latest React version,
                                  ensuring enhanced maintainability, improved
                                  performance, and future-proofing of the
                                  codebase.
                                </li>
                              </ul>
                            </p>
                            <div className={styles.techTags}>
                              <span className={styles.techTag}>JavaScript</span>
                              <span className={styles.techTag}>TypeScript</span>
                              <span className={styles.techTag}>React</span>
                              <span className={styles.techTag}>Storybook</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.experienceItem}>
                        <div className={styles.experienceHeader}>
                          <div className={styles.experienceDate}>2023-2023</div>
                          <div className={styles.experienceDetails}>
                            <h3 className={styles.experienceTitle}>
                              <a
                                href="https://eprocessconsulting.com/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.experienceLink}
                              >
                                Senior Software Engineer | E- Process
                                <svg
                                  className={styles.externalIcon}
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                </svg>
                              </a>
                            </h3>
                            <div className={styles.experienceRoles}>
                              <div
                                style={{ color: "#e2e8f0", fontWeight: "500" }}
                                className={styles.role}
                              >
                                Engineer
                              </div>
                            </div>
                            <p className={styles.experienceDescription}>
                              <ul>
                                <li>
                                  Led the deployment of scalable fintech
                                  solutions, prioritizing performance
                                  optimization and robust security features to
                                  meet industry standards.
                                </li>
                                <li>
                                  Streamlined development workflows, improving
                                  team efficiency and ensuring timely delivery
                                  of high-quality software.
                                </li>
                                <li>
                                  Drove continuous improvement by implementing
                                  feedback-driven enhancements, significantly
                                  elevating user experience and satisfaction.
                                  Strengthened leadership and colaboration ski
                                  ls by actively contributing to a
                                  high-performing development team.
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.resumeLink}>
                      <a
                        href="/resume.pdf"
                        download={true}
                        className={styles.resumeLinkText}
                      >
                        Download Full Résumé
                        <svg
                          className={styles.externalIcon}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </section>

                <section id="projects" className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.projectsList}>
                      {projectsData.map((project) => (
                        <div key={project.id} className={styles.projectItem}>
                          <div className={styles.projectContent}>
                            <div className={styles.projectImageContainer}>
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className={styles.projectImage}
                              />
                            </div>
                            <div className={styles.projectDetails}>
                              <h3 className={styles.projectTitle}>
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={styles.projectLink}
                                >
                                  {project.title}
                                  <svg
                                    className={styles.externalIcon}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                  >
                                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                  </svg>
                                </a>
                              </h3>
                              <p className={styles.projectDescription}>
                                {project.description}
                              </p>
                              <div className={styles.projectStats}>
                                <span className={styles.projectStat}>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                  {project.stars}
                                </span>
                              </div>
                              <div className={styles.techTags}>
                                {project.technologies.map((tech, index) => (
                                  <span key={index} className={styles.techTag}>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.archiveLink}>
                      <center>
                        <Link
                          to="/podcast  "
                          className={styles.archiveLinkText}
                        >
                          See my Podcast
                          <span className="arrow">↓</span>
                        </Link>
                      </center>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
