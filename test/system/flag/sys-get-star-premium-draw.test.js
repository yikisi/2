import { beforeEach, describe, expect, it } from 'vitest';

import sys_get_star_premium_draw from '#/system/flag/sys-get-star-premium-draw.js';

import era from '../../helpers/era.js';

describe('sys_get_star_premium_draw', () => {
  beforeEach(() => era.reset());

  it('creates and caches a default draw', () => {
    const first = sys_get_star_premium_draw();
    expect(first).toEqual({ chara: 0, cost: 0 });
    expect(era.get('flag:超得')).toBe(first);
    expect(sys_get_star_premium_draw()).toBe(first);
  });

  it('returns an existing draw', () => {
    era.seed({ 'flag:超得': { chara: 5, cost: 10 } });
    expect(sys_get_star_premium_draw()).toEqual({ chara: 5, cost: 10 });
  });
});
