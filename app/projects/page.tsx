"use client";

import NavBar from "../components/NavBar";
import { ProjectCard } from "../components/ProjectCard";
import { Project } from "../types/Project";

const projects: Project[] = [
  {
    title: "SEVA - Event Management System",
    coverImage: "/projects/attendance/cover.png",
    images: [
      "/projects/attendance/1.png",
      "/projects/attendance/2.png",
      "/projects/attendance/3.png",
    ],
    github: "https://github.com/tausif892/NSS-Attendance-System",
    category: "Mobile, Backend",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "AI-enabled Chat System",
    coverImage: "/projects/recommendation-chatbot/cover.png",
    images: [
      "/projects/recommendation-chatbot/cover.png",
      "/projects/recommendation-chatbot/1.png",
      "/projects/recommendation-chatbot/2.png",
      "/projects/recommendation-chatbot/3.png",
      "/projects/recommendation-chatbot/4.png"
    ],
    category: 'Frontend, Backend, AI',
    github: "https://github.com/tausif892/Chatroom-Frontend , https://github.com/tausif892/Chatroom-Backend",
    techStack: ["React", "Node.js", "MongoDB", "FastAPI","Gemini","ChromaDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Refl3KT - Time Management App",
    coverImage: "/projects/seva/cover.png",
    images: [
      "/projects/seva/1.png",
      "/projects/seva/2.png",
      "/projects/seva/3.png",
      "/projects/seva/4.png"
    ],
    category: 'Mobile, Backend, Frontend, AI',
    github: "https://github.com/tausif892/ReFL3KT_backend",
    techStack: ["Flutter", "Node.js", "MongoDB","FastAPI"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "Biking Community Of India website",
    coverImage: "/projects/biking/cover.png",
    images: [
      "/projects/biking/cover.png",
      "/projects/biking/1.png",
      "/projects/biking/2.png",
    ],

    category: 'Backend',
    github: "https://www.bikingcommunityofindia.com/",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "InfoDesk Chatbot",
    coverImage: "/projects/sce-chatbot/cover.png",
    images: [
      "/projects/sce-chatbot/cover.png",
      "/projects/sce-chatbot/1.png",
      "/projects/sce-chatbot/2.png",
    ],
    category: 'AI, Backend, Frontend',
    github: "https://github.com/username/project",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
  {
    title: "MoMoPAy - Payment cum budgeting App",
    coverImage: "/projects/momopay/cover.png",
    images: [
      "/projects/momppay/cover.png",
    ],
    category: 'mobile, backend',
    github: "https://github.com/tausif892/Momopay-Backend",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "A university club attendance management system with analytics and events.",
  },
];

export default function ProjectsSection() {
  const categories = ["All", "Frontend", "Backend", "Mobile", "Data Science", "AI/ML", "Cloud"];
  return (
    <section className="projects-section">
        <NavBar />
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </section>
  );
}
