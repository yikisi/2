import { beforeAll, describe, expect, it, vi } from 'vitest';

let race_enum;
let race_infos;
let race_rewards;
let race_difficulty;

beforeAll(async () => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
  ({ race_enum, race_infos, race_rewards, race_difficulty } =
    await import('#/data/race/race-const.js'));
});

describe('race-const', () => {
  it('starts the race enum at the debut race', () => {
    expect(race_enum.begin_race).toBe(0);
  });

  it('registers a fully populated RaceInfo for every race', () => {
    expect(Array.isArray(race_infos)).toBe(true);
    expect(race_infos.length).toBeGreaterThan(150);

    race_infos.forEach((info, i) => {
      expect(info).toBeDefined();
      // The debut race is registered after the lane/phase mapping pass.
      if (i === race_enum.begin_race) {
        return;
      }
      expect(Array.isArray(info.lanes)).toBe(true);
      expect(info.lanes.length).toBeGreaterThan(0);
      expect(Array.isArray(info.attr_bonus)).toBe(true);
      expect(info.span).toBeGreaterThan(0);
      expect(info.distance).toBeGreaterThanOrEqual(0);
      expect(info.distance).toBeLessThanOrEqual(3);
      expect([0, 1]).toContain(info.ground);
      expect(info.race_class).toBeGreaterThanOrEqual(0);
      expect(info.race_class).toBeLessThanOrEqual(5);
      expect(info.phases[0]).toBeLessThanOrEqual(info.phases[1]);
      expect(info.phases[1]).toBeLessThanOrEqual(info.phases[2]);
    });
  });

  it('leaves the debut race without lane and phase data', () => {
    const begin = race_infos[race_enum.begin_race];
    expect(begin.lanes).toBeUndefined();
    expect(begin.phases).toBeUndefined();
  });

  it('exposes the difficulty and reward tables', () => {
    expect(race_difficulty).toEqual({ easy: -20, hard: 10, normal: 0 });
    expect(Array.isArray(race_rewards)).toBe(true);
    expect(race_rewards).toHaveLength(6);
  });
});
