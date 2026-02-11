export const ppoConfig = [
  { name: "Algorithm", value: "PPO (Proximal Policy Optimization)" },
  { name: "n_steps", value: "4,096 per env" },
  { name: "batch_size", value: "256" },
  { name: "n_epochs", value: "10" },
  { name: "gamma", value: "0.99" },
  { name: "gae_lambda", value: "0.95" },
  { name: "clip_range", value: "0.2" },
  { name: "ent_coef", value: "0.08 -> 0.01 (linear decay)" },
  { name: "vf_coef", value: "0.5" },
  { name: "max_grad_norm", value: "0.5" },
  { name: "learning_rate", value: "2.5e-4 (linear decay)" },
  { name: "n_envs", value: "48 parallel" },
];

export const rewardShaping = [
  { name: "Forward progress", value: "+0.1 x delta_x", description: "Reward for moving right" },
  { name: "Stuck penalty", value: "-0.5", description: "After 10+ frames stationary" },
  { name: "Time penalty", value: "-0.01 / step", description: "Encourages speed" },
  { name: "Flag bonus", value: "+100", description: "Reaching the flagpole" },
  { name: "Death penalty", value: "-50", description: "Dying without flag" },
  { name: "Score reward", value: "+0.01 x delta_score", description: "Enemies, power-ups" },
  { name: "Coin bonus", value: "+5.0 / coin", description: "Collecting coins" },
];

export const keyStats = [
  { label: "Training Steps", value: "12.5M", icon: "steps" },
  { label: "Parameters", value: "~8M", icon: "params" },
  { label: "Parallel Envs", value: "48", icon: "envs" },
  { label: "Flag Rate", value: "95%", icon: "flag" },
];
