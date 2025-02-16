const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /** @param {number} _val */
  sys_change_fame(_val) {
    let delta = _val;
    if (!_val) {
      return 0;
    }
    const has_etsuko = era.get('cflag:303:招募状态') === recruit_flags.yes;
    if (delta < 0) {
      if (era.get('flag:惩戒力度') === 3) {
        return 0;
      }
      delta = Math.min(delta * (1 - has_etsuko * 0.1), -1);
    } else {
      delta = Math.max(
        delta * (1 + has_etsuko * 0.1 + era.get('global:声望加成') / 100),
        1,
      );
    }
    delta = Math.floor(delta);
    era.add('flag:当前声望', delta);
    return delta;
  },
  /**
   * @param {number} _val
   * @param {number} [chara_id]
   * @returns {number}
   */
  sys_change_money(_val, chara_id) {
    if (_val === 0) {
      return 0;
    }
    let val = _val;
    const cur_chara = era.get('flag:当前互动角色') || chara_id;
    if (val > 0) {
      val = (val * (100 + era.get('global:金钱加成'))) / 100;
    } else {
      const debuff =
        (chara_id !== -1 ? era.get('talent:0:消费观念') : 0) +
        (cur_chara > 0 ? era.get(`talent:${cur_chara}:消费观念`) : 0);
      if (debuff > 0) {
        val -= Math.max(1, -val * 0.05) * debuff;
      }
    }
    val = Math.floor(val);
    era.add('flag:当前马币', val);
    return val;
  },
};
