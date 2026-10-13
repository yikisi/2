import { beforeEach, describe, expect, it } from 'vitest';

import { ero_hooks } from '#/data/event/ero-hooks.js';
import sys_check_ero_allowed from '#/system/ero/sys-check-ero-action.js';

import era from '../../helpers/era.js';

describe('sys_check_ero_allowed', () => {
  beforeEach(() => era.reset());

  it('returns a fixed value once branded', () => {
    era.seed({ 'mark:1:淫纹': 3 });
    expect(sys_check_ero_allowed(1, 0, 0)).toBe(21);
  });

  it('is zero for an action without a handler', () => {
    expect(sys_check_ero_allowed(1, 0, 999999)).toBe(0);
  });

  it('combines the handler, lust and punishment for a known action', () => {
    const action = ero_hooks.pet_ear;
    expect(sys_check_ero_allowed(1, 0, action)).toBe(-50);

    era.seed({ 'base:1:性欲': 7000, 'flag:惩戒力度': 3 });
    expect(sys_check_ero_allowed(1, 0, action)).toBe(-55);
  });
});
