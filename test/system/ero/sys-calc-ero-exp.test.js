import { beforeEach, describe, expect, it } from 'vitest';

import { part_enum, part_touch } from '#/data/ero/part-const.js';
import { stain_enum } from '#/data/ero/stain-const.js';
import {
  update_attacking_mouth_exp,
  update_be_hand_job_exp,
  update_blow_job_exp,
  update_breast_exp,
  update_face_exp,
  update_hand_job_exp,
  update_kiss_exp,
  update_milk_exp,
  update_secretion_exp,
  update_sm_exp,
} from '#/system/ero/sys-calc-ero-exp.js';

import era from '../../helpers/era.js';

const DATE = { m: 6, w: 2 };
const MOUTH = `stain:2:${part_touch[part_enum.mouth]}`;
const BODY = `stain:2:${part_touch[part_enum.body]}`;

beforeEach(() => era.reset());

describe('mouth / hand / blow job experience', () => {
  it('records a conscious first experience', () => {
    update_attacking_mouth_exp(DATE, 1, 2);
    expect(era.get('cstr:1:初次口交经历')).toEqual({ ...DATE, c: 2, be: true });
  });

  it('records an unconscious first experience while asleep', () => {
    era.seed({ 'status:1:10': 1 });
    update_attacking_mouth_exp(DATE, 1, 2);
    expect(era.get('cstr:1:无自觉初次口交经历')).toEqual({ ...DATE, c: 2 });
  });

  it('handles hand jobs both consciously and not', () => {
    update_hand_job_exp(DATE, 1, 2);
    expect(era.get('cstr:1:初次手交经历')).toEqual({ ...DATE, c: 2 });

    era.reset();
    era.seed({ 'status:1:10': 1 });
    update_be_hand_job_exp(DATE, 1, 2);
    expect(era.get('cstr:1:无自觉初次手交经历')).toEqual({ ...DATE, c: 2 });
  });

  it('handles blow jobs', () => {
    update_blow_job_exp(DATE, 1, 2);
    expect(era.get('cstr:1:初次口交经历')).toEqual({ ...DATE, c: 2 });
  });
});

describe('kiss experience', () => {
  it('records both sides and counts the kiss', () => {
    update_kiss_exp(DATE, 1, 2);
    expect(era.get('cstr:1:初吻经历')).toEqual({ ...DATE, c: 2 });
    expect(era.get('cstr:2:初吻经历')).toEqual({ ...DATE, c: 1 });
    expect(era.get('exp:1:30')).toBe(1);
    expect(era.get('exp:2:30')).toBe(1);
  });

  it('uses the unconscious record when the partner is not awake', () => {
    update_kiss_exp(DATE, 1, 2, false);
    expect(era.get('cstr:2:无自觉初吻经历')).toEqual({ ...DATE, c: 1 });
  });
});

describe('face experience', () => {
  it('adds count, volume, stain and the nowex flag', () => {
    update_face_exp(DATE, 1, 10, 2);
    expect(era.get('exp:2:颜射次数')).toBe(1);
    expect(era.get('exp:2:颜射精液量')).toBe(10);
    expect(era.get('cstr:2:初次颜射经历')).toEqual({ ...DATE, c: 1 });
    expect(era.get(MOUTH)).toBe(1 << stain_enum.semen);
    expect(era.get(BODY)).toBe(1 << stain_enum.semen);
    expect(era.get('nowex:2:颜射')).toBe(1);
  });
});

describe('sm experience', () => {
  it('records both the sadist and masochist first times', () => {
    update_sm_exp(DATE, 1, 2);
    expect(era.get('cstr:1:初次施虐经历')).toEqual({ ...DATE, c: 2 });
    expect(era.get('cstr:2:初次受虐经历')).toEqual({ ...DATE, c: 1 });
  });
});

describe('secretion experience', () => {
  it('stains the mouth and counts the drink', () => {
    update_secretion_exp(DATE, 1, 10, 2, 0);
    expect(era.get(MOUTH)).toBe(1 << stain_enum.secretion);
    expect(era.get('nowex:2:饮爱液量')).toBe(10);
    expect(era.get('cstr:2:初次饮爱液经历')).toEqual({ ...DATE, c: 1 });
  });
});

describe('milk experience', () => {
  it('records the first nursing and heals the drinker', () => {
    update_milk_exp(DATE, 1, 10, 'C', 2, 0);
    expect(era.get('cstr:1:初次授乳经历')).toEqual({
      ...DATE,
      c: 2,
      cup: 'C',
    });
    expect(era.get('exp:2:吸奶量')).toBe(10);
    expect(era.get('nowex:2:吸奶量')).toBe(10);
    expect(era.get('nowex:2:体力消耗')).toBe(-1);
    expect(era.get('base:2:性欲')).toBe(1);
    expect(era.get('cstr:2:初次吸奶经历')).toEqual({ ...DATE, c: 1 });
  });
});

describe('breast experience', () => {
  it('counts the semen left on the chest', () => {
    update_breast_exp(1, 10, 2, 0);
    expect(era.get('exp:2:胸部沾染精液量')).toBe(10);
  });
});
