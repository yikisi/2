import { describe, expect, it } from 'vitest';

import battle_const from '#/data/ero/battle-const.js';
import { part_enum } from '#/data/ero/part-const.js';

const {
  attack_juel_reward,
  base_damage,
  expansion_coefficient,
  height2anal_size,
  height2virgin_size,
  lubrication_coefficient,
  wound_percentage,
} = battle_const;

describe('battle-const', () => {
  it('exposes the base action and damage values', () => {
    expect(base_damage.base).toBe(100);
    expect(base_damage.self).toBe(100);
    expect(attack_juel_reward).toBe(0.8);
    expect(wound_percentage).toBe(0.5);
  });

  it('keys the expansion and lubrication coefficients by part', () => {
    expect(expansion_coefficient[part_enum.virgin]).toBe(0.1);
    expect(expansion_coefficient[part_enum.anal]).toBe(0.2);
    expect(lubrication_coefficient[part_enum.virgin]).toBe(0.6);
    expect(lubrication_coefficient[part_enum.anal]).toBe(0.8);
    expect(lubrication_coefficient[part_enum.breast]).toBe(0.6);
  });

  it('defines non-decreasing size tables indexed by height', () => {
    for (const table of [height2anal_size, height2virgin_size]) {
      expect(table).toHaveLength(10);
      for (let i = 1; i < table.length; i++) {
        expect(table[i]).toBeGreaterThanOrEqual(table[i - 1]);
      }
    }
    expect(height2virgin_size[0]).toBeGreaterThan(height2anal_size[0]);
  });
});
