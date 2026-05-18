import { profile } from "@/data/profile";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-24 bg-gradient-to-b from-zinc-900 via-black to-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="relative rounded-[2rem] border border-zinc-800/70 bg-zinc-950/70 backdrop-blur-md px-6 py-12 md:px-12 md:py-14 shadow-2xl shadow-cyan-500/5">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.05s' }}>
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>Available for new projects</span>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border border-cyan-400/35 shadow-2xl shadow-cyan-400/15 hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-[1.02] mx-auto">
                <img
                  src="/cc.jpeg"
                  alt="Carmine Coppola"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-cyan-400/10 opacity-70" />
              </div>
            </div>

            <div className="max-w-3xl space-y-8">
              <div className="space-y-5">
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-gradient-cyan-lime animate-fade-in leading-tight">
                  {profile.name}
                </h1>

                <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                  <div className="w-24 h-1.5 accent-line accent-line-cyan rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {profile.title}
                </p>

                <p className="text-lg text-zinc-300 leading-relaxed animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.25s' }}>
                  {profile.positioning}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                {["Machine Learning", "Computer Vision", "HPC", "GPU Optimization", "AI Research", "Software Engineering"].map((area, i) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-zinc-900/80 text-cyan-300 text-sm font-medium rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-zinc-800/80 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    style={{ animationDelay: `${0.35 + i * 0.05}s` }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                {profile.socials.map((social) => {
                  let icon;
                  if (social.label === "GitHub") icon = <FiGithub className="w-5 h-5" />;
                  else if (social.label === "LinkedIn") icon = <FiLinkedin className="w-5 h-5" />;
                  else if (social.label === "Email") icon = <FiMail className="w-5 h-5" />;

                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400/70 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
                      title={social.label}
                      aria-label={social.label}
                    >
                      {icon}
                    </a>
                  );
                })}
                <a
                  href={profile.cv}
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-lime-400 px-5 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
                  title="Download CV"
                  aria-label="Download CV"
                >
                  <FiDownload className="w-5 h-5" />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
