import ProjectsSection from "./components/ProjectsSection";
import Navbar from "./components/NavBar";
import Services from "./components/Services";
import { Skills } from "./components/Skills";
import Avatar from "./components/AvatarPlaceholder";
import AboutText from "./components/AboutText";

export default function Home() {
  return (
    <main className="px-20 py-50">
      <Navbar />
      {/* HERO SECTION */}
      <section className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h2 className="hero-greeting">
            Hello<span className="dot">.</span>
          </h2>

          <h1 className="hero-name">
            I'm <span className="highlight">Tausif</span>
          </h1>

          <h3 className="hero-role">Software Developer</h3>

          <p className="hero-description">
            I design and build scalable, elegant systems with clean code and refined UI.
          </p>

          <div className="hero-buttons">
            <div className="hero-buttons">
            <a
              href="mailto:tausifyourmail@gmail.com?subject=Project Collaboration"
              className="btn-primary"
            >
              Got a project?
            </a>

            <a
              href="/resume/resume_latest_after_intern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              My Resume
            </a>
          </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-right">

          <div className="hero-glow"></div>
          <div className="hero-ring"></div>

          <div className="hero-avatar">
            <Avatar />
          </div>

        </div>

      </section>
      {/* ABOUT SECTION */}
      <AboutText />
      <Services />
      <ProjectsSection />
    </main>
  );
}
