"use client";

import { AchievementBox } from "./MileStone";

export function TimeLine() {
  return (
    <section className="timeline-main">
      <span className="timeline-title">My Journey</span>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <AchievementBox
              year="2021"
              title="Passed Grade 10"
              description="Scored a whopping 98.2% in ICSE"
            />
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <AchievementBox
              year="2023"
              title="Completed Intermediate and joined MIT Manipal"
              description="Scored 85% in one of the toughest high school boards of India, and became a CS fresher at MIT Manipal"
            />
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <AchievementBox
              year="October 2024"
              title="The Beginning"
              description="Built a patient tracking and assistant app for KMC Oncology department using Flutter and Flask"
            />
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <AchievementBox
              year="July 2025"
              title="The First Break"
              description="Worked on AI-powered applications and advanced frontend systems"
            />
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <AchievementBox
              year="October 2025"
              title="The Alma Mater"
              description="Built and deployed a chatbot on Microsoft Azure"
            />
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <AchievementBox
              year="December 2025"
              title="The Fledgelings"
              description="Started mentoring juniors in app, web, and AI development"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
