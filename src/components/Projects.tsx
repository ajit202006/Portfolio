import { FolderOpen } from "lucide-react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <FolderOpen size={12} />
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Selected{" "}
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Web applications built with modern stacks, a focus on performance, and user friendly design.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent" />
    </section>
  );
}
