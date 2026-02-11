"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PipelineDiagram } from "@/components/architecture/pipeline-diagram";
import { CnnFlowDiagram } from "@/components/architecture/cnn-flow-diagram";
import { architectureComparison } from "@/data/architecture";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label="Architecture"
            title="The Brain"
            description="IMPALA CNN with residual connections processes 4 stacked RGB frames to output action probabilities and state values."
          />
        </ScrollReveal>

        {/* Pipeline */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <PipelineDiagram />
          </div>
        </ScrollReveal>

        {/* CNN Diagram */}
        <ScrollReveal delay={0.15}>
          <div className="mb-12">
            <CnnFlowDiagram />
          </div>
        </ScrollReveal>

        {/* Comparison tables */}
        <ScrollReveal delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            {/* CNN Comparison */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 font-display text-base font-semibold">
                NatureCNN vs IMPALA
              </h3>
              <div className="space-y-3">
                {architectureComparison.cnn.map((row) => (
                  <div key={row.feature} className="grid grid-cols-3 gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {row.feature}
                    </span>
                    <span className="font-mono text-xs text-center text-muted-foreground/70">
                      {row.natureCnn}
                    </span>
                    <span className="font-mono text-xs text-center text-mario-green">
                      {row.impala}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Observation Comparison */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 font-display text-base font-semibold">
                Grayscale vs RGB
              </h3>
              <div className="space-y-3">
                {architectureComparison.observation.map((row) => (
                  <div key={row.feature} className="grid grid-cols-3 gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {row.feature}
                    </span>
                    <span className="font-mono text-xs text-center text-muted-foreground/70">
                      {row.grayscale}
                    </span>
                    <span className="font-mono text-xs text-center text-mario-green">
                      {row.rgb}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
