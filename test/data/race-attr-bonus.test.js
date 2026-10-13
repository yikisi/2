import { describe, expect, it } from 'vitest';

import { bonus_params, id2bonus } from '#/data/race/race-attr-bonus.js';

describe('race-attr-bonus', () => {
  it('keeps the first bonus group empty as the "no bonus" index', () => {
    expect(bonus_params[0]).toEqual([]);
  });

  it('references non-negative integer groups from numeric ids', () => {
    for (const [id, group] of Object.entries(id2bonus)) {
      expect(Number.isInteger(Number(id))).toBe(true);
      expect(Number.isInteger(group)).toBe(true);
      expect(group).toBeGreaterThanOrEqual(0);
    }
  });

  it('tolerates the out-of-range groups the data happens to use', () => {
    // Consumers look up `bonus_params[id2bonus[param_id]] || []`, so groups
    // past the end of bonus_params are allowed and resolve to an empty list.
    const missing = [...new Set(Object.values(id2bonus))]
      .filter((group) => group >= bonus_params.length)
      .sort((a, b) => a - b);
    expect(missing).toEqual([12, 13]);
    for (const group of missing) {
      expect(bonus_params[group]).toBeUndefined();
    }
  });

  it('only lists base attribute indices inside each group', () => {
    for (const group of bonus_params) {
      for (const attr of group) {
        expect(attr).toBeGreaterThanOrEqual(0);
        expect(attr).toBeLessThanOrEqual(4);
      }
    }
  });

  it('has at least one populated bonus group', () => {
    expect(bonus_params.length).toBeGreaterThan(1);
    expect(bonus_params[1].length).toBeGreaterThan(0);
  });
});
