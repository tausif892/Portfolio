"use client";

import { useState } from "react";
import {Project} from "../types/Project";
import {motion} from "framer-motion";

export function ProjectOverlay({project, onClose}: {project: Project; onClose:()=>void}){
    const [index, setIndex] = useState(0);

    return (
        <motion.div
        className="project-overlay"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        >
            <div className="overlay-content">
                <button 
                className="close-btn"
                onClick={onClose}>
                    X
                </button>
                <h2>{project.title}</h2>
                <p className="overlay-description">{project.description}</p>
                <div className="tech-stack">
                {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
                </div>
                <div className="overlay-carousel">
                <button onClick={() => setIndex((index - 1 + project.images.length) % project.images.length)}>
                    ‹
                </button>

                <img src={project.images[index]} alt="" />

                <button onClick={() => setIndex((index + 1) % project.images.length)}>
                    ›
                </button>
                </div>
                <a
                href={project.github}
                target="_blank"
                className="github-link"
                >
                View on GitHub
                </a>
            </div>
        </motion.div>
    );
}