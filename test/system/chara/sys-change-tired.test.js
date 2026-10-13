import { beforeEach, describe, expect, it } from 'vitest';

import { plugin_enum } from '#/data/ero/plugin/plugin-const.js';
import sys_change_tired from '#/system/chara/sys-change-tired.js';

import era from '../../helpers/era.js';

describe('sys_change_tired', () => {
  beforeEach(() => era.reset());

  it('adds the raw tiredness', () => {
    sys_change_tired(1, 5);
    expect(era.get('status:1:疲惫')).toBe(5);
  });

  it('reduces the change by the stamina trait', () => {
    era.seed({ 'talent:1:身体素质': 5 });
    sys_change_tired(1, 3);
    expect(era.get('status:1:疲惫')).toBe(0);
  });

  it('is blocked by the no-tired and no-pregnancy plugins', () => {
    era.seed({ 'equip:1:0': { [plugin_enum.no_tired]: 1 } });
    sys_change_tired(1, 5);
    expect(era.get('status:1:疲惫')).toBe(0);

    era.seed({ 'equip:1:0': { [plugin_enum.no_preg]: 1 } });
    sys_change_tired(1, 5);
    expect(era.get('status:1:疲惫')).toBe(0);
  });
});
