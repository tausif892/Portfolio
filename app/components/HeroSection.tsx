"use client";

import { useEffect, useState } from "react";
import Avatar from "./AvatarPlaceholder";

/* ------------------ DATA ------------------ */

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "السلام عليكم", lang: "Arabic" },
  { text: "你好", lang: "Chinese" },
];

const roles = [
  {
    title: "A Software Developer",
    description: "Building scalable and maintainable software systems.",
  },
  {
    title: "A DevOps Engineer",
    description: "Automating deployments and managing cloud infrastructure.",
  },
  {
    title: "A Machine Learning Engineer",
    description: "Creating intelligent systems powered by data.",
  },
  {
    title: "An App Developer",
    description: "Developing cross-platform mobile applications.",
  },
];

/* SVG icons */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ------------------ COMPONENT ------------------ */

export default function HeroSection() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

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
            Got a project? →
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

        {/* Social Links */}
        <div className="hero-socials hero-fade-in">
          <a
            href="https://github.com/tausif892"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/tausif"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:tausifyourmail@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <MailIcon />
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
