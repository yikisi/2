import { describe, expect, it } from 'vitest';

import {
  inmon_limit,
  mark_colors,
  mark_enum,
  slavery_enum,
} from '#/data/ero/mark-const.js';

describe('mark-const', () => {
  it('uses explicit mark values', () => {
    expect(mark_enum).toEqual({
      pleasure: 0,
      ero: 1,
      meek: 2,
      pain: 3,
      shame: 4,
      hate: 5,
    });
  });

  it('assigns slavery stages one-based', () => {
    expect(Object.values(slavery_enum)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(slavery_enum.milk).toBe(1);
    expect(slavery_enum.assistant).toBe(6);
  });

  it('defines a color for every mark plus the iron extra', () => {
    for (const mark of Object.values(mark_enum)) {
      expect(mark_colors[mark]).toMatch(/^#[0-9a-f]{6}$/);
    }
    expect(mark_colors.iron).toBe('#98ccfa');
    expect(Object.keys(mark_colors)).toHaveLength(
      Object.values(mark_enum).length + 1,
    );
  });

  it('exposes ascending inmon limits', () => {
    expect(inmon_limit).toEqual([0, 6, 16, 36]);
    for (let i = 1; i < inmon_limit.length; i++) {
      expect(inmon_limit[i]).toBeGreaterThan(inmon_limit[i - 1]);
    }
  });
});
