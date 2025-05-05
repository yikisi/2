const era = require('#/era-electron');

const { sys_get_debuff } = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { attr_change_colors, motivation_colors } = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const RyokaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-344');
const recruit_flags = require('#/data/event/recruit-flags');
const extra_base = require('#/data/extra-base');
const { location_enum } = require('#/data/locations');
const {
  attr_enum,
  attr_names,
  motivation_names,
} = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} val
 * @returns {boolean}
 */
function sys_change_motivation(chara_id, val) {
  if (!chara_id || era.get(`cflag:${chara_id}:育成回合计时`) >= 3 * 48) {
    return false;
  }
  if (val > 0 && era.get(`status:${chara_id}:偏头痛`)) {
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
  const motivation = era.get(`cflag:${chara_id}:干劲`),
    motivation_limit = Math.max(
      Math.min(
        2 -
          Math.floor(era.get(`base:${chara_id}:压力`) / 2500) +
          get_custom_mec(chara_id).get_motivation_limit(),
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
}

/**
 * @param {number} chara_id
 * @param {number} _val
 */
function sys_change_lust(chara_id, _val) {
  era.add(
    `base:${chara_id}:性欲`,
    _val > 0
      ? Math.ceil(
          _val *
            (1 +
              0.2 * era.get(`talent:${chara_id}:淫乱`) +
              0.5 * era.get(`status:${chara_id}:发情`) +
              0.1 * era.get(`status:${chara_id}:排卵期`) +
              0.05 * era.get(`status:${chara_id}:经期`)),
        )
      : Math.ceil(_val),
  );
}

/**
 * @param {number} chara_id
 * @param {number} _val
 */
function sys_change_pressure(chara_id, _val) {
  if (!_val) {
    return era.get(`base:${chara_id}:压力`);
  }
  if (_val > 0) {
    const { buff } = new RyokaLifeMarks();
    _val *=
      1 +
      0.2 * era.get(`talent:${chara_id}:羞耻忍耐`) +
      get_custom_mec(chara_id).get_pressure_buff() -
      0.2 * buff;
    if (era.get(`cflag:${chara_id}:育成回合计时`) >= 3 * 48) {
      _val /= 2;
    }
  }
  const ret =
    era.get('flag:压力获取') &&
    chara_id &&
    era.add(`base:${chara_id}:压力`, _val);
  sys_change_motivation(chara_id, 0);
  return ret;
}

module.exports = {
  /**
   * @param {number} chara_id
   * @param {string|number} attr_id_or_name
   * @param {number} change
   * @returns {*[]}
   */
  sys_change_attr_and_print(chara_id, attr_id_or_name, change) {
    if (!change) {
      return [];
    }
    let attr_name = attr_id_or_name;
    if (typeof attr_id_or_name === 'number') {
      attr_name = attr_names[attr_id_or_name];
    }
    const val = era.get(`base:${chara_id}:${attr_name}`),
      max = era.get(`maxbase:${chara_id}:${attr_name}`),
      ret = [];
    if (typeof attr_id_or_name === 'string') {
      if (change < 0) {
        let debuff =
          sys_get_debuff(chara_id) +
          (era.get('flag:当前位置') === location_enum.beach &&
            attr_id_or_name === '体力') *
            0.2;
        if (debuff <= 10) {
          change = Math.floor(change * (debuff + 1));
        }
        if (attr_id_or_name === '体力') {
          let lose_weight =
            1 -
            0.4 * era.get(`status:${chara_id}:发胖`) +
            era.get(`status:${chara_id}:健康茶`);
          if (era.get('cflag:207:招募状态') === recruit_flags.yes) {
            lose_weight += 0.5;
          }
          era.add(`base:${chara_id}:体重偏差`, lose_weight * change);
          sys_change_pressure(chara_id, get_random_value(change / 5, 0));
          era.add(`base:${chara_id}:耐力`, Math.min(-change / 500, 1));
          if (era.get(`base:${chara_id}:体力`) < 0.45 * max) {
            era.add(`base:${chara_id}:耐力`, Math.random());
          }
        } else {
          sys_change_lust(chara_id, get_random_value(change, 0) / 4);
          let lose_pressure = get_random_value(change / 10, 0);
          if (era.get('cflag:344:招募状态') === recruit_flags.yes) {
            lose_pressure *= 1.5;
          }
          sys_change_pressure(chara_id, lose_pressure);
          era.add(`base:${chara_id}:智力`, Math.min(-change / 500, 1));
          if (era.get(`base:${chara_id}:精力`) < 0.5 * max) {
            era.add(`base:${chara_id}:智力`, Math.random());
          }
        }
      }
      if (change > 0) {
        change = Math.max(change, 1);
      } else {
        change = Math.min(change, -1);
      }
    } else if (
      chara_id &&
      !(era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48)
    ) {
      return [];
    } else if (
      attr_id_or_name === attr_enum.speed &&
      era.get(`status:${chara_id}:发胖`)
    ) {
      return [];
    }
    if (change > max - val) {
      change = max - val;
    }
    if (change + val < 0) {
      change = 0 - val;
    }
    if (change) {
      era.add(`base:${chara_id}:${attr_name}`, change);
      const stat = Math.floor(Math.abs(change));
      ret.push(
        {
          color: attr_colors[attr_name],
          content: attr_name,
        },
        change > 0
          ? {
              color: attr_change_colors.up,
              content: ' 上升',
            }
          : {
              color: attr_change_colors.down,
              content: ' 下降',
            },
        ' 了',
        stat >= 1
          ? {
              color: attr_colors[attr_name],
              content: ` ${stat.toLocaleString()}`,
            }
          : '',
      );
    }
    return ret;
  },
  sys_change_lust,
  sys_change_motivation,
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
    const maxbase_buff =
      get_custom_mec(chara_id).get_maxbase_buff() -
      (era.get(`cflag:${chara_id}:妊娠阶段`) ===
        1 << pregnant_stage_enum.resume &&
        (era.get(`cflag:${chara_id}:妊娠回合计时`) - 1) * 100);
    const { stamina: extra_stamina, time: extra_time } =
      chara_id === 0 ? extra_base : { stamina: 0, time: 0 };
    era.set(
      `maxbase:${chara_id}:体力`,
      Math.max(
        Math.floor(
          era.get(`staticbase:${src_chara_id}:体力`) +
            era.get(`base:${chara_id}:耐力`) / 2 +
            maxbase_buff +
            extra_stamina,
        ),
        200,
      ),
    );
    era.set(
      `maxbase:${chara_id}:精力`,
      Math.max(
        Math.floor(
          era.get(`staticbase:${src_chara_id}:精力`) +
            era.get(`base:${chara_id}:智力`) / 2 +
            maxbase_buff +
            extra_time,
        ),
        200,
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
   * @param {number} [chara_id=0]
   */
  sys_handle_action(cost, chara_id = 0) {
    era.add('base:0:体力', -cost.stamina);
    era.add('base:0:精力', -cost.time);
    if (chara_id > 0) {
      era.add(`base:${chara_id}:体力`, -cost.stamina);
      era.add(`base:${chara_id}:精力`, -cost.time);
    }
  },
  /** @returns {{curr:{race:number,week:number},last:{race:number,week:number}}} */
  sys_reg_race(chara_id) {
    const ret =
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
      });
    Object.preventExtensions(ret);
    Object.preventExtensions(ret.curr);
    Object.preventExtensions(ret.last);
    return ret;
  },
};
