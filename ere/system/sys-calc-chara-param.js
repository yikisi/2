const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
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
 * @param {number} cid
 * @returns {boolean}
 */
function sys_check_awake(cid) {
  return !era.get(`status:${cid}:沉睡`) && !era.get(`status:${cid}:马跳S`);
}

/**
 * @param {number} cid
 * @returns {boolean}
 */
function sys_check_train_enabled(cid = 0) {
  return (
    era.get(`cflag:${cid}:种族`) > 0 &&
    !era.get(`status:${cid}:伤病`) &&
    (era.get(`cflag:${cid}:育成回合计时`) < 3 * 48 || !cid) &&
    (!era.get(`status:${cid}:摸鱼`) ||
      era.get('cflag:0:位置') === era.get(`cflag:${cid}:位置`)) &&
    era.get(`base:${cid}:压力`) < pressure_border.depression &&
    era.get(`base:${cid}:性欲`) < lust_border.want_sex &&
    get_custom_mec(cid).is_train_enabled()
  );
}

/**
 * @param {number} cid
 * @returns {number}
 */
function sys_get_debuff(cid) {
  const pregnant_stage = era.get(`cflag:${cid}:妊娠阶段`);
  const lust = era.get(`base:${cid}:性欲`);
  let ret = 0;
  if (
    era.get(`status:${cid}:超马跳Z`) ||
    era.get(`status:${cid}:马跳S`) ||
    era.get(`status:${cid}:沉睡`)
  ) {
    ret = 1000;
  } else if (
    // 恢复期和孕晚期之后不许训
    (pregnant_stage & 0b110001) >
    0
  ) {
    ret = 0.5;
  } else if (
    era.get(`status:${cid}:发情`) ||
    era.get(`status:${cid}:马跳Z`) ||
    era.get(`status:${cid}:弗隆K`) ||
    era.get(`status:${cid}:弗隆P`) ||
    lust >= lust_border.want_sex ||
    // 安定期惩罚一般
    (pregnant_stage & 0b1000) > 0
  ) {
    ret = 0.2;
  } else if (
    era.get(`status:${cid}:经期`) ||
    era.get(`status:${cid}:熬夜`) ||
    era.get(`status:${cid}:发胖`) ||
    lust >= lust_border.absent_mind ||
    // 孕早期惩罚较小
    (pregnant_stage & 0b100) > 0
  ) {
    ret = 0.1;
  }
  ret +=
    0.1 * era.get(`status:${cid}:领域`) +
    get_custom_mec(cid).get_action_debuff();
  return ret;
}

/**
 * @param {number} location
 * @param {number} cid
 * @returns {{stamina:*,time:*}}
 */
function sys_get_move_cost(location, cid = 0) {
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
      if (cid > 0) {
        is_walk = true;
        speed = Math.min(speed, era.get(`base:${cid}:速度`));
      } else if ((temp = era.get('flag:单人载具')) > 0) {
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
      if (cid > 0) {
        if ((temp = era.get('flag:多人载具')) > 0) {
          ratio = vehicle_influences[temp];
        } else {
          is_walk = true;
          speed = Math.min(speed, era.get(`base:${cid}:速度`));
        }
      } else if (
        (temp = era.get('flag:多人载具') || era.get('flag:单人载具')) > 0
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
   * @param {{stamina:number,time:number}} [chara_base={}]
   * @return {number}
   */
  sys_check_act_disabled(cost, player_base, chara_base = {}) {
    const checks = [
      player_base.stamina < cost.stamina,
      player_base.time < cost.time,
      chara_base.stamina < cost.stamina,
      chara_base.time < cost.time,
    ];
    let ret = 0;
    for (let i = 0; i < 4; ++i) {
      if (checks[i] === true) {
        ret += 1 << i;
      }
    }
    return ret;
  },
  sys_check_awake,
  /**
   * @param {number} cid
   * @returns {number} 0b1：普通迷雾，隐藏好感爱慕；0b10：病娇迷雾，隐藏好感
   */
  sys_check_hide_relation_and_love(cid) {
    const hide_talent = era.get(`talent:${cid}:捉摸不透`) > 0;
    const not_in_basement = era.get('flag:当前位置') !== location_enum.basement;
    const advanced_info = not_in_basement && era.get('status:0:马语者') > 0;
    const glasses = not_in_basement && era.get('status:0:好感度镜片') > 0;
    return (
      !advanced_info &&
      (cid > 0 &&
        (hide_talent || era.get(`talent:${cid}:坦率程度`) === -1) &&
        (cid === 32 || !glasses) &&
        era.get(`love:${cid}`) < 75) +
        0b10 * (hide_talent && sys_check_yandere(cid, (y) => y === 2))
    );
  },
  /** @param {number} cid */
  sys_check_limit_relation_and_love(cid) {
    return (
      cid > 0 &&
      era.get(`status:${cid}:爱意克制`) > 0 &&
      era.get(`love:${cid}`) > 0 &&
      !era.get('status:0:马语者')
    );
  },
  /**
   * @param {number} cid
   * @param {boolean} [between_weeks=false]
   * @returns {boolean}
   */
  sys_check_race_ready(cid, between_weeks = false) {
    let debuff = sys_get_debuff(cid);
    if (debuff >= 0.5) {
      debuff = 1000;
    }
    return (
      sys_check_train_enabled(cid) &&
      (between_weeks || sys_check_awake(cid)) &&
      check_pregnant_unprotect(cid) &&
      era.get(`base:${cid}:体力`) >= 150 * (1 + debuff) &&
      era.get(`base:${cid}:精力`) >= 150 * (1 + debuff)
    );
  },
  /**
   * @param {number} cid
   * @returns {boolean}
   */
  sys_check_remote(cid) {
    const cur_race = era.get('flag:当前赛事');
    return (
      cid > 0 &&
      era.get(`cflag:${cid}:位置`) !== era.get('cflag:0:位置') &&
      (!cur_race ||
        race_infos[cur_race].track >= track_enum.longchamp ||
        era.get('cflag:0:位置') !== 0)
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
