"use client";

import { contact } from "@/content/site-data";
import { GitCommit, Link, Mail } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { Pin } from "@/components/ui/Pin";

const iconMap = {
  github: GitCommit,
  linkedin: Link,
  mail: Mail,
};

export function Contact() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-desk px-6 py-24 scroll-mt-20">
      <h2 className="font-handwritten text-4xl md:text-5xl text-ink mb-3">
        {contact.heading}
      </h2>
      <p className="font-sans text-gray-600 mb-10 text-center max-w-md">
        {contact.subtext}
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {contact.links.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.label}
              href={link.url}
              target={link.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="block"
            >
              <StickyNote
                color={
                  link.icon === "mail"
                    ? "yellow"
                    : link.icon === "github"
                    ? "white"
                    : "blue"
                }
                rotate={link.icon === "linkedin" ? 2 : -2}
                className="w-32 flex flex-col items-center justify-center py-6 hover:scale-105 transition-transform"
              >
                <Pin />
                <Icon size={22} className="text-ink mb-2" />
                <span className="font-handwritten text-lg text-ink">
                  {link.label}
                </span>
              </StickyNote>
            </a>
          );
        })}
      </div>

      <footer className="mt-16 text-xs text-gray-400 font-sans">
        © {new Date().getFullYear()} Krutarth. Built with Next.js & GSAP.
      </footer>
    </section>
  );
}