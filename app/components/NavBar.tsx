"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <span className="navbar-logo">Tausif</span>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {[
            { label: "Home", href: "/" },
            { label: "About Me", href: "/about" },
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
            { label: "About Me", href: "/about" },
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
        </div>
      )}
    </header>
  );
}
