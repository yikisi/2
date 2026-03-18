const era = require('#/era-electron');

const { update_c_j_buff } = require('#/system/ero/sys-prepare-ero');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const { palam_colors } = require('#/data/color-const');

const { __, i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number|number[]} keys
 * @param {number|number[]} nums
 */
function add_jewel_reward(cid, keys, nums) {
  const chara = get_chara_talk(cid);
  const key_list = Array.isArray(keys) ? keys : [keys];
  const num_list = Array.isArray(nums) ? nums : [nums];
  const buffs = {};
  update_c_j_buff(cid, buffs);
  for (let i = 0; i < Math.min(key_list.length, num_list.length); ++i) {
    const jid = key_list[i];
    const jewel = Math.floor(era.get(`jewel:${cid}:${jid}`));
    const got_jewel = Math.floor(
      num_list[i] * (1 + buffs[i18n('zh-CN').tb_param[jid]]),
    );
    era.print(
      i18n().sex.get_got_jewel_info_oot(
        chara.get_colored_name(),
        __(`tb_param.jewel${jid}`),
        get_abbr_number(jewel),
        { ...get_abbr_number(got_jewel), color: palam_colors.notifications[0] },
        {
          ...get_abbr_number(era.add(`jewel:${cid}:${jid}`, got_jewel)),
          color: palam_colors.notifications[1],
        },
      ),
    );
  }
}

module.exports = add_jewel_reward;
