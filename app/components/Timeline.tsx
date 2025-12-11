"use client";

import { useState } from "react";
import { AchievementBox } from "./MileStone";

function MobileItem({ children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-timeline-item">
      <div className="mobile-title" onClick={() => setOpen(!open)}>
        {children.titleComponent}
      </div>

      <div className={`mobile-details ${open ? "open" : ""}`}>
        {children.detailsComponent}
      </div>
    </div>
  );
}

export function TimeLine() {
  return (
    <section className="timeline-main">
      <span className="timeline-title">My Journey</span>

      <div className="timeline">

        <TimelineItem
          year="2021"
          title="Passed Grade 10"
          description="Scored a whopping 98.2% in ICSE"
          details="This phase marked the foundation of my academic discipline and consistency."
        />

        <TimelineItem
          year="2023"
          title="Completed Intermediate and joined MIT Manipal"
          description="Scored 85% in one of the toughest high school boards of India"
          details="Transitioned from school life into rigorous computer science academics."
        />

        <TimelineItem
          year="October 2024"
          title="The Beginning"
          description="Built a patient tracking and assistant app for KMC Oncology department"
          details="Competed in a 3-month long development cycle and came second."
        />

        <TimelineItem
          year="July 2025"
          title="The First Break"
          description="Worked on AI-powered applications and advanced frontend systems"
          details="Interned at I10AI solutions and migrated databases, rewrote backend in 3 days."
        />

        <TimelineItem
          year="October 2025"
          title="The Alma Mater"
          description="Built and deployed a chatbot on Microsoft Azure"
          details="Built a RAG chatbot for my college and deployed it on Microsoft Azure."
        />

        <TimelineItem
          year="December 2025"
          title="The Fledgelings"
          description="Started mentoring juniors"
          details="Guided juniors through industry-level development practices."
        />

      </div>
    </section>
  );
}

/* Shared component for desktop + mobile */
function TimelineItem({ year, title, description, details }: any) {
  return (
    <>
      {/* DESKTOP NORMAL VIEW */}
      <div className="container content desktop-only">
        <div className="achievement-hover">
          <AchievementBox year={year} title={title} description={description} />
          <div className="achievement-hover-info">{details}</div>
        </div>
      </div>

      {/* MOBILE DRAWER VIEW */}
      <div className="mobile-only">
        <MobileItem
          children={{
            titleComponent: (
              <AchievementBox
                year={year}
                title={title}
                description={description}
              />
            ),
            detailsComponent: <div className="mobile-details-inner">{details}</div>
          }}
        />
      </div>
    </>
  );
}
