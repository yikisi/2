const era = require('#/era-electron');

const sys_call_mec = require('#/system/script/sys-call-mec');
const { sys_get_debuff } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { motivation_colors, attr_change_colors } = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const check_stages = require('#/data/event/check-stages');
const { location_enum } = require('#/data/locations');
const {
  motivation_names,
  attr_names,
  attr_enum,
} = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} _val
 */
function sys_change_lust(chara_id, _val) {
  era.add(
    `base:${chara_id}:性欲`,
    _val > 0
      ? Math.ceil(_val * (1 + 0.2 * era.get(`talent:${chara_id}:淫乱`)))
      : Math.ceil(_val),
  );
}

/**
 * @param {number} chara_id
 * @param {number} _val
 */
function sys_change_pressure(chara_id, _val) {
  return (
    era.get('flag:压力获取') &&
    chara_id &&
    era.add(
      `base:${chara_id}:压力`,
      _val > 0
        ? Math.ceil(
            (_val *
              (1 +
                0.2 * era.get(`talent:${chara_id}:羞耻忍耐`) +
                sys_call_mec(chara_id, check_stages.mec_pressure_buff))) /
              (1 +
                (era.get('flag:当前回合数') -
                  era.get(`cflag:${chara_id}:育成回合计时`) >=
                  3 * 48)),
          )
        : _val,
    )
  );
}

