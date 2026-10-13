import { describe, expect, it } from 'vitest';

import { bhc_names, get_hair_color, hc_names } from '#/data/color-const.js';

describe('get_hair_color', () => {
  it('returns the display hex for a known color key', () => {
    expect(get_hair_color('black')).toBe('#867979');
    expect(get_hair_color('white')).toBe('#e2e3ea');
    expect(get_hair_color('ashike')).toBe('#ebe0f6');
  });

  it('returns the raw tuple when raw is true', () => {
    expect(get_hair_color('black', true)).toEqual([0, 5, 30, '#867979']);
    expect(get_hair_color('aoge', true)).toEqual([243, 30, 26, '#20198f']);
  });

  it('returns undefined for unknown keys', () => {
    expect(get_hair_color('not-a-color')).toBeUndefined();
    expect(get_hair_color(undefined)).toBeUndefined();
  });
});

describe('hair color name lists', () => {
  it('splits hair names and body-hair names at the aoge boundary', () => {
    expect(hc_names).toHaveLength(11);
    expect(bhc_names).toHaveLength(8);
    expect(hc_names).toContain('black');
    expect(hc_names).not.toContain('aoge');
    expect(bhc_names).toEqual([
      'aoge',
      'aokage',
      'kurokage',
      'kage',
      'tochikurige',
      'kurige',
      'ashike',
      'white',
    ]);
  });
});
