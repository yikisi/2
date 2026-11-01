import { beforeEach, describe, expect, it } from 'vitest';

import { get_chara_color } from '#/data/chara-colors.js';
import { adaptability_colors } from '#/data/color-const.js';
import ach from '#/system/global/sys-calc-achievement.js';

import era from '../../helpers/era.js';

describe('global achievement', () => {
  beforeEach(() => era.reset());

  it('starts unearned', () => {
    expect(ach.wins_one).toBe(0);
    expect(ach.edu_one).toBe(0);
  });

  it('records a timestamp once earned', () => {
    ach.wins_one = 1;
    expect(ach.wins_one).toBeGreaterThan(0);
  });

  it('does not overwrite an already earned achievement', () => {
    ach.wins_one = 1;
    const first = ach.wins_one;
    ach.wins_one = 1;
    expect(ach.wins_one).toBe(first);
  });

  it('colors rarity-based achievements from the shared palette', () => {
    expect(ach.get_color('wins_one')).toBe(adaptability_colors[7]);
  });

  it('honours an explicit color override', () => {
    expect(ach.get_color('c_luna1')).toBe(get_chara_color(17));
  });

  it('defines the race title achievements', () => {
    for (const name of [
      'r_3crown_c',
      'r_3crown_f',
      'r_3crown_m',
      'r_6crown',
      'r_3crown_d',
      'r_3crown_a',
      'r_3crown_sp',
      'r_3crown_au',
      'eight_major',
    ]) {
      expect(ach[name]).toBe(0);
    }
  });

  it('uses the configured rarity colors for race title achievements', () => {
    expect(ach.get_color('r_3crown_c')).toBe(adaptability_colors[5]);
    expect(ach.get_color('r_6crown')).toBe(adaptability_colors[6]);
    expect(ach.get_color('r_3crown_sp')).toBe(adaptability_colors[4]);
    expect(ach.get_color('r_3crown_au')).toBe(adaptability_colors[4]);
    expect(ach.get_color('eight_major')).toBe(adaptability_colors[7]);
  });

  it('unlocks all only after the new race title achievements are earned', () => {
    const race_achievements = [
      'r_3crown_c',
      'r_3crown_f',
      'r_3crown_m',
      'r_6crown',
      'r_3crown_d',
      'r_3crown_a',
      'r_3crown_sp',
      'r_3crown_au',
      'eight_major',
    ];
    for (const name of Object.keys(ach)) {
      if (name !== 'all' && !race_achievements.includes(name)) {
        ach[name] = 1;
      }
    }
    expect(ach.all).toBe(0);
    for (const name of race_achievements) {
      ach[name] = 1;
    }
    expect(ach.all).toBeGreaterThan(0);
  });
});
