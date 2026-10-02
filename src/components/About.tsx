import Image from "next/image";
import { about, certifications, education, roles, skillLevels } from "@/data/profile";
import { Reveal } from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="wrap">
        <SectionHead index="03 — About" title="How I work" />

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--bg-raised)]">
              <Image
                src="/cc.jpeg"
                alt="Portrait of Carmine Coppola"
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-cover grayscale-[0.25] transition duration-700 hover:grayscale-0"
                priority={false}
              />
            </div>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-6">
            {about.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.06}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="eyebrow mb-6">Experience</Reveal>
            <ol>
              {roles.map((r, i) => (
                <Reveal as="li" key={r.title + r.period} delay={i * 0.05} className="rule grid gap-x-6 gap-y-2 py-6 sm:grid-cols-[9rem_1fr]">
                  <span className="eyebrow pt-1">{r.period}</span>
                  <div>
                    <p className="text-lg">{r.title}</p>
                    <p className="text-sm text-[var(--muted)]">{r.org}</p>
                    <p className="mt-2 text-[var(--muted)]">{r.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="eyebrow mb-6 mt-14">Education</Reveal>
            <ol>
              {education.map((e) => (
                <Reveal as="li" key={e.title} className="rule grid gap-x-6 gap-y-2 py-6 sm:grid-cols-[9rem_1fr]">
                  <span className="eyebrow pt-1">{e.period}</span>
                  <div>
                    <p className="text-lg">{e.title}</p>
                    <p className="text-sm text-[var(--muted)]">{e.org}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="eyebrow mb-6 mt-14">Certifications</Reveal>
            <ul className="rule">
              {certifications.map((c) => (
                <Reveal as="li" key={c} className="rule py-4 text-[var(--muted)]">
                  {c}
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal className="eyebrow mb-6">Toolbox</Reveal>
            <div className="space-y-8">
              {skillLevels.map((g, i) => (
                <Reveal key={g.level} delay={i * 0.06}>
                  <p className="display text-2xl">{g.level}</p>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">{g.items}</p>
                </Reveal>
              ))}
              <Reveal>
                <p className="text-sm text-[var(--muted)]">Levels are self-assessed. Anything not listed is not claimed.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
