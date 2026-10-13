import { beforeEach, describe, expect, it } from 'vitest';

import { item_enum } from '#/data/ero/item-const.js';
import { part_enum, part_touch } from '#/data/ero/part-const.js';
import { stain_enum } from '#/data/ero/stain-const.js';
import check_nipple_clamps from '#/system/ero/sub-calc-ero-orgasm/check-nipple-clamps.js';

import era from '../../helpers/era.js';

const BREAST_STAIN = `stain:1:${part_touch[part_enum.breast]}`;

describe('check_nipple_clamps', () => {
  beforeEach(() => era.reset());

  it('blocks milk output while clamps are equipped', () => {
    era.seed({ 'tequip:1:胸部': item_enum.clamps });
    expect(check_nipple_clamps(1, 5.2)).toBe(0);
    expect(era.get('nowex:1:喷奶阻碍')).toBe(6);
  });

  it('marks the breast and records the milk amount', () => {
    expect(check_nipple_clamps(1, 5)).toBe(5);
    expect(era.get(BREAST_STAIN) & (1 << stain_enum.milk)).not.toBe(0);
    expect(era.get('exp:1:喷奶量')).toBe(5);
    expect(era.get('nowex:1:喷奶量')).toBe(5);
  });

  it('adds the pending blocked amount and clamps negatives', () => {
    era.seed({ 'ex:1:喷奶阻碍': 10 });
    expect(check_nipple_clamps(1, 5)).toBe(15);
    expect(check_nipple_clamps(1, -3)).toBe(10);
  });

  it('never returns a negative amount', () => {
    expect(check_nipple_clamps(1, -1)).toBe(0);
  });
});
