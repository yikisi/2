const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { part_abbr, part_alias } = require('#/data/ero/ero-alias.json');
const {
  item_enum,
  item_names,
  get_item_action,
} = require('#/data/ero/item-const');
const { touch_list, part_touch, part_enum } = require('#/data/ero/part-const');

/**
 * @param {number} chara_id
 * @param {number} chara_part
 * @returns {*[]}
 */
function get_part_touch(chara_id, chara_part) {
  const touched_part = era.get(
    `tcvar:${chara_id}:${part_touch[chara_part]}接触部位`,
  );
  if (touched_part === -1) {
    return undefined;
  }
  const touched_chara = get_chara_talk(touched_part.owner);
  if (chara_part === part_enum.sadism) {
    return ['之前虐待了 ', touched_chara.get_colored_name()];
  } else if (chara_part === part_enum.masochism) {
    return ['之前被 ', touched_chara.get_colored_name(), ' 虐待'];
  } else {
    const body_part = era.get(
      `tcvar:${chara_id}:${part_touch[chara_part]}接触部位`,
    );
    if (body_part.part === part_enum.item) {
      let item_name = '';
      if (body_part.item === item_enum.clamps) {
        item_name = chara_part === part_enum.breast ? '乳头夹' : '阴蒂夹';
      }
      item_name ||= item_names[body_part.item];
      return [
        { color: buff_colors[2], content: item_name },
        ' (由 ',
        touched_chara.get_colored_name(),
        ' ',
        {
          color: buff_colors[2],
          content: get_item_action(body_part.item, chara_part),
        },
        ')',
      ];
    } else {
      return [
        touched_chara.get_colored_name(),
        ' 的 ',
        {
          color: buff_colors[2],
          content: part_alias[part_touch[body_part.part]],
        },
      ];
    }
  }
}

function print_touch_info(chara_id) {
  const chara = get_chara_talk(chara_id);
  const temp = [
    [
      {
        columns: [
          {
            config: {
              content: `${CharaTalk.me.name} 的身体接触`,
              position: 'left',
              width: 23,
            },
            type: 'divider',
          },
        ],
        config: { width: 6 },
      },
      {
        columns: [
          {
            config: {
              content: `${chara.name} 的身体接触`,
              offset: 1,
              position: 'right',
              width: 23,
            },
            type: 'divider',
          },
        ],
        config: { width: 6 },
      },
    ],
    [
      {
        columns: [
          {
            config: {
              content: `${CharaTalk.me.name} 的性虐情报`,
              position: 'left',
              width: 23,
            },
            type: 'divider',
          },
        ],
        config: { width: 6 },
      },
      {
        columns: [
          {
            config: {
              content: `${chara.name} 的性虐情报`,
              offset: 1,
              position: 'right',
              width: 23,
            },
            type: 'divider',
          },
        ],
        config: { width: 6 },
      },
    ],
  ];
  touch_list.forEach((part, part_index) => {
    const part_name = part_touch[part];
    const my_touch = get_part_touch(0, part);
    if (my_touch) {
      if (part_index < touch_list.length - 2) {
        temp[0][0].columns.push(
          {
            config: { width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
          {
            config: { width: 20 },
            content: my_touch,
            type: 'text',
          },
        );
      } else {
        temp[1][0].columns.push(
          {
            config: { width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
          {
            config: { width: 20 },
            content: my_touch,
            type: 'text',
          },
        );
      }
    }
    const other_touch = get_part_touch(chara_id, part);
    if (other_touch) {
      if (part_index < touch_list.length - 2) {
        temp[0][1].columns.push(
          {
            config: { align: 'right', offset: 1, width: 20 },
            content: other_touch,
            type: 'text',
          },
          {
            config: { align: 'right', width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
        );
      } else {
        temp[1][1].columns.push(
          {
            config: { align: 'right', offset: 1, width: 20 },
            content: other_touch,
            type: 'text',
          },
          {
            config: { align: 'right', width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
        );
      }
    }
  });
  era.printInColRows(...temp[0]);
  era.printInColRows(...temp[1]);
}

module.exports = print_touch_info;
