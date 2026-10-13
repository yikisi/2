import { beforeEach, describe, expect, it } from 'vitest';

import sys_personal_achievement from '#/system/global/sys-calc-personal-achievement.js';

import era from '../../helpers/era.js';

describe('sys_personal_achievement', () => {
  beforeEach(() => era.reset());

  it('reports 0 for an unachieved character', () => {
    expect(sys_personal_achievement.get(5)).toBe(0);
    expect(sys_personal_achievement.list()).toEqual([]);
  });

  it('records and returns the achievement timestamp', () => {
    const stamp = sys_personal_achievement.set(5, 1);
    expect(typeof stamp).toBe('number');
    expect(sys_personal_achievement.get(5)).toBe(stamp);
  });

  it('lists every achieved character', () => {
    sys_personal_achievement.set(5, 1);
    sys_personal_achievement.set(7, 1);
    expect(sys_personal_achievement.list().sort((a, b) => a - b)).toEqual([
      5, 7,
    ]);
  });
});
