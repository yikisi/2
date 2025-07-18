const era = require('#/era-electron');

const { update_c_j_buff } = require('#/system/ero/sys-prepare-ero');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { palam_colors } = require('#/data/color-const');

/**
 * @param {number} cid
 * @param {string|string[]} keys
 * @param {number|number[]} nums
 */
function add_jewel_reward(cid, keys, nums) {
  const chara = get_chara_talk(cid);
  const key_list = keys instanceof Array ? keys : [keys];
  const num_list = nums instanceof Array ? nums : [nums];
  const buffs = {};
  update_c_j_buff(cid, buffs);
  for (let i = 0; i < Math.min(key_list.length, num_list.length); ++i) {
    const jewel = Math.floor(era.get(`jewel:${cid}:${key_list[i]}`));
    const j_key = key_list[i].substring(0, 2);
    const got_jewel = Math.floor(num_list[i] * (1 + buffs[j_key]));
    era.print([
      chara.get_colored_name(),
      ' 获得了 ',
      j_key,
      '因子：',
      jewel.toLocaleString(),
      ' + ',
      {
        content: got_jewel.toLocaleString(),
        color: palam_colors.notifications[1],
      },
      ' → ',
      era.add(`jewel:${cid}:${key_list[i]}`, got_jewel).toLocaleString(),
    ]);
  }
}

module.exports = add_jewel_reward;
