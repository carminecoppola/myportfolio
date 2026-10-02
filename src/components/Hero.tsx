"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import FlowField from "./FlowField";
import { RiseWords } from "./Reveal";
import { profile } from "@/data/profile";

function LocalTime() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: profile.timeZone });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{now || "--:--"}</span>;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-32">
      <motion.div style={{ opacity: fade }} className="absolute inset-0 -z-10 text-[var(--accent)]">
        <FlowField />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_100%,var(--bg)_20%,transparent_70%)]" />
      </motion.div>

      <motion.div style={{ y, opacity: fade }} className="wrap">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="eyebrow mb-8 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <span className="flex items-center gap-2">
            <span className="live-dot" aria-hidden /> {profile.availability}
          </span>
          <span>
            {profile.location} · <LocalTime />
          </span>
        </motion.div>

        <h1 className="display text-[clamp(3.6rem,13vw,11.5rem)]">
          <RiseWords text="Carmine" delay={0.1} />
          <br />
          <span className="italic text-[var(--accent)]">
            <RiseWords text="Coppola" delay={0.25} />
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-relaxed text-[var(--ink)] md:col-span-7 md:text-xl"
          >
            {profile.intro}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 md:col-span-5 md:justify-end"
          >
            <a href="#work" className="pill pill-solid">
              See the work <span aria-hidden>↓</span>
            </a>
            <a href={profile.cv} download className="pill">
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
