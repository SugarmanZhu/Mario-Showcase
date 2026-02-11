"use client";

import { observationPipeline } from "@/data/architecture";

function PipelineIcon({ icon }: { icon: string }) {
  const size = 48;
  const common = "text-muted-foreground/60";

  switch (icon) {
    case "monitor":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={common}>
          {/* Monitor */}
          <rect x="6" y="8" width="36" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Screen content - pixel grid */}
          <rect x="10" y="12" width="4" height="4" fill="var(--mario-red)" opacity="0.6" />
          <rect x="15" y="12" width="4" height="4" fill="var(--mario-blue)" opacity="0.6" />
          <rect x="10" y="17" width="4" height="4" fill="var(--mario-green)" opacity="0.6" />
          <rect x="15" y="17" width="4" height="4" fill="var(--mario-gold)" opacity="0.6" />
          <rect x="22" y="12" width="16" height="3" rx="1" fill="currentColor" opacity="0.2" />
          <rect x="22" y="17" width="12" height="3" rx="1" fill="currentColor" opacity="0.15" />
          <rect x="22" y="22" width="14" height="3" rx="1" fill="currentColor" opacity="0.1" />
          {/* Stand */}
          <line x1="24" y1="32" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" />
          <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "skip":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={common}>
          {/* 4 frames, 3 dimmed + 1 bright */}
          <rect x="4" y="12" width="8" height="10" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.5" />
          <rect x="14" y="12" width="8" height="10" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.5" />
          <rect x="24" y="12" width="8" height="10" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.5" />
          <rect x="34" y="12" width="10" height="12" rx="1.5" fill="var(--mario-blue)" opacity="0.3" stroke="var(--mario-blue)" strokeWidth="1" />
          {/* Skip arrows */}
          <path d="M8 30l6-3v6z" fill="currentColor" opacity="0.3" />
          <path d="M18 30l6-3v6z" fill="currentColor" opacity="0.3" />
          <path d="M28 30l6-3v6z" fill="currentColor" opacity="0.5" />
          {/* Label */}
          <text x="24" y="42" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="var(--font-mono)" opacity="0.5">4x</text>
        </svg>
      );

    case "resize":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={common}>
          {/* Large frame */}
          <rect x="4" y="6" width="24" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
          {/* Arrow */}
          <path d="M30 17h6" stroke="currentColor" strokeWidth="1" />
          <polygon points="34,14 38,17 34,20" fill="currentColor" opacity="0.5" />
          {/* Small frame */}
          <rect x="26" y="24" width="16" height="15" rx="2" fill="var(--mario-green)" opacity="0.3" stroke="var(--mario-green)" strokeWidth="1" />
          {/* Diagonal resize icon */}
          <path d="M8 24l14-14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <polygon points="20,10 22,10 22,12" fill="currentColor" opacity="0.3" />
        </svg>
      );

    case "stack":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={common}>
          {/* 4 stacked frames with offset */}
          <rect x="8" y="6" width="20" height="14" rx="2" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.75" />
          <rect x="12" y="10" width="20" height="14" rx="2" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="0.75" />
          <rect x="16" y="14" width="20" height="14" rx="2" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="0.75" />
          <rect x="20" y="18" width="20" height="14" rx="2" fill="var(--mario-blue)" opacity="0.2" stroke="var(--mario-blue)" strokeWidth="1" />
          {/* x4 label */}
          <text x="30" y="27" textAnchor="middle" fill="var(--mario-blue)" fontSize="8" fontFamily="var(--font-mono)" fontWeight="bold" opacity="0.7">x4</text>
          {/* t label */}
          <text x="24" y="44" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4">t, t-1, t-2, t-3</text>
        </svg>
      );

    case "transpose":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={common}>
          {/* HWC label */}
          <text x="8" y="14" fill="currentColor" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4">HWC</text>
          {/* Grid representing HWC */}
          <rect x="6" y="17" width="14" height="10" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.75" />
          {/* Arrow */}
          <path d="M24 22h8" stroke="var(--mario-gold)" strokeWidth="1" />
          <polygon points="30,19.5 34,22 30,24.5" fill="var(--mario-gold)" opacity="0.6" />
          {/* Grid representing CHW */}
          <rect x="28" y="17" width="14" height="10" rx="1" fill="var(--mario-gold)" opacity="0.1" stroke="var(--mario-gold)" strokeWidth="0.75" />
          {/* CHW label */}
          <text x="32" y="14" fill="var(--mario-gold)" fontSize="7" fontFamily="var(--font-mono)" opacity="0.6">CHW</text>
          {/* Dimensions */}
          <text x="24" y="40" textAnchor="middle" fill="currentColor" fontSize="6.5" fontFamily="var(--font-mono)" opacity="0.4">(120,128,12)</text>
          <text x="24" y="46" textAnchor="middle" fill="var(--mario-gold)" fontSize="6.5" fontFamily="var(--font-mono)" opacity="0.5">(12,120,128)</text>
        </svg>
      );

    case "normalize":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className={common}>
          {/* uint8 block */}
          <rect x="4" y="14" width="16" height="12" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.75" />
          <text x="12" y="22" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="var(--font-mono)" opacity="0.5">0-255</text>
          {/* Arrow */}
          <path d="M22 20h6" stroke="var(--mario-green)" strokeWidth="1" />
          <polygon points="26,17.5 30,20 26,22.5" fill="var(--mario-green)" opacity="0.6" />
          {/* float32 block */}
          <rect x="28" y="14" width="16" height="12" rx="2" fill="var(--mario-green)" opacity="0.1" stroke="var(--mario-green)" strokeWidth="0.75" />
          <text x="36" y="22" textAnchor="middle" fill="var(--mario-green)" fontSize="6" fontFamily="var(--font-mono)" opacity="0.6">0.0-1.0</text>
          {/* GPU badge */}
          <rect x="14" y="32" width="20" height="9" rx="3" fill="var(--mario-green)" opacity="0.15" stroke="var(--mario-green)" strokeWidth="0.5" />
          <text x="24" y="38.5" textAnchor="middle" fill="var(--mario-green)" fontSize="6" fontFamily="var(--font-mono)" opacity="0.6">GPU</text>
        </svg>
      );

    default:
      return null;
  }
}

