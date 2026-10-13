import { describe, expect, it } from 'vitest';

import { lane_params, slope_params } from '#/data/race/race-params.js';

describe('race-params', () => {
  it('keys lanes and slopes by the same param ids', () => {
    const lane_ids = Object.keys(lane_params).sort();
    const slope_ids = Object.keys(slope_params).sort();
    expect(lane_ids).toEqual(slope_ids);
    expect(lane_ids.length).toBeGreaterThan(0);
  });

  it('builds contiguous lanes starting at 0', () => {
    for (const lanes of Object.values(lane_params)) {
      expect(lanes.length).toBeGreaterThan(0);
      expect(lanes[0].start).toBe(0);
      for (let i = 0; i < lanes.length; i++) {
        const lane = lanes[i];
        expect(lane.start).toBeLessThan(lane.end);
        expect(lane.index).toBeGreaterThanOrEqual(1);
        expect(typeof lane.is_curve).toBe('boolean');
        expect(typeof lane.is_last).toBe('boolean');
        if (i > 0) {
          expect(lane.start).toBe(lanes[i - 1].end);
        }
      }
      expect(lanes.at(-1).is_last).toBe(true);
    }
  });

  it('builds slopes with a direction and ordered endpoints', () => {
    for (const slopes of Object.values(slope_params)) {
      for (const slope of slopes) {
        expect(slope.start).toBeLessThan(slope.end);
        expect(slope.slope).not.toBe(0);
      }
    }
  });

  it('matches a known short track configuration', () => {
    const lanes = lane_params[10101];
    expect(lanes).toHaveLength(4);
    expect(lanes.map((l) => [l.start, l.end])).toEqual([
      [0, 400],
      [400, 675],
      [675, 934],
      [934, 1200],
    ]);
    expect(lanes.at(-1).is_last).toBe(true);
  });
});
