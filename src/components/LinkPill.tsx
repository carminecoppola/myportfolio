import type { Link } from "@/data/profile";

export default function LinkPill({ link }: { link: Link }) {
  const external = link.external;
  return (
    <a
      href={link.href}
      className="pill"
      {...(link.download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label}
      <span aria-hidden>{link.download ? "↓" : "↗"}</span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
