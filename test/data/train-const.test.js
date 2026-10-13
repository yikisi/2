import { describe, expect, it } from 'vitest';

import {
  attr_enum,
  base_attr_list,
  fail_sta_border,
  fumble_border,
  fumble_result,
  pressure_border,
  time_cost,
} from '#/data/train-const.js';

describe('attr_enum', () => {
  it('assigns attributes in the canonical order', () => {
    expect(attr_enum).toEqual({
      speed: 0,
      endurance: 1,
      strength: 2,
      toughness: 3,
      intelligence: 4,
      hp: 5,
      tp: 6,
    });
  });

  it('derives base_attr_list from the first five attributes', () => {
    expect(base_attr_list).toEqual([0, 1, 2, 3, 4]);
  });
});

describe('borders and thresholds', () => {
  it('orders the pressure borders consistently', () => {
    expect(pressure_border.unhappy).toBeLessThan(pressure_border.apprehension);
    expect(pressure_border.apprehension).toBeLessThan(
      pressure_border.depression,
    );
    expect(pressure_border.depression).toBeLessThan(pressure_border.limit);
  });

  it('exposes the fail and fumble borders', () => {
    expect(fail_sta_border).toEqual({ intelligence: 0.3, other: 0.5 });
    expect(fumble_border).toBe(0.35);
  });

  it('keeps time_cost ascending with one entry per attribute rank', () => {
    expect(time_cost).toHaveLength(5);
    for (let i = 1; i < time_cost.length; i++) {
      expect(time_cost[i]).toBeGreaterThan(time_cost[i - 1]);
    }
  });
});

describe('fumble_result', () => {
  it('penalizes a fumble harder than a plain failure', () => {
    const { fail, fumble } = fumble_result;
    expect(fumble.attr_down).toBeLessThan(fail.attr_down);
    expect(fumble.like).toBeLessThan(fail.like);
    expect(fumble.motivate_down).toBeLessThan(fail.motivate_down);
    expect(fumble.attr_down_times).toBeGreaterThan(fail.attr_down_times);
  });

  it('raises the retry ratios for a fumble', () => {
    expect(fumble_result.fumble.ratio.fail_again).toBeGreaterThan(
      fumble_result.fail.ratio.fail_again,
    );
    expect(fumble_result.fumble.ratio.accept_talent).toBeGreaterThan(
      fumble_result.fail.ratio.accept_talent,
    );
  });
});
