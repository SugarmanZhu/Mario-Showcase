# Mario RL Showcase

A portfolio website showcasing a reinforcement learning agent trained to play Super Mario Bros. Built with Next.js, shadcn/ui, and Tailwind CSS.

## About the Project

This is a single-page showcase site for a PPO agent with IMPALA CNN architecture trained across 48 parallel environments to master Super Mario Bros from raw pixel observations.

### Sections

- **Hero / Mission Control** - Gameplay demo GIF, animated NES controller, agent telemetry, and scrolling training log
- **Architecture** - Observation pipeline visualization with SVG diagrams, IMPALA CNN flow diagram, and NatureCNN vs IMPALA comparison tables
- **Training Progress** - Animated stats, reward vs timesteps chart with milestones, and custom reward shaping breakdown
- **Version Comparison** - v1.x vs v2.x specs side-by-side and 12-action COMPLEX_MOVEMENT action space table

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion) (scroll-reveal animations)
- [Recharts](https://recharts.org) (training chart)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Related

- [Mario RL Project](https://github.com/SugarmanZhu/Mario) - The reinforcement learning project this site showcases
