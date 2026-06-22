import type { Experience } from "@/lib/portfolio-data";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-panel/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/50 hover:bg-panel">
      <p className="text-sm font-semibold text-signal">{experience.company}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{experience.title}</h3>
      <p className="mt-4 flex-1 leading-7 text-slate-300">{experience.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-line bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
