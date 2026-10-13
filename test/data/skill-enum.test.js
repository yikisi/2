import { describe, expect, it } from 'vitest';

import skill_enum from '#/data/race/model/skill-enum.js';

const {
  ability_tag_enum,
  ability_time_usage_enum,
  ability_type_enum,
  ability_usage_enum,
  get_skill_color,
  skill_border_enum,
  skill_name_enum,
  target_type_enum,
} = skill_enum;

describe('get_skill_color', () => {
  it('packs border and name into a single value', () => {
    expect(get_skill_color(0, 0)).toBe(0);
    expect(get_skill_color(1, 0)).toBe(8);
    expect(get_skill_color(2, 3)).toBe(19);
    expect(get_skill_color(5, 7)).toBe(47);
  });
});

describe('index-derived enums', () => {
  it('assigns skill names by declaration order', () => {
    expect(skill_name_enum).toEqual({
      buff: 0,
      heal: 1,
      speed: 2,
      control: 3,
      debuff: 4,
    });
  });

  it('assigns skill borders by declaration order', () => {
    expect(Object.values(skill_border_enum)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(skill_border_enum.normal).toBe(0);
    expect(skill_border_enum.ero_advanced).toBe(6);
  });

  it('assigns ability tags by declaration order', () => {
    expect(ability_tag_enum.speed).toBe(0);
    expect(ability_tag_enum.stamina).toBe(1);
    expect(ability_tag_enum.visible).toBe(7);
    expect(ability_tag_enum.accelFull).toBe(15);
  });
});

describe('explicit-value enums', () => {
  it('keeps the declared ability time usages', () => {
    expect(ability_time_usage_enum).toEqual({
      normal: 1,
      top_distance: 2,
      stamina: 3,
      order_change: 4,
      blocked_side_continuetime: 5,
      up_slope: 8,
    });
  });

  it('keeps the declared ability types', () => {
    expect(ability_type_enum.no).toBe(0);
    expect(ability_type_enum.Speed).toBe(1);
    expect(ability_type_enum.Accel).toBe(31);
    expect(ability_type_enum.AccelFullSpeed).toBe(48);
    expect(ability_type_enum.ShareOrgasm).toBe(92);
  });

  it('keeps the declared ability usages', () => {
    expect(ability_usage_enum.Direct).toBe(1);
    expect(ability_usage_enum.MultiplyLove).toBe(30);
    expect(ability_usage_enum.MultiplyCount).toBe(99);
  });

  it('keeps the declared target types', () => {
    expect(target_type_enum.Self).toBe(1);
    expect(target_type_enum.Visible).toBe(4);
    expect(target_type_enum.CharaId).toBe(22);
    expect(target_type_enum.Team).toBe(98);
    expect(target_type_enum.Others).toBe(99);
  });
});
