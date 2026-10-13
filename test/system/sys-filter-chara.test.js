import { beforeEach, describe, expect, it } from 'vitest';

import sys_filter_chara from '#/system/sys-filter-chara.js';

import era from '../helpers/era.js';

describe('sys_filter_chara', () => {
  beforeEach(() => era.reset());

  it('keeps characters whose value matches', () => {
    era.seed({
      __added: [1, 2, 3],
      'cflag:1:66': 1,
      'cflag:2:66': 0,
      'cflag:3:66': 1,
    });
    expect(sys_filter_chara('cflag', 66, 1)).toEqual([1, 3]);
  });

  it('keeps characters with a truthy value when value is undefined', () => {
    era.seed({
      __added: [1, 2, 3],
      'cflag:1:66': 1,
      'cflag:2:66': 0,
      'cflag:3:66': 1,
    });
    expect(sys_filter_chara('cflag', 66)).toEqual([2]);
  });

  it('returns an empty list when no character is added', () => {
    era.seed({ __added: [] });
    expect(sys_filter_chara('cflag', 66, 1)).toEqual([]);
  });

  it('matches string values', () => {
    era.seed({
      __added: [10, 11],
      'talent:10:name': 'A',
      'talent:11:name': 'B',
    });
    expect(sys_filter_chara('talent', 'name', 'A')).toEqual([10]);
  });
});
