import { describe, expect, it } from 'vitest';

import { calc_attr_score, get_attr_by_score } from '#/data/calc-attr-score.js';

import score_dict from '#/data/attr-score.json';

describe('calc_attr_score', () => {
  it('clamps values at or above 2000 to the maximum score', () => {
    expect(calc_attr_score(2000)).toBe(score_dict.at(-1));
    expect(calc_attr_score(9999)).toBe(score_dict.at(-1));
  });

  it('clamps values at or below 1 to the minimum score', () => {
    expect(calc_attr_score(1)).toBe(score_dict[0]);
    expect(calc_attr_score(0)).toBe(score_dict[0]);
    expect(calc_attr_score(-5)).toBe(score_dict[0]);
  });

  it('indexes the table by floor(attr) - 1', () => {
    expect(calc_attr_score(100)).toBe(score_dict[99]);
    expect(calc_attr_score(100.9)).toBe(score_dict[99]);
    expect(calc_attr_score(2)).toBe(score_dict[1]);
  });

  it('is non-decreasing across the whole range', () => {
    let prev = calc_attr_score(1);
    for (let attr = 2; attr <= 2000; attr++) {
      const cur = calc_attr_score(attr);
      expect(cur).toBeGreaterThanOrEqual(prev);
      prev = cur;
    }
  });
});

describe('get_attr_by_score', () => {
  it('clamps scores below the first step to attribute 2', () => {
    expect(get_attr_by_score(0)).toBe(2);
    expect(get_attr_by_score(1)).toBe(2);
  });

  it('clamps scores at or above the maximum to 2000', () => {
    expect(get_attr_by_score(score_dict.at(-1))).toBe(2000);
    expect(get_attr_by_score(score_dict.at(-1) + 1)).toBe(2000);
  });

  it('is non-decreasing with respect to the score', () => {
    let prev = get_attr_by_score(0);
    for (let score = 1; score <= score_dict.at(-1); score += 37) {
      const cur = get_attr_by_score(score);
      expect(cur).toBeGreaterThanOrEqual(prev);
      prev = cur;
    }
  });

  it('returns the smallest attribute whose score exceeds the input', () => {
    for (let score = 2; score < score_dict.at(-1); score += 137) {
      const attr = get_attr_by_score(score);
      expect(calc_attr_score(attr)).toBeGreaterThan(score);
      expect(calc_attr_score(attr - 1)).toBeLessThanOrEqual(score);
    }
  });
});
