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
                        href="https://codepen.io"
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
                          <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V14.3zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v1.426L2.89 15.69l3.618-2.417zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.83zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V6.38l8.086 5.39-3.612 2.415z" />
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com"
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
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://goodreads.com"
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
                          <path d="M17.47 6.07c-.36-.36-.79-.54-1.29-.54-.5 0-.93.18-1.29.54s-.54.79-.54 1.29.18.93.54 1.29.79.54 1.29.54.93-.18 1.29-.54.54-.79.54-1.29-.18-.93-.54-1.29zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
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
                      deep understanding of JavaScript, TypeScript and Phyton
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
                      with Amazon Web Services (AWS), and serverless
                      architecture. He has a strong grasp of back-end
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
                              Spearheaded the development of scalable React.js
                              applications, leveraging modular component
                              libraries to optimize flexibility, reusability,
                              and long-term maintainability. Engineered and
                              optimized backend processes, achieving a 30%
                              reduction in development time and streamlining the
                              development process. Directed the seamless
                              migration of applications to the latest React
                              version, ensuring enhanced maintainability,
                              improved performance, and future-proofing of the
                              codebase.
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
                              <div className={styles.role}>Senior Engineer</div>
                              <div className={styles.role}>Engineer</div>
                            </div>
                            <p className={styles.experienceDescription}>
                              Led the deployment of scalable fintech solutions,
                              prioritizing performance optimization and robust
                              security features to meet industry standards.
                              Streamlined development workflows, improving team
                              efficiency and ensuring timely delivery of
                              high-quality software. Drove continuous
                              improvement by implementing feedback-driven
                              enhancements, significantly elevating user
                              experience and satisfaction. Strengthened
                              leadership and colaboration ski ls by actively
                              contributing to a high-performing development
                              team.
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
