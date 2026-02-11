export const observationPipeline = [
  {
    name: "NES Frame",
    shape: "256 x 240 RGB",
    description: "Raw NES emulator output at native resolution",
    icon: "monitor",
  },
  {
    name: "Skip Frame",
    shape: "Every 4th frame",
    description: "Repeat action for 4 frames, sum rewards. Reduces computation 4x while preserving game speed",
    icon: "skip",
  },
  {
    name: "Resize",
    shape: "128 x 120",
    description: "Half resolution via INTER_AREA interpolation. Preserves aspect ratio, reduces memory 4x",
    icon: "resize",
  },
  {
    name: "Frame Stack",
    shape: "4 frames stacked",
    description: "Stack 4 consecutive frames for temporal context — lets the agent perceive velocity and direction",
    icon: "stack",
  },
  {
    name: "Transpose",
    shape: "(12, 120, 128)",
    description: "Reshape from (H, W, C) to channels-first (C, H, W) for PyTorch. 4 frames x 3 RGB = 12 channels",
    icon: "transpose",
  },
  {
    name: "Normalize",
    shape: "float32 [0, 1]",
    description: "On-the-fly GPU normalization by SB3. Keeps uint8 in memory for efficiency, converts when batching",
    icon: "normalize",
  },
];

export const impalaStages = [
  {
    name: "Stage 1",
    operation: "Conv3x3(12 -> 32) + MaxPool3x3(s=2) + 2x ResBlock",
    inputChannels: 12,
    outputChannels: 32,
    outputShape: "32 x 60 x 64",
  },
  {
    name: "Stage 2",
    operation: "Conv3x3(32 -> 64) + MaxPool3x3(s=2) + 2x ResBlock",
    inputChannels: 32,
    outputChannels: 64,
    outputShape: "64 x 30 x 32",
  },
  {
    name: "Stage 3",
    operation: "Conv3x3(64 -> 64) + MaxPool3x3(s=2) + 2x ResBlock",
    inputChannels: 64,
    outputChannels: 64,
    outputShape: "64 x 15 x 16",
  },
];

export const networkHeads = {
  flatten: { outputDim: 15360, description: "Flatten spatial features" },
  linear: { in: 15360, out: 512, description: "Dense feature compression" },
  policyHead: {
    layers: "256 -> 256 -> 12",
    description: "Action logits (12 actions)",
  },
  valueHead: {
    layers: "256 -> 256 -> 1",
    description: "State value estimate",
  },
};

export const architectureComparison = {
  cnn: [
    { feature: "Architecture", natureCnn: "3 Conv layers", impala: "3 stages with residual blocks" },
    { feature: "Residual Connections", natureCnn: "None", impala: "2 per stage (6 total)" },
    { feature: "Parameters", natureCnn: "~1.5M", impala: "~8M" },
    { feature: "Multi-task Learning", natureCnn: "Limited", impala: "Strong (visual discrimination)" },
  ],
  observation: [
    { feature: "Powerups", grayscale: "Same gray tone", rgb: "Color-distinguishable" },
    { feature: "Level Identity", grayscale: "Similar appearance", rgb: "Unique color palettes" },
    { feature: "Channels", grayscale: "1 per frame", rgb: "3 per frame" },
    { feature: "Multi-level", grayscale: "Hard to distinguish", rgb: "Visual context preserved" },
  ],
};
