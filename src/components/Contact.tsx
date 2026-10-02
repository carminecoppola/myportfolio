"use client";

import { useState } from "react";
import { materials, profile } from "@/data/profile";
import LinkPill from "./LinkPill";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="border-t border-[var(--line)] py-28 md:py-40">
      <div className="wrap">
        <Reveal className="eyebrow">04 — Contact</Reveal>
        <Reveal as="section" delay={0.05}>
          <h2 className="display mt-6 text-[clamp(3rem,9vw,8rem)]">
            Let&rsquo;s build <span className="italic text-[var(--accent)]">something</span> that runs.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="pill pill-solid">
            {profile.email}
          </a>
          <button onClick={copy} className="pill" aria-live="polite">
            {copied ? "Copied" : "Copy address"}
          </button>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="pill">
            LinkedIn <span aria-hidden>↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="pill">
            GitHub <span aria-hidden>↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>

        <Reveal delay={0.15} className="rule mt-20 pt-8">
          <p className="eyebrow mb-5">Downloads</p>
          <div className="flex flex-wrap gap-3">
            {materials.map((m) => (
              <LinkPill key={m.href} link={m} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
