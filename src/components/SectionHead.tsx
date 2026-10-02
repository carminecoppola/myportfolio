import { Reveal } from "./Reveal";

export default function SectionHead({ index, title, lead }: { index: string; title: string; lead?: string }) {
  return (
    <div className="grid gap-6 pb-12 md:grid-cols-12 md:pb-16">
      <Reveal className="eyebrow md:col-span-3 md:pt-3">{index}</Reveal>
      <div className="md:col-span-9">
        <Reveal as="section">
          <h2 className="display text-[clamp(2.6rem,6vw,5rem)]">{title}</h2>
        </Reveal>
        {lead && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-[var(--muted)]">{lead}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
