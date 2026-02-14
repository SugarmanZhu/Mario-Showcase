"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { impalaStages, networkHeads } from "@/data/architecture";

function DiagramNode({
  label,
  sublabel,
  tooltip,
  variant = "default",
}: {
  label: string;
  sublabel: string;
  tooltip: string;
  variant?: "default" | "input" | "policy" | "value";
}) {
  const styles = {
    default: {
      border: "border-border hover:border-mario-blue/60",
      glow: "",
      accent: "bg-mario-blue/10",
      dot: "bg-mario-blue",
    },
    input: {
      border: "border-mario-blue/40 hover:border-mario-blue",
      glow: "shadow-[0_0_20px_rgba(88,152,248,0.1)]",
      accent: "bg-mario-blue/15",
      dot: "bg-mario-blue",
    },
    policy: {
      border: "border-mario-gold/40 hover:border-mario-gold",
      glow: "shadow-[0_0_20px_rgba(248,200,56,0.1)]",
      accent: "bg-mario-gold/15",
      dot: "bg-mario-gold",
    },
    value: {
      border: "border-mario-green/40 hover:border-mario-green",
      glow: "shadow-[0_0_20px_rgba(72,208,104,0.1)]",
      accent: "bg-mario-green/15",
      dot: "bg-mario-green",
    },
  };

  const s = styles[variant];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`group relative cursor-default overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:scale-[1.02] ${s.border} ${s.glow}`}
        >
          {/* Accent strip at top */}
          <div className={`h-1 w-full ${s.accent}`} />
          <div className="px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className={`inline-block h-2 w-2 rounded-full ${s.dot}`} />
              <p className="font-mono text-sm font-semibold">{label}</p>
            </div>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {sublabel}
            </p>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-sm">
        <p className="font-mono text-xs leading-relaxed">{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function VerticalConnector() {
  return (
    <div className="flex justify-center py-0.5">
      <div className="h-6 w-px bg-gradient-to-b from-border to-border/40" />
    </div>
  );
}

function SplitConnector() {
  return (
    <div className="relative flex justify-center py-1">
      <svg
        width="200"
        height="32"
        viewBox="0 0 200 32"
        className="text-border"
      >
        {/* Center stem */}
        <line x1="100" y1="0" x2="100" y2="12" stroke="currentColor" strokeWidth="1" />
        {/* Horizontal bar */}
        <line x1="40" y1="12" x2="160" y2="12" stroke="currentColor" strokeWidth="1" />
        {/* Left branch */}
        <line x1="40" y1="12" x2="40" y2="32" stroke="currentColor" strokeWidth="1" />
        {/* Right branch */}
        <line x1="160" y1="12" x2="160" y2="32" stroke="currentColor" strokeWidth="1" />
        {/* Arrowheads */}
        <polygon points="37,28 40,32 43,28" fill="currentColor" />
        <polygon points="157,28 160,32 163,28" fill="currentColor" />
      </svg>
    </div>
  );
}

export function CnnFlowDiagram() {
  return (
    <div className="w-full">
      <p className="mb-4 font-mono text-xs tracking-wider text-muted-foreground uppercase">
        IMPALA CNN Architecture
      </p>

      <div className="rounded-2xl border border-border bg-card/50 p-4 sm:p-8">
        <div className="flex flex-col items-center">
          {/* Input */}
          <div className="w-full max-w-[220px]">
            <DiagramNode
              label="Input"
              sublabel="(12, 120, 128)"
              tooltip="4 stacked RGB frames in channels-first format. Each frame is 120x128 with 3 color channels, giving 12 input channels total."
              variant="input"
            />
          </div>
          <VerticalConnector />

          {/* IMPALA Stages */}
          <div className="flex w-full max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center lg:gap-4">
            {impalaStages.map((stage, i) => (
              <div key={stage.name} className="flex flex-col items-center gap-3 sm:flex-row lg:gap-4">
                <div className="w-full max-w-[220px] sm:w-[160px] lg:w-[180px]">
                  <DiagramNode
                    label={stage.name}
                    sublabel={`${stage.inputChannels} \u2192 ${stage.outputChannels}ch`}
                    tooltip={`${stage.operation}. Output shape: (${stage.outputShape}). Each ResBlock has 2 Conv3x3 layers with residual skip connections.`}
                  />
                </div>
                {i < impalaStages.length - 1 && (
                  <>
                    <svg width="24" height="12" viewBox="0 0 24 12" className="hidden shrink-0 text-border sm:block">
                      <line x1="0" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1" />
                      <polygon points="16,3 22,6 16,9" fill="currentColor" />
                    </svg>
                    <div className="h-4 w-px bg-border sm:hidden" />
                  </>
                )}
              </div>
            ))}
          </div>
          <VerticalConnector />

          {/* Flatten + Linear */}
          <div className="w-full max-w-[260px]">
            <DiagramNode
              label="Flatten + Linear"
              sublabel={`${networkHeads.flatten.outputDim.toLocaleString()} \u2192 ${networkHeads.linear.out}`}
              tooltip={`Flatten spatial features (${networkHeads.flatten.outputDim.toLocaleString()} dims) into a dense 512-dim vector with ReLU activation. This is the shared representation for both policy and value heads.`}
            />
          </div>

          {/* Split connector */}
          <SplitConnector />

          {/* Policy and Value heads */}
          <div className="grid w-full max-w-md grid-cols-2 gap-4 px-2">
            <div className="min-w-0">
              <DiagramNode
                label="Policy Head"
                sublabel={networkHeads.policyHead.layers}
                tooltip={`${networkHeads.policyHead.description}. Two hidden layers of 256 units each with ReLU, outputting 12 action logits that are passed through softmax for action selection.`}
                variant="policy"
              />
            </div>
            <div className="min-w-0">
              <DiagramNode
                label="Value Head"
                sublabel={networkHeads.valueHead.layers}
                tooltip={`${networkHeads.valueHead.description}. Two hidden layers of 256 units each with ReLU, outputting a single scalar estimating the expected return from the current state.`}
                variant="value"
              />
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-4">
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-mario-blue" />
              Input / Features
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-mario-gold" />
              Action Selection
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-mario-green" />
              Value Estimation
            </span>
            <span className="font-mono text-xs text-muted-foreground/60">
              ~8M parameters total
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
