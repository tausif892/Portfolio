"use client";

const skills = [
  "NodeJS",
  "ReactJS",
  "Flutter",
  "NextJS",
  "Pandas",
  "NumPy",
  "TensorFlow",
  "Microsoft Azure",
  "Google Cloud",
  "Vercel",
];

export function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-track">
        {skills.map((skill, index) => (
          <span key={`a-${index}`}>{skill}</span>
        ))}
        {skills.map((skill, index) => (
          <span key={`b-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
