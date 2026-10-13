import { describe, expect, it } from 'vitest';

import { foreign_locations, location_enum } from '#/data/locations.js';

describe('location_enum', () => {
  it('assigns sequential indices in declaration order', () => {
    expect(location_enum.atrium).toBe(0);
    expect(location_enum.basement).toBe(1);
    expect(location_enum.beach).toBe(2);
    expect(location_enum.moon_well).toBe(32);
  });

  it('exposes the ordered key list without the helper key', () => {
    expect(location_enum.keys).toHaveLength(33);
    expect(location_enum.keys[0]).toBe('atrium');
    expect(location_enum.keys.at(-1)).toBe('moon_well');
    expect(location_enum.keys).not.toContain('keys');
  });
});

describe('foreign_locations', () => {
  it('marks overseas locations', () => {
    for (const name of [
      'dubai',
      'guangzhou',
      'hongkong',
      'new_york',
      'paris',
    ]) {
      expect(foreign_locations[location_enum[name]]).toBe(1);
    }
  });

  it('leaves domestic locations undefined', () => {
    expect(foreign_locations[location_enum.atrium]).toBeUndefined();
    expect(foreign_locations[location_enum.home]).toBeUndefined();
  });
});
