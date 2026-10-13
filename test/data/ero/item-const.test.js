import { describe, expect, it } from 'vitest';

import {
  get_item_action,
  item_enum,
  medicine_enum,
  tequip_parts,
} from '#/data/ero/item-const.js';

import { part_enum } from '#/data/ero/part-const.js';

describe('item-const', () => {
  it('exposes explicit item and medicine ids', () => {
    expect(item_enum.gag).toBe(71);
    expect(item_enum.collar).toBe(72);
    expect(medicine_enum.uma_z).toBe(31);
    expect(medicine_enum.milk_h).toBe(46);
  });

  it('reveals whether an item is pushed in or equipped', () => {
    expect(get_item_action(item_enum.gag, part_enum.mouth)).toBe('r_v_push');
    expect(get_item_action(item_enum.dildo, part_enum.virgin)).toBe('r_v_push');
    expect(get_item_action(item_enum.clamps, part_enum.breast)).toBe(
      'r_v_equip',
    );
    expect(get_item_action(item_enum.milk_pump, part_enum.breast)).toBe(
      'r_v_equip',
    );
  });

  it('resolves love eggs by the target part', () => {
    expect(get_item_action(item_enum.love_eggs, part_enum.breast)).toBe(
      'r_v_equip',
    );
    expect(get_item_action(item_enum.love_eggs, part_enum.clitoris)).toBe(
      'r_v_equip',
    );
    expect(get_item_action(item_enum.love_eggs, part_enum.anal)).toBe(
      'r_v_push',
    );
    expect(get_item_action(item_enum.love_eggs, part_enum.virgin)).toBe(
      'r_v_push',
    );
  });

  it('defaults unknown items to equip', () => {
    expect(get_item_action(99999, part_enum.mouth)).toBe('r_v_equip');
  });

  it('lists body parts and equipment slots for tequip', () => {
    expect(tequip_parts).toContain(part_enum.mouth);
    expect(tequip_parts).toContain(item_enum.collar.toString());
    expect(tequip_parts).toContain(item_enum.blindfold.toString());
    expect(tequip_parts).toHaveLength(8);
  });
});
