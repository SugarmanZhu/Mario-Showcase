"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceDot,
} from "recharts";
import { trainingData, milestones } from "@/data/training-metrics";

const chartConfig = {
  reward: { label: "Mean Reward", color: "var(--mario-blue)" },
};

export function TrainingChart() {
  // Find reward at milestone steps for ReferenceDot placement
  const milestonePoints = milestones.map((m) => {
    const point = trainingData.find((d) => d.step === m.step);
    return { ...m, reward: point?.reward ?? 0 };
  });

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Reward vs Timesteps
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Level 1-1 | 12.5M steps
        </p>
      </div>
      <div className="rounded-xl border border-border bg-card p-4">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={trainingData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="step"
              tickFormatter={(v) => `${(v / 1e6).toFixed(0)}M`}
              stroke="var(--muted-foreground)"
              fontSize={12}
              fontFamily="var(--font-mono)"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={12}
              fontFamily="var(--font-mono)"
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(_, payload) => {
                    if (payload?.[0]) {
                      const step = payload[0].payload.step;
                      return `Step: ${(step / 1e6).toFixed(1)}M`;
                    }
                    return "";
                  }}
                />
              }
            />
            <Line
              type="monotone"
              dataKey="reward"
              stroke="var(--mario-blue)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "var(--mario-blue)" }}
            />
            {milestonePoints.map((m) => (
              <ReferenceDot
                key={m.step}
                x={m.step}
                y={m.reward}
                r={5}
                fill="var(--mario-gold)"
                stroke="var(--mario-gold)"
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ChartContainer>

        {/* Milestone legend */}
        <div className="mt-4 space-y-1.5 border-t border-border pt-3">
          {milestones.map((m) => (
            <div key={m.step} className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-mario-gold" />
              <span className="font-mono text-xs text-muted-foreground">
                <span className="text-foreground">{(m.step / 1e6).toFixed(0)}M</span>{" "}
                — {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
