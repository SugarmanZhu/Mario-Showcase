"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  label: string;
  displayValue: string;
  endNumber?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedStat({
  label,
  displayValue,
  endNumber,
  decimals = 0,
  suffix = "",
  prefix = "",
}: AnimatedStatProps) {
  const [displayed, setDisplayed] = useState(
    endNumber !== undefined ? `${prefix}0${suffix}` : displayValue
  );
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (endNumber === undefined) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = endNumber * eased;
            setDisplayed(
              `${prefix}${decimals > 0 ? current.toFixed(decimals) : Math.round(current)}${suffix}`
            );
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayed(`${prefix}${decimals > 0 ? endNumber.toFixed(decimals) : endNumber}${suffix}`);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endNumber, decimals, prefix, suffix]);

  return (
    <div ref={ref} className="glass-card rounded-lg px-4 py-4 text-center">
      <p className="font-display text-2xl font-bold tabular-nums">
        {displayed}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <AnimatedStat
        label="Training Steps"
        displayValue="12.5M"
        endNumber={12.5}
        decimals={1}
        suffix="M"
      />
      <AnimatedStat label="Training Time" displayValue="~8 hrs" />
      <AnimatedStat
        label="Flag Rate"
        displayValue="95%"
        endNumber={95}
        suffix="%"
      />
      <AnimatedStat
        label="Parallel Envs"
        displayValue="48"
        endNumber={48}
      />
    </div>
  );
}
