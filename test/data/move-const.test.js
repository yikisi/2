import { describe, expect, it } from 'vitest';

import {
  expedition_weeks,
  location_move_cost,
  vehicle_enum,
  vehicle_influences,
} from '#/data/move-const.js';

import { location_enum } from '#/data/locations.js';

describe('vehicle_enum', () => {
  it('assigns one-based identifiers in declaration order', () => {
    expect(vehicle_enum.skateboard).toBe(1);
    expect(vehicle_enum.pama).toBe(10);
    expect(vehicle_enum.keys).toHaveLength(10);
    expect(vehicle_enum.keys).not.toContain('keys');
  });

  it('has an influence entry for every vehicle', () => {
    const vehicles = Object.values(vehicle_enum).filter(
      (v) => typeof v === 'number',
    );
    for (const id of vehicles) {
      expect(vehicle_influences[id]).toBeDefined();
      expect(vehicle_influences[id].stamina).toBeGreaterThanOrEqual(0);
      expect(vehicle_influences[id].time).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('location_move_cost', () => {
  it('defines positive travel costs keyed by location enum', () => {
    for (const cost of Object.values(location_move_cost)) {
      expect(cost).toBeGreaterThan(0);
    }
    expect(location_move_cost[location_enum.playground]).toBe(50);
    expect(location_move_cost[location_enum.mejiro]).toBe(500);
  });

  it('exposes the expedition duration', () => {
    expect(expedition_weeks).toBe(3);
  });
});
