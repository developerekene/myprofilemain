import React from "react";

const AboutSections: React.FC = () => {
  return (
    <main className="about-content">
      <section id="bio">
        <h2>Bio</h2>
        <p>
          I'm Ekenedilichukwu Okoli, a passionate software engineer with
          expertise in JavaScript and Python. With over 5 years of experience in
          building scalable web applications, I specialize in creating intuitive
          user experiences and robust backend systems.
        </p>
        <div className="bio-highlights">
          <div className="highlight-card">
            <h3>Mission</h3>
            <p>
              To build technology that solves real problems with elegant
              solutions.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Philosophy</h3>
            <p>Clean code, thoughtful design, and continuous learning.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Express</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps</h3>
            <ul>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Senior Developer @ TechCorp</h3>
            <span className="timeline-date">2021 - Present</span>
            <p>Led frontend architecture for enterprise SaaS platform.</p>
          </div>
          <div className="timeline-item">
            <h3>Software Engineer @ Startup</h3>
            <span className="timeline-date">2019 - 2021</span>
            <p>Full-stack development of customer-facing applications.</p>
          </div>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.Sc Computer Science</h3>
          <span className="education-institution">University of XYZ</span>
          <span className="education-date">2015 - 2019</span>
          <p>Specialized in Artificial Intelligence and Web Technologies.</p>
        </div>
      </section>
    </main>
  );
};

export default AboutSections;
