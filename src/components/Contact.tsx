import { profile } from "@/data/profile";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Contact Section */}
      <div className="border border-zinc-700/50 rounded-xl p-8 md:p-12 bg-zinc-900/30 text-center hover:bg-zinc-900/60 transition-all duration-300 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-400/10 animate-fade-in-up">
        <p className="text-zinc-300 text-lg mb-8 hover:text-zinc-100 transition-colors duration-300 font-medium">
          Interested in collaboration, research, or discussing ML/HPC projects?
        </p>

        {/* Contact Links with Icons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30"
            title="Send Email"
            aria-label="Send Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-900/50 text-cyan-300 transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-lime-400/30 bg-zinc-900/50 text-lime-300 transition-all duration-300 hover:scale-110 hover:border-lime-400/60 hover:bg-lime-400/10 hover:shadow-lg hover:shadow-lime-400/20"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="hover:text-zinc-400 transition-colors duration-300 font-medium">© 2026 Carmine Coppola. Built with Next.js, TypeScript & TailwindCSS.</p>
      </div>
    </div>
  );
}
