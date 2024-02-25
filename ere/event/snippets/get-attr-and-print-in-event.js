const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {number} chara_id
 * @param {number[]} attr_change
 * @param {number} pt_change
 * @param {Record<string,number>} [base_change]
 * @returns {boolean}
 */
function get_attr_and_print_in_event(
  chara_id,
  attr_change,
  pt_change,
  base_change,
) {
  era.println();
  let buffer = (attr_change || new Array(5))
    .map((e, i) => sys_change_attr_and_print(chara_id, i, e))
    .filter((e) => e.length);
  let ret_flag = false;
  if (pt_change) {
    buffer.push([{ content: `获得了 ${pt_change} 点技能点数！` }]);
    era.add(`exp:${chara_id}:技能点数`, pt_change);
    ret_flag = true;
  }
  const base_buffer = Object.entries(base_change || {})
    .map((e) => sys_change_attr_and_print(chara_id, e[0], e[1]))
    .filter((e) => e.length);
  buffer = [...base_buffer, ...buffer];
  buffer.length &&
    era.printMultiColumns([
      {
        content: [
          get_chara_talk(chara_id).get_colored_name(),
          ' 的属性有了如下变化：',
        ],
        type: 'text',
      },
      ...buffer.map((e) => {
        ret_flag = true;
        return {
          config: { offset: 1, width: 23 },
          content: e,
          type: 'text',
        };
      }),
    ]);
  return ret_flag;
}

module.exports = get_attr_and_print_in_event;
