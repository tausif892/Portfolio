"use client";

import { useState } from "react";
import { Services } from "./AboutTimeline";

export function AboutMe() {
  const [activeService, setActiveService] = useState({
    title: "Backend Developer",
    text: "I am a backend developer",
  });

  return (
    <section className="about-section">

      {/* MOBILE + DESKTOP DESCRIPTION */}
      <div className="about-description">
        <h2>{activeService.title}</h2>
        <p>{activeService.text}</p>
      </div>

      {/* SERVICES */}
      <Services
        onActiveChange={setActiveService}
        activeTitle={activeService.title}
      />

    </section>
  );
}
