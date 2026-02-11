export interface Action {
  id: number;
  name: string;
  buttons: string[];
  description: string;
}

export const actions: Action[] = [
  { id: 0, name: "NOOP", buttons: [], description: "Do nothing" },
  { id: 1, name: "Right", buttons: ["right"], description: "Walk right" },
  { id: 2, name: "Jump Right", buttons: ["right", "A"], description: "Jump right" },
  { id: 3, name: "Run Right", buttons: ["right", "B"], description: "Run right" },
  { id: 4, name: "Sprint Jump", buttons: ["right", "A", "B"], description: "Sprint jump right" },
  { id: 5, name: "Jump", buttons: ["A"], description: "Jump in place" },
  { id: 6, name: "Left", buttons: ["left"], description: "Walk left" },
  { id: 7, name: "Jump Left", buttons: ["left", "A"], description: "Jump left" },
  { id: 8, name: "Run Left", buttons: ["left", "B"], description: "Run left" },
  { id: 9, name: "Sprint Jump Left", buttons: ["left", "A", "B"], description: "Sprint jump left" },
  { id: 10, name: "Crouch", buttons: ["down"], description: "Crouch / Enter pipe" },
  { id: 11, name: "Climb", buttons: ["up"], description: "Climb vine / Enter door" },
];
