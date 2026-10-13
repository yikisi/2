import { describe, expect, it } from 'vitest';

import skill_enum from '#/data/race/model/skill-enum.js';
import UmaSkill from '#/data/race/model/uma-skill.js';

function make_skill() {
  return new UmaSkill(
    100011,
    1,
    0,
    2,
    100,
    [],
    [],
    [0, 0],
    [0, 0],
    [1],
    [[1]],
    [[1]],
    [[100]],
    [[1]],
    [[100]],
    [1],
    [200],
    0,
    200,
    false,
    false,
    [],
    [],
  );
}

describe('UmaSkill statics', () => {
  it('re-exports the skill enums', () => {
    expect(UmaSkill.skill_name_enum).toEqual(skill_enum.skill_name_enum);
    expect(UmaSkill.skill_border_enum).toEqual(skill_enum.skill_border_enum);
    expect(UmaSkill.ability_type_enum).toEqual(skill_enum.ability_type_enum);
    expect(UmaSkill.target_type_enum).toEqual(skill_enum.target_type_enum);
  });

  it('packs colors through get_skill_color', () => {
    expect(typeof UmaSkill.get_skill_color).toBe('function');
    expect(UmaSkill.get_skill_color(2, 3)).toBe(19);
    expect(UmaSkill.get_skill_color(2, 3)).toBe(
      skill_enum.get_skill_color(2, 3),
    );
  });
});

describe('UmaSkill instance', () => {
  it('stores the constructor fields', () => {
    const skill = make_skill();
    expect(skill.id).toBe(100011);
    expect(skill.group_id).toBe(1);
    expect(skill.category).toBe(2);
    expect(skill.grade_value).toBe(100);
    expect(skill.price).toBe(200);
    expect(skill.is_random).toBe(0);
    expect(skill.is_two_phase).toBe(false);
    expect(skill.is_generated).toBe(false);
    expect(skill.adapt_tags).toEqual([]);
    expect(skill.ability_tags).toEqual([]);
  });

  it('reports no tags when none are declared', () => {
    expect(make_skill().tags).toEqual([]);
  });
});
