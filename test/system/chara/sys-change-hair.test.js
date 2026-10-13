import { beforeEach, describe, expect, it } from 'vitest';

import sys_change_hair from '#/system/chara/sys-change-hair.js';

import era from '../../helpers/era.js';

describe('sys_change_hair', () => {
  beforeEach(() => era.reset());

  it('maps short hair to length 0', () => {
    sys_change_hair(1);
    expect(era.get('cflag:1:头发长度')).toBe(0);
    era.seed({ 'cstr:1:后发': 'shor_hair' });
    sys_change_hair(1);
    expect(era.get('cflag:1:头发长度')).toBe(0);
  });

  it('maps tied styles to length 1', () => {
    for (const style of ['twin_tails', 'hair_bun', 'doub_odango']) {
      era.seed({ 'cstr:1:后发': style });
      sys_change_hair(1);
      expect(era.get('cflag:1:头发长度')).toBe(1);
    }
  });

  it('maps long styles to length 2', () => {
    for (const style of ['long_straight', 'high_ponytail', 'twin_braids']) {
      era.seed({ 'cstr:1:后发': style });
      sys_change_hair(1);
      expect(era.get('cflag:1:头发长度')).toBe(2);
    }
  });
});
