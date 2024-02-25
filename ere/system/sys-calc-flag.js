const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /** @param {number} _val */
  sys_change_fame(_val) {
    let delta = _val;
    if (!_val) {
      return 0;
    }
    if (delta < 0) {
      if (era.get('flag:惩戒力度') === 3) {
        return 0;
      }
      delta = Math.min(
        delta *
          (1 - (era.get('cflag:303:招募状态') === recruit_flags.yes) * 0.2),
        -1,
      );
    } else {
      delta = Math.max(
        delta *
          (1 +
            (era.get('cflag:303:招募状态') === recruit_flags.yes) * 0.2 +
            era.get('global:声望加成') / 100),
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
    let val = _val;
    if (!_val) {
      return 0;
    }
    const cur_chara = era.get('flag:当前互动角色') || chara_id;
    if (val > 0) {
      val *= 1 + era.get('global:金钱加成') / 100;
    } else {
      const delta = Math.max(1, -val * 0.05);
      val -=
        delta *
        (era.get('talent:0:消费观念') +
          (cur_chara ? era.get(`talent:${cur_chara}:消费观念`) : 0));
    }
    val = Math.floor(val);
    era.add('flag:当前马币', val);
    return val;
  },
  sys_push_crazy_fan(chara_id) {
    if (era.get('flag:游戏结束') > 0) {
      if (chara_id) {
        era.get('flag:极端粉丝').push(chara_id);
      } else {
        console.log(new Error(`error! invalid crazy fan ${chara_id}`).stack);
      }
    }
  },
};
