const era = require('#/era-electron');

const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { log_600m2 } = require('#/utils/value-utils');

const { lust_border } = require('#/data/ero/orgasm-const');
const { location_enum } = require('#/data/locations');
const { location_move_cost, vehicle_influences } = require('#/data/move-const');
const { track_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');
const {
  attr_enum,
  attr_names,
  fail_sta_border,
  pressure_border,
} = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @returns {boolean}
 */
function sys_check_awake(chara_id) {
  return (
    !era.get(`status:${chara_id}:沉睡`) && !era.get(`status:${chara_id}:马跳S`)
  );
}

/**
 * @param {number} chara_id
 * @returns {boolean}
 */
function sys_check_train_enabled(chara_id) {
  const tmp = chara_id || 0;
  return (
    (tmp || era.get(`cflag:${tmp}:种族`)) &&
    !era.get(`status:${tmp}:伤病`) &&
    (era.get(`cflag:${tmp}:育成回合计时`) < 3 * 48 || !chara_id) &&
    (!era.get(`status:${tmp}:摸鱼`) ||
      era.get('cflag:0:位置') === era.get(`cflag:${tmp}:位置`)) &&
    era.get(`base:${tmp}:压力`) < pressure_border.depression &&
    era.get(`base:${tmp}:性欲`) < lust_border.want_sex &&
    get_custom_mec(chara_id).is_train_enabled()
  );
}

/**
 * @param {number} chara_id
 * @returns {number}
 */
function sys_get_debuff(chara_id) {
  const pregnant_stage = era.get(`cflag:${chara_id}:妊娠阶段`);
  const lust = era.get(`base:${chara_id}:性欲`);
  let ret = 0;
  if (
    era.get(`status:${chara_id}:超马跳Z`) ||
    era.get(`status:${chara_id}:马跳S`) ||
    era.get(`status:${chara_id}:沉睡`)
  ) {
    ret = 1000;
  } else if (
    // 恢复期和孕晚期之后不许训
    (pregnant_stage & 0x31) >
    0
  ) {
    ret = 0.5;
  } else if (
    era.get(`status:${chara_id}:发情`) ||
    era.get(`status:${chara_id}:马跳Z`) ||
    era.get(`status:${chara_id}:弗隆K`) ||
    era.get(`status:${chara_id}:弗隆P`) ||
    lust >= lust_border.want_sex ||
    // 安定期惩罚一般
    (pregnant_stage & 0x8) > 0
  ) {
    ret = 0.2;
  } else if (
    era.get(`status:${chara_id}:经期`) ||
    era.get(`status:${chara_id}:熬夜`) ||
    era.get(`status:${chara_id}:发胖`) ||
    lust >= lust_border.absent_mind ||
    // 孕早期惩罚较小
    (pregnant_stage & 0x4) > 0
  ) {
    ret = 0.1;
  }
  ret +=
    0.1 * era.get(`status:${chara_id}:领域`) +
    get_custom_mec(chara_id).get_action_debuff();
  return ret;
}

/**
 * @param {number} location
 * @param {number} [chara_id]
 * @returns {{stamina:*,time:*}}
 */
function sys_get_move_cost(location, chara_id) {
  const move_cost = location_move_cost[location];
  const ret = {
    stamina: move_cost,
    time: move_cost,
  };
  let is_walk = false,
    ratio = { stamina: 1, time: 1 },
    speed = era.get('base:0:速度'),
    temp;
  switch (location) {
    case location_enum.playground:
    case location_enum.atrium:
    case location_enum.rooftop:
    case location_enum.gate:
    case location_enum.chairman:
    case location_enum.god:
    case location_enum.trainer:
    case location_enum.visitor:
    case location_enum.clinic:
      if (chara_id) {
        is_walk = true;
        speed = Math.min(speed, era.get(`base:${chara_id}:速度`));
      } else if ((temp = era.get('flag:单人载具'))) {
        ratio = vehicle_influences[temp];
      } else {
        is_walk = true;
      }
      break;
    case location_enum.river:
    case location_enum.shopping:
    case location_enum.church:
    case location_enum.station:
    case location_enum.mejiro:
      if (chara_id) {
        if ((temp = era.get('flag:多人载具'))) {
          ratio = vehicle_influences[temp];
        } else {
          is_walk = true;
          speed = Math.min(speed, era.get(`base:${chara_id}:速度`));
        }
      } else if (
        (temp = era.get('flag:多人载具') || era.get('flag:单人载具'))
      ) {
        ratio = vehicle_influences[temp];
      } else {
        is_walk = true;
      }
      break;
  }
  if (is_walk) {
    ratio.time = 1 - Math.min(Math.log(speed / 2 + 1) / log_600m2, 0.6);
  }
  ret.stamina = Math.ceil(ret.stamina * ratio.stamina);
  ret.time = Math.ceil(ret.time * ratio.time);
  return ret;
}

module.exports = {
  /**
   * @param {{stamina:number,time:number}} cost
   * @param {{stamina:number,time:number}} player_base
   * @param {{stamina:number,time:number}} [chara_base]
   */
  sys_check_act_disabled(cost, player_base, chara_base) {
    return (
      player_base.stamina < cost.stamina ||
      player_base.time < cost.time ||
      (chara_base &&
        (chara_base.stamina < cost.stamina || chara_base.time < cost.time))
    );
  },
  sys_check_awake,
  /** @param {number} chara_id */
  sys_check_hide_relation_and_love(chara_id) {
    return (
      chara_id &&
      (era.get(`talent:${chara_id}:捉摸不透`) ||
        era.get(`talent:${chara_id}:坦率程度`) === -1) &&
      (chara_id === 32 ||
        (!era.get('status:0:马语者') && !era.get('status:0:好感度镜片'))) &&
      era.get(`love:${chara_id}`) < 75
    );
  },
  /** @param {number} chara_id */
  sys_check_limit_relation_and_love(chara_id) {
    return (
      chara_id &&
      era.get(`status:${chara_id}:爱意克制`) &&
      era.get(`love:${chara_id}`) &&
      (chara_id === 32 ||
        (!era.get('status:0:马语者') && !era.get('status:0:好感度镜片')))
    );
  },
  /**
   * @param {number} chara_id
   * @param {boolean} [between_weeks]
   * @returns {boolean}
   */
  sys_check_race_ready(chara_id, between_weeks) {
    let debuff = sys_get_debuff(chara_id);
    if (debuff >= 0.5) {
      debuff = 1000;
    }
    return (
      sys_check_train_enabled(chara_id) &&
      (between_weeks === true || sys_check_awake(chara_id)) &&
      check_pregnant_unprotect(chara_id) &&
      era.get(`base:${chara_id}:体力`) >= 150 * (1 + debuff) &&
      era.get(`base:${chara_id}:精力`) >= 150 * (1 + debuff)
    );
  },
  /**
   * @param {number} chara_id
   * @returns {boolean}
   */
  sys_check_remote(chara_id) {
    return (
      chara_id > 0 &&
      era.get(`cflag:${chara_id}:位置`) !== era.get('cflag:0:位置') &&
      (race_infos[era.get('flag:当前赛事')].track >= track_enum.longchamp ||
        era.get('cflag:0:位置') !== location_enum.office)
    );
  },
  sys_check_train_enabled,
  sys_get_debuff,
  sys_get_move_cost,
  /**
   * @param {number} target train target
   * @param {number} type train type
   * @param {number} extra_buff
   * @returns {number} success rate, 0-100
   */
  sys_get_succ_rate(target, type, extra_buff) {
    let stamina_max = era.get(`maxbase:${target}:体力`);
    let stamina_cur = era.get(`base:${target}:体力`);

    let stamina_ratio = stamina_cur / stamina_max;
    let success_rate = 100;

    // 体力低于阈值时训练有可能失败
    // 智力训练30%，其他50%
    const border_fail =
      type === attr_enum.intelligence
        ? fail_sta_border.intelligence
        : fail_sta_border.other;
    if (stamina_ratio < border_fail) {
      // 线性降至0
      success_rate = (stamina_ratio * 100) / border_fail;
    }
    // 属性超过400以后，越接近满百越难提升，各+-5%成功率
    const attr = era.get(`base:${target}:${attr_names[type]}`);
    if (attr > 400) {
      success_rate += 5 - (10 * (attr % 100)) / 100;
    }
    // 训练等级带来的额外成功率，分别为0%、1%、2%、3%、5%
    success_rate +=
      1.25 * (era.get(`abl:${target}:${attr_names[type]}训练等级`) - 1);

    // 结算状态加成
    success_rate +=
      2 * era.get(`status:${target}:练习X手`) +
      (extra_buff || 0) -
      10 * era.get(`status:${target}:摸鱼`) -
      era.get(`base:${target}:压力`) / 500 -
      10 * era.get(`status:${target}:疲惫`) -
      10 * era.get(`status:${target}:水土不服`) +
      get_custom_mec(target).get_success_rate_buff();

    success_rate *= (100 + era.get('flag:训练难度')) / 100;

    success_rate = Math.floor(success_rate);

    if (success_rate < 0) {
      success_rate = 0;
    } else if (success_rate > 100) {
      success_rate = 100;
    }

    return success_rate;
  },
};
