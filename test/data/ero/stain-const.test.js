import { describe, expect, it } from 'vitest';

import { stain_count, stain_enum } from '#/data/ero/stain-const.js';

describe('stain-const', () => {
  it('assigns stains in declaration order', () => {
    expect(stain_enum).toEqual({
      saliva: 0,
      chocolate: 1,
      milk: 2,
      lubricant: 3,
      semen: 4,
      virgin: 5,
      wound: 6,
      secretion: 7,
      anal: 8,
      dirt: 9,
    });
  });

  it('exposes the number of distinct stains', () => {
    expect(stain_count).toBe(10);
    expect(stain_count).toBe(Object.keys(stain_enum).length);
  });
});
