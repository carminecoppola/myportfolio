"use client";

import Image from "next/image";
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { projects, type Metric, type Project } from "@/data/profile";
import LinkPill from "./LinkPill";
import { Reveal } from "./Reveal";
import SectionHead from "./SectionHead";

const ease = [0.22, 1, 0.36, 1] as const;

function Counter({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const d = metric.decimals ?? 0;
  const fmt = (v: number) => v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const [text, setText] = useState(fmt(reduce ? metric.value : 0));

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setText(fmt(metric.value));
      return;
    }
    const controls = animate(0, metric.value, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setText(fmt(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, metric.value, d]);

  return (
    <div>
      <div className="display text-4xl md:text-5xl">
        <span ref={ref} className="tabular-nums">
          {text}
        </span>
        <span className="text-[var(--accent)]">{metric.suffix}</span>
      </div>
      <p className="mt-2 max-w-[16rem] text-sm text-[var(--muted)]">{metric.label}</p>
    </div>
  );
}

function Row({ project, index, open, onToggle }: { project: Project; index: number; open: boolean; onToggle: () => void }) {
  const panelId = useId();
  return (
    <li className="rule">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group grid w-full grid-cols-12 items-baseline gap-x-4 gap-y-1 py-7 text-left md:py-9"
        >
          <span className="eyebrow col-span-2 md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
          <span className="display col-span-10 text-3xl transition-transform duration-500 ease-out group-hover:translate-x-2 md:col-span-6 md:text-5xl">
            {project.title}
          </span>
          <span className="eyebrow col-span-9 col-start-3 mt-2 md:col-span-4 md:col-start-auto md:mt-0 md:text-right">{project.kind}</span>
          <span className="col-span-1 hidden justify-self-end md:block" aria-hidden>
            <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4, ease }} className="inline-block text-2xl leading-none text-[var(--accent)]">
              +
            </motion.span>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease }}
            className="overflow-hidden"
          >
            <div className="grid gap-10 pb-12 md:grid-cols-12">
              <div className={project.metrics ? "md:col-span-6 md:col-start-2" : "md:col-span-8 md:col-start-2"}>
                <p className="text-lg leading-relaxed">{project.summary}</p>
                <p className="mt-5 leading-relaxed text-[var(--muted)]">{project.context}</p>
                <p className="eyebrow mb-3 mt-8">What I did</p>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="relative pl-5 leading-relaxed">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-3 bg-[var(--accent)]" />
                      {h}
                    </li>
                  ))}
                </ul>
                {project.detail && <p className="mt-6 leading-relaxed text-[var(--muted)]">{project.detail}</p>}
                {project.note && <p className="mt-5 border-l-2 border-[var(--accent)] pl-4 text-sm">{project.note}</p>}
                {project.agents && (
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    Built with Codex and Claude Code. Architecture, validation, testing and review are mine.
                  </p>
                )}
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                  {project.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.links.map((l) => (
                      <LinkPill key={l.href} link={l} />
                    ))}
                  </div>
                )}
              </div>
              {project.metrics && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 self-start md:col-span-4 md:col-start-9">
                  {project.metrics.map((m) => (
                    <Counter key={m.label} metric={m} />
                  ))}
                </div>
              )}
            </div>
            {project.images && (
              <div className={`grid gap-6 pb-12 md:pl-[8.5%] ${project.images.length > 1 ? "md:grid-cols-2" : "md:max-w-3xl"}`}>
                {project.images.map((img) => (
                  <figure key={img.src} className={img.width / img.height > 2 ? "md:col-span-2" : undefined}>
                    <div className="overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--bg-raised)]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes="(min-width: 768px) 45vw, 92vw"
                        className="h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-[var(--muted)]">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Work() {
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="work" className="py-28 md:py-40">
      <div className="wrap">
        <SectionHead index="01 — Work" title="Selected projects" lead="Research and engineering, from a Raspberry Pi to a cluster. Open a row for the detail." />
        <Reveal as="section">
          <ul className="border-b border-[var(--line)]">
            {projects.map((p, i) => (
              <Row key={p.id} project={p} index={i} open={openId === p.id} onToggle={() => setOpenId(openId === p.id ? null : p.id)} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
