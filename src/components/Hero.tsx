import { Github, Download, Zap } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// LeetCode SVG icon (custom, since lucide doesn't include it)
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* ── Animated background grid ───────────────────────── */}
      <div className="absolute inset-0 bg-[linear-linear(rgba(148,85,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(148,85,255,0.03)_1px,transparent_1px)] bg-size[60px_60px]" />

      {/* ── Glowing orbs ───────────────────────────────────── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl" />

      {/* ── Main content ───────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">

        {/* Availability badge */}
        {personalInfo.availableForWork && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/80 animate-pulse" />
            Available for new opportunities
          </div>
        )}

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-linear-to-br from-violet-500 via-purple-500 to-cyan-500 p-[3px] shadow-2xl shadow-violet-500/40">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img className="object-top" src="profile.jpeg" alt="Profile image" />
              </div>
            </div>
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30 animate-spin" style={{ animationDuration: "12s" }} />
            {/* Glow dot */}
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-lg shadow-emerald-400/60" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4">
          <span className="block">{personalInfo.name.split(" ")[0]}</span>
          <span className="block bg-linear-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Title pill */}
        <div className="inline-flex items-center gap-2 mt-4 mb-6 px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700/80">
          <Zap size={14} className="text-violet-400" />
          <span className="text-slate-300 font-mono text-sm tracking-wide">
            {personalInfo.title}
          </span>
        </div>

        {/* Bio */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          {personalInfo.bio}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-700 hover:border-slate-600 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            GitHub Profile
          </a>

          {/* LeetCode */}
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 font-semibold text-sm hover:bg-amber-500/20 hover:border-amber-500/70 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <LeetCodeIcon />
            LeetCode Profile
          </a>

          {/* CV Download */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/30 hover:shadow-violet-500/60 hover:scale-105 transition-all duration-300"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            My Resume
          </a>
        </div>

        {/* Stats strip */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-black bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom linear fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
