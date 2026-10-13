import { beforeEach, describe, expect, it } from 'vitest';

import {
  sys_change_lust,
  sys_change_motivation,
  sys_change_pressure,
  sys_change_weight,
  sys_fix_chara_base,
  sys_get_billings,
  sys_handle_action,
  sys_reg_race,
} from '#/system/sys-calc-base-cflag.js';

import era from '../helpers/era.js';

describe('sys_change_lust', () => {
  beforeEach(() => era.reset());

  it('adds the raw value with no modifiers', () => {
    sys_change_lust(1, 10);
    expect(era.get('base:1:性欲')).toBe(10);
  });

  it('scales a positive change by the character traits', () => {
    era.seed({
      'talent:1:淫乱': 1,
      'status:1:发情': 1,
      'status:1:排卵期': 1,
      'status:1:经期': 1,
    });
    sys_change_lust(1, 10);
    expect(era.get('base:1:性欲')).toBeCloseTo(18.5);
  });

  it('adds negative values directly', () => {
    sys_change_lust(1, -5);
    expect(era.get('base:1:性欲')).toBe(-5);
  });
});

describe('sys_change_weight', () => {
  beforeEach(() => era.reset());

  it('scales by the eating-control trait', () => {
    era.seed({ 'talent:1:14': 2 });
    sys_change_weight(1, 5);
    expect(era.get('base:1:12')).toBe(60);
  });
});

describe('sys_handle_action', () => {
  beforeEach(() => era.reset());

  it('drains the player and the acting character', () => {
    era.seed({
      'base:0:体力': 100,
      'base:0:精力': 100,
      'base:3:体力': 100,
      'base:3:精力': 100,
    });
    sys_handle_action({ stamina: 10, time: 20 }, 3);
    expect(era.get('base:0:体力')).toBe(90);
    expect(era.get('base:0:精力')).toBe(80);
    expect(era.get('base:3:体力')).toBe(90);
    expect(era.get('base:3:精力')).toBe(80);
  });

  it('only drains the player when no character acts', () => {
    era.seed({ 'base:0:体力': 100, 'base:0:精力': 100 });
    sys_handle_action({ stamina: 5, time: 5 });
    expect(era.get('base:0:体力')).toBe(95);
    expect(era.get('base:0:精力')).toBe(95);
  });
});

describe('sys_get_billings', () => {
  beforeEach(() => era.reset());

  it('creates and caches a default billing entry', () => {
    const first = sys_get_billings();
    expect(first).toEqual([{ creditor: 0, repay: 0, timer: 0 }]);
    expect(era.get('flag:17')).toBe(first);
    expect(sys_get_billings()).toBe(first);
  });
});

describe('sys_reg_race', () => {
  beforeEach(() => era.reset());

  it('registers a frozen default booking', () => {
    const ret = sys_reg_race(2);
    expect(ret).toEqual({
      curr: { race: -1, week: -1 },
      last: { race: -1, week: -1 },
    });
    expect(Object.isExtensible(ret)).toBe(false);
    expect(Object.isExtensible(ret.curr)).toBe(false);
    expect(Object.isExtensible(ret.last)).toBe(false);
    expect(era.get('cflag:2:出走登记')).toBe(ret);
  });
});

describe('sys_change_motivation', () => {
  beforeEach(() => era.reset());

  it('does nothing without a character or after training', () => {
    expect(sys_change_motivation(0, 1)).toBe(false);
    era.seed({ 'cflag:1:育成回合计时': 144 });
    expect(sys_change_motivation(1, 1)).toBe(false);
  });

  it('blocks a positive change during a migraine', () => {
    era.seed({ 'status:1:偏头痛': 1 });
    expect(sys_change_motivation(1, 1)).toBe(false);
  });

  it('raises and clamps the motivation', () => {
    era.seed({
      'cflag:1:育成回合计时': 0,
      'cflag:1:干劲': 0,
      'base:1:压力': 0,
    });
    expect(sys_change_motivation(1, 1)).toBe(true);
    expect(era.get('cflag:1:干劲')).toBe(1);

    era.seed({ 'cflag:1:干劲': 0 });
    expect(sys_change_motivation(1, 3)).toBe(true);
    expect(era.get('cflag:1:干劲')).toBe(2);
  });

  it('reports no change when already at the limit', () => {
    era.seed({
      'cflag:1:育成回合计时': 0,
      'cflag:1:干劲': 2,
      'base:1:压力': 0,
    });
    expect(sys_change_motivation(1, 1)).toBe(false);
  });

  it('lowers the motivation', () => {
    era.seed({
      'cflag:1:育成回合计时': 0,
      'cflag:1:干劲': 0,
      'base:1:压力': 0,
    });
    expect(sys_change_motivation(1, -1)).toBe(true);
    expect(era.get('cflag:1:干劲')).toBe(-1);
  });
});

describe('sys_change_pressure', () => {
  beforeEach(() => era.reset());

  it('returns the current pressure for a zero delta', () => {
    era.seed({ 'base:1:压力': 123 });
    expect(sys_change_pressure(1, 0)).toBe(123);
  });

  it('adds pressure when enabled', () => {
    era.seed({ 'flag:压力获取': 1, 'base:1:压力': 0 });
    expect(sys_change_pressure(1, 100)).toBe(100);
    expect(era.get('base:1:压力')).toBe(100);
  });

  it('skips the change when pressure gain is disabled', () => {
    era.seed({ 'base:1:压力': 0 });
    expect(sys_change_pressure(1, 100)).toBe(0);
    expect(era.get('base:1:压力')).toBe(0);
  });

  it('halves the gain after the training period ends', () => {
    era.seed({ 'flag:压力获取': 1, 'cflag:1:育成回合计时': 144 });
    expect(sys_change_pressure(1, 100)).toBe(50);
  });

  it('reduces the gain with the Ryoka buff', () => {
    era.seed({ 'flag:压力获取': 1, 'cflag:344:57': { buff: 1 } });
    expect(sys_change_pressure(1, 100)).toBeCloseTo(80);
  });
});

describe('sys_fix_chara_base', () => {
  beforeEach(() => era.reset());

  it('recomputes max stamina and time from the stats', () => {
    era.seed({
      'staticbase:0:体力': 100,
      'staticbase:0:精力': 50,
      'base:1:耐力': 100,
      'base:1:智力': 200,
      'cflag:1:模版角色': 0,
      'cflag:1:妊娠阶段': 0,
    });
    sys_fix_chara_base(1);
    expect(era.get('maxbase:1:体力')).toBe(200);
    expect(era.get('maxbase:1:精力')).toBe(200);
  });

  it('uses the larger static value when it dominates', () => {
    era.seed({
      'staticbase:0:体力': 300,
      'base:1:耐力': 0,
      'cflag:1:模版角色': 0,
      'cflag:1:妊娠阶段': 0,
    });
    sys_fix_chara_base(1);
    expect(era.get('maxbase:1:体力')).toBe(300);
  });
});
