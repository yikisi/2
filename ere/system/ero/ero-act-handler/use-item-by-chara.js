const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const { get_random_entry } = require('#/utils/list-utils');

const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');

/** @returns {{items:number[],part:number}} */
function use_item_by_character() {
  const part_item_list = [
    { part: part_enum.mouth, items: [item_enum.gag] },
    {
      part: part_enum.breast,
      items:
        era.get('talent:0:泌乳') === 3
          ? [item_enum.milk_pump]
          : [item_enum.clamps, item_enum.love_eggs],
    },
    {
      part: part_enum.penis,
      items: [item_enum.artificial_virgin, item_enum.electric_stunner],
    },
    {
      part: part_enum.clitoris,
      items: [item_enum.clamps, item_enum.love_eggs],
    },
    {
      part: part_enum.virgin,
      items:
        era.get('talent:0:处女') === vp_status_enum.no
          ? [item_enum.love_eggs]
          : [item_enum.love_eggs, item_enum.dildo],
    },
    {
      part: part_enum.anal,
      items: [
        item_enum.love_eggs,
        item_enum.dildo,
        item_enum.butt_plug,
        item_enum.anal_beads,
      ],
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
  if (era.get('tflag:全身镜')) {
    part_item_list[7].items = [];
  } else if (part_item_list[7].items.length) {
    part_item_list.push({ part: 99, items: [item_enum.mirror] });
  }
  const virgin_size = era.get('cflag:0:阴道尺寸');
  if (virgin_size) {
    part_item_list[2].items = [];
    if (get_penis_size(0)) {
      part_item_list[3].items = [];
    }
  } else {
    part_item_list[3].items = part_item_list[4].items = [];
  }
  return get_random_entry(part_item_list.filter((e) => e.items.length));
}

module.exports = use_item_by_character;
