"use client";

import { AboutMe } from "../components/Intro";
import NavBar from "../components/NavBar";
import { TimeLine } from "../components/Timeline";
import ScrollToTop from "../components/ToTop";

export default function AboutPage() {    
  return (
    <main className="px-2 py-2">
      <NavBar />
      
      <section className="sticky-section-about-page">
        <AboutMe />
      </section>
      
      <section className="normal-scroll-section">
        <TimeLine />
      </section>

      <section className="sticky-page-about-page">
        <ScrollToTop />
      </section>
    </main>
  );
}