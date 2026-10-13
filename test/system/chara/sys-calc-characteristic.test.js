import { beforeEach, describe, expect, it } from 'vitest';

import { sys_get_chara } from '#/system/chara/sys-calc-characteristic.js';

import { plugin_enum } from '#/data/ero/plugin/plugin-const.js';

import era from '../../helpers/era.js';

describe('sys_get_chara', () => {
  beforeEach(() => era.reset());

  it('maps an inmon plugin to its characteristic offset', () => {
    era.seed({ 'equip:1:0': { [plugin_enum.cha_0]: 1 } });
    expect(sys_get_chara(1)).toBe(-3);
  });

  it('maps the last plugin to +3', () => {
    era.seed({ 'equip:2:0': { [plugin_enum.cha_6]: 1 } });
    expect(sys_get_chara(2)).toBe(3);
  });

  it('prefers the lowest-index plugin when several are active', () => {
    era.seed({
      'equip:3:0': { [plugin_enum.cha_0]: 1, [plugin_enum.cha_6]: 1 },
    });
    expect(sys_get_chara(3)).toBe(-3);
  });

  it('falls back to the character cflag when no plugin is active', () => {
    era.seed({ 'equip:4:0': {}, 'cflag:4:2': 1 });
    expect(sys_get_chara(4)).toBe(1);
  });
});
