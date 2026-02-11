"use client";

import { GameplayDisplay } from "@/components/hero/gameplay-display";
import { NesController } from "@/components/hero/nes-controller";
import { TelemetryPanel } from "@/components/hero/telemetry-panel";
import { TerminalLog } from "@/components/hero/terminal-log";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { keyStats } from "@/data/hyperparameters";

const statIcons: Record<string, string> = {
  steps: "~",
  params: "#",
  envs: "||",
  flag: "^",
};

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-20 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Title area */}
        <ScrollReveal>
          <div className="mb-8 space-y-3 text-center">
            <span className="font-mono text-xs tracking-widest text-mario-red uppercase">
              Reinforcement Learning
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI Learns{" "}
              <span className="text-mario-red">Super Mario Bros</span>
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground">
              A PPO agent with IMPALA CNN trained across 48 parallel environments
              to master Super Mario Bros from raw pixel observations.
            </p>
          </div>
        </ScrollReveal>

        {/* Main content: video + telemetry */}
        <ScrollReveal delay={0.1}>
          <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
            {/* Left: Gameplay */}
            <GameplayDisplay />

            {/* Right: Telemetry */}
            <div className="flex flex-col gap-4">
              <NesController />
              <TelemetryPanel />
              <TerminalLog />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {keyStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-lg px-4 py-3 text-center"
              >
                <span className="font-mono text-xs text-muted-foreground/60">
                  {statIcons[stat.icon]}
                </span>
                <p className="font-display text-xl font-bold">{stat.value}</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
