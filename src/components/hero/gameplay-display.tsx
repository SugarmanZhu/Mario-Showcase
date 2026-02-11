"use client";

import { Badge } from "@/components/ui/badge";

export function GameplayDisplay() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-black">
      {/* Monitor frame */}
      <div className="relative aspect-[256/240]">
        {/* REC badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-mario-red animate-pulse-rec" />
          <span className="font-mono text-xs font-medium text-mario-red tracking-wider">
            REC
          </span>
        </div>

        {/* Level badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 z-10 border-border/50 bg-background/70 font-mono text-xs backdrop-blur-sm"
        >
          Level 1-1 | v1.1 NatureCNN
        </Badge>

        {/* Gameplay GIF */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/demos/demo-1-1.gif"
          alt="Mario RL agent completing level 1-1"
          className="h-full w-full object-cover"
          loading="eager"
        />

        {/* Scanline overlay */}
        <div className="scanlines absolute inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
