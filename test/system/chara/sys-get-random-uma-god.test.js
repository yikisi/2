import { beforeEach, describe, expect, it, vi } from 'vitest';

import sys_get_random_uma_god from '#/system/chara/sys-get-random-uma-god.js';

import era from '../../helpers/era.js';

describe('sys_get_random_uma_god', () => {
  beforeEach(() => era.reset());

  it('picks among the three free goddesses', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(sys_get_random_uma_god()).toBe(340);
    spy.mockReturnValue(0.99);
    expect(sys_get_random_uma_god()).toBe(342);
    spy.mockRestore();
  });

  it('skips recruited goddesses', () => {
    era.seed({ 'cflag:340:招募状态': 1, 'cflag:341:招募状态': 1 });
    expect(sys_get_random_uma_god()).toBe(342);
  });

  it('returns undefined when all are recruited', () => {
    era.seed({
      'cflag:340:招募状态': 1,
      'cflag:341:招募状态': 1,
      'cflag:342:招募状态': 1,
    });
    expect(sys_get_random_uma_god()).toBeUndefined();
  });
});
