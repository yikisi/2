const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number[]} [attr_change]
 * @param {number} [pt_change]
 * @param {number[]} [base_change]
 * @param {boolean} [skip_line_break]
 * @returns {boolean}
 */
function get_attr_and_print_in_event(
  cid,
  attr_change = [],
  pt_change = 0,
  base_change = [],
  skip_line_break = false,
) {
  if (!skip_line_break) {
    era.println();
  }
  let buffer = base_attr_list
    .map((i) => sys_change_attr_and_print(cid, i, attr_change[i] ?? 0))
    .filter(({ length }) => length > 0);
  let ret;
  if ((pt_change ||= 0) > 0) {
    buffer.push([
      {
        content: i18n().ui_get_pt_template.replace(
          '%PT%',
          pt_change.toString(),
        ),
      },
    ]);
    era.add(`exp:${cid}:技能点数`, pt_change);
  }
  if (base_change.length > 2) {
    base_change = base_change.slice(0, 2);
  }
  const base_buffer = base_change
    .map((e, i) => sys_change_attr_and_print(cid, attr_enum.hp + i, e))
    .filter((e) => e.length);
  buffer = [...base_buffer, ...buffer];
  if ((ret = buffer.length > 0)) {
    era.printMultiColumns([
      {
        content: i18n().get_ui_reward_header(
          get_chara_talk(cid).get_colored_name(),
        ),
        type: 'text',
      },
      ...buffer.map((e) => ({
        config: { offset: 1, width: 23 },
        content: e,
        type: 'text',
      })),
    ]);
  }
  return ret;
}

module.exports = get_attr_and_print_in_event;
