import { describe, expect, it } from 'vitest';

import sys_count_juels from '#/system/chara/sys-count-juels.js';

const ATTRS = [300, 300, 300, 300, 300];
const ADAPTS = [7, 6, 6, 6, 6, 6, 6, 6, 6, 6];

describe('sys_count_juels', () => {
  it('counts blue from the attributes', () => {
    expect(sys_count_juels(1, 1, ATTRS, ADAPTS, 0.5).blue).toBe(25);
  });

  it('adds a bonus for a maxed attribute', () => {
    expect(sys_count_juels(1, 1, [2000, 0, 0, 0, 0], ADAPTS, 0).blue).toBe(35);
  });

  it('counts pink from the peak adaptability', () => {
    expect(sys_count_juels(1, 1, ATTRS, ADAPTS, 0).pink).toBe(70);
    expect(
      sys_count_juels(1, 1, ATTRS, [7, 7, 6, 6, 6, 6, 6, 6, 6, 6], 0).pink,
    ).toBe(105);
  });

  it('counts white from the aim ratio', () => {
    expect(sys_count_juels(1, 1, ATTRS, ADAPTS, 0.5).white).toBe(50);
  });

  it('scales everything by the education ratio', () => {
    const ret = sys_count_juels(1, 2, ATTRS, ADAPTS, 0.5);
    expect(ret).toEqual({ blue: 50, pink: 140, white: 100 });
  });
});
