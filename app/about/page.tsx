"use client";

import { AboutMe } from "../components/Intro";
import NavBar from "../components/NavBar";
import { TimeLine } from "../components/Timeline";
import ScrollToTop from "../components/ToTop";

export default function AboutPage() {    
  return (
    <main className="px-2 py-2">
      <NavBar />
      
      {/* 1. Intro Section (Keep this Sticky) */}
      <section className="sticky-section-about-page">
        <AboutMe />
      </section>

      {/* 2. Timeline Section (CHANGE THIS CLASS) 
           We change this to a new class that allows scrolling. 
      */}
      <section className="normal-scroll-section">
        <TimeLine />
      </section>

      <section className="sticky-page-about-page">
        <ScrollToTop />
      </section>
    </main>
  );
}