export function PipelineDiagram() {
  return (
    <div className="w-full">
      <p className="mb-4 font-mono text-xs tracking-wider text-muted-foreground uppercase">
        Observation Pipeline
      </p>
      <div className="rounded-2xl border border-border bg-card/50 p-6 lg:p-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {observationPipeline.map((stage, i) => (
            <div key={stage.name} className="flex flex-col items-center">
              {/* Card */}
              <div className="group relative flex w-full flex-col items-center overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-mario-blue/50 hover:scale-[1.02]">
                <div className="h-0.5 w-full bg-mario-blue/10" />

                {/* Icon */}
                <div className="pt-4 pb-1">
                  <PipelineIcon icon={stage.icon} />
                </div>

                {/* Text */}
                <div className="px-3 pb-4 text-center">
                  <p className="font-mono text-sm font-semibold">{stage.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {stage.shape}
                  </p>
                </div>

                {/* Hover tooltip */}
                <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg border border-border bg-popover px-4 py-2.5 opacity-0 shadow-xl transition-opacity group-hover:opacity-100 z-10">
                  <p className="max-w-[220px] font-mono text-xs leading-relaxed text-foreground">
                    {stage.description}
                  </p>
                </div>
              </div>

              {/* Step number */}
              <span className="mt-2 font-mono text-xs text-muted-foreground/40">
                {i + 1}/{observationPipeline.length}
              </span>
            </div>
          ))}
        </div>

        {/* Flow direction indicator */}
        <div className="mt-4 flex items-center justify-center gap-2 border-t border-border pt-4">
          <svg width="60" height="8" viewBox="0 0 60 8" className="text-muted-foreground/30">
            <line x1="0" y1="4" x2="52" y2="4" stroke="currentColor" strokeWidth="1" />
            <polygon points="50,1.5 56,4 50,6.5" fill="currentColor" />
          </svg>
          <span className="font-mono text-xs text-muted-foreground/40">
            Processing flow
          </span>
        </div>
      </div>
    </div>
  );
}
