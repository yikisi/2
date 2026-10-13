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
});
