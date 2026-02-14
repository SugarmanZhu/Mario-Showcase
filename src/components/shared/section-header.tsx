interface SectionHeaderProps {
  label: string;
  title: string;
  description?: React.ReactNode;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 space-y-3">
      <span className="font-mono text-sm font-medium tracking-widest text-mario-blue uppercase">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-muted-foreground text-lg">{description}</p>
      )}
    </div>
  );
}
