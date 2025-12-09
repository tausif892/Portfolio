"use client";

import Link from "next/link";

export default function AboutText() {
  return (
    <section className="about-text-section">
      <div className="about-text-content">
        <h2 className="about-text-title">About Me</h2>
        <p className="about-text">
          I am a pre-final year student at MIT Manipal.
        </p>
        <p className="about-text">
          Over the course of the last 3 years, I have delved into virtually every broad category of Computer Science, from hard coding to building ML pipelines.
        </p>
        <p className="about-text">
          Having successfully developed projects for clients from my university and beyond, I am confident in my ability to deliver quality products quickly.
        </p>

        <Link href="/about" className="about-text-button">
          Know more
        </Link>
      </div>
    </section>
  );
}
