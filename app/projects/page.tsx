"use client";

import NavBar from "../components/NavBar";
import { ProjectCard } from "../components/ProjectCard";
import { Project } from "../types/Project";

const projects: Project[] = [
  {
    title: "Attendance System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Attendance System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Attendance System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Attendance System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Attendance System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Attendance System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Attendance System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
        <NavBar />
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </section>
  );
}
