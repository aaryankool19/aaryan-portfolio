import type { SkillGroup as SkillGroupType } from "@/lib/portfolio-data";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="rounded-lg border border-line bg-white/[0.04] p-6">
      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-md border border-line bg-graphite/50 px-3 py-2 text-sm text-slate-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
