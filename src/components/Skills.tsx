import { skillGroups } from "@/data/profile";
import { FiCode, FiTrendingUp, FiCpu, FiSmartphone, FiTool } from "react-icons/fi";
import { ReactNode } from "react";

export default function Skills() {
  const accentColors = ["cyan", "lime", "cyan", "lime", "cyan"];
  
  const categoryIcons: Record<string, ReactNode> = {
    "Programming Languages": <FiCode className="w-5 h-5" />,
    "Machine Learning & AI": <FiTrendingUp className="w-5 h-5" />,
    "HPC & Scientific Computing": <FiCpu className="w-5 h-5" />,
    "Web & Mobile Development": <FiSmartphone className="w-5 h-5" />,
    "Tools & Methodologies": <FiTool className="w-5 h-5" />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillGroups.map((group, groupIndex) => {
        const accentColor = accentColors[groupIndex % accentColors.length];
        const isLime = accentColor === "lime";
        const borderClass = isLime
          ? "border-lime-400/30 hover:border-lime-400/60"
          : "border-cyan-400/30 hover:border-cyan-400/60";
        const shadowClass = isLime
          ? "hover:shadow-lime-400/10"
          : "hover:shadow-cyan-400/10";
        const textClass = isLime ? "text-lime-300" : "text-cyan-300";
        const hoverTextClass = isLime ? "hover:text-lime-200" : "hover:text-cyan-200";

        return (
          <div
            key={group.category}
            className={`border rounded-xl p-6 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 ${borderClass} hover:shadow-lg ${shadowClass} animate-fade-in-up`}
            style={{ animationDelay: `${groupIndex * 0.1}s` }}
          >
            {/* Category Title with Icon */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`text-xl transition-colors duration-300 ${textClass}`}>
                {categoryIcons[group.category] || <FiTool className="w-5 h-5" />}
              </div>
              <h3 className={`text-lg font-bold text-white ${hoverTextClass} transition-colors duration-300 tracking-tight`}>
                {group.category}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 bg-zinc-800/40 ${textClass} text-sm font-medium rounded-md border ${borderClass} hover:bg-${isLime ? "lime" : "cyan"}-400/5 transition-all duration-300 hover:scale-110 ${hoverTextClass} hover:shadow-md`}
                  style={{ transitionDelay: `${skillIndex * 25}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
