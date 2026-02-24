"use client";

export default function AboutText() {
  return (
    <section className="about-text-section">

      {/* LEFT SIDE — Big Title */}
      <div className="about-text-left">
        <h2 className="about-text-title">About Me</h2>
      </div>

      {/* RIGHT SIDE — Text + Stats */}
      <div className="about-text-right">
        <p className="about-text">
          I am a pre-final year student at MIT Manipal.
        </p>

        <p className="about-text">
          Over the course of the last 3 years, I have delved into virtually every broad
          category of Computer Science, from hard coding to building ML pipelines.
          Having successfully developed projects for clients from my university and
          beyond, I am confident in my ability to deliver quality products quickly.
        </p>
      </div>

    </section>
  );
}
