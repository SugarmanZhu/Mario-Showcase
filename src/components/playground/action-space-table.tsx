import { Badge } from "@/components/ui/badge";
import { actions } from "@/data/actions";

function ButtonBadge({ btn }: { btn: string }) {
  const colorMap: Record<string, string> = {
    up: "bg-muted text-foreground",
    down: "bg-muted text-foreground",
    left: "bg-muted text-foreground",
    right: "bg-muted text-foreground",
    A: "bg-mario-red/20 text-mario-red border-mario-red/30",
    B: "bg-mario-gold/20 text-mario-gold border-mario-gold/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-xs font-medium ${colorMap[btn] ?? "bg-muted text-foreground"}`}
    >
      {btn}
    </span>
  );
}

export function ActionSpaceTable() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-4 font-display text-base font-semibold">
        Action Space (12 Actions)
      </h3>
      <div className="space-y-2">
        <div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-2 border-b border-border pb-2 sm:grid-cols-[2rem_1fr_auto_1fr] sm:gap-3">
          <span className="font-mono text-xs text-muted-foreground">#</span>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Action</span>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Buttons</span>
          <span className="hidden font-mono text-xs text-muted-foreground uppercase tracking-wider sm:block">Description</span>
        </div>
        {actions.map((action) => (
          <div
            key={action.id}
            className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-2 sm:grid-cols-[2rem_1fr_auto_1fr] sm:gap-3"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {action.id}
            </span>
            <span className="font-mono text-sm font-medium">{action.name}</span>
            <div className="flex gap-1">
              {action.buttons.length > 0 ? (
                action.buttons.map((btn) => (
                  <ButtonBadge key={btn} btn={btn} />
                ))
              ) : (
                <Badge variant="secondary" className="font-mono text-xs">
                  --
                </Badge>
              )}
            </div>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">
              {action.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
