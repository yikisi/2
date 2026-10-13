import { beforeEach, describe, expect, it } from 'vitest';

import {
  sys_check_cuckold,
  sys_check_yandere,
} from '#/system/chara/sys-calc-cheat.js';

import { plugin_enum } from '#/data/ero/plugin/plugin-const.js';

import era from '../../helpers/era.js';

describe('sys_check_cuckold', () => {
  beforeEach(() => era.reset());

  it('detects the cuckold talent', () => {
    era.seed({ 'talent:1:绿帽癖': 1 });
    expect(sys_check_cuckold(1)).toBe(true);
  });

  it('detects the ntr inmon plugin', () => {
    era.seed({ 'equip:2:0': { [plugin_enum.ntr]: 1 } });
    expect(sys_check_cuckold(2)).toBe(true);
  });

  it('is false by default', () => {
    expect(sys_check_cuckold(3)).toBe(false);
  });
});

describe('sys_check_yandere', () => {
  beforeEach(() => era.reset());

  it('accepts any positive yandere level by default', () => {
    era.seed({ 'talent:1:病娇': 1 });
    expect(sys_check_yandere(1)).toBe(true);
  });

  it('honours a custom predicate', () => {
    era.seed({ 'talent:1:病娇': 2 });
    expect(sys_check_yandere(1, (y) => y === 2)).toBe(true);
    era.seed({ 'talent:1:病娇': 1 });
    expect(sys_check_yandere(1, (y) => y === 2)).toBe(false);
  });

  it('is blocked by the cuckold talent', () => {
    era.seed({ 'talent:1:病娇': 1, 'talent:1:绿帽癖': 1 });
    expect(sys_check_yandere(1)).toBe(false);
  });

  it('is blocked by the no_yand and ntr plugins', () => {
    era.seed({ 'talent:1:病娇': 1, 'equip:1:0': { [plugin_enum.no_yand]: 1 } });
    expect(sys_check_yandere(1)).toBe(false);
    era.seed({ 'talent:1:病娇': 1, 'equip:1:0': { [plugin_enum.ntr]: 1 } });
    expect(sys_check_yandere(1)).toBe(false);
  });
});
