import {
  bandPrices,
  plans,
  roles,
  type BandId,
  type LevelId,
  type Plan,
  type PlanId,
} from "@/content/pricing";

const planIndex: Record<PlanId, number> = { lite: 0, basic: 1, growth: 2, "full-time": 3 };

export function getPlan(id: PlanId): Plan {
  const plan = plans.find((p) => p.id === id);
  if (!plan) throw new Error(`Unknown plan: ${id}`);
  return plan;
}

/** Monthly price in USD for a band, level and plan. */
export function monthlyPrice(band: BandId, level: LevelId, plan: PlanId): number {
  return bandPrices[band][level][planIndex[plan]];
}

/** Hourly rate, calculated from the monthly price and rounded half-up to the cent. */
export function hourlyRate(monthly: number, hoursPerMonth: number): number {
  return Math.round((monthly / hoursPerMonth) * 100 + Number.EPSILON) / 100;
}

/** The lowest monthly price of a plan across every band and level ("from" price). */
export function fromPrice(plan: PlanId): number {
  const all = Object.values(bandPrices).flatMap((levels) =>
    Object.values(levels).map((row) => row[planIndex[plan]]),
  );
  return Math.min(...all);
}

export function bandForRole(roleName: string): BandId {
  const role = roles.find((r) => r.name === roleName);
  if (!role) throw new Error(`Unknown role: ${roleName}`);
  return role.band;
}

const usd0 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const usd2 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

export const formatMonthly = (n: number) => usd0.format(n);
export const formatHourly = (n: number) => usd2.format(n);

/** Lowest Lite price for a set of roles (Entry level, the cheapest band among them). */
export function fromPriceForRoles(roleNames: string[]): number | undefined {
  const bands = roles.filter((r) => roleNames.includes(r.name)).map((r) => r.band);
  if (bands.length === 0) return undefined;
  return Math.min(...bands.map((b) => monthlyPrice(b, "entry", "lite")));
}

export function rolesInCategory(category: string): string[] {
  return roles.filter((r) => r.category === category).map((r) => r.name);
}
