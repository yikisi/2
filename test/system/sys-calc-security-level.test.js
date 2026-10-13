import { beforeEach, describe, expect, it } from 'vitest';

import sys_calc_security_level from '#/system/basement/sys-calc-security-level.js';

import era from '../helpers/era.js';

describe('sys_calc_security_level', () => {
  beforeEach(() => era.reset());

  it('scales with love against relation', () => {
    era.seed({ 'love:1': 1000, 'relation:1:0': 0 });
    expect(sys_calc_security_level(1)).toBe(5);
  });

  it('applies the behaviour-limit multiplier', () => {
    era.seed({
      'love:1': 500,
      'relation:1:0': 100,
      'flag:极端行为限制': 2,
    });
    expect(sys_calc_security_level(1)).toBe(4);
  });

  it('grows when relation is negative', () => {
    era.seed({ 'love:1': 0, 'relation:1:0': -400 });
    expect(sys_calc_security_level(1)).toBe(2);
  });

  it('clamps up to min when min is non-negative', () => {
    era.seed({ 'love:1': 100, 'relation:1:0': 0 });
    expect(sys_calc_security_level(1, 3)).toBe(3);
  });

  it('does not clamp when min is negative', () => {
    era.seed({ 'love:1': 100, 'relation:1:0': 0 });
    expect(sys_calc_security_level(1)).toBe(0);
    expect(sys_calc_security_level(1, -1)).toBe(0);
  });
});
