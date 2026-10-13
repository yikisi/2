import { describe, expect, it } from 'vitest';

import { chara_colors, get_chara_color } from '#/data/chara-colors.js';

describe('get_chara_color', () => {
  it('returns the fallback gray when cid is undefined', () => {
    expect(get_chara_color()).toBe('#9f9f9f');
    expect(get_chara_color(undefined)).toBe('#9f9f9f');
  });

  it('returns the mapped color for a known cid', () => {
    expect(get_chara_color(0)).toBe('#ffffff');
    expect(get_chara_color(1)).toBe('#e978d3');
  });

  it('returns the first entry for array-valued colors', () => {
    expect(Array.isArray(chara_colors[7])).toBe(true);
    expect(get_chara_color(7)).toBe('#c0c0c0');
    expect(get_chara_color(17)).toBe('#96c1a0');
  });

  it('derives a deterministic color for unmapped cids', () => {
    expect(get_chara_color(200)).toBe('#dfbfdf');
    expect(get_chara_color(150)).toBe('#ef8f9f');
  });

  it('always returns a valid hex color for unmapped ids', () => {
    for (const cid of [160, 180, 250, 290, 330, 999]) {
      expect(get_chara_color(cid)).toMatch(/^#[0-9a-f]{6}$/);
    }
  });
});
