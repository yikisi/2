import { beforeEach, describe, expect, it } from 'vitest';

import {
  sys_change_motion,
  sys_change_motion_by_base,
  sys_check_mh_dis,
  sys_get_base,
} from '#/system/ero/sys-calc-distance.js';

import { base_enum } from '#/data/ero/part-const.js';

import era from '../../helpers/era.js';

function seed_motion(a, d, s) {
  era.seed({
    [`tcvar:${a}:体位`]: s.a_motion,
    [`tcvar:${a}:朝向`]: s.a_towards,
    [`tcvar:${a}:上下`]: s.a_up,
    [`tcvar:${d}:体位`]: s.d_motion,
    [`tcvar:${d}:朝向`]: s.d_towards,
    [`tcvar:${d}:上下`]: s.d_up,
  });
}

describe('sys_get_base', () => {
  beforeEach(() => era.reset());

  it('classifies the current pose relationship', () => {
    seed_motion(1, 2, {
      a_motion: 0,
      a_towards: 0,
      a_up: 1,
      d_motion: 0,
      d_towards: 0,
      d_up: 0,
    });
    expect(sys_get_base(1, 2)).toBe(base_enum.f_same);
  });
});

describe('sys_check_mh_dis', () => {
  beforeEach(() => era.reset());

  it('accepts when the breast-to-hand reach is long enough', () => {
    era.seed({
      'tcvar:1:肩膀位置': 50,
      'tcvar:1:乳房位置': 40,
      'tcvar:1:臂长': 60,
      'tcvar:2:会阴位置': 100,
      'tcvar:2:嘴唇位置': 60,
    });
    expect(sys_check_mh_dis(1, 2)).toBe(true);
  });

  it('rejects when the reach is too short', () => {
    era.seed({
      'tcvar:1:肩膀位置': 10,
      'tcvar:1:乳房位置': 40,
      'tcvar:1:臂长': 60,
      'tcvar:2:会阴位置': 100,
      'tcvar:2:嘴唇位置': 60,
    });
    expect(sys_check_mh_dis(1, 2)).toBe(false);
  });
});

describe('sys_change_motion', () => {
  beforeEach(() => era.reset());

  const base_pose = {
    a_motion: 0,
    a_towards: 0,
    a_up: 1,
    d_motion: 0,
    d_towards: 0,
    d_up: 0,
  };

  it('does nothing without target motions', () => {
    seed_motion(1, 2, base_pose);
    expect(sys_change_motion(1, 2)).toBe(false);
  });

  it('does nothing when already at a target motion', () => {
    seed_motion(1, 2, base_pose);
    expect(sys_change_motion(1, 2, 10000)).toBe(false);
  });

  it('moves to the requested motion code', () => {
    seed_motion(1, 2, base_pose);
    expect(sys_change_motion(1, 2, 10111)).toBe(true);
    expect(era.get('tcvar:1:体位')).toBe(1);
    expect(era.get('tcvar:1:朝向')).toBe(1);
    expect(era.get('tcvar:1:上下')).toBe(1);
    expect(era.get('tcvar:2:体位')).toBe(1);
    expect(era.get('tcvar:2:朝向')).toBe(0);
    expect(era.get('tcvar:2:上下')).toBe(0);
  });
});

describe('sys_change_motion_by_base', () => {
  beforeEach(() => era.reset());

  const base_pose = {
    a_motion: 0,
    a_towards: 0,
    a_up: 1,
    d_motion: 0,
    d_towards: 0,
    d_up: 0,
  };

  it('does nothing when the current base is already compatible', () => {
    seed_motion(1, 2, base_pose);
    expect(sys_change_motion_by_base(1, 2, [base_enum.f_same])).toBe(false);
  });

  it('moves to a compatible base otherwise', () => {
    seed_motion(1, 2, base_pose);
    expect(sys_change_motion_by_base(1, 2, [base_enum.same])).toBe(true);
    expect(sys_get_base(1, 2)).toBe(base_enum.same);
  });
});
