import { beforeEach, describe, expect, it } from 'vitest';

import { base_juel_reward } from '#/data/ero/juel-const.js';
import {
  add_juel,
  clean_juels,
  init_juels,
  update_juels,
  update_juels_from_talent,
} from '#/system/ero/sys-calc-juel.js';

import era from '../../helpers/era.js';

const jewelkeys = Array.from({ length: 16 }, (_, i) => i);

describe('juel bookkeeping', () => {
  beforeEach(() => {
    era.reset();
    clean_juels();
  });

  it('flushes talent-derived meek jewels', () => {
    era.seed({ jewelkeys, 'talent:1:工口意愿': 1 });
    init_juels(1);
    update_juels_from_talent(1, '工口意愿');
    update_juels(false, 1);
    expect(era.get('gotjewel:1:10')).toBe(base_juel_reward);
  });

  it('denies meek jewels to a sleeping character', () => {
    era.seed({
      jewelkeys,
      'talent:1:工口意愿': 1,
      'status:1:10': 1,
    });
    init_juels(1);
    update_juels_from_talent(1, '工口意愿');
    update_juels(false, 1);
    expect(era.get('gotjewel:1:10')).toBe(0);
  });

  it('still grants pain to a sleeping character but not its chains', () => {
    era.seed({ jewelkeys, 'status:1:10': 1 });
    init_juels(1);
    add_juel(1, 11, 500);
    update_juels(false, 1);
    expect(era.get('gotjewel:1:11')).toBe(500);
    expect(era.get('gotjewel:1:12')).toBe(0);
    expect(era.get('gotjewel:1:15')).toBe(0);
  });

  it('reduces jewels to 10% for the controlling character', () => {
    era.seed({ jewelkeys, 'tflag:主导权': 1 });
    init_juels(1);
    add_juel(1, 10, 1000);
    update_juels(false, 1);
    expect(era.get('gotjewel:1:10')).toBe(100);
  });

  it('lets the player gain meek but not other emotions', () => {
    era.seed({ jewelkeys, 'tflag:主导权': 5 });
    init_juels(0);
    add_juel(0, 10, 500);
    add_juel(0, 12, 100);
    update_juels(false, 0);
    expect(era.get('gotjewel:0:10')).toBe(500);
    expect(era.get('gotjewel:0:12')).toBe(0);
  });
});
