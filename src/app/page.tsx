import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { projects, about } from "@/data/profile";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Research and engineering work across ML, HPC, and scientific computing"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Research & Publications */}
      <Section
        id="publications"
        title="Research & Publications"
        subtitle="Academic contributions and research projects"
      >
        <Publications />
      </Section>

      {/* About */}
      <Section
        id="about"
        title="About"
      >
        <div className="max-w-2xl space-y-8 text-zinc-300">
          <p className="text-lg leading-relaxed border-l-4 border-orange-400/50 pl-6 py-2 hover:border-orange-400 transition-all duration-300">
            {about.intro}
          </p>
          <p className="text-lg leading-relaxed border-l-4 border-cyan-400/50 pl-6 py-2 hover:border-cyan-400 transition-all duration-300">
            {about.experience}
          </p>
          <p className="text-lg leading-relaxed border-l-4 border-lime-400/50 pl-6 py-2 hover:border-lime-400 transition-all duration-300">
            {about.interests}
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        title="Skills & Expertise"
      >
        <Skills />
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Get in Touch"
      >
        <Contact />
      </Section>
    </main>
  );
}
