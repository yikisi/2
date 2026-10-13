import { beforeEach, describe, expect, it } from 'vitest';

import CharaSkills from '#/data/chara-skills.js';
import { skills_dict } from '#/data/race/skill/skill-const.js';

import era from '../helpers/era.js';

const A = 100011;
const B = 100021;

describe('CharaSkills', () => {
  beforeEach(() => era.reset());

  it('adds skills and accrues their score', () => {
    const skills = CharaSkills.get(1);
    expect(skills.get()).toEqual([]);
    expect(skills.add(A)).toEqual([A]);
    expect(era.get('skill:1:0')).toEqual([A]);
    expect(era.get('exp:1:0')).toBe(skills_dict[A].grade_value);
  });

  it('deduplicates already-known skills', () => {
    const skills = CharaSkills.get(1);
    skills.add(A);
    expect(skills.add(A)).toEqual([]);
    expect(era.get('skill:1:0')).toEqual([A]);
    expect(era.get('exp:1:0')).toBe(skills_dict[A].grade_value);
  });

  it('accumulates multiple skills', () => {
    const skills = CharaSkills.get(1);
    skills.add(A);
    skills.add(B);
    expect(era.get('exp:1:0')).toBe(
      skills_dict[A].grade_value + skills_dict[B].grade_value,
    );
  });

  it('removes a skill and its score', () => {
    const skills = CharaSkills.get(1);
    skills.add(A);
    skills.add(B);
    expect(skills.remove(A)).toEqual([A]);
    expect(era.get('skill:1:0')).toEqual([B]);
    expect(era.get('exp:1:0')).toBe(skills_dict[B].grade_value);
  });

  it('clears skills and score', () => {
    const skills = CharaSkills.get(1);
    skills.add(A);
    skills.clear();
    expect(era.get('skill:1:0')).toEqual([]);
    expect(era.get('exp:1:0')).toBe(0);
  });
});
