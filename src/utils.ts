export function Clamp(num: number, max: number, min: number): number {
  return Math.min(max, Math.max(min, num));
}
