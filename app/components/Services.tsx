"use client";
import { useState } from 'react';

const skills = [
  { name: "NodeJS", category: "Backend" },
  { name: "ReactJS", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "NextJS", category: "Frontend" },
  { name: "Pandas", category: "Data Science" },
  { name: "NumPy", category: "Data Science" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <div className="skills-section">
      {/* Title */}
      <div className="skills-header">
        <h2 className="skills-main-title">
          Tech <span className="skills-title-accent">Arsenal</span>
        </h2>
        <div className="skills-title-underline"></div>
        <p className="skills-subtitle">
          A curated collection of technologies and frameworks I leverage to build exceptional digital experiences
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredSkill(idx)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="skill-card"
          >
            {/* Glow effect on hover */}
            <div className="skill-card-glow"></div>
            
            {/* Content */}
            <div className="skill-card-content">
              <div className="skill-icon">
                <span className="skill-icon-text">
                  {skill.name.substring(0, 2)}
                </span>
              </div>
              
              <h3 className="skill-name">
                {skill.name}
              </h3>
              
              <span className="skill-category-badge">
                {skill.category}
              </span>
            </div>

            {/* Corner accent */}
            <div className="skill-card-corner">
              <div className="skill-card-corner-inner"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="skills-bottom-decoration">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="skills-pulse-dot"
            style={{
              opacity: 0.3 + (i * 0.15),
              animationDuration: `${2 + i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}