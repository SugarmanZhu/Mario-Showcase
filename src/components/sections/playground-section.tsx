"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { VersionComparison } from "@/components/playground/version-comparison";
import { ActionSpaceTable } from "@/components/playground/action-space-table";

export function PlaygroundSection() {
  return (
    <section id="lab" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label="Version Comparison"
            title="The Lab"
            description={<>How v2.0 improves on the original with RGB observations, <span className="whitespace-nowrap">IMPALA CNN,</span> and a richer <span className="whitespace-nowrap">action space.</span></>}
          />
        </ScrollReveal>

        {/* Version comparison */}
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <VersionComparison />
          </div>
        </ScrollReveal>

        {/* Action space */}
        <ScrollReveal delay={0.15}>
          <ActionSpaceTable />
        </ScrollReveal>
      </div>
    </section>
  );
}
