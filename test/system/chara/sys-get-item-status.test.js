import { beforeEach, describe, expect, it } from 'vitest';

import { buff_colors } from '#/data/color-const.js';
import sys_get_item_status from '#/system/chara/sys-get-item-status.js';

import era from '../../helpers/era.js';

describe('sys_get_item_status', () => {
  beforeEach(() => era.reset());

  it('adds nothing when no drug status is active', () => {
    const list = [];
    sys_get_item_status(1, list);
    expect(list).toEqual([]);
  });

  it('adds one entry for the first active drug status', () => {
    era.seed({ 'status:1:37': 1 });
    const list = [];
    sys_get_item_status(1, list);
    expect(list).toHaveLength(1);
    expect(list[0].color).toBe(buff_colors[2]);
  });

  it('stops at the first matching status in the 35..39 range', () => {
    era.seed({
      'status:1:35': 1,
      'status:1:36': 1,
      'status:1:37': 1,
      'status:1:38': 1,
      'status:1:39': 1,
    });
    const list = [];
    sys_get_item_status(1, list);
    expect(list).toHaveLength(1);
  });
});
