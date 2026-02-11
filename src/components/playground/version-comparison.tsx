import { Badge } from "@/components/ui/badge";

const versions = [
  {
    version: "v1.x",
    label: "Legacy",
    specs: [
      { key: "Observation", value: "84 x 84 Grayscale" },
      { key: "Architecture", value: "NatureCNN (~1.5M params)" },
      { key: "Actions", value: "7 (SIMPLE_MOVEMENT)" },
      { key: "Input Channels", value: "4 (stacked gray)" },
    ],
    color: "text-muted-foreground",
    badgeVariant: "secondary" as const,
  },
  {
    version: "v2.x",
    label: "Current",
    specs: [
      { key: "Observation", value: "128 x 120 RGB" },
      { key: "Architecture", value: "IMPALA CNN (~8M params)" },
      { key: "Actions", value: "12 (COMPLEX_MOVEMENT)" },
      { key: "Input Channels", value: "12 (4 x RGB)" },
    ],
    color: "text-mario-green",
    badgeVariant: "default" as const,
  },
];

export function VersionComparison() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {versions.map((v) => (
        <div
          key={v.version}
          className="rounded-xl border border-border bg-card p-5"
        >
          <div className="mb-4 flex items-center gap-2">
            <h3 className={`font-display text-lg font-bold ${v.color}`}>
              {v.version}
            </h3>
            <Badge variant={v.badgeVariant} className="font-mono text-xs">
              {v.label}
            </Badge>
          </div>
          <div className="space-y-2.5">
            {v.specs.map((spec) => (
              <div key={spec.key} className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                  {spec.key}
                </span>
                <span className={`font-mono text-sm ${v.color === "text-mario-green" ? "text-foreground" : "text-muted-foreground/70"}`}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
