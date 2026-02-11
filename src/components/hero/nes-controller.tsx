"use client";

import { useEffect, useState } from "react";
import { actions } from "@/data/actions";

export function NesController() {
  const [activeAction, setActiveAction] = useState(4);

  useEffect(() => {
    // Cycle through a sequence that looks like actual gameplay
    const gameplaySequence = [1, 1, 4, 4, 4, 3, 3, 4, 4, 2, 1, 4, 4, 5, 4, 3, 3, 4, 4, 0];
    let idx = 0;
    const interval = setInterval(() => {
      setActiveAction(gameplaySequence[idx % gameplaySequence.length]);
      idx++;
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const current = actions[activeAction];
  const pressed = new Set(current.buttons);

  const btnClass = (btn: string) =>
    pressed.has(btn)
      ? "fill-mario-gold stroke-mario-gold drop-shadow-[0_0_6px_var(--mario-gold)]"
      : "fill-[#3b3b3b] stroke-[#555]";

  const abClass = (btn: string) =>
    pressed.has(btn)
      ? "fill-mario-gold stroke-mario-gold drop-shadow-[0_0_6px_var(--mario-gold)]"
      : "fill-mario-red/50 stroke-[#900]";

  return (
    <div className="space-y-2">
      <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        Live Inputs
      </p>
      <div className="rounded-lg bg-[#d3d3d3] p-4 shadow-[3px_3px_0px_#000]">
        <svg viewBox="0 0 280 120" className="w-full max-w-[260px]">
          {/* Controller body is the parent bg */}

          {/* D-Pad */}
          <g>
            {/* Horizontal bar */}
            <rect x="30" y="45" width="70" height="24" rx="3" className="fill-[#2a2a2a]" />
            {/* Vertical bar */}
            <rect x="53" y="22" width="24" height="70" rx="3" className="fill-[#2a2a2a]" />

            {/* Up */}
            <rect x="56" y="24" width="18" height="20" rx="2" className={`transition-all duration-75 ${btnClass("up")}`} />
            {/* Down */}
            <rect x="56" y="50" width="18" height="20" rx="2" className={`transition-all duration-75 ${btnClass("down")}`} />
            {/* Left */}
            <rect x="32" y="47" width="20" height="18" rx="2" className={`transition-all duration-75 ${btnClass("left")}`} />
            {/* Right */}
            <rect x="78" y="47" width="20" height="18" rx="2" className={`transition-all duration-75 ${btnClass("right")}`} />
            {/* Center */}
            <rect x="56" y="47" width="18" height="18" rx="1" className="fill-[#2a2a2a]" />
          </g>

          {/* Select / Start pills */}
          <g>
            <rect x="115" y="65" width="22" height="8" rx="4" className="fill-[#555]" />
            <rect x="143" y="65" width="22" height="8" rx="4" className="fill-[#555]" />
            <text x="120" y="85" className="fill-[#555] text-[7px] font-mono">SEL</text>
            <text x="145" y="85" className="fill-[#555] text-[7px] font-mono">START</text>
          </g>

          {/* B Button */}
          <circle cx="200" cy="58" r="16" className={`transition-all duration-75 ${abClass("B")}`} />
          <text x="196" y="62" className="fill-white text-[10px] font-bold font-mono pointer-events-none">B</text>

          {/* A Button */}
          <circle cx="240" cy="45" r="16" className={`transition-all duration-75 ${abClass("A")}`} />
          <text x="236" y="49" className="fill-white text-[10px] font-bold font-mono pointer-events-none">A</text>
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          Action {current.id}: {current.name}
        </span>
        <span className="font-mono text-xs text-mario-gold">
          {current.buttons.length > 0 ? current.buttons.join(" + ").toUpperCase() : "WAIT"}
        </span>
      </div>
    </div>
  );
}
