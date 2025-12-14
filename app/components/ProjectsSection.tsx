  "use client";

  import Link from "next/link";

  export default function ProjectsSection() {
    const projects = [
      { title: "AI Information Assistant", tech: ["Flutter", "Gemini", "NodeJS"] },
      { title: "AI-enabled recommendation chat system", tech: ["React", "Gemini", "NodeJS"] },
      { title: "SEVA - Event Management App", tech: ["Flutter", "MongoDB","NodeJS"] },
      { title: "ReFL3KT - Time Tracking App", tech: ["Flutter", "MongoDB","NodeJS"] },
      { title: "MomoPAy - Payment cum Budgeting App", tech: ["Flutter", "MongoDB", "NodeJS"] },
      { title: "Save Earth Ride website", tech: ["React","NodeJS", "MongoDB"] },
      { title: "Ind2b - B2B ECommerce platform", tech: ["React","NodeJS", "MongoDB"] }
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
