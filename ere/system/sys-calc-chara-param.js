const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { log_600m2 } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { lust_border } = require('#/data/ero/orgasm-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { location_move_cost, vehicle_influences } = require('#/data/move-const');
const { track_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');
const {
  attr_enum,
  fail_sta_border,
  pressure_border,
} = require('#/data/train-const');

/**
 * @param {number} cid
 * @returns {boolean}
 */
function sys_check_awake(cid) {
  // STATUSNAME:10 = 沉睡
  // STATUSNAME:39 = 马跳S
  return !era.get(`status:${cid}:10`) && !era.get(`status:${cid}:39`);
}

/** @param {number} cid */
function sys_get_motivation(cid) {
  // STATUSNAME:2 = 摸鱼
  if (era.get(`status:${cid}:2`) > 0) {
    return -4;
  }
  // CFLAGNAME:40 = 干劲
  let motivation = era.get(`cflag:${cid}:40`);
  if (motivation === 2) {
    // 结算三老登的效果
    for (let c = 346; c <= 348; ++c) {
      // CFLAGNAME:66 = 招募状态
      if (era.get(`cflag:${c}:66`) === recruit_flags.yes) {
        motivation += LifeEventMarks.get_marks(c).buff > 0 ? 1 : 0.5;
      }
    }
  }
  return motivation;
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

const pg_stage_train_disabled =
  (1 << pregnant_stage_enum.resume) +
  (1 << pregnant_stage_enum.late) +
  (1 << pregnant_stage_enum.pre_birth);

function check_train_disabled(
  cid,
  pg_stage = era.get(`cflag:${cid}:妊娠阶段`),
) {
  return (
    (era.get(`status:${cid}:超马跳Z`) ||
      era.get(`status:${cid}:马跳S`) ||
      era.get(`status:${cid}:沉睡`)) *
      0b10 +
    (pg_stage & pg_stage_train_disabled)
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
    (pregnant_stage & pg_stage_train_disabled) >
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
    // FLAGNAME:7 = 当前赛事
    const cur_race = era.get('flag:7');
    return (
      cid > 0 &&
      // CFLAGNAME:45 = 位置
      era.get(`cflag:${cid}:45`) !== era.get('cflag:0:45') &&
      (!cur_race ||
        race_infos[cur_race].track >= track_enum.longchamp ||
        era.get('cflag:0:45') !== 0)
    );
  },
  sys_check_train_enabled,
  sys_check_train_disabled: check_train_disabled,
  sys_get_debuff,
  sys_get_discount(cid) {
    // CFLAGNAME:49 = 育成次数
    return Math.min(era.get(`cflag:${cid}:49`) * 0.015, 0.1);
  },
  sys_get_motivation,
  sys_get_move_cost,
  /**
   * @param {number} cid train target
   * @param {number} type train type
   * @param {number} extra_buff
   * @returns {number} success rate, 0-100
   */
  sys_get_succ_rate(cid, type, extra_buff) {
    // BASENAME:0 = 体力
    let stamina_ratio = era.get(`base:${cid}:0`) / era.get(`maxbase:${cid}:0`);
    let ret = 100;

    // 体力低于阈值时训练有可能失败
    // 智力训练30%，其他50%
    const border_fail =
      type === attr_enum.intelligence
        ? fail_sta_border.intelligence
        : fail_sta_border.other;
    if (stamina_ratio < border_fail) {
      // 线性降至0
      ret = (stamina_ratio * 100) / border_fail;
    }
    // 属性超过400以后，越接近满百越难提升，最多-10%成功率
    // BASENAME:5 - 9 = 速度 - 智力
    const attr = era.get(`base:${cid}:${5 + type}`);
    if (attr > 400) {
      ret += -(10 * (attr % 100)) / 100;
    }
    // 训练等级带来的额外成功率，分别为0%、1%、2%、3%、5%
    // ABL:0 - 4 = 速度训练等级 - 智力训练等级
    ret += 1.25 * (era.get(`abl:${cid}:${type}`) - 1);

    // 结算状态加成
    ret +=
      // STATUSNAME:0 = 练习X手
      2 * era.get(`status:${cid}:0`) +
      extra_buff +
      2.5 * sys_get_motivation(cid) -
      // BASENAME:11 = 压力
      era.get(`base:${cid}:11`) / 500 -
      // STATUSNAME:6 = 疲惫
      10 * era.get(`status:${cid}:6`) -
      // STATUSNAME:8 = 水土不服
      10 * era.get(`status:${cid}:8`) +
      get_custom_mec(cid).get_success_rate_buff();
    // 结算淫纹
    const inmon = CharaInmon.get(cid);
    ret +=
      10 * inmon.on(plugin_enum.tra_1) +
      20 * inmon.on(plugin_enum.tra_2) +
      270 * inmon.on(plugin_enum.tra_3);

    // FLAGNAME:100 = 训练难度
    ret *= (100 + era.get('flag:100')) / 100;

    return Math.floor(Math.max(Math.min(ret, 100), 0));
  },
};
