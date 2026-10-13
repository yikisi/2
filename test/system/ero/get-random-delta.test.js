import { afterEach, describe, expect, it, vi } from 'vitest';

import get_random_delta from '#/system/ero/sub-calc-ero/get-random-delta.js';

describe('get_random_delta', () => {
  afterEach(() => vi.restoreAllMocks());

  const with_random = (value) =>
    vi.spyOn(Math, 'random').mockReturnValue(value);

  it('uses the low branch below 0.05', () => {
    with_random(0);
    expect(get_random_delta(1000, 50)).toBe(-20);
  });

  it('uses the high branch above 0.95', () => {
    with_random(0.99);
    expect(get_random_delta(1000, 50)).toBeCloseTo(19.8);
  });

  it('uses the middle branch in between', () => {
    with_random(0.5);
    expect(get_random_delta(1000, 50)).toBe(0);
  });

  it('shifts the delta range with love', () => {
    with_random(0.5);
    expect(get_random_delta(1000, 100)).toBe(10);
  });

  it('clamps the delta to 10% of the origin value', () => {
    with_random(0);
    expect(get_random_delta(100, 50)).toBe(-10);
    with_random(0.99);
    expect(get_random_delta(100, 50)).toBe(10);
  });

  it('never exceeds 10% of the origin value', () => {
    const origin = 500;
    for (const c of [0, 0.04, 0.05, 0.5, 0.94, 0.95, 1]) {
      with_random(c);
      expect(Math.abs(get_random_delta(origin, 80))).toBeLessThanOrEqual(
        origin * 0.1,
      );
    }
  });
});
