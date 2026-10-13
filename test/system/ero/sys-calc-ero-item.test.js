import { beforeEach, describe, expect, it } from 'vitest';

import { item_enum, tequip_parts } from '#/data/ero/item-const.js';
import { part_enum, part_touch } from '#/data/ero/part-const.js';
import {
  get_tequip_info,
  init_items,
  remove_all_items,
  remove_item,
  use_item,
} from '#/system/ero/sys-calc-ero-item.js';

import era from '../../helpers/era.js';

const VIRGIN_TE = `tequip:1:${part_touch[part_enum.virgin]}`;
const BREAST_TOUCH = `tcvar:1:${part_touch[part_enum.breast]}接触部位`;

describe('init_items', () => {
  beforeEach(() => era.reset());

  it('sets every equipment slot to empty', () => {
    init_items(1);
    expect(era.get('tequip:1:0')).toBe(-1);
    expect(era.get('tequip:1:7')).toBe(-1);
  });
});

describe('use_item', () => {
  beforeEach(() => era.reset());

  it('equips the item on the named part', () => {
    use_item(1, part_enum.virgin, item_enum.dildo);
    expect(era.get(VIRGIN_TE)).toBe(item_enum.dildo);
  });
});

describe('remove_item', () => {
  beforeEach(() => era.reset());

  it('does nothing when the part is not holding an item', () => {
    remove_item(1, part_enum.virgin);
    expect(era.get(VIRGIN_TE)).toBe(0);
  });

  it('returns a player-owned item to the inventory', () => {
    era.seed({
      [VIRGIN_TE]: item_enum.dildo,
      'tcvar:1:阴道接触部位': {
        owner: 0,
        part: part_enum.item,
        item: item_enum.dildo,
      },
    });
    remove_item(1, part_enum.virgin);
    expect(era.get('tcvar:1:阴道接触部位')).toBe(-1);
    expect(era.get(VIRGIN_TE)).toBe(-1);
    expect(era.get(`item:${item_enum.dildo}`)).toBe(1);
  });

  it('adds a second copy for breast clamps', () => {
    era.seed({
      [BREAST_TOUCH]: {
        owner: 0,
        part: part_enum.item,
        item: item_enum.clamps,
      },
    });
    remove_item(1, part_enum.breast);
    expect(era.get(`item:${item_enum.clamps}`)).toBe(2);
  });
});

describe('get_tequip_info', () => {
  beforeEach(() => era.reset());

  it('lists every equipment slot plus the mirror', () => {
    const info = get_tequip_info(1);
    expect(info).toHaveLength(tequip_parts.length + 1);
    expect(info.at(-1)).toEqual({
      item: -1,
      part: item_enum.mirror.toString(),
    });
  });
});

describe('remove_all_items', () => {
  beforeEach(() => era.reset());

  it('runs without throwing over every slot', () => {
    expect(() => remove_all_items(1)).not.toThrow();
  });
});
