import { createRequire } from 'node:module';

import { beforeEach, describe, expect, it } from 'vitest';

import { part_enum } from '#/data/ero/part-const.js';
import { stain_enum } from '#/data/ero/stain-const.js';
import change_ero_cost from '#/system/ero/sub-calc-ero/change-ero-cost.js';

import era from '../../helpers/era.js';

// Same Node instance of the juel buffer as the implementation under test.
const require = createRequire(import.meta.url);
const { clean_juels, init_juels } = require('#/system/ero/sys-calc-juel.js');

const LUBRICANT = 1 << stain_enum.lubricant;

describe('change_ero_cost', () => {
  beforeEach(() => {
    era.reset();
    clean_juels();
  });

  it('scales both damages by the lubrication coefficient', () => {
    era.seed({ 'stain:1:': LUBRICANT });
    const ret = change_ero_cost(2, 1, part_enum.breast, {
      attacker: 100,
      defender: 50,
    });
    expect(ret.attacker).toBeCloseTo(70);
    expect(ret.defender).toBeCloseTo(35);
  });

  it('leaves the damage unchanged when fully lubricated', () => {
    era.seed({ 'stain:1:': LUBRICANT, 'stain:2:': LUBRICANT });
    const ret = change_ero_cost(2, 1, part_enum.breast, {
      attacker: 100,
      defender: 50,
    });
    expect(ret).toEqual({ attacker: 100, defender: 50 });
  });

  it('reduces damage when dry and awards pain jewels', () => {
    era.seed({ jewelkeys: Array.from({ length: 16 }, (_, i) => i) });
    init_juels(1);
    init_juels(2);
    const ret = change_ero_cost(2, 1, part_enum.breast, {
      attacker: 100,
      defender: 50,
    });
    expect(ret.attacker).toBeCloseTo(40);
    expect(ret.defender).toBeCloseTo(20);
  });
});
