import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Research from "@/components/Research";
import Work from "@/components/Work";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[var(--bg)]"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Research />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-[var(--line)] py-8">
        <div className="wrap eyebrow flex flex-wrap justify-between gap-4">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js · set in Instrument Serif and Geist</span>
        </div>
      </footer>
    </>
  );
}
