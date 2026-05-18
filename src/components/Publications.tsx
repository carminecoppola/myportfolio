import { publications } from "@/data/profile";
import { FiExternalLink } from "react-icons/fi";

export default function Publications() {
  return (
    <div className="space-y-6">
      {publications.map((publication, i) => (
        <article
          key={publication.id}
          className="border border-zinc-700/50 rounded-xl p-6 md:p-8 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/10 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {/* Year Badge */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1.5 bg-lime-400/10 text-lime-300 text-xs font-bold rounded-lg border border-lime-400/30 transition-all duration-300 uppercase tracking-wide">
                {publication.year}
              </span>
            </div>
            {publication.venue && (
              <span className="text-sm text-zinc-400 hover:text-lime-300 transition-colors duration-300 font-medium">{publication.venue}</span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-black text-white mb-3 hover:text-lime-300 transition-colors duration-300 tracking-tight">
            {publication.link ? (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-lime-400/50 hover:decoration-lime-300 transition-all duration-300"
              >
                {publication.title}
              </a>
            ) : (
              publication.title
            )}
          </h3>

          {/* Description */}
          <p className="text-zinc-300 text-base leading-relaxed hover:text-zinc-100 transition-colors duration-300">
            {publication.description}
          </p>

          {/* Link */}
          {publication.link && (
            <div className="mt-4 pt-4 border-t border-zinc-700/50 hover:border-lime-400/20 transition-colors duration-300">
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-lime-300 hover:text-lime-200 transition-all duration-300 font-semibold inline-flex items-center gap-2 group"
                title="Read Publication"
              >
                <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Read More</span>
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
