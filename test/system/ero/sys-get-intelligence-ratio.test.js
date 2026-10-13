import { beforeEach, describe, expect, it } from 'vitest';

import sys_get_intelligence_ratio_in_fight from '#/system/ero/fight/sys-get-intelligence-ratio.js';

import era from '../../helpers/era.js';

describe('sys_get_intelligence_ratio_in_fight', () => {
  beforeEach(() => era.reset());

  it('is 1 for a symmetric match-up', () => {
    era.seed({
      'base:1:精力': 100,
      'base:1:智力': 100,
      'maxbase:1:精力': 100,
    });
    expect(sys_get_intelligence_ratio_in_fight(1, 1)).toBeCloseTo(1);
  });

  it('reflects the energy and intelligence product', () => {
    era.seed({
      'base:1:精力': 200,
      'base:1:智力': 100,
      'maxbase:1:精力': 100,
      'base:2:精力': 100,
      'base:2:智力': 100,
      'maxbase:2:精力': 100,
    });
    expect(sys_get_intelligence_ratio_in_fight(1, 2)).toBeCloseTo(2);
  });

  it('zeros out a defender crushed by shame', () => {
    era.seed({
      'base:1:精力': 200,
      'base:1:智力': 100,
      'maxbase:1:精力': 100,
      'base:2:精力': 100,
      'base:2:智力': 100,
      'maxbase:2:精力': 100,
      'mark:2:羞耻': 4,
    });
    expect(sys_get_intelligence_ratio_in_fight(1, 2)).toBeCloseTo(20000);
  });

  it('floors the base at 1', () => {
    era.seed({
      'base:1:精力': 0,
      'base:1:智力': 100,
      'maxbase:1:精力': 100,
      'base:2:精力': 100,
      'base:2:智力': 100,
      'maxbase:2:精力': 100,
    });
    expect(sys_get_intelligence_ratio_in_fight(1, 2)).toBeCloseTo(0.0001);
  });
});
