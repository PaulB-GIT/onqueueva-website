"use client";

import { useId, useState } from "react";
import { categoryLabels, levels, plans, roles, type CategoryId, type LevelId, type PlanId } from "@/content/pricing";
import { bandForRole, formatHourly, formatMonthly, hourlyRate, monthlyPrice } from "@/lib/pricing";

type Props = { fromPrices: Record<PlanId, number> };

const categoryOrder = Object.keys(categoryLabels) as CategoryId[];

export function PriceFinder({ fromPrices }: Props) {
  const [planId, setPlanId] = useState<PlanId>("growth");
  const [roleName, setRoleName] = useState("Executive Assistance");
  const [levelId, setLevelId] = useState<LevelId>("intermediate");
  const id = useId();

  const plan = plans.find((p) => p.id === planId) ?? plans[2];
  const level = levels.find((l) => l.id === levelId) ?? levels[1];
  const monthly = monthlyPrice(bandForRole(roleName), levelId, planId);
  const hourly = hourlyRate(monthly, plan.hoursPerMonth);

  return (
    <div>
      <div role="radiogroup" aria-label="Plan" className="flex flex-wrap justify-center gap-2">
        {plans.map((p) => {
          const selected = p.id === planId;
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setPlanId(p.id)}
              className={`min-h-11 rounded-full border px-5 text-[0.9375rem] font-semibold transition-colors ${selected ? "border-blue-600 bg-blue-600 text-white" : "border-line-strong bg-white text-ink-900 hover:border-blue-600"}`}
            >
              {p.name} · {p.hoursPerMonth} hrs
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid overflow-hidden rounded-[var(--radius-card)] border border-line lg:grid-cols-2">
        <div className="p-8 md:p-10 lg:border-r lg:border-line">
          <h3 className="text-2xl font-semibold">{plan.name}</h3>
          <p className="mt-2 text-ink-600">
            {plan.hoursPerMonth} hours per month · {plan.approxDaily}
          </p>
          <p className="mt-7 text-sm text-ink-600">from</p>
          <p className="font-display text-5xl font-bold leading-tight text-ink-900">
            {formatMonthly(fromPrices[planId])}
            <span className="text-base font-medium text-ink-600"> /month</span>
          </p>
          <p className="mt-4 leading-relaxed">{plan.suits}</p>
        </div>

        <div className="bg-neutral-50 p-8 md:p-10">
          <h3 className="text-base font-semibold">Find your price</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
            <div>
              <label htmlFor={`${id}-role`} className="mb-1.5 block text-sm font-semibold">
                Service role
              </label>
              <select
                id={`${id}-role`}
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                className="min-h-11 w-full rounded-[var(--radius-control)] border border-line-strong bg-white px-3 text-[0.9375rem] text-ink-900"
              >
                {categoryOrder.map((cat) => (
                  <optgroup key={cat} label={categoryLabels[cat]}>
                    {roles
                      .filter((r) => r.category === cat)
                      .map((r) => (
                        <option key={r.name} value={r.name}>
                          {r.name}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={`${id}-level`} className="mb-1.5 block text-sm font-semibold">
                Experience level
              </label>
              <select
                id={`${id}-level`}
                value={levelId}
                onChange={(e) => setLevelId(e.target.value as LevelId)}
                aria-describedby={`${id}-level-help`}
                className="min-h-11 w-full rounded-[var(--radius-control)] border border-line-strong bg-white px-3 text-[0.9375rem] text-ink-900"
              >
                {levels.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p id={`${id}-level-help`} className="mt-2 text-sm text-ink-600">
            {level.name}: {level.definition}
          </p>

          <div aria-live="polite" className="mt-6 flex flex-wrap justify-between gap-4 rounded-xl bg-white p-5">
            <div>
              <p className="text-sm text-ink-600">Your monthly price</p>
              <p className="font-display text-3xl font-bold">{formatMonthly(monthly)}</p>
            </div>
            <div>
              <p className="text-sm text-ink-600">Additional hours</p>
              <p className="mt-1.5 text-lg font-semibold">{formatHourly(hourly)} / hour</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-ink-600">We confirm your exact price on your discovery call.</p>
        </div>
      </div>
    </div>
  );
}
