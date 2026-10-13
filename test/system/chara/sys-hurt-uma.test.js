import { beforeEach, describe, expect, it } from 'vitest';

import { plugin_enum } from '#/data/ero/plugin/plugin-const.js';
import sys_hurt_uma from '#/system/chara/sys-hurt-uma.js';

import era from '../../helpers/era.js';

describe('sys_hurt_uma', () => {
  beforeEach(() => era.reset());

  it('does nothing when injuries are disabled', () => {
    sys_hurt_uma(1, 5);
    expect(era.get('status:1:伤病')).toBe(0);
  });

  it('adds the injury', () => {
    era.seed({ 'flag:可能伤病': 1 });
    sys_hurt_uma(1, 5);
    expect(era.get('status:1:伤病')).toBe(5);
  });

  it('converts tiredness into extra injury', () => {
    era.seed({ 'flag:可能伤病': 1, 'status:1:疲惫': 2 });
    sys_hurt_uma(1, 3);
    expect(era.get('status:1:伤病')).toBe(7);
    expect(era.get('status:1:疲惫')).toBe(0);
  });

  it('is blocked by protective plugins or a non-positive amount', () => {
    era.seed({ 'flag:可能伤病': 1, 'equip:1:0': { [plugin_enum.no_pain]: 1 } });
    sys_hurt_uma(1, 5);
    expect(era.get('status:1:伤病')).toBe(0);

    era.seed({ 'flag:可能伤病': 1 });
    sys_hurt_uma(1, 0);
    expect(era.get('status:1:伤病')).toBe(0);
  });
});
