import { describe, expect, it } from 'vitest';

import {
  back_hairs,
  creditors,
  first_child_id,
  front_hairs,
  get_growth_color,
  get_trainer_color,
  get_trainer_salary,
  max_chara_id,
  top_hairs,
  year_index,
} from '#/data/other-const.js';

describe('get_growth_color', () => {
  it('maps each growth state to its color', () => {
    expect(get_growth_color(0)).toBe('#ff69b4');
    expect(get_growth_color(1)).toBeUndefined();
    expect(get_growth_color(2)).toBe('#f9a048');
    expect(get_growth_color(99)).toBe('#f9a048');
  });
});

describe('trainer helpers', () => {
  it('returns red for negative trainer levels', () => {
    expect(get_trainer_color(-1)).toBe('#ff0000');
    expect(get_trainer_salary(-1)).toBe(0);
  });

  it('indexes the color and salary tables by level', () => {
    expect(get_trainer_color(0)).toBe('#ffffff');
    expect(get_trainer_color(4)).toBe('#eeb93f');
    expect(get_trainer_salary(0)).toBe(120);
    expect(get_trainer_salary(4)).toBe(240);
  });
});

describe('static tables', () => {
  it('exposes haircut variants and id ranges', () => {
    expect(front_hairs).toHaveLength(5);
    expect(back_hairs).toHaveLength(11);
    expect(top_hairs).toEqual(['none', 'short', 'middle', 'long', 'white']);
    expect(first_child_id).toBe(500);
    expect(max_chara_id).toBe(1000);
    expect(year_index).toEqual([-1, 47, 95]);
    expect(creditors).toEqual({ annul_bonus: -1, invest: -2, salary: 0 });
  });
});
