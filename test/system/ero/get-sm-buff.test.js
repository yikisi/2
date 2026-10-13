import { beforeEach, describe, expect, it } from 'vitest';

import get_sm_buff from '#/system/ero/sub-calc-ero/get-sm-buff.js';

import era from '../../helpers/era.js';

describe('get_sm_buff', () => {
  beforeEach(() => era.reset());

  it('is zero with no equipment', () => {
    expect(get_sm_buff(1)).toBe(0);
  });

  it('grants the masochism bonus with a collar', () => {
    expect(get_sm_buff(1, true)).toBe(0.2);
  });

  it('grants no masochism bonus without a collar', () => {
    era.seed({ 'tequip:1:项圈': -1 });
    expect(get_sm_buff(1, true)).toBe(0);
  });

  it('grants the mirror bonus when blindfold-free', () => {
    era.seed({ 'tflag:全身镜': 1, 'tequip:1:眼罩': -1 });
    expect(get_sm_buff(1)).toBe(0.2);
  });

  it('is suppressed while asleep, in S, or exhausted', () => {
    era.seed({ 'status:1:沉睡': 1 });
    expect(get_sm_buff(1, true)).toBe(0);

    era.seed({ 'status:1:沉睡': 0, 'status:1:马跳S': 1 });
    expect(get_sm_buff(1, true)).toBe(0);

    era.seed({ 'status:1:马跳S': 0, 'tcvar:1:脱力': 1 });
    expect(get_sm_buff(1, true)).toBe(0);
  });
});
