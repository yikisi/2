const era = require('#/era-electron');

const { clean_part } = require('#/system/ero/sys-calc-ero-part');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum, tequip_parts } = require('#/data/ero/item-const');
const { part2jid, part_enum, part_touch } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number|string} p_or_i
 */
function remove_item(cid, p_or_i) {
  const equip_part =
    typeof p_or_i === 'number'
      ? part_touch[p_or_i]
      : i18n('zh-CN').tb_item[p_or_i];
  if (typeof p_or_i === 'number') {
    const touch = era.get(`tcvar:${cid}:${equip_part}接触部位`);
    if (touch.part === part_enum.item) {
      clean_part(new EroParticipant(cid, p_or_i));
      era.set(`tequip:${cid}:${equip_part}`, -1);
      if (touch.owner === 0) {
        switch (touch.item) {
          case item_enum.anal_beads:
          case item_enum.butt_plug:
          case item_enum.dildo:
          case item_enum.gag:
          case item_enum.milk_pump:
          case item_enum.artificial_virgin:
            era.add(`item:${touch.item}`, 1);
            break;
          case item_enum.clamps:
          case item_enum.love_eggs:
            era.add(`item:${touch.item}`, 1 + (p_or_i === part_enum.breast));
        }
      }
    }
  } else if (era.get(`tequip:${cid}:${equip_part}`) !== -1) {
    era.set(`tequip:${cid}:${equip_part}`, -1);
    if (cid > 0) {
      era.add(`item:${equip_part}`, 1);
    }
  }
}

module.exports = {
  /** @returns {{item:number,part:number|string,[user]:number}[]} */
  get_tequip_info(cid) {
    return [
      ...tequip_parts.map((p) => {
        const kname =
          typeof p === 'number'
            ? i18n('zh-CN').tb_param[part2jid[p]]
            : i18n('zh-CN').tb_item[p];
        return {
          item: era.get(`tequip:${cid}:${kname}`),
          part: p,
          user: cid,
        };
      }),
      {
        item: era.get('tflag:全身镜') - 1,
        part: item_enum.mirror.toString(),
      },
    ];
  },
  /** @param {number} ids */
  init_items(...ids) {
    ids.forEach((cid) =>
      new Array(8)
        .fill(0)
        .forEach((_, item) => era.set(`tequip:${cid}:${item}`, -1)),
    );
  },
  /** @param {number} ids */
  remove_all_items(...ids) {
    ids.forEach((cid) => tequip_parts.forEach((p) => remove_item(cid, p)));
  },
  remove_item,
  /**
   * @param {number} cid
   * @param {number|string} part
   * @param {number} item
   */
  use_item(cid, part, item) {
    const chara_part =
      typeof part === 'number' ? part_touch[part] : i18n('zh-CN').tb_item[part];
    era.set(`tequip:${cid}:${chara_part}`, item);
  },
};
