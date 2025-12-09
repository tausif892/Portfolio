"use client";

import { useState } from "react";
import { Project } from "../types/Project";
import {ProjectOverlay} from "./ProjectOverlay";
import {motion} from "framer-motion";

export function ProjectCard({project}: {project: Project}) {
    const [open, setOpen] = useState(false);

    return (
        <>
        <motion.div 
        className="project-card"
        whileHover={{scale:1.03}}
        onClick={()=>setOpen(true)}
        >
        <img src={project.coverImage} alt={project.title} />
        <div className="project-card-title">{project.title}</div>
        </motion.div>

        {open && (
            <ProjectOverlay project={project} onClose={() => setOpen(false)} />
        )}
        </>
    );
}