import { beforeEach, describe, expect, it } from 'vitest';

import sys_auto_update from '#/system/ero/sys-auto-update.js';

import era from '../../helpers/era.js';

describe('sys_auto_update', () => {
  beforeEach(() => era.reset());

  it('ignores the player id 0', () => {
    expect(() => sys_auto_update(0)).not.toThrow();
  });

  it('learns nothing without jewels', () => {
    sys_auto_update(1);
    expect(era.get('abl:1:40')).toBe(0);
  });

  it('levels a preferred skill while jewels last', () => {
    era.seed({
      'talent:1:工口意愿': 1,
      'jewel:1:7': 1000,
      'jewel:1:8': 1000,
    });
    sys_auto_update(1);
    expect(era.get('abl:1:40')).toBe(3);
    expect(era.get('jewel:1:7')).toBe(10);
    expect(era.get('jewel:1:8')).toBe(10);
  });
});
