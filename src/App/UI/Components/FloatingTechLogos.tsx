import type React from "react";
import styles from "./tech-portfolio.module.css";

export default function FloatingTechLogos() {
  const techStack = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "TypeScript", icon: "TS", color: "#3178C6" },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "HTML5", icon: "HTML", color: "#E34F26" },
    { name: "CSS3", icon: "CSS", color: "#1572B6" },
    { name: "Git", icon: "📦", color: "#F05032" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "AWS", icon: "☁️", color: "#FF9900" },
  ];

  return (
    <div className={styles.techBackground}>
      {/* Background Tech Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gridPattern}></div>
        <div className={styles.circuitLines}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
          <div className={styles.line4}></div>
        </div>
        <div className={styles.geometricShapes}>
          <div className={styles.hexagon1}></div>
          <div className={styles.hexagon2}></div>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>
      </div>

      {/* Floating Tech Stack */}
      <div className={styles.floatingTech}>
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className={`${styles.techIcon} ${
              styles[`float${(index % 4) + 1}`]
            }`}
            style={
              {
                "--tech-color": tech.color,
                "--delay": `${index * 0.5}s`,
                "--duration": `${8 + (index % 3) * 2}s`,
              } as React.CSSProperties
            }
          >
            <div className={styles.techContent}>
              <span className={styles.techEmoji}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Particle Effects */}
      <div className={styles.particles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={
              {
                "--delay": `${i * 0.3}s`,
                "--duration": `${10 + (i % 5) * 2}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
