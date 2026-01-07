"use client";

import { useEffect, useState } from "react";
import Avatar from "./AvatarPlaceholder";

/* ------------------ DATA ------------------ */

// Greetings (typewriter)
const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "السلام عليكم", lang: "Arabic" },
  { text: "你好", lang: "Chinese" },
];

// Roles & descriptions
const roles = [
  {
    title: "A software Developer",
    description: "Building scalable and maintainable software systems.",
  },
  {
    title: "A DevOps Engineer",
    description: "Automating deployments and managing cloud infrastructure.",
  },
  {
    title: "A machine Learning Engineer",
    description: "Creating intelligent systems powered by data.",
  },
  {
    title: "An app Developer",
    description: "Developing cross-platform mobile applications.",
  },
];

/* ------------------ COMPONENT ------------------ */

export default function HeroSection() {
  /* Greeting typewriter */
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  /* Role rotation */
  const [roleIndex, setRoleIndex] = useState(0);

  /* -------- TYPEWRITER EFFECT -------- */
  useEffect(() => {
    const currentGreeting = greetings[greetingIndex].text;

    if (charIndex < currentGreeting.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentGreeting[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 90);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
      }, 3500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, greetingIndex]);

  /* -------- ROLE ROTATION -------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero hero-enter">
      {/* LEFT CONTENT */}
      <div className="hero-left hero-slide-up">
        <h2 className="hero-greeting">
          {typedText}
          <span className="cursor">|</span>
        </h2>

        <h1 className="hero-name hero-fade-in">
          I'm <span className="highlight">Tausif</span>
        </h1>

        <div key={roleIndex} className="role-wrapper">
          <h3 className="hero-role role-animate">
            {roles[roleIndex].title}
          </h3>

          <p className="hero-description desc-animate">
            {roles[roleIndex].description}
          </p>
        </div>
        <div className="hero-buttons hero-fade-in">
          <a
            href="mailto:tausifyourmail@gmail.com?subject=Project Collaboration"
            className="btn-primary"
          >
            Got a project?
          </a>

          <a
            href="/resume/resume-v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="hero-right hero-scale-in">
        <div className="hero-avatar">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
