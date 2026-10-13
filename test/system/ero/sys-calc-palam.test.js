import { createRequire } from 'node:module';

import { beforeEach, describe, expect, it } from 'vitest';

import { part_enum } from '#/data/ero/part-const.js';

import era from '../../helpers/era.js';

// `sys-calc-palam` and `sys-calc-juel` keep private `tmp` buffers used through
// Node's require, so grab the same instances.
const require = createRequire(import.meta.url);
const { clean_juels, init_juels } = require('#/system/ero/sys-calc-juel.js');
const palam = require('#/system/ero/sys-calc-palam.js');

const jewelkeys = Array.from({ length: 16 }, (_, i) => i);

describe('sys-calc-palam', () => {
  beforeEach(() => {
    era.reset();
    clean_juels();
    palam.clean_palams();
  });

  it('accumulates a talent-sourced pleasure and flushes it', () => {
    era.seed({
      jewelkeys,
      'talent:1:气味敏感': 1,
      'tcvar:1:快感上限': 100,
    });
    init_juels(1);
    palam.init_palams(1);
    palam.update_palam_from_talent(
      1,
      '气味敏感',
      part_enum.breast,
      part_enum.masochism,
    );
    const ret = palam.update_palam(1, part_enum.mouth, false);
    expect(era.get('param:1:快感')).toBeCloseTo(15);
    expect(ret).toEqual({ curr: 15, max: 100, old: 0 });
  });

  it('reduces the pleasure gain with a large bust trait', () => {
    era.seed({
      jewelkeys,
      'talent:1:气味敏感': 1,
      'talent:1:乳房尺寸': 5,
      'tcvar:1:快感上限': 100,
    });
    init_juels(1);
    palam.init_palams(1);
    palam.update_palam_from_talent(1, '气味敏感', part_enum.breast);
    palam.update_palam(1, part_enum.mouth, false);
    expect(era.get('param:1:快感')).toBeCloseTo(7.5);
  });

  it('reduces the pleasure gain with the chastity view', () => {
    era.seed({
      jewelkeys,
      'talent:1:气味敏感': 1,
      'talent:1:贞洁看法': 1,
      'tcvar:1:快感上限': 100,
    });
    init_juels(1);
    palam.init_palams(1);
    palam.update_palam_from_talent(1, '气味敏感', part_enum.mouth);
    palam.update_palam(1, part_enum.mouth, false);
    expect(era.get('param:1:快感')).toBeCloseTo(12);
  });

  it('does nothing without the driving talent', () => {
    era.seed({ jewelkeys, 'tcvar:1:快感上限': 100 });
    init_juels(1);
    palam.init_palams(1);
    palam.update_palam_from_talent(1, '气味敏感', part_enum.mouth);
    palam.update_palam(1, part_enum.mouth, false);
    expect(era.get('param:1:快感')).toBe(0);
  });
});
