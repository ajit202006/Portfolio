import { Briefcase, GraduationCap, MapPin, CheckCircle2, Trophy } from "lucide-react";
import { experiences, education } from "../data/portfolioData";

export default function Experience() {
  // Merge and sort timeline: newest first
  const workItems = experiences.map((e) => ({ ...e, kind: "work" as const }));
  const eduItems = education.map((e) => ({ ...e, kind: "education" as const }));

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Briefcase size={12} />
            Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Experience &{" "}
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            My professional journey across companies and institutions.
          </p>
        </div>

        {/* Two-column layout: Work | Education */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Work Experience column ─────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
                <Briefcase size={18} className="text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline spine */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-violet-500/60 via-violet-500/20 to-transparent" />

              <div className="space-y-6">
                {workItems.map((item, idx) => (
                  <div key={idx} className="relative pl-12">
                    {/* Timeline node */}
                    <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                      <Briefcase size={13} className="text-violet-400" />
                    </div>

                    {/* Card */}
                    <div className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                          {item.role}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-slate-500 text-xs mb-4">
                        <span className="font-semibold text-slate-300">{item.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {item.location}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {item.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                            <CheckCircle2 size={14} className="text-violet-500 mt-0.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Education column ───────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                <GraduationCap size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Education & Certs</h3>
            </div>

            <div className="relative">
              {/* Timeline spine */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-cyan-500/60 via-cyan-500/20 to-transparent" />

              <div className="space-y-6">
                {eduItems.map((item, idx) => (
                  <div key={idx} className="relative pl-12">
                    {/* Timeline node */}
                    <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <GraduationCap size={13} className="text-cyan-400" />
                    </div>

                    {/* Card */}
                    <div className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.degree}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-slate-500 text-xs mb-3">
                        <span className="font-semibold text-slate-300">{item.institution}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {item.location}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {item.achievements.map((a, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                            <Trophy size={13} className="text-amber-400 shrink-0" />
                            {a}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />
    </section>
  );
}
