const era = require('#/era-electron');

const { clean_part } = require('#/system/ero/sys-calc-ero-part');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum, item_names } = require('#/data/ero/item-const');
const { part_enum, part_touch } = require('#/data/ero/part-const');

/**
 * @param {number} chara_id
 * @param {number|string} part_or_item_name
 */
function remove_item(chara_id, part_or_item_name) {
  if (typeof part_or_item_name === 'number') {
    const touched_part = era.get(
      `tcvar:${chara_id}:${part_touch[part_or_item_name]}接触部位`,
    );
    if (touched_part.part === part_enum.item) {
      clean_part(new EroParticipant(chara_id, part_or_item_name));
      era.set(`tequip:${chara_id}:${part_touch[part_or_item_name]}`, -1);
      if (touched_part.owner === 0) {
        switch (touched_part.item) {
          case item_enum.anal_beads:
          case item_enum.butt_plug:
          case item_enum.dildo:
          case item_enum.gag:
          case item_enum.milk_pump:
          case item_enum.artificial_virgin:
            era.add(`item:${item_names[touched_part.item]}`, 1);
            break;
          case item_enum.clamps:
          case item_enum.love_eggs:
            era.add(
              `item:${item_names[touched_part.item]}`,
              1 + (part_or_item_name === part_enum.breast),
            );
        }
      }
    }
  } else if (era.get(`tequip:${chara_id}:${part_or_item_name}`) !== -1) {
    era.set(`tequip:${chara_id}:${part_or_item_name}`, -1);
    if (chara_id) {
      era.add(`item:${part_or_item_name}`, 1);
    }
  }
}

module.exports = {
  /** @param {number} ids */
  init_items(...ids) {
    ids.forEach((chara_id) =>
      new Array(8)
        .fill(0)
        .forEach((_, item) => era.set(`tequip:${chara_id}:${item}`, -1)),
    );
  },
  /**
   * @param {number} chara_id
   * @param {number|string} part
   * @param {number} item
   */
  use_item(chara_id, part, item) {
    const chara_part = typeof part === 'string' ? part : part_touch[part];
    era.set(`tequip:${chara_id}:${chara_part}`, item);
  },
  remove_item,
  /** @param {number} ids */
  remove_all_items(...ids) {
    ids.forEach((chara_id) => {
      remove_item(chara_id, part_enum.mouth);
      remove_item(chara_id, part_enum.breast);
      remove_item(chara_id, part_enum.penis);
      remove_item(chara_id, part_enum.clitoris);
      remove_item(chara_id, part_enum.virgin);
      remove_item(chara_id, part_enum.anal);
      remove_item(chara_id, '项圈');
      remove_item(chara_id, '眼罩');
    });
  },
};
