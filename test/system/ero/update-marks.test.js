import { beforeEach, describe, expect, it } from 'vitest';

import update_marks from '#/system/ero/calc-sex/update-marks.js';

import era from '../../helpers/era.js';

// mark_enum: pleasure 0, ero 1, meek 2, pain 3, shame 4, hate 5
// nowex/ex indices for a mark are 65 + mid.
describe('update_marks', () => {
  beforeEach(() => era.reset());

  it('applies pending experience for real', async () => {
    era.seed({ 'nowex:1:65': 2 });
    const count = await update_marks(false, 1);
    expect(count).toBe(1);
    expect(era.get('mark:1:0')).toBe(2);
    expect(era.get('ex:1:65')).toBe(2);
    expect(era.get('nowex:1:65')).toBe(0);
  });

  it('caps a mark at level 3', async () => {
    era.seed({ 'mark:1:1': 1, 'nowex:1:66': 5 });
    await update_marks(false, 1);
    expect(era.get('mark:1:1')).toBe(3);
  });

  it('flushes experience without a level-up when already maxed', async () => {
    era.seed({ 'mark:1:0': 3, 'nowex:1:65': 2 });
    const count = await update_marks(false, 1);
    expect(count).toBe(0);
    expect(era.get('mark:1:0')).toBe(3);
    expect(era.get('ex:1:65')).toBe(2);
    expect(era.get('nowex:1:65')).toBe(0);
  });
});
