export interface TrainingDataPoint {
  step: number;
  reward: number;
  xPos: number;
  flagRate: number;
  entropy: number;
}

export interface Milestone {
  step: number;
  label: string;
  description: string;
}

export const trainingData: TrainingDataPoint[] = [
  { step: 0, reward: -60, xPos: 40, flagRate: 0, entropy: 0.08 },
  { step: 250_000, reward: -45, xPos: 120, flagRate: 0, entropy: 0.078 },
  { step: 500_000, reward: -30, xPos: 250, flagRate: 0, entropy: 0.075 },
  { step: 1_000_000, reward: -10, xPos: 450, flagRate: 0, entropy: 0.07 },
  { step: 1_500_000, reward: 10, xPos: 650, flagRate: 0, entropy: 0.065 },
  { step: 2_000_000, reward: 40, xPos: 850, flagRate: 0, entropy: 0.06 },
  { step: 2_500_000, reward: 60, xPos: 1000, flagRate: 0, entropy: 0.055 },
  { step: 3_000_000, reward: 85, xPos: 1200, flagRate: 0, entropy: 0.05 },
  { step: 4_000_000, reward: 110, xPos: 1500, flagRate: 0.02, entropy: 0.045 },
  { step: 5_000_000, reward: 140, xPos: 1800, flagRate: 0.05, entropy: 0.04 },
  { step: 6_000_000, reward: 165, xPos: 2100, flagRate: 0.1, entropy: 0.035 },
  { step: 7_000_000, reward: 190, xPos: 2400, flagRate: 0.2, entropy: 0.03 },
  { step: 8_000_000, reward: 210, xPos: 2600, flagRate: 0.35, entropy: 0.028 },
  { step: 9_000_000, reward: 230, xPos: 2800, flagRate: 0.5, entropy: 0.025 },
  { step: 10_000_000, reward: 250, xPos: 3000, flagRate: 0.65, entropy: 0.022 },
  { step: 11_000_000, reward: 265, xPos: 3100, flagRate: 0.8, entropy: 0.018 },
  { step: 12_000_000, reward: 275, xPos: 3140, flagRate: 0.9, entropy: 0.016 },
  { step: 12_500_000, reward: 280, xPos: 3160, flagRate: 0.95, entropy: 0.015 },
];

export const milestones: Milestone[] = [
  {
    step: 1_000_000,
    label: "Learns to move right",
    description: "Agent discovers that moving right yields positive reward. Still dies to first Goomba.",
  },
  {
    step: 3_000_000,
    label: "Avoids obstacles",
    description: "Starts jumping over pipes and avoiding basic enemies.",
  },
  {
    step: 7_000_000,
    label: "Reaches midpoint",
    description: "Consistently reaches the middle of the level. Learning complex jumps.",
  },
  {
    step: 10_000_000,
    label: "First completion",
    description: "Agent completes the level for the first time. Flag captured!",
  },
  {
    step: 12_500_000,
    label: "95% completion",
    description: "Consistent level completion with optimized speed-running behavior.",
  },
];
