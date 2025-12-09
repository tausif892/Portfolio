"use client";

import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    { title: "AI Chatbot Assistant", tech: ["Next.js", "OpenAI"] },
    { title: "E-Commerce Dashboard", tech: ["React", "Supabase"] },
    { title: "3D Portfolio Demo", tech: ["Three.js"] },
    { title: "Flutter Attendance App", tech: ["Flutter", "MongoDB"] },
    { title: "Node API Service", tech: ["Node.js", "Express"] },
  ];

  return (
    <section id="projects" className="projects-home">
      {/* HEADER */}
      <div className="projects-home-header">
        <h2 className="projects-home-title">Projects</h2>

        <Link href="/projects" className="projects-home-seeall">
          <span>See all</span>
          <span className="projects-home-arrow">→</span>
        </Link>
      </div>

      {/* PROJECTS */}
      <div className="projects-home-scroll">
        {projects.map((project, index) => (
          <div key={index} className="project-home-card">
            <h3 className="project-home-title">{project.title}</h3>

            <div className="project-home-tech-list">
              {project.tech.map((tech, i) => (
                <span key={i} className="project-home-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
