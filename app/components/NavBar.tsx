"use client";

import { button } from "framer-motion/client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur transition-colors duration-300"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white/90">Tausif</span>

        <div className="flex gap-8 text-sm font-medium">
          {[
            { label: "Home", href: "/" },
            { label: "About Me", href: "/about" },
            { label: "My Projects", href: "/projects" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.href)}
              className="
                relative
                text-white/70
                font-medium
                transition-all duration-200
                hover:text-white
                hover:opacity-100
              "
            >
              <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
