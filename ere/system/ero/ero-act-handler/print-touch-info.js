const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { get_item_action, item_enum } = require('#/data/ero/item-const');
const { part_enum, part_touch, touch_list } = require('#/data/ero/part-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number} cpart
 * @returns {*[]}
 */
function get_part_touch(cid, cpart) {
  const touched_part = era.get(`tcvar:${cid}:${part_touch[cpart]}接触部位`);
  if (touched_part === -1) {
    return undefined;
  }
  const touched_chara = get_chara_talk(touched_part.owner);
  if (cpart === part_enum.sadism) {
    return i18n().sex.get_sadism_touch_info(touched_chara.get_colored_name());
  } else if (cpart === part_enum.masochism) {
    return i18n().sex.get_masochism_touch_info(
      touched_chara.get_colored_name(),
    );
  }
  if (touched_part.part === part_enum.item) {
    let item_name;
    if (touched_part.item === item_enum.clamps) {
      item_name =
        cpart === part_enum.breast
          ? i18n().sex.nipple_clamps
          : i18n().sex.clitoris_clamps;
    } else {
      item_name = i18n().tb_item[touched_part.item];
    }
    return i18n().sex.get_item_touch_info(
      touched_chara.get_colored_name(),
      __(`body_part.${get_item_action(touched_part.item, cpart)}`),
      { color: buff_colors[2], content: item_name },
    );
  }
  return i18n().sex.get_touch_info(touched_chara.get_colored_name(), {
    color: buff_colors[2],
    content: __(`body_part.s_${part_enum.keys[touched_part.part]}`),
  });
}

function print_touch_info(cid) {
  const chara = get_chara_talk(cid);
  const me = get_chara_talk(0);
  const temp = [
    [
      {
        columns: [
          {
            config: {
              content: i18n().sex.touch_header_template.replace(
                '%NAME%',
                me.name,
              ),
              position: 'left',
              width: 23,
            },
            type: 'divider',
          },
          {
            config: { align: 'center', width: 23 },
            content:
              di18n.sex.motion_info[era.get('tcvar:0:体位')][
                era.get('tcvar:0:朝向')
              ],
            type: 'text',
          },
        ],
        config: { width: 6 },
      },
      {
        columns: [
          {
            config: {
              content: i18n().sex.touch_header_template.replace(
                '%NAME%',
                chara.name,
              ),
              offset: 1,
              position: 'right',
              width: 23,
            },
            type: 'divider',
          },
          {
            config: { align: 'center', offset: 1, width: 23 },
            content:
              di18n.sex.motion_info[era.get(`tcvar:${cid}:体位`)][
                era.get(`tcvar:${cid}:朝向`)
              ],
            type: 'text',
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
              content: i18n().sex.sm_header_template.replace('%NAME%', me.name),
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
              content: i18n().sex.sm_header_template.replace(
                '%NAME%',
                chara.name,
              ),
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
    const part_abbr = __(`body_part.a_${part_enum.keys[part]}`);
    const my_touch = get_part_touch(0, part);
    if (my_touch) {
      if (part_index < touch_list.length - 2) {
        temp[0][0].columns.push(
          {
            config: { width: 3 },
            content: part_abbr,
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
            content: part_abbr,
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
    const other_touch = get_part_touch(cid, part);
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
            content: part_abbr,
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
            content: part_abbr,
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
