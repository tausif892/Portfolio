"use client";

import { useState } from "react";
import { AchievementBox } from "./MileStone";

function MobileTimelineItem({ year, title, description, details }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobile-timeline-item ${open ? "open" : ""}`}>
      {/* FRONT CARD */}
      <div
        className="mobile-timeline-card"
        onClick={() => setOpen(!open)}
      >
        <AchievementBox
          year={year}
          title={title}
          description={description}
        />
      </div>

      {/* REVEALED CONTENT (FROM BEHIND) */}
      <div className="mobile-timeline-details">
        {details}
      </div>
    </div>
  );
}

export function TimeLine() {
  const items = [
    {
      year: "2021",
      title: "Passed Grade 10",
      description: "Scored 98.2% in ICSE",
      details:
        "This phase marked the foundation of my academic discipline and consistency.",
    },
    {
      year: "2023",
      title: "Completed Intermediate and joined MIT Manipal",
      description: "Scored 85% in one of the toughest boards",
      details:
        "Transitioned from school life into rigorous computer science academics.",
    },
    {
      year: "October 2024",
      title: "The Beginning",
      description:
        "Built a patient tracking and assistant app for KMC Oncology",
      details: "Competed in a 3-month long development cycle and came second.",
    },
    {
      year: "July 2025",
      title: "The First Break",
      description: "Worked on AI-powered applications and frontend systems",
      details:
        "Interned at I10AI solutions and migrated databases, rewrote backend in 3 days.",
    },
    {
      year: "October 2025",
      title: "The Alma Mater",
      description: "Built and deployed a chatbot on Microsoft Azure",
      details: "Built a RAG chatbot for my college and deployed it on Azure.",
    },
    {
      year: "December 2025",
      title: "The Fledgelings",
      description: "Started mentoring juniors",
      details: "Guided juniors through industry-level development practices.",
    },
  ];

  return (
    <section className="timeline-main">
      <h2 className="timeline-heading">My Journey</h2>

      <div className="timeline">
        {items.map((item, idx) => (
          <div className="timeline-item-wrapper" key={idx}>
            {/* DESKTOP — UNCHANGED */}
            <div className={`container ${idx % 2 === 0 ? "left" : "right"} desktop-only`}>
              <div className="achievement-hover">
                <AchievementBox
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
                <div className="achievement-hover-info">
                  {item.details}
                </div>
              </div>
            </div>

            {/* MOBILE */}
            <div className="mobile-only">
              <MobileTimelineItem {...item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
