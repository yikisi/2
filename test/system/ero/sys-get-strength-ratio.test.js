import { beforeEach, describe, expect, it } from 'vitest';

import sys_get_strength_ratio_in_fight from '#/system/ero/fight/sys-get-strength-ratio.js';

import era from '../../helpers/era.js';

describe('sys_get_strength_ratio_in_fight', () => {
  beforeEach(() => era.reset());

  it('is 1 for a symmetric match-up', () => {
    era.seed({
      'base:1:体力': 100,
      'base:1:力量': 100,
      'maxbase:1:体力': 100,
    });
    expect(sys_get_strength_ratio_in_fight(1, 1)).toBeCloseTo(1);
  });

  it('reflects the stamina and strength product', () => {
    era.seed({
      'base:1:体力': 200,
      'base:1:力量': 100,
      'maxbase:1:体力': 100,
      'base:2:体力': 100,
      'base:2:力量': 100,
      'maxbase:2:体力': 100,
    });
    expect(sys_get_strength_ratio_in_fight(1, 2)).toBeCloseTo(2);
  });

  it('penalizes the defender for pain and injury', () => {
    era.seed({
      'base:1:体力': 100,
      'base:1:力量': 100,
      'maxbase:1:体力': 100,
      'base:2:体力': 100,
      'base:2:力量': 100,
      'maxbase:2:体力': 100,
      'mark:2:苦痛': 4,
    });
    // defender coefficient is 1 - 0.25 * 4 = 0, floored to 1
    expect(sys_get_strength_ratio_in_fight(1, 2)).toBeCloseTo(10000);
  });

  it('floors the base at 1', () => {
    era.seed({
      'base:1:体力': 0,
      'base:1:力量': 100,
      'maxbase:1:体力': 100,
      'base:2:体力': 100,
      'base:2:力量': 100,
      'maxbase:2:体力': 100,
    });
    expect(sys_get_strength_ratio_in_fight(1, 2)).toBeCloseTo(0.0001);
  });
});
