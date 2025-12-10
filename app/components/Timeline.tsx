"use client";

import { AchievementBox } from "./MileStone";

export function TimeLine() {
  return (
    <section className="timeline-main">
      <span className="timeline-title">My Journey</span>

      <div className="timeline">

        <div className="container left">
          <div className="content">
            <div className="achievement-hover">
              <AchievementBox
                year="2021"
                title="Passed Grade 10"
                description="Scored a whopping 98.2% in ICSE"
              />
              <div className="achievement-hover-info">
                This phase marked the foundation of my academic discipline and consistency.
              </div>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="achievement-hover">
              <AchievementBox
                year="2023"
                title="Completed Intermediate and joined MIT Manipal"
                description="Scored 85% in one of the toughest high school boards of India, and became a CS fresher at MIT Manipal"
              />
              <div className="achievement-hover-info">
                Transitioned from school life into rigorous computer science academics.
              </div>
            </div>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <div className="achievement-hover">
              <AchievementBox
                year="October 2024"
                title="The Beginning"
                description="Built a patient tracking and assistant app for KMC Oncology department"
              />
              <div className="achievement-hover-info">
                Competed in a 3-month long development cycle for the first time and came second in the contest.
              </div>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="achievement-hover">
              <AchievementBox
                year="July 2025"
                title="The First Break"
                description="Worked on AI-powered applications and advanced frontend systems"
              />
              <div className="achievement-hover-info">
                Interned at I10AI solutions, exposing myself to countless new challenges in a fast-paced start-up environment. I migrated the databases and re-wrote entire backend codebases in 3 days and built Retrieval Augmented Generation (RAG) chatbots, integrating it with a real time multi-mapping chat system.
              </div>
            </div>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <div className="achievement-hover">
              <AchievementBox
                year="October 2025"
                title="The Alma Mater"
                description="Built and deployed a chatbot on Microsoft Azure"
              />
              <div className="achievement-hover-info">
                Built a RAG chatbot for my college and deployed it on Microsoft Azure. It gave me experience on how to build solutions to tackle problems faced by academia and their interaction with the students
              </div>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="achievement-hover">
              <AchievementBox
                year="December 2025"
                title="The Fledgelings"
                description="Started mentoring juniors in app, web, and AI development"
              />
              <div className="achievement-hover-info">
                Took promising juniors under my wing to teach them software development through real projects with full ownership and accountability.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
