import { beforeEach, describe, expect, it } from 'vitest';

import CharaAvailableSkills from '#/data/chara-available-skills.js';

import era from '../helpers/era.js';

describe('CharaAvailableSkills', () => {
  beforeEach(() => era.reset());

  it('adds and returns the new skills', () => {
    const skills = CharaAvailableSkills.get(1);
    skills.clear();
    expect(skills.add(100011)).toEqual([100011]);
    expect(skills.get()).toEqual([100011]);
  });

  it('deduplicates while keeping the stored list unique', () => {
    const skills = CharaAvailableSkills.get(1);
    skills.clear();
    skills.add(100011);
    skills.add(100011);
    expect(skills.get()).toEqual([100011]);
  });

  it('removes skills', () => {
    const skills = CharaAvailableSkills.get(1);
    skills.clear();
    skills.add(100011, 100021);
    skills.remove(100011);
    expect(skills.get()).toEqual([100021]);
  });

  it('clears the list', () => {
    const skills = CharaAvailableSkills.get(1);
    skills.add(100011);
    skills.clear();
    expect(skills.get()).toEqual([]);
  });
});
