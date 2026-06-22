type SectionHeaderProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
