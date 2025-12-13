"use client";

import { useEffect, useRef } from "react";

type Service = {
  idx: number;
  title: string;
  text: string;
};

export function Services({
  onActiveChange,
}: {
  onActiveChange: (service: Service) => void;
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

  /* ================================
      SMOOTH SCROLL
  ================================= */
  useEffect(() => {
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
      detectActiveCard(); // 🔥 IMPORTANT

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

  /* ================================
      ACTIVE CARD DETECTION (FIXED)
  ================================= */
  const detectActiveCard = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    
    // We default to the first card
    let activeIdx = 0;

    // A small buffer (offset) ensures the text changes slightly before 
    // or exactly when it locks into place.
    const offset = 20; 

    cardRefs.current.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      
      // LOGIC: Check if the card's top edge has reached the container's top edge.
      // Since we are iterating in order (0 to 5), if Card 2 satisfies this, 
      // it overwrites Card 1. This ensures the "top-most" visual card is selected.
      if (rect.top <= containerTop + offset + (i+5)*90) {
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
            className="service-card"
          >
            <h3 className="services-title">{s.title}</h3>
          </div>
        ))}
        <div style={{ height: "50vh" }} />
      </div>
    </div>
  );
}