import { afterEach, describe, expect, it, vi } from 'vitest';

import ConditionParams from '#/data/race/model/condition-params.js';

describe('ConditionParams', () => {
  afterEach(() => vi.restoreAllMocks());

  it('provides a 1-100 random lot', () => {
    const params = new ConditionParams();

    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(params.random_lot).toBe(1);

    vi.spyOn(Math, 'random').mockReturnValue(0.999999);
    expect(params.random_lot).toBe(100);

    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    expect(params.random_lot).toBe(51);
  });

  it('returns only integers within the inclusive range', () => {
    const params = new ConditionParams();
    for (let i = 0; i < 200; i++) {
      const lot = params.random_lot;
      expect(Number.isInteger(lot)).toBe(true);
      expect(lot).toBeGreaterThanOrEqual(1);
      expect(lot).toBeLessThanOrEqual(100);
    }
  });
});
