"use client";

import { useEffect, useRef } from "react";

type Service = {
  idx: number;
  title: string;
  text: string;
};

export function Services({
  onActiveChange,
  activeTitle,
}: {
  onActiveChange: (service: Service) => void;
  activeTitle: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const isHovering = useRef(false);

  const services: Service[] = [
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

  /* DESKTOP SMOOTH SCROLL ONLY */
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let target = 0;
    let current = 0;
    let raf: number | null = null;

    const maxScroll = () =>
      content.scrollHeight - container.clientHeight;

    const animate = () => {
      current += (target - current) * 0.12;
      container.scrollTop = current;
      detectActiveCard();

      if (Math.abs(target - current) > 0.5) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = null;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (!isHovering.current) return;

      target += e.deltaY;
      target = Math.max(0, Math.min(target, maxScroll()));

      if (!raf) raf = requestAnimationFrame(animate);
      e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const detectActiveCard = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    let activeIdx = 0;

    cardRefs.current.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= containerTop + 120) {
        activeIdx = i;
      }
    });

    onActiveChange(services[activeIdx]);
  };

  return (
    <div
      ref={containerRef}
      className="services-list"
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      <div ref={contentRef} className="services-content">
        {services.map((s, i) => (
          <div
            key={s.idx}
            ref={(el) => {
              if (el) cardRefs.current[i] = el;
            }}
            className={`service-card ${
              activeTitle === s.title ? "active" : ""
            }`}
            onClick={() => onActiveChange(s)}
          >
            <h3 className="services-title">{s.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
