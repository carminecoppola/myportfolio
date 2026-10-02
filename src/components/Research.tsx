import { dissemination, publications, recognition } from "@/data/profile";
import LinkPill from "./LinkPill";
import { Reveal } from "./Reveal";
import SectionHead from "./SectionHead";

export default function Research() {
  return (
    <section id="research" className="border-t border-[var(--line)] bg-[var(--bg-raised)] py-28 md:py-40">
      <div className="wrap">
        <SectionHead index="02 — Research" title="Papers and posters" lead="Peer-reviewed work and conference posters. Every PDF is here to download." />

        <ol>
          {publications.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.05} className="rule grid gap-x-6 gap-y-4 py-8 md:grid-cols-12">
              <div className="eyebrow md:col-span-1 md:pt-2">{p.year}</div>
              <div className="md:col-span-7">
                <h3 className="display text-2xl leading-tight md:text-[2rem]">{p.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{p.venue}</p>
                {p.note && <p className="mt-1 text-sm text-[var(--muted)]">{p.note}</p>}
              </div>
              <div className="flex flex-wrap items-start gap-2 md:col-span-4 md:justify-end">
                <span className="tag mt-1.5">{p.kind}</span>
                {p.links.map((l) => (
                  <LinkPill key={l.href} link={l} />
                ))}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="rule mt-6 grid gap-4 pt-10 md:grid-cols-12">
          <div className="eyebrow md:col-span-1">Award</div>
          <div className="md:col-span-11">
            <p className="display text-3xl md:text-5xl">
              {recognition.title} <span className="italic text-[var(--accent)]">· {recognition.year}</span>
            </p>
            <p className="mt-3 text-[var(--muted)]">
              {recognition.org}. {recognition.detail}
            </p>
          </div>
        </Reveal>

        <div className="mt-24">
          <Reveal className="eyebrow mb-6">Conferences</Reveal>
          <ul>
            {dissemination.map((d, i) => (
              <Reveal as="li" key={d.name} delay={i * 0.05} className="rule grid gap-x-6 gap-y-1 py-5 md:grid-cols-12">
                <span className="eyebrow md:col-span-1 md:pt-1">{d.year}</span>
                <span className="text-lg md:col-span-4">{d.name}</span>
                <span className="text-sm text-[var(--muted)] md:col-span-3 md:pt-1">{d.place}</span>
                <span className="text-sm text-[var(--muted)] md:col-span-4 md:pt-1">{d.detail}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
