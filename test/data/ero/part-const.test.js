import { describe, expect, it } from 'vitest';

import {
  base_enum,
  get_skill_group_list,
  get_skill_list,
  get_slang_part_name_key,
  motion_enum,
  part2jid,
  part_enum,
  part_gifts,
  part_skills,
  part_talents,
  part_touch,
  pleasure_list,
  touch_list,
  towards_enum,
  up_enum,
} from '#/data/ero/part-const.js';

const PART_COUNT = 14;

describe('part_enum', () => {
  it('assigns every part in declaration order', () => {
    expect(part_enum.mouth).toBe(0);
    expect(part_enum.breast).toBe(1);
    expect(part_enum.masochism).toBe(13);
    expect(part_enum.keys).toHaveLength(PART_COUNT);
  });

  it('maps every part to a jewel and a valid group', () => {
    for (let part = 0; part < PART_COUNT; part++) {
      expect(part2jid[part]).toBeGreaterThanOrEqual(0);
      expect(part2jid[part]).toBeLessThanOrEqual(8);
    }
  });

  it('defines a touch name for every part', () => {
    for (let part = 0; part < PART_COUNT; part++) {
      expect(typeof part_touch[part]).toBe('string');
    }
  });

  it('defines a skill name for every part except masochism', () => {
    for (let part = 0; part < PART_COUNT - 1; part++) {
      expect(typeof part_skills[part]).toBe('string');
    }
    expect(part_skills[part_enum.masochism]).toBeUndefined();
  });

  it('defines talents and gifts only for the meaningful parts', () => {
    expect(part_talents[part_enum.mouth]).toBe('淫口');
    expect(part_talents[part_enum.virgin]).toBe('淫壶');
    expect(part_gifts[part_enum.virgin]).toBe('名穴');
    expect(part_gifts[part_enum.anal]).toBe('魔尻');
  });

  it('references only valid part indices in the display lists', () => {
    expect(pleasure_list).toHaveLength(9);
    expect(touch_list).toHaveLength(11);
    for (const part of [...pleasure_list, ...touch_list]) {
      expect(part).toBeGreaterThanOrEqual(0);
      expect(part).toBeLessThan(PART_COUNT);
    }
    expect(new Set(touch_list).size).toBe(touch_list.length);
  });

  it('exposes the motion direction enums', () => {
    expect(motion_enum).toEqual({ lie: 0, sit: 1, stand: 2, rev: 3 });
    expect(towards_enum).toEqual({ right: 0, left: 1 });
    expect(up_enum).toEqual({ down: 0, up: 1 });
    expect(Object.keys(base_enum)).toHaveLength(12);
  });
});

describe('get_slang_part_name_key', () => {
  it('special-cases the breast', () => {
    expect(get_slang_part_name_key(part_enum.breast)).toBe('s_nipple');
  });

  it('derives the key from the part name for known parts', () => {
    expect(get_slang_part_name_key(part_enum.mouth)).toBe('s_mouth');
    expect(get_slang_part_name_key(part_enum.virgin)).toBe('s_virgin');
  });

  it('falls back to "s_other" for unknown parts', () => {
    expect(get_slang_part_name_key(PART_COUNT)).toBe('s_other');
    expect(get_slang_part_name_key(99)).toBe('s_other');
  });
});

describe('get_skill_group_list', () => {
  it('always returns seven skill groups', () => {
    for (const sex of [0, 1, 2]) {
      expect(get_skill_group_list(sex)).toHaveLength(7);
    }
  });

  it('swaps the breast and penetration groups by sex', () => {
    expect(get_skill_group_list(0)[1]).toEqual([12, 31, 21]);
    expect(get_skill_group_list(1)[1]).toEqual([31, 21]);
    expect(get_skill_group_list(1)[3]).toEqual([18, 36, 26]);
    expect(get_skill_group_list(0)[3]).toEqual([26]);
  });

  it('varies the vaginal group by sex', () => {
    expect(get_skill_group_list(0)[4]).toEqual([16, 33, 34, 23, 24]);
    expect(get_skill_group_list(1)[4]).toEqual([23, 24]);
    expect(get_skill_group_list(2)[4]).toEqual([16, 34, 23, 24]);
  });

  it('flattens all groups in get_skill_list', () => {
    for (const sex of [0, 1, 2]) {
      const flat = get_skill_list(sex);
      expect(flat).toEqual(get_skill_group_list(sex).flat());
      expect(flat.length).toBeGreaterThan(0);
    }
  });
});
