interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

// Color cycle for accent lines
const accentColors = ["accent-line-cyan", "accent-line-lime", "accent-line-orange"];

export default function Section({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  // Determine accent color based on id
  const getAccentColor = () => {
    if (id === "projects") return accentColors[0];
    if (id === "publications") return accentColors[1];
    if (id === "about") return accentColors[2];
    if (id === "skills") return accentColors[0];
    if (id === "contact") return accentColors[1];
    return accentColors[0];
  };

  return (
    <section
      id={id}
      className="px-4 py-20 md:py-24 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="mb-12 md:mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:text-zinc-100 transition-colors duration-300">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-zinc-300 hover:text-zinc-200 transition-colors duration-300 font-medium">{subtitle}</p>}
        <div className={`accent-line ${getAccentColor()} mt-6 w-16 transition-all duration-300`} />
      </div>

      {/* Content */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {children}
      </div>
    </section>
  );
}
