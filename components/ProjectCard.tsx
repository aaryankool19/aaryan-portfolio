import type { Project } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-line bg-panel/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-silicon/60 hover:bg-panel">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-signal via-silicon to-copper opacity-80" />
      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-md bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200">
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
