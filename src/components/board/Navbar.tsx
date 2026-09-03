"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/site-data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLenis } from "@/components/effects/SmoothScrollProvider";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [active, setActive] = useState(navLinks[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  // tracks which section is currently centered in the viewport
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50
                 backdrop-blur-sm 
                 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 font-handwritten font-semibold text-ink dark:text-ink-dark"
        >
          <span className="w-8 h-8 rounded-full bg-ink dark:bg-accent-dark text-white flex items-center justify-center text-sm">
            K
          </span>
          krutarth.dev
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-handwritten text-sm relative pb-1 transition-colors ${
                active === link.id
                  ? "text-ink dark:text-ink-dark"
                  : "text-gray-500 dark:text-text-dark/70 hover:text-ink dark:hover:text-ink-dark"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent dark:bg-accent-dark rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="block">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden text-ink dark:text-ink-dark"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden h-screen bg-desk dark:bg-desk-dark border-t border-black/5 dark:border-border-dark px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-handwritten text-left text-sm ${
                active === link.id
                  ? "text-accent dark:text-accent-dark"
                  : "text-ink dark:text-ink-dark"
              }`}
            >
              {link.label}
            </button>
          ))}
          
        </div>
      )}
    </header>
  );
}