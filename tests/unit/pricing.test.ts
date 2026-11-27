import { describe, expect, it } from "vitest";
import { bandPrices, levels, plans, roles } from "@/content/pricing";
import { bandForRole, fromPrice, hourlyRate, monthlyPrice } from "@/lib/pricing";

describe("pricing data", () => {
  it("has 40 roles, each in a valid band", () => {
    expect(roles).toHaveLength(40);
    expect(new Set(roles.map((r) => r.name)).size).toBe(40);
    for (const r of roles) expect(bandPrices[r.band]).toBeDefined();
  });

  it("has 4 plans with the approved monthly hours", () => {
    expect(plans.map((p) => [p.id, p.hoursPerMonth])).toEqual([
      ["lite", 20],
      ["basic", 40],
      ["growth", 80],
      ["full-time", 160],
    ]);
  });

  it("has a price for every band, level and plan", () => {
    for (const band of Object.values(bandPrices)) {
      for (const level of levels) {
        expect(band[level.id]).toHaveLength(4);
        for (const price of band[level.id]) expect(price).toBeGreaterThan(0);
      }
    }
  });
});

describe("pricing maths", () => {
  it("returns the published 'from' prices", () => {
    expect(fromPrice("lite")).toBe(209);
    expect(fromPrice("basic")).toBe(379);
    expect(fromPrice("growth")).toBe(719);
    expect(fromPrice("full-time")).toBe(1199);
  });

  it("looks up a role's price", () => {
    expect(bandForRole("Executive Assistance")).toBe(2);
    expect(monthlyPrice(2, "intermediate", "growth")).toBe(869);
  });

  it("calculates hourly rates from monthly prices, rounded half-up to the cent", () => {
    expect(hourlyRate(299, 20)).toBe(14.95); // pricing guide showed $14.45 (typo)
    expect(hourlyRate(1899, 160)).toBe(11.87); // guide showed $11.86 in one band
    expect(hourlyRate(869, 80)).toBe(10.86);
    expect(hourlyRate(1199, 160)).toBe(7.49);
  });
});
