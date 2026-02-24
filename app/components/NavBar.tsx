"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-container${scrolled ? " navbar-scrolled" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <span className="navbar-logo">
          <span className="navbar-logo-accent">T.</span>ausif
        </span>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {[
            { label: "Home", href: "/" },
            { label: "My Projects", href: "/projects" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.href)}
              className="nav-btn"
            >
              <span className="nav-underline">{item.label}</span>
            </button>
          ))}
          <a
            href="mailto:tausifyourmail@gmail.com?subject=Project Collaboration"
            className="nav-cta"
          >
            Let's Talk →
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span className={open ? "line line1-open" : "line"}></span>
          <span className={open ? "line line2-open" : "line"}></span>
          <span className={open ? "line line3-open" : "line"}></span>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mobile-menu">
          {[
            { label: "Home", href: "/" },
            { label: "My Projects", href: "/projects" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                router.push(item.href);
                setOpen(false);
              }}
              className="mobile-nav-btn"
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:tausifyourmail@gmail.com?subject=Project Collaboration"
            className="mobile-nav-btn"
            style={{ color: "#ef4444" }}
          >
            Let's Talk →
          </a>
        </div>
      )}
    </header>
  );
}
