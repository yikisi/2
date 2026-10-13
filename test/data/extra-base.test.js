import { beforeEach, describe, expect, it } from 'vitest';

import extra_base from '#/data/extra-base.js';

import era from '../helpers/era.js';

describe('extra_base', () => {
  beforeEach(() => era.reset());

  it('defaults to zero', () => {
    expect(extra_base.stamina).toBe(0);
    expect(extra_base.time).toBe(0);
    expect(extra_base.skill).toBe(0);
  });

  it('stores stamina, time and skill', () => {
    extra_base.stamina = 10;
    extra_base.time = 5;
    extra_base.skill = 3;
    expect(era.get('flag:9')).toEqual([10, 5, 3]);
    expect(extra_base.stamina).toBe(10);
    expect(extra_base.time).toBe(5);
    expect(extra_base.skill).toBe(3);
  });
});
