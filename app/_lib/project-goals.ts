export const PROJECT_GOALS = {
  credibility: { label: "Build credibility", short: "Credibility", description: "Help people feel confident choosing your business.", result: "Your work, your people and your expertise move forward.", signal: "trust" },
  enquiries: { label: "Earn enquiries", short: "Enquiries", description: "Make the next conversation easier to start.", result: "Your offer, contact options and next step become easier to find.", signal: "enquiries" },
  clarity: { label: "Explain the offer", short: "Clarity", description: "Make your services and their value easier to understand.", result: "Your services and their differences become easier to compare.", signal: "unclear" },
} as const;
export type ProjectGoal = keyof typeof PROJECT_GOALS;
export const GOAL_KEYS = Object.keys(PROJECT_GOALS) as ProjectGoal[];
export function isProjectGoal(value: unknown): value is ProjectGoal {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(PROJECT_GOALS, value);
}
export function projectHref(goal?: ProjectGoal) {
  return goal ? `/contact?goal=${goal}#enquiry` : "/contact#enquiry";
}
export function assemblyProgress(top: number, height: number, viewport: number) {
  return Math.max(0, Math.min(1, -top / Math.max(1, height - viewport)));
}
export function assemblySpread(progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  if (p < .15) return p / .15 * .3;
  if (p < .4) return .3 + (p - .15) / .25 * .7;
  if (p < .82) return 1 - (p - .4) / .42;
  return 0;
}
