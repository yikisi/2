import { describe, expect, it } from 'vitest';

import orgasm_const from '#/data/ero/orgasm-const.js';

const {
  baby_limit,
  base_limit,
  base_orgasm_juel_reward,
  birth_percent,
  lust_border,
  max_absent_mind_time,
  orgasm_cost,
  palam2juel,
  palam_border,
  secretion_amount,
  secretion_coefficient,
} = orgasm_const;

describe('orgasm-const', () => {
  it('derives the jewel reward from palam2juel', () => {
    expect(palam2juel).toBe(10);
    expect(base_orgasm_juel_reward).toBe(50 * palam2juel);
  });

  it('exposes the biological limits', () => {
    expect(baby_limit).toBe(8);
    expect(base_limit).toBe(1000);
    expect(max_absent_mind_time).toBe(5);
  });

  it('keeps the birth probabilities ascending and capped at 1', () => {
    expect(birth_percent).toHaveLength(7);
    for (let i = 1; i < birth_percent.length; i++) {
      expect(birth_percent[i]).toBeGreaterThan(birth_percent[i - 1]);
    }
    expect(birth_percent.at(-1)).toBe(1);
  });

  it('orders the lust borders', () => {
    expect(lust_border.itch).toBeLessThan(lust_border.absent_mind);
    expect(lust_border.absent_mind).toBeLessThan(lust_border.want_sex);
    expect(lust_border.limit).toBeGreaterThan(lust_border.max);
  });

  it('exposes per-part lubrication thresholds', () => {
    for (const v of Object.values(palam_border)) {
      expect(v).toBeGreaterThan(0);
      expect(v).toBeLessThan(1);
    }
  });

  it('structures orgasm costs and secretion amounts', () => {
    expect(orgasm_cost.body.stamina).toBe(160);
    expect(orgasm_cost.spirit.time).toBe(240);
    expect(secretion_amount.anal).toEqual([5, 15]);
    expect(secretion_amount.orgasm_times.at(-1)).toBe(2.5);
    expect(Object.values(secretion_coefficient)[0]).toHaveLength(4);
  });
});
