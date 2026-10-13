import { describe, expect, it } from 'vitest';

import { adaptability_colors } from '#/data/color-const.js';
import RaceInfo from '#/data/race/model/race-info.js';

const {
  RaceLane,
  RaceSlope,
  class_enum,
  distance_enum,
  ground_enum,
  limit_enum,
  mess_enum,
  prize_ratios,
  relation_rewards,
  rotation_enum,
  track_enum,
  weather_enum,
} = RaceInfo;

describe('race-info enums', () => {
  it('assigns race classes in declaration order', () => {
    expect(class_enum).toEqual({
      G1: 0,
      G2: 1,
      G3: 2,
      OP: 3,
      'Pre-OP': 4,
      Spe: 5,
    });
  });

  it('aliases mud and dirt and uses signed rotations', () => {
    expect(ground_enum.mud).toBe(1);
    expect(ground_enum.dirt).toBe(1);
    expect(rotation_enum).toEqual({
      clock: 1,
      counter: -1,
      left: -1,
      right: 1,
      straight: 0,
    });
  });

  it('encodes the age limits as bit flags', () => {
    expect(limit_enum).toEqual({
      exact2: 0b001,
      exact3: 0b010,
      post3: 0b110,
      post4: 0b100,
    });
  });

  it('exposes the distance, weather and mess enums', () => {
    expect(distance_enum).toEqual({ short: 0, mile: 1, medium: 2, long: 3 });
    expect(weather_enum).toEqual({ sunny: 0, cloudy: 1, rain: 2, snow: 3 });
    expect(mess_enum).toEqual({ well: 0, semi: 1, heavy: 2, bad: 3 });
  });

  it('uses stable numeric track ids and aliases venues', () => {
    expect(track_enum.sapporo).toBe(10001);
    expect(track_enum.tokyo).toBe(10006);
    expect(track_enum.longchamp).toBe(10201);
    expect(track_enum.new_york).toBe(55501);
    expect(track_enum.new_york).toBe(track_enum.baltimore);
  });
});

describe('race reward tables', () => {
  it('exposes the prize and relation reward ladders', () => {
    expect(prize_ratios).toEqual([1, 0.5, 0.3, 0.2, 0.1]);
    expect(relation_rewards).toEqual([50, 100, 200, 400]);
  });
});

describe('RaceSlope and RaceLane', () => {
  it('stores slope endpoints and direction', () => {
    expect(new RaceSlope(0, 100, -1)).toEqual({
      start: 0,
      end: 100,
      slope: -1,
    });
  });

  it('stores lane geometry', () => {
    const lane = new RaceLane(0, 400, 1, true, false);
    expect(lane.start).toBe(0);
    expect(lane.end).toBe(400);
    expect(lane.index).toBe(1);
    expect(lane.is_curve).toBe(true);
    expect(lane.is_last).toBe(false);
  });
});

describe('RaceInfo instance', () => {
  const make = (span) =>
    new RaceInfo(
      1,
      class_enum.G1,
      track_enum.tokyo,
      ground_enum.grass,
      span,
      distance_enum.mile,
      rotation_enum.right,
      16,
      [],
      limit_enum.post3,
      10,
      0,
      1000,
      10101,
    );

  it('flags whether the span is a multiple of 400', () => {
    expect(make(1200).span400).toBe(1);
    expect(make(1600).span400).toBe(1);
    expect(make(1250).span400).toBe(0);
  });

  it('supports overriding and reading a display name', () => {
    const info = make(1200);
    info.name = 'Custom Cup';
    expect(info.name).toBe('Custom Cup');
  });

  it('colors the name by race class', () => {
    const g1 = make(1200);
    expect(g1.get_colored_name()).toMatchObject({
      color: adaptability_colors.at(-2),
      fontWeight: 'bold',
    });

    const spe = new RaceInfo(
      2,
      class_enum.Spe,
      track_enum.tokyo,
      ground_enum.grass,
      1200,
      distance_enum.mile,
      rotation_enum.right,
      16,
      [],
      limit_enum.post3,
      10,
      0,
      1000,
      10101,
    );
    expect(spe.get_colored_name().color).toBe(adaptability_colors.at(-7));
  });
});
