import { Cpu } from "lucide-react";
import { skillCategories } from "../data/portfolioData";

// Map color key → Tailwind classes (inline so Tailwind can detect them)
const colorMap: Record<string, { card: string; badge: string; title: string; dot: string }> = {
  violet: {
    card: "hover:border-violet-500/50 hover:shadow-violet-500/10",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40",
    title: "text-violet-400",
    dot: "bg-violet-500",
  },
  cyan: {
    card: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40",
    title: "text-cyan-400",
    dot: "bg-cyan-500",
  },
  emerald: {
    card: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40",
    title: "text-emerald-400",
    dot: "bg-emerald-500",
  },
  amber: {
    card: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    badge: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40",
    title: "text-amber-400",
    dot: "bg-amber-500",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-slate-950">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Cpu size={12} />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Skills &{" "}
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A curated stack built through practice and development of real-time web applications.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => {
            const colors = colorMap[cat.color] ?? colorMap.violet;
            return (
              <div
                key={cat.category}
                className={`group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${colors.card}`}
              >
                {/* linear top bar */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full ${colors.dot} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Category title */}
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${colors.title}`}>
                    {cat.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border cursor-default transition-all duration-200 ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />
    </section>
  );
}
