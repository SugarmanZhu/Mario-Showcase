"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TrainingChart } from "@/components/training/training-chart";
import { StatsGrid } from "@/components/training/stats-grid";
import { rewardShaping } from "@/data/hyperparameters";

export function TrainingSection() {
  return (
    <section id="training" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label="Training Progress"
            title="The Journey"
            description={<>From random button mashing to consistent level completion in <span className="whitespace-nowrap">12.5 million timesteps.</span></>}
          />
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <StatsGrid />
          </div>
        </ScrollReveal>

        {/* Chart */}
        <ScrollReveal delay={0.15}>
          <div className="mb-12">
            <TrainingChart />
          </div>
        </ScrollReveal>

        {/* Reward Shaping Table */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 font-display text-base font-semibold">
              Custom Reward Shaping
            </h3>
            <div className="space-y-2.5">
              <div className="grid grid-cols-2 gap-3 border-b border-border pb-2 sm:grid-cols-3 sm:gap-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Signal</span>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Value</span>
                <span className="hidden font-mono text-xs text-muted-foreground uppercase tracking-wider sm:block">Purpose</span>
              </div>
              {rewardShaping.map((r) => (
                <div key={r.name} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  <span className="font-mono text-sm">{r.name}</span>
                  <span className={`font-mono text-sm ${r.value.startsWith("+") ? "text-mario-green" : "text-mario-red"}`}>
                    {r.value}
                  </span>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:block">{r.description}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
