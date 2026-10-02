"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const items = [
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as "light" | "dark") ?? "light");
  }, []);

  const flip = () => {
    const next = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) doc.startViewTransition(apply);
    else apply();
  };

  return (
    <button
      onClick={flip}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--bg)]"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
        )}
      </svg>
    </button>
  );
}

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 });
  const [active, setActive] = useState("");
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        solid ? "border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="display text-xl" aria-label={`${profile.name}, back to top`}>
          Carmine Coppola
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm transition-colors ${active === item.id ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
            >
              {item.label}
              {active === item.id && (
                <motion.span layoutId="nav-dot" className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={profile.cv} download className="pill hidden sm:inline-flex">
            Download CV
          </a>
          <ThemeToggle />
        </div>
      </div>
      <motion.div style={{ scaleX }} className="h-px origin-left bg-[var(--accent)]" />
    </header>
  );
}
