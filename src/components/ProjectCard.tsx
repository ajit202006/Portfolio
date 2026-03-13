import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Featured cards get a special golden border treatment
  const isFeatured = project.featured;

  return (
    <div
      className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isFeatured
        ? "bg-slate-900/80 border-slate-700 hover:border-violet-500/60 hover:shadow-violet-500/15"
        : "bg-slate-900/50 border-slate-800 hover:border-slate-600 hover:shadow-slate-700/20"
        }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-[10px] font-bold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          Featured
        </div>
      )}

      {/* Category label + gradient bar */}
      <div className="relative h-2 bg-linear-to-r from-violet-600 to-cyan-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-xl font-black text-white group-hover:text-violet-300 transition-colors duration-300 mb-3 flex items-center gap-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">
          {project.description}
        </p>

        {/* Long description (slightly dimmer) */}
        <p className="text-slate-500 text-xs leading-relaxed mb-5">
          {project.longDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 font-medium hover:border-violet-500/40 hover:text-violet-300 transition-all duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          {/* View Code */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 hover:scale-[1.02]"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github size={15} className="group-hover/btn:rotate-12 transition-transform duration-300" />
            View Code
          </a>

          {/* Live Demo */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl bg-linear-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all duration-300"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={15} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
