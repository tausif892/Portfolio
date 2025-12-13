"use client";

import Navbar from "./components/NavBar";
import AboutText from "./components/AboutText";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Navbar />

      {/* FULL-SCREEN STICKY SECTIONS */}
      <section className="sticky-section">
        <HeroSection />
      </section>

      <section className="sticky-section-about-text">
        <AboutText />
      </section>

      <section className="sticky-section">
        < Services />
      </section>

      <section className="sticky-section">
        <ProjectsSection />
      </section>
    </main>
  );
}
