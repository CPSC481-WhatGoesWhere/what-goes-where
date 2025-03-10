import { REFUND_RATES } from "./constants";

export function calculateEstimatedRefund(
  glassBottles: number | undefined,
  plasticBottles: number | undefined,
  aluminiumCans: number | undefined
): number {
  return (
    REFUND_RATES["glass"] * (glassBottles ?? 0) +
    REFUND_RATES["plastic"] * (plasticBottles ?? 0) +
    REFUND_RATES["aluminum"] * (aluminiumCans ?? 0)
  );
}
