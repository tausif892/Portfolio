"use client";

import { useState } from "react";

type Service = {
  id: number;
  title: string;
  tech: string[];
};

const services: Service[] = [
  {
    id: 1,
    title: "Backend Development",
    tech: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT"],
  },
  {
    id: 2,
    title: "AI / ML Development",
    tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    id: 3,
    title: "Frontend Development",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "Mobile Development",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 5,
    title: "Cloud & Deployment",
    tech: ["Docker", "Azure", "GCP", "Vercel", "CI/CD"],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="services-row-section">
      {/* SECTION TITLE */}
      <h2 className="services-title-main">My Skills</h2>

      <div className="services-row-container">
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <div
              key={service.id}
              className={`service-row ${isActive ? "active" : ""}`}
              onClick={() =>
                setActiveId(isActive ? null : service.id)
              }
            >
              {/* LEFT: TITLE */}
              <div className="service-row-title">
                {service.title}
              </div>

              {/* RIGHT: TECH STACK */}
              <div className="service-row-tech">
                {service.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
