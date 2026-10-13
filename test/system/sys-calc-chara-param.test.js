import { beforeEach, describe, expect, it } from 'vitest';

import {
  sys_check_act_disabled,
  sys_check_awake,
  sys_check_hide_relation_and_love,
  sys_check_train_disabled,
  sys_check_train_enabled,
  sys_get_debuff,
  sys_get_discount,
  sys_get_motivation,
  sys_get_move_cost,
  sys_get_succ_rate,
} from '#/system/sys-calc-chara-param.js';

import { location_enum } from '#/data/locations.js';
import { vehicle_enum } from '#/data/move-const.js';

import era from '../helpers/era.js';

describe('sys_check_awake', () => {
  beforeEach(() => era.reset());

  it('is awake by default', () => {
    expect(sys_check_awake(1)).toBe(true);
  });

  it('is asleep with the sleep or S status', () => {
    era.seed({ 'status:1:10': 1 });
    expect(sys_check_awake(1)).toBe(false);
    era.seed({ 'status:1:10': 0, 'status:1:39': 1 });
    expect(sys_check_awake(1)).toBe(false);
  });
});

describe('sys_get_motivation', () => {
  beforeEach(() => era.reset());

  it('returns -4 while slacking off', () => {
    era.seed({ 'status:1:2': 1 });
    expect(sys_get_motivation(1)).toBe(-4);
  });

  it('reads the raw motivation cflag', () => {
    era.seed({ 'cflag:1:40': 1 });
    expect(sys_get_motivation(1)).toBe(1);
  });

  it('adds the elder buffs at max motivation', () => {
    era.seed({
      'cflag:1:40': 2,
      'cflag:346:66': 1,
      'cflag:346:57': { buff: 1 },
    });
    expect(sys_get_motivation(1)).toBe(3);

    era.seed({ 'cflag:346:57': {} });
    expect(sys_get_motivation(1)).toBe(2.5);
  });
});

describe('sys_check_train_enabled', () => {
  beforeEach(() => era.reset());

  it('is disabled without a race breed', () => {
    expect(sys_check_train_enabled(0)).toBe(false);
  });

  it('is enabled when all conditions hold', () => {
    era.seed({ 'cflag:1:种族': 1, 'cflag:1:48': 100 });
    expect(sys_check_train_enabled(1)).toBe(true);
  });

  it('is disabled by injury, overwork, lust or the training clock', () => {
    era.seed({ 'cflag:1:种族': 1, 'cflag:1:48': 100, 'status:1:伤病': 1 });
    expect(sys_check_train_enabled(1)).toBe(false);

    era.seed({ 'cflag:1:种族': 1, 'cflag:1:48': 100, 'base:1:压力': 8000 });
    expect(sys_check_train_enabled(1)).toBe(false);

    era.seed({ 'cflag:1:种族': 1, 'cflag:1:48': 100, 'base:1:性欲': 9000 });
    expect(sys_check_train_enabled(1)).toBe(false);

    era.seed({ 'cflag:1:种族': 1, 'cflag:1:48': 144 });
    expect(sys_check_train_enabled(1)).toBe(false);
  });
});

describe('sys_check_train_disabled', () => {
  beforeEach(() => era.reset());

  it('returns 0 when nothing blocks training', () => {
    expect(sys_check_train_disabled(1, 0)).toBe(0);
  });

  it('flags the pregnancy stages that disable training', () => {
    expect(sys_check_train_disabled(1, 1)).toBe(1);
    expect(sys_check_train_disabled(1, 16)).toBe(16);
    expect(sys_check_train_disabled(1, 2)).toBe(0);
  });

  it('adds the sleep flag and reads the stage from storage', () => {
    era.seed({ 'status:1:沉睡': 1, 'cflag:1:妊娠阶段': 16 });
    expect(sys_check_train_disabled(1)).toBe(18);
  });
});

describe('sys_get_debuff', () => {
  beforeEach(() => era.reset());

  it('is zero with no conditions', () => {
    expect(sys_get_debuff(1)).toBe(0);
  });

  it('reflects major statuses', () => {
    era.seed({ 'status:1:沉睡': 1 });
    expect(sys_get_debuff(1)).toBe(1000);

    era.seed({ 'status:1:沉睡': 0, 'status:1:发情': 1 });
    expect(sys_get_debuff(1)).toBe(0.2);

    era.seed({ 'status:1:发情': 0, 'status:1:经期': 1 });
    expect(sys_get_debuff(1)).toBe(0.1);
  });

  it('scales with lust and the field status', () => {
    era.seed({ 'base:1:性欲': 9000 });
    expect(sys_get_debuff(1)).toBe(0.2);

    era.seed({ 'base:1:性欲': 7500 });
    expect(sys_get_debuff(1)).toBe(0.1);

    era.seed({ 'base:1:性欲': 0, 'status:1:领域': 2 });
    expect(sys_get_debuff(1)).toBeCloseTo(0.2);
  });

  it('penalizes the pregnancy recovery stage', () => {
    era.seed({ 'cflag:1:妊娠阶段': 1 });
    expect(sys_get_debuff(1)).toBe(0.5);
  });
});

