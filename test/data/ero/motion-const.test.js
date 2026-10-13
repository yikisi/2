import { describe, expect, it } from 'vitest';

import {
  base_dict,
  base2motion,
  get_motion_code,
} from '#/data/ero/motion-const.js';
import {
  base_enum,
  motion_enum,
  towards_enum,
  up_enum,
} from '#/data/ero/part-const.js';

const { lie, sit } = motion_enum;
const { right, left } = towards_enum;
const { up } = up_enum;

describe('get_motion_code', () => {
  it('packs the five axes into a single number', () => {
    expect(get_motion_code(0, 0, 0, 0, 0)).toBe(0);
    expect(get_motion_code(lie, lie, right, right, up)).toBe(10000);
    expect(get_motion_code(sit, sit, left, right, up)).toBe(10111);
    expect(get_motion_code(9, 8, 7, 6, 1)).toBe(16879);
  });
});

describe('base_dict', () => {
  it('has one entry for every motion combination', () => {
    expect(base_dict).toHaveLength(4);
    base_dict.forEach((l1) => {
      expect(l1).toHaveLength(4);
      l1.forEach((l2) => {
        expect(l2).toHaveLength(2);
        l2.forEach((l3) => expect(l3).toHaveLength(2));
      });
    });
  });

  it('resolves representative combinations to their base', () => {
    expect(base_dict[lie][lie][right][right][up]).toBe(base_enum.f_same);
    expect(base_dict[lie][lie][left][right][up]).toBe(base_enum.same);
    expect(base_dict[lie][lie][right][left][up]).toBe(base_enum.no);
    expect(base_dict[lie][lie][left][left][up]).toBe(base_enum.b_same);
  });
});

describe('base2motion', () => {
  it('has an entry per base and never fills the "no" base', () => {
    expect(base2motion).toHaveLength(Object.keys(base_enum).length);
    expect(base2motion[base_enum.no]).toEqual([]);
  });

  it('lists ascending motion codes for each used base', () => {
    base2motion.forEach((codes) => {
      for (let i = 1; i < codes.length; i++) {
        expect(codes[i]).toBeGreaterThan(codes[i - 1]);
      }
    });
    expect(base2motion[base_enum.f_same]).toContain(
      get_motion_code(lie, lie, right, right, up),
    );
  });
});
