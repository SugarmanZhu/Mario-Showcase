"use client";

const logLines = [
  "[Step 12.5M] Entropy: 0.015 | LR: 2.5e-6 | Reward/Step: 0.142",
  "[Eval] Flag rate: 95% | Avg X: 3160 | Best: 3265",
  "[Policy] Dominant: right+A+B (24%) | Entropy: 1.82 | HEALTHY",
  "[Step 12.5M] Batch update: loss_pi=0.008 | loss_vf=0.12",
  "[Progress] max_x_pos=3265 | ep_reward=280.4 | ep_len=812",
  "[Checkpoint] Saved to mario_models/1-1/best/best_model.zip",
  "[Step 12.4M] Entropy: 0.016 | LR: 3.1e-6 | Reward/Step: 0.138",
  "[Eval] Flag rate: 93% | Avg X: 3140 | Best: 3265",
  "[Policy] Dominant: right+A+B (23%) | Entropy: 1.85 | HEALTHY",
  "[Step 12.3M] Batch update: loss_pi=0.009 | loss_vf=0.13",
  "[Progress] max_x_pos=3140 | ep_reward=275.1 | ep_len=825",
  "[Env] 48 workers running | VRAM: 18.2GB / 32GB",
];

export function TerminalLog() {
  return (
    <div className="min-w-0 overflow-hidden space-y-2">
      <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        Training Log
      </p>
      <div className="h-28 max-w-full overflow-x-auto overflow-y-hidden rounded-lg border border-border bg-terminal-bg p-3">
        <div className="animate-terminal-scroll w-max">
          {/* Duplicate lines for seamless loop */}
          {[...logLines, ...logLines].map((line, i) => (
            <p
              key={i}
              className="whitespace-nowrap font-mono text-xs leading-5 text-terminal-green/80"
            >
              <span className="text-terminal-green/40">&gt; </span>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
