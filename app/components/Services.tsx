"use client";

const skills = [
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Pandas",
    category: "Data Science",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    category: "Data Science",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "TensorFlow",
    category: "AI / ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Azure",
    category: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

export default function Skills() {
  return (
    <div className="skills-section">
      {/* Title */}
      <div className="skills-header">
        <h2 className="skills-main-title">
          Tech <span className="skills-title-accent">Arsenal</span>
        </h2>
        <div className="skills-title-underline"></div>
        <p className="skills-subtitle">
          Technologies and frameworks I use to build exceptional digital products
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            {/* Glow effect on hover */}
            <div className="skill-card-glow"></div>

            {/* Content */}
            <div className="skill-card-content">
              <div className="skill-icon">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="skill-icon-img"
                />
              </div>

              <h3 className="skill-name">{skill.name}</h3>

              <span className="skill-category-badge">{skill.category}</span>
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
              opacity: 0.3 + i * 0.15,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}