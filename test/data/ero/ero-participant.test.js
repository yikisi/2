import { describe, expect, it } from 'vitest';

import EroParticipant from '#/data/ero/ero-participant.js';

describe('EroParticipant', () => {
  it('stores id and part with a default times of 1', () => {
    expect(new EroParticipant(5, 2)).toEqual({ id: 5, part: 2, times: 1 });
  });

  it('adds the buff to the base times', () => {
    expect(new EroParticipant(5, 2, 3).times).toBe(4);
    expect(new EroParticipant(5, 2, 0.5).times).toBe(1.5);
  });

  it('floors times at 0.01 for heavy negative buffs', () => {
    expect(new EroParticipant(5, 2, -0.5).times).toBe(0.5);
    expect(new EroParticipant(5, 2, -0.99).times).toBeCloseTo(0.01);
    expect(new EroParticipant(5, 2, -5).times).toBe(0.01);
  });
});