module.exports = {
  /**
   * @param {number} chara_id
   * @param {string|number} attr_id_or_name
   * @param {number} change
   * @returns {*[]}
   */
  sys_change_attr_and_print(chara_id, attr_id_or_name, change) {
    let stat = Math.floor(change);
    if (!stat) {
      return [];
    }
    const attr_name =
        typeof attr_id_or_name === 'number'
          ? attr_names[attr_id_or_name]
          : attr_id_or_name,
      val = era.get(`base:${chara_id}:${attr_name}`),
      max = era.get(`maxbase:${chara_id}:${attr_name}`),
      ret = [];
    if (typeof attr_id_or_name === 'string') {
      if (stat < 0) {
        let debuff =
          sys_get_debuff(chara_id) +
          (era.get('flag:当前位置') === location_enum.beach &&
            attr_id_or_name === '体力') *
            0.2;
        stat = Math.floor(stat * (debuff > 10 ? 1 : debuff + 1));
        if (attr_id_or_name === '体力') {
          let lose_weight =
            stat *
            (1 -
              0.4 * era.get(`status:${chara_id}:发胖`) +
              era.get(`status:${chara_id}:健康茶`));
          era.add(`base:${chara_id}:体重偏差`, Math.ceil(lose_weight));
          sys_change_pressure(chara_id, get_random_value(stat / 5, 0));
          if (
            -stat >= 500 ||
            Math.random() < Math.pow(2, (-stat - 500) / 100)
          ) {
            era.add(
              `base:${chara_id}:耐力`,
              1 +
                (era.get(`base:${chara_id}:体力`) <
                  0.45 * era.get(`maxbase:${chara_id}:体力`)),
            );
          }
        } else {
          sys_change_lust(chara_id, get_random_value(stat, 0) / 4);
          sys_change_pressure(chara_id, get_random_value(stat / 10, 0));
          if (
            -stat >= 500 ||
            Math.random() < Math.pow(2, (-stat - 500) / 100)
          ) {
            era.add(
              `base:${chara_id}:智力`,
              1 +
                (era.get(`base:${chara_id}:精力`) <
                  0.5 * era.get(`maxbase:${chara_id}:精力`)),
            );
          }
        }
      }
    } else if (
      era.get('flag:当前回合数') - era.get(`cflag:${chara_id}:育成回合计时`) >=
      3 * 48
    ) {
      return [];
    } else if (
      attr_id_or_name === attr_enum.speed &&
      era.get(`status:${chara_id}:发胖`)
    ) {
      return [];
    }
    if (stat > max - val) {
      stat = max - val;
    }
    if (stat + val < 0) {
      stat = 0 - val;
    }
    if (stat) {
      era.add(`base:${chara_id}:${attr_name}`, stat);
      ret.push(
        {
          color: attr_colors[attr_name],
          content: attr_name,
        },
        stat > 0
          ? {
              color: attr_change_colors.up,
              content: ' 上升',
            }
          : {
              color: attr_change_colors.down,
              content: ' 下降',
            },
        ' 了 ',
        {
          color: attr_colors[attr_name],
          content: (stat > 0 ? stat : -stat).toLocaleString(),
        },
      );
    }
    return ret;
  },
  sys_change_lust,
  /**
   * @param {number} chara_id
   * @param {number} val
   * @returns {boolean}
   */
  sys_change_motivation(chara_id, val) {
    if (
      !chara_id ||
      era.get('flag:当前回合数') - era.get(`cflag:${chara_id}:育成回合计时`) >=
        3 * 48
    ) {
      return false;
    }
    if (val > 0 && era.get(`status:${chara_id}:头风`)) {
      return false;
    }
    const delta_change = era.get(`talent:${chara_id}:情感活动`);
    let delta = val;
    if (delta > 1) {
      delta += delta_change;
    }
    if (delta < -1) {
      delta -= delta_change;
    }
    const motivation = era.get(`cflag:${chara_id}:干劲`) || 0,
      motivation_limit = Math.max(
        Math.min(
          2 -
            Math.floor(era.get(`base:${chara_id}:压力`) / 2500) +
            sys_call_mec(chara_id, check_stages.mec_motivation),
          2,
        ),
        -2,
      ),
      new_val = Math.max(Math.min(motivation + delta, motivation_limit), -2);
    if (new_val !== motivation) {
      era.set(`cflag:${chara_id}:干劲`, new_val);
      era.print([
        get_chara_talk(chara_id).get_colored_name(),
        ' 的干劲现在是 ',
        {
          content: `${motivation_names[new_val + 2]}`,
          color: motivation_colors[new_val + 2],
        },
      ]);
      return true;
    }
    return false;
  },
  sys_change_pressure,
  /**
   * @param {number} chara_id
   * @param {number} val
   */
  sys_change_weight(chara_id, val) {
    era.add(
      `base:${chara_id}:体重偏差`,
      val * (10 + era.get(`talent:${chara_id}:进食控制`)),
    );
  },
  /** @param {number} chara_id */
  sys_fix_chara_base(chara_id) {
    let src_chara_id = era.get(`cflag:${chara_id}:模版角色`);
    if (src_chara_id === -1) {
      src_chara_id = chara_id;
    }
    const maxbase_buff = sys_call_mec(chara_id, check_stages.mec_maxbase_buff);
    era.set(
      `maxbase:${chara_id}:体力`,
      Math.floor(
        era.get(`staticbase:${src_chara_id}:体力`) +
          era.get(`base:${chara_id}:耐力`) / 2 +
          maxbase_buff,
      ),
    );
    era.set(
      `maxbase:${chara_id}:精力`,
      Math.floor(
        era.get(`staticbase:${src_chara_id}:精力`) +
          era.get(`base:${chara_id}:智力`) / 2 +
          maxbase_buff,
      ),
    );
  },
  /** @returns {{creditor:number,repay:number,timer:number}[]} */
  sys_get_billings() {
    return (
      era.get('flag:账单') ||
      era.set('flag:账单', [{ creditor: 0, repay: 0, timer: 0 }])
    );
  },
  /**
   * @param {{stamina:number,time:number}} cost
   * @param {number} [chara_id]
   */
  sys_handle_action(cost, chara_id) {
    era.add('base:0:体力', -cost.stamina);
    era.add('base:0:精力', -cost.time);
    if (chara_id) {
      era.add(`base:${chara_id}:体力`, -cost.stamina);
      era.add(`base:${chara_id}:精力`, -cost.time);
    }
  },
  /** @returns {{curr:{race:number,week:number},last:{race:number,week:number}}} */
  sys_reg_race(chara_id) {
    return (
      era.get(`cflag:${chara_id}:出走登记`) ||
      era.set(`cflag:${chara_id}:出走登记`, {
        curr: {
          race: -1,
          week: -1,
        },
        last: {
          race: -1,
          week: -1,
        },
      })
    );
  },
};
