import { beforeEach, describe, expect, it } from 'vitest';

import info from '#/data/info-generator.js';

import era from '../helpers/era.js';

const {
  get_adaptability_rank,
  get_attr_rank,
  get_breast_cup,
  get_chara_rank,
  get_filtered_talents,
  get_rank_level,
  get_talent_bust_size,
  get_xp,
} = info;

describe('get_adaptability_rank', () => {
  it('maps adaptability to letters', () => {
    expect(get_adaptability_rank(0)).toBe('G');
    expect(get_adaptability_rank(6)).toBe('A');
    expect(get_adaptability_rank(7)).toBe('S');
    expect(get_adaptability_rank(8)).toBe('U');
    expect(get_adaptability_rank(9)).toBe('U');
  });
});

describe('get_attr_rank', () => {
  it('maps attributes to score-table buckets', () => {
    expect(get_attr_rank(0)).toBe('G');
    expect(get_attr_rank(100)).toBe('F');
    expect(get_attr_rank(1900)).toBe('UA');
    expect(get_attr_rank(1950)).toBe('US');
  });
});

describe('get_chara_rank', () => {
  it('maps a score to a rank mark', () => {
    expect(get_chara_rank(0)).toBe('G');
    expect(get_chara_rank(300)).toBe('G+');
    expect(get_chara_rank(600)).toBe('F');
    expect(get_chara_rank(900)).toBe('F+');
  });
});

describe('get_rank_level', () => {
  it('maps a rank mark back to its level', () => {
    expect(get_rank_level('U')).toBe(8);
    expect(get_rank_level('S')).toBe(7);
    expect(get_rank_level('A')).toBe(6);
    expect(get_rank_level('G')).toBe(0);
  });
});

describe('get_talent_bust_size', () => {
  it('maps a cup letter to a talent bucket', () => {
    expect(get_talent_bust_size('-')).toBe(0);
    expect(get_talent_bust_size('A')).toBe(-1);
    expect(get_talent_bust_size('C')).toBe(0);
    expect(get_talent_bust_size('E')).toBe(1);
    expect(get_talent_bust_size('G')).toBe(2);
    expect(get_talent_bust_size('H')).toBe(2);
  });
});

describe('get_breast_cup', () => {
  beforeEach(() => era.reset());

  it('returns - when there is no bust delta', () => {
    era.seed({ 'cflag:1:胸围': 60, 'cflag:1:下胸围': 70 });
    expect(get_breast_cup(1)).toBe('-');
  });

  it('returns AA below 10cm and letters above', () => {
    era.seed({ 'cflag:1:胸围': 75, 'cflag:1:下胸围': 70 });
    expect(get_breast_cup(1)).toBe('AA');
    era.seed({ 'cflag:1:胸围': 80 });
    expect(get_breast_cup(1)).toBe('A');
    era.seed({ 'cflag:1:胸围': 85 });
    expect(get_breast_cup(1)).toBe('C');
  });
});

describe('get_xp', () => {
  beforeEach(() => era.reset());

  it('uses talent 38 (隐形巨乳), not talent 37 (乳房尺寸)', () => {
    era.seed({
      'cflag:1:0': 0,
      'cflag:1:65': 2,
      'cflag:1:胸围': 95,
      'cflag:1:下胸围': 70,
      'exp:1:25': 1,
      'status:0:26': 1,
      'talent:1:37': 1,
    });
    const with_breast_size_only = get_xp(1).length;
    era.set('talent:1:38', 1);
    expect(get_xp(1).length).toBe(with_breast_size_only + 1);
  });
});

describe('get_filtered_talents', () => {
  it('filters the first special talent group by sex', () => {
    expect(get_filtered_talents(0, 50)).toEqual([50, 51, 52, 53, 55, 56]);
    expect(get_filtered_talents(1, 50)).toEqual([50, 52, 53, 54, 56]);
    expect(get_filtered_talents(2, 50)).toEqual([50, 51, 52, 53, 54, 55, 56]);
  });

  it('filters the second special talent group by sex', () => {
    expect(get_filtered_talents(0, 60)).toEqual([60, 61, 62, 63, 64, 65]);
    expect(get_filtered_talents(1, 60)).toEqual([60, 62, 65, 66]);
  });

  it('returns undefined for other groups', () => {
    expect(get_filtered_talents(0, 70)).toBeUndefined();
  });
});
