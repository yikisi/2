import { describe, expect, it } from 'vitest';

import race_sim_const from '#/data/race/race-sim-const.js';

const {
  acc_up_hill_mode,
  frame_rate,
  loc_mind_multiply_velocity_ideal,
  max_attr,
  max_extra_attr,
  mod_acceleration_adapt_distance,
  mod_acceleration_adapt_ground,
  mod_acceleration_style,
  mod_attr_intelligence_adapt_style,
  mod_attr_stamina_style,
  mod_motivation_coefficients,
  mod_velocity_final_adapt_distance,
  mod_velocity_style,
  race_de_acc,
  race_event_enum,
  start_acc,
  start_velocity,
} = race_sim_const;

describe('race_event_enum', () => {
  it('preserves the commentated ordering', () => {
    expect(race_event_enum.keys[0]).toBe('finish');
    expect(race_event_enum.keys.at(-1)).toBe('temp_continue');
    expect(race_event_enum.keys).toHaveLength(18);
    expect(race_event_enum.finish).toBe(0);
    expect(race_event_enum.temp_continue).toBe(17);
  });

  it('snapshots the key list without the helper key', () => {
    expect(race_event_enum.keys).not.toContain('keys');
  });
});

describe('scalar constants', () => {
  it('exposes the simulation parameters', () => {
    expect(frame_rate).toBe(15);
    expect(max_attr).toBe(2000);
    expect(max_extra_attr).toBe(400);
    expect(start_acc).toBe(24);
    expect(start_velocity).toBe(3);
    expect(acc_up_hill_mode).toBeCloseTo(2 / 3);
  });
});

describe('coefficient tables', () => {
  it('sizes the style matrices as 5 rows of 3 phases', () => {
    for (const table of [mod_acceleration_style, mod_velocity_style]) {
      expect(table).toHaveLength(5);
      table.forEach((row) => expect(row).toHaveLength(3));
    }
  });

  it('sizes the adaptability tables correctly', () => {
    expect(mod_acceleration_adapt_distance).toHaveLength(9);
    expect(mod_acceleration_adapt_ground).toHaveLength(9);
    expect(mod_attr_intelligence_adapt_style).toHaveLength(9);
    expect(mod_velocity_final_adapt_distance).toHaveLength(10);
    expect(loc_mind_multiply_velocity_ideal).toHaveLength(7);
    expect(mod_attr_stamina_style).toHaveLength(5);
    expect(race_de_acc).toHaveLength(5);
  });

  it('provides a 5-entry motivation table for each category', () => {
    expect(mod_motivation_coefficients.default).toHaveLength(5);
    expect(mod_motivation_coefficients[2]).toHaveLength(5);
  });
});
