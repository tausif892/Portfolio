"use client";

import { useEffect, useRef } from "react";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false); 

  const services = [
    { idx: 1, title: "Backend Developer", text: "I am a backend developer" },
    {
      idx: 2,
      title: "AI/ML Developer",
      text: "I build AI-enabled products like chatbots and automated platforms",
    },
    {
      idx: 3,
      title: "Frontend Developer",
      text: "I build premium-looking and catchy user interfaces",
    },
    {
      idx: 4,
      title: "Mobile Developer",
      text: "I build cross-platform apps to run natively on Android, iOS, Windows and more",
    },
    {
      idx: 5,
      title: "Cloud Services",
      text: "I can deploy services to cloud platforms like Microsoft Azure, Google Cloud, Vercel, etc",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let target = 0;
    let current = 0;
    let raf: number | null = null;

    const maxScroll = () => content.scrollHeight - container.clientHeight;

    const animate = () => {
      current += (target - current) * 0.12;
      container.scrollTop = current;

      if (Math.abs(target - current) > 0.5) {
        raf = requestAnimationFrame(animate);
      } else {
        current = target;
        container.scrollTop = target;
        raf = null;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (!isHovering.current) return; // only scroll when hovering
      const max = maxScroll();
      target += e.deltaY;
      target = Math.max(0, Math.min(target, max));

      if (!raf) raf = requestAnimationFrame(animate);
      e.preventDefault(); // prevent default scroll only when hovering
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      cancelAnimationFrame(raf!);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="services-list"
      style={{ minHeight: "60vh", overflow: "hidden" }}
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      <div ref={contentRef} className="services-content">
        {services.map((s) => (
          <div key={s.idx} className="service-card">
            <h3 className="services-title">{s.title}</h3>
            <p className="services-text">{s.text}</p>
          </div>
        ))}
        <div className="services-end-spacer" />
      </div>
    </div>
  );
}
