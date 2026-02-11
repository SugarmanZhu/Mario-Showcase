"use client";

export function TelemetryPanel() {
  return (
    <div className="space-y-3">
      <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        Agent Status
      </p>
      <div className="space-y-2 rounded-lg border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">Reward</span>
          <span className="font-mono text-sm font-medium text-mario-green">+280.4</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">X Position</span>
          <span className="font-mono text-sm font-medium">3,160</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">Status</span>
          <span className="font-mono text-sm font-medium text-mario-gold">FLAG CAPTURED</span>
        </div>

        {/* Confidence bar */}
        <div className="pt-1 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground">Confidence</span>
            <span className="font-mono text-xs text-muted-foreground">95%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-mario-green transition-all"
              style={{ width: "95%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
