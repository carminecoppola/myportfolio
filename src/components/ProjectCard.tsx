import { Project } from "@/data/profile";
import { FiGithub, FiExternalLink, FiDownload, FiDownloadCloud } from "react-icons/fi";
import { SiAndroid } from "react-icons/si";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-zinc-700/50 rounded-xl p-6 md:p-8 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 hover:scale-105">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1.5 bg-zinc-800/50 text-cyan-300 text-xs font-bold rounded-lg border border-cyan-400/30 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/5 transition-all duration-300 uppercase tracking-wide">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 tracking-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-300 text-base leading-relaxed mb-4 group-hover:text-zinc-100 transition-colors duration-300">
        {project.description}
      </p>

      {/* Impact */}
      {project.impact && (
        <p className="text-zinc-400 text-sm mb-4 group-hover:text-zinc-300 transition-colors duration-300 font-medium">
          <span className="text-cyan-300 font-bold">Impact:</span> {project.impact}
        </p>
      )}

      {/* Technologies */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-zinc-800/40 text-cyan-300 text-xs font-medium rounded-md border border-cyan-400/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/5 transition-all duration-300"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links && Object.values(project.links).some((link) => link) && (
        <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-700/50 group-hover:border-cyan-400/20 transition-colors duration-300">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold hover:translate-x-1.5 flex items-center gap-1.5"
              title="View on GitHub"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold hover:translate-x-1.5 flex items-center gap-1.5"
              title="Read Paper"
            >
              <FiDownload className="w-4 h-4" />
              <span>Paper</span>
            </a>
          )}
          {project.links.report && (
            <a
              href={project.links.report}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold hover:translate-x-1.5 flex items-center gap-1.5"
              title="Download Report"
            >
              <FiDownloadCloud className="w-4 h-4" />
              <span>Report</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold hover:translate-x-1.5 flex items-center gap-1.5"
              title="Live Demo"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
          {project.links.apple && (
            <a
              href={project.links.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold hover:translate-x-1.5 flex items-center gap-1.5"
              title="Download on App Store"
            >
              <FiDownloadCloud className="w-4 h-4" />
              <span>App Store</span>
            </a>
          )}
          {project.links.android && (
            <a
              href={project.links.android}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold hover:translate-x-1.5 flex items-center gap-1.5"
              title="Download on Play Store"
            >
              <SiAndroid className="w-4 h-4" />
              <span>Play Store</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
