const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const { get_random_entry } = require('#/utils/list-utils');

const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');

/** @returns {{items:number[],part:number}} */
function use_item_by_character() {
  if (era.get('talent:0:泌乳') > 0 && era.get('tequip:0:胸部') === -1) {
    if (era.get('talent:0:乳头类型') !== 2 || era.get('tcvar:0:乳突')) {
      return { items: [item_enum.milk_pump], part: part_enum.breast };
    }
    return { items: [item_enum.electric_stunner], part: part_enum.breast };
  }
  const part_item_list = [
    { items: [item_enum.gag], part: part_enum.mouth },
    {
      items: [item_enum.clamps, item_enum.love_eggs],
      part: part_enum.breast,
    },
    {
      items: [item_enum.artificial_virgin, item_enum.electric_stunner],
      part: part_enum.penis,
    },
    {
      items: [item_enum.clamps, item_enum.love_eggs],
      part: part_enum.clitoris,
    },
    {
      items:
        era.get('talent:0:处女') === vp_status_enum.no
          ? [item_enum.love_eggs]
          : [item_enum.love_eggs, item_enum.dildo],
      part: part_enum.virgin,
    },
    {
      items: [
        item_enum.love_eggs,
        item_enum.dildo,
        item_enum.butt_plug,
        item_enum.anal_beads,
      ],
      part: part_enum.anal,
    },
    { part: 99, items: [item_enum.collar] },
    { part: 99, items: [item_enum.blindfold] },
  ];
  part_item_list.forEach((e, i) => {
    if (era.get(`tequip:0:${i}`) !== -1) {
      e.items = [];
    }
  });
  part_item_list[1].items.push(item_enum.electric_stunner);
  part_item_list[3].items.push(item_enum.electric_stunner);
  if (era.get('tflag:全身镜') > 0) {
    part_item_list[7].items = [];
  } else if (part_item_list[7].items.length > 0) {
    part_item_list.push({ items: [item_enum.mirror], part: 99 });
  }
  const virgin_size = era.get('cflag:0:阴道尺寸');
  if (virgin_size > 0) {
    if (get_penis_size(0) > 0) {
      part_item_list[3].items = [];
    } else {
      part_item_list[2].items = [];
    }
  } else {
    part_item_list[3].items = part_item_list[4].items = [];
  }
  return get_random_entry(part_item_list.filter((e) => e.items.length > 0));
}

module.exports = use_item_by_character;
