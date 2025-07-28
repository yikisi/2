const era = require('#/era-electron');

const { clean_part } = require('#/system/ero/sys-calc-ero-part');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum, item_names } = require('#/data/ero/item-const');
const { part_enum, part_touch } = require('#/data/ero/part-const');

/**
 * @param {number} cid
 * @param {number|string} p_or_i
 */
function remove_item(cid, p_or_i) {
  if (typeof p_or_i === 'number') {
    const touch = era.get(`tcvar:${cid}:${part_touch[p_or_i]}接触部位`);
    if (touch.part === part_enum.item) {
      clean_part(new EroParticipant(cid, p_or_i));
      era.set(`tequip:${cid}:${part_touch[p_or_i]}`, -1);
      if (touch.owner === 0) {
        switch (touch.item) {
          case item_enum.anal_beads:
          case item_enum.butt_plug:
          case item_enum.dildo:
          case item_enum.gag:
          case item_enum.milk_pump:
          case item_enum.artificial_virgin:
            era.add(`item:${item_names[touch.item]}`, 1);
            break;
          case item_enum.clamps:
          case item_enum.love_eggs:
            era.add(
              `item:${item_names[touch.item]}`,
              1 + (p_or_i === part_enum.breast),
            );
        }
      }
    }
  } else if (era.get(`tequip:${cid}:${p_or_i}`) !== -1) {
    era.set(`tequip:${cid}:${p_or_i}`, -1);
    if (cid) {
      era.add(`item:${p_or_i}`, 1);
    }
  }
}

module.exports = {
  /** @param {number} ids */
  init_items(...ids) {
    ids.forEach((cid) =>
      new Array(8)
        .fill(0)
        .forEach((_, item) => era.set(`tequip:${cid}:${item}`, -1)),
    );
  },
  /**
   * @param {number} cid
   * @param {number|string} part
   * @param {number} item
   */
  use_item(cid, part, item) {
    const chara_part = typeof part === 'string' ? part : part_touch[part];
    era.set(`tequip:${cid}:${chara_part}`, item);
  },
  remove_item,
  /** @param {number} ids */
  remove_all_items(...ids) {
    ids.forEach((cid) => {
      remove_item(cid, part_enum.mouth);
      remove_item(cid, part_enum.breast);
      remove_item(cid, part_enum.penis);
      remove_item(cid, part_enum.clitoris);
      remove_item(cid, part_enum.virgin);
      remove_item(cid, part_enum.anal);
      remove_item(cid, '项圈');
      remove_item(cid, '眼罩');
    });
  },
};