describe('sys_get_move_cost', () => {
  beforeEach(() => era.reset());

  it('returns the base cost when walking slowly', () => {
    expect(sys_get_move_cost(location_enum.playground)).toEqual({
      stamina: 50,
      time: 50,
    });
  });

  it('cuts travel time by walking speed', () => {
    era.seed({ 'base:0:速度': 200, 'base:1:速度': 200 });
    expect(sys_get_move_cost(location_enum.playground, 1)).toEqual({
      stamina: 50,
      time: 32,
    });
  });

  it('applies vehicle coefficients', () => {
    era.seed({ 'flag:单人载具': vehicle_enum.car });
    expect(sys_get_move_cost(location_enum.river)).toEqual({
      stamina: 5,
      time: 8,
    });
    expect(sys_get_move_cost(location_enum.mejiro)).toEqual({
      stamina: 50,
      time: 75,
    });
  });
});

describe('sys_get_discount', () => {
  beforeEach(() => era.reset());

  it('grows 1.5% per training run and caps at 10%', () => {
    expect(sys_get_discount(1)).toBe(0);
    era.seed({ 'cflag:1:49': 4 });
    expect(sys_get_discount(1)).toBeCloseTo(0.06);
    era.seed({ 'cflag:1:49': 10 });
    expect(sys_get_discount(1)).toBe(0.1);
    era.seed({ 'cflag:1:49': 100 });
    expect(sys_get_discount(1)).toBe(0.1);
  });
});

describe('sys_check_act_disabled', () => {
  beforeEach(() => era.reset());

  it('encodes each failing resource as a bit', () => {
    expect(
      sys_check_act_disabled(
        { stamina: 10, time: 10 },
        { stamina: 5, time: 20 },
        { stamina: 100, time: 5 },
      ),
    ).toBe(0b1001);
  });

  it('treats a missing character base as free', () => {
    expect(
      sys_check_act_disabled(
        { stamina: 10, time: 10 },
        { stamina: 20, time: 20 },
      ),
    ).toBe(0);
  });

  it('flags everything when nothing is affordable', () => {
    expect(
      sys_check_act_disabled(
        { stamina: 10, time: 10 },
        { stamina: 0, time: 0 },
        { stamina: 0, time: 0 },
      ),
    ).toBe(0b1111);
  });
});

describe('sys_check_hide_relation_and_love', () => {
  beforeEach(() => era.reset());

  it('hides ordinary love for an inscrutable character', () => {
    era.seed({ 'talent:1:捉摸不透': 1 });
    expect(sys_check_hide_relation_and_love(1)).toBe(1);
  });

  it('adds the yandere bit at level 2', () => {
    era.seed({ 'talent:1:捉摸不透': 1, 'talent:1:病娇': 2 });
    expect(sys_check_hide_relation_and_love(1)).toBe(0b11);
  });

  it('reveals when the player has the advanced info status', () => {
    // With advanced info the `&&` short-circuits and returns `false`
    // (not a number) rather than a 0 bitmask.
    era.seed({ 'talent:1:捉摸不透': 1, 'status:0:马语者': 1 });
    expect(sys_check_hide_relation_and_love(1)).toBeFalsy();
  });

  it('does not hide for the player or when love is high', () => {
    era.seed({ 'talent:1:捉摸不透': 1, 'love:1': 100 });
    expect(sys_check_hide_relation_and_love(1)).toBe(0);

    era.seed({ 'talent:0:捉摸不透': 1 });
    expect(sys_check_hide_relation_and_love(0)).toBe(0);
  });
});

describe('sys_get_succ_rate', () => {
  beforeEach(() => era.reset());

  const base = {
    'maxbase:1:0': 100,
    'base:1:0': 100,
    'base:1:5': 100,
    'abl:1:0': 1,
  };

  it('is a full 100% by default', () => {
    era.seed(base);
    expect(sys_get_succ_rate(1, 0, 0)).toBe(100);
  });

  it('drops linearly with low stamina', () => {
    era.seed({ ...base, 'base:1:0': 20 });
    expect(sys_get_succ_rate(1, 0, 0)).toBe(40);
  });

  it('uses the lower stamina border for intelligence training', () => {
    era.seed({ ...base, 'base:1:0': 20, 'base:1:9': 100, 'abl:1:4': 1 });
    expect(sys_get_succ_rate(1, 4, 0)).toBe(66);
  });

  it('reduces past 400 attribute and applies statuses', () => {
    era.seed({ ...base, 'base:1:5': 450 });
    expect(sys_get_succ_rate(1, 0, 0)).toBe(95);

    era.seed({ ...base, 'status:1:6': 3, 'status:1:8': 1, 'base:1:11': 5000 });
    expect(sys_get_succ_rate(1, 0, 0)).toBe(50);
  });

  it('passes the extra buff through', () => {
    era.seed({ ...base, 'status:1:6': 6 });
    expect(sys_get_succ_rate(1, 0, 5)).toBe(45);
  });

  it('clamps into 0..100', () => {
    era.seed({ ...base, 'flag:100': 1000 });
    expect(sys_get_succ_rate(1, 0, 0)).toBe(100);
    era.seed({ ...base, 'base:1:0': 0 });
    expect(sys_get_succ_rate(1, 0, 0)).toBe(0);
  });
});
