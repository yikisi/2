const era = require('#/era-electron');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const {
  height2anal_size,
  height2virgin_size,
} = require('#/data/ero/battle-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  baby_limit,
  erect_border,
  lust_border,
} = require('#/data/ero/orgasm-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/**
 * @param {number} chara_id
 * @param {number} [_virgin_size]
 * @returns {boolean}
 */
function check_pregnant_unprotect(chara_id, _virgin_size) {
  const virgin_size =
    _virgin_size === undefined
      ? era.get(`cflag:${chara_id}:阴道尺寸`)
      : _virgin_size;
  // 男人没孕期保护
  if (virgin_size === 0) {
    return true;
  }
  const race = era.get(`cflag:${chara_id}:种族`),
    pregnant_stage = era.get(`cflag:${chara_id}:妊娠阶段`);
  if (race > 0) {
    // 马娘只有临产期和恢复期有孕期保护
    return (pregnant_stage & 0b100001) === 0;
  } else {
    // 人类只有未怀孕和安定期没保护
    return (
      (pregnant_stage & 0b1010) > 0 ||
      (pregnant_stage !== 1 << pregnant_stage_enum.no &&
        era.get(`cflag:${chara_id}:妊娠回合计时`) < 4)
    );
  }
}

const reversed_no_lubricant_stains = ~(
  (1 << stain_enum.dirt) +
  (1 << stain_enum.wound) +
  (1 << stain_enum.saliva) +
  (1 << stain_enum.virgin)
);

/**
 * get lubrication coefficient
 * @param {number} chara_id owner
 * @param {number} part breast, virgin or anal
 * @returns {boolean}
 */
function check_lubrication(chara_id, part) {
  return (
    (era.get(`stain:${chara_id}:${part_names[part]}`) &
      reversed_no_lubricant_stains) >
    0
  );
}

/**
 * @param {number} chara_id
 * @returns {number}
 */
function get_action_base_check(chara_id) {
  return (
    era.get(`love:${chara_id}`) +
    15 * era.get(`mark:${chara_id}:同心`) +
    10 * era.get(`mark:${chara_id}:欢愉`) -
    5 * (era.get(`mark:${chara_id}:苦痛`) + era.get(`mark:${chara_id}:羞耻`)) -
    15 * era.get(`mark:${chara_id}:反抗`) -
    10 * era.get(`talent:${chara_id}:反抗意愿`)
  );
}

/**
 * @param {number} chara_id
 * @param {boolean} show_true_bust
 * @returns {number}
 */
function get_float_breast_size(chara_id, show_true_bust) {
  let nipple = era.get(`tcvar:${chara_id}:乳突`);
  const down_size = era.get(`cflag:${chara_id}:下胸围`);
  const chara_sex = era.get(`cflag:${chara_id}:性别`);
  let ret =
    era.get(`cflag:${chara_id}:胸围`) +
    5 * (era.get(`talent:${chara_id}:淫乳`) === 2) +
    3 * era.get(`status:${chara_id}:发情`) -
    (era.get(`talent:${chara_id}:乳头类型`) === 2) +
    (nipple || 0) +
    era.get(`base:${chara_id}:体重偏差`) / 2000 +
    LifeEventMarks.get_marks(chara_id).breast_buff;
  // 母乳体质最小A
  if (
    chara_sex - 1 &&
    era.get(`talent:${chara_id}:泌乳`) === 3 &&
    ret < down_size + 10
  ) {
    ret = down_size + 10;
  }
  if (show_true_bust) {
    return ret;
  }
  // 非调教状态隐形巨乳-5cm胸围
  if (
    nipple === undefined &&
    chara_sex - 1 &&
    era.get(`talent:${chara_id}:隐形巨乳`) &&
    ret - down_size > 13
  ) {
    ret = down_size + 13;
  }
  return ret;
}

/**
 * @param {number} chara_id
 * @returns {number}
 */
function get_penis_size(chara_id) {
  const penis_size = era.get(`cflag:${chara_id}:阴茎尺寸`);
  let ret =
    era.get(`status:${chara_id}:弗隆K`) || era.get(`status:${chara_id}:弗隆P`);
  if (era.get(`talent:${chara_id}:凶器`) && ret < 4) {
    ret = 4;
  }
  if (ret) {
    ret = 4 + (penis_size >= 4);
  } else {
    ret = penis_size;
  }
  return ret;
}

/**
 * @param {number} chara_id
 * @returns {number}
 */
function get_sex_acceptable(chara_id) {
  return (
    get_custom_mec(chara_id).get_sex_acceptable() +
    get_action_base_check(chara_id) +
    Math.max(era.get(`base:${chara_id}:性欲`) - 5000, 0) / 200 +
    10 * Math.max(era.get(`flag:惩戒力度`) - 1, 0) +
    15 * era.get(`talent:${chara_id}:工口意愿`) -
    10 * era.get(`talent:${chara_id}:贞洁看法`) -
    50 +
    100 * era.get(`status:${chara_id}:超马跳Z`) -
    100 * !check_pregnant_unprotect(chara_id)
  );
}

module.exports = {
  change_ero_master(new_master) {
    era.set('tflag:主导权', new_master);
    era.set('tflag:前回行动', -1);
    era.set('tflag:对手行动', -1);
    era.set('tflag:当前助手', 0);
    era.set(`tcvar:${new_master}:高潮满足`, 0);
  },
  /**
   * @param {number} chara_id
   * @param {number} [val]
   * @returns {boolean}
   */
  check_erect(chara_id, val) {
    const ret =
      era.get(`status:${chara_id}:弗隆K`) > 0 ||
      era.get(`status:${chara_id}:弗隆P`) > 0 ||
      (get_penis_size(chara_id) > 0 &&
        (val || era.get(`palam:${chara_id}:阴茎快感`)) >=
          era.get(`tcvar:${chara_id}:阴茎快感上限`) *
            (erect_border / (1 + era.get(`tcvar:${chara_id}:发情`))));
    if (ret && !val) {
      era.set(`tcvar:${chara_id}:不应期`, 0);
    }
    return ret;
  },
  check_lubrication,
  check_pregnant_unprotect,
  /**
   * @param chara_id
   * @returns {number} 0 - 完全没爽够，1 - 爽够了但是还想再爽，2 - 不能再爽了
   */
  check_satisfied(chara_id) {
    if (
      era.get(`tcvar:${chara_id}:脱力`) ||
      era.get(`tcvar:${chara_id}:失神`)
    ) {
      return 2;
    }
    if (
      !chara_id ||
      era.get(`status:${chara_id}:超马跳Z`) ||
      era.get(`mark:${chara_id}:反抗`) >= 2 ||
      era.get(`mark:${chara_id}:苦痛`) >= 2 ||
      era.get(`mark:${chara_id}:羞耻`) >= 2
    ) {
      return 0;
    }
    const lust = era.get(`base:${chara_id}:性欲`);
    if (
      !era.get(`tcvar:${chara_id}:高潮满足`) ||
      era.get(`tcvar:${chara_id}:接近高潮`) ||
      lust >= lust_border.itch
    ) {
      return 0;
    }
    if (
      Math.random() <
      (lust + era.get(`tcvar:${chara_id}:发情`) * 1000) / lust_border.itch
    ) {
      return 1;
    }
    return 2;
  },
  /**
   * 检查角色是否能进行阴道性行为<br>
   * 必须有阴道&未经期&未处于孕期保护
   * @param chara_id
   * @returns {boolean}
   */
  check_virgin_enabled(chara_id) {
    const virgin_size = era.get(`cflag:${chara_id}:阴道尺寸`);
    return (
      virgin_size > 0 &&
      check_pregnant_unprotect(chara_id, virgin_size) &&
      (era.get(`cflag:${chara_id}:种族`) > 0 ||
        !era.get(`status:${chara_id}:经期`))
    );
  },
  check_want_to_escape(id) {
    return (
      !era.get(`status:${id}:超马跳Z`) &&
      era.get(`mark:${id}:淫纹`) < 3 &&
      ((era.getCharactersInTrain().length > 0 &&
        !era.get('tflag:强奸') &&
        get_sex_acceptable(id) < 0) ||
        Math.random() <
          (Math.max(era.get(`mark:${id}:苦痛`), era.get(`mark:${id}:羞耻`)) -
            era.get(`mark:${id}:欢愉`)) /
            3 ||
        era.get(`mark:${id}:反抗`) >= 2)
    );
  },
  get_action_base_check,
  /**
   * @param {number} chara_id
   * @param {boolean} [show_true_bust=false]
   * @returns {number}
   */
  get_bust_delta(chara_id, show_true_bust = false) {
    return (
      get_float_breast_size(chara_id, show_true_bust) -
      era.get(`cflag:${chara_id}:下胸围`)
    );
  },
  /**
   * @param {number} chara_id
   * @param {boolean} [show_true_bust=false]
   * @returns {number}
   */
  get_bust_size(chara_id, show_true_bust = false) {
    return Math.floor(get_float_breast_size(chara_id, show_true_bust));
  },
  /**
   * get expansion coefficient
   * @param {number} penis_size penis size, 0=none, 1=tiny, 2=small, 3=normal, 4=big, 5=horse
   * @param {number} other_id virgin's or anal's owner
   * @param {number} part virgin or anal
   * @returns {number} minus=too small, 0=suit, 1=bigger, >1=too big
   */
  get_expansion(penis_size, other_id, part) {
    const height_coefficient =
      Math.floor(era.get(`cflag:${other_id}:身高`) / 10) - 13;
    if (height2virgin_size[height_coefficient] === undefined) {
      return 0;
    }
    let table,
      abt = era.get(`tcvar:${other_id}:发情`) > 0;
    if (part === part_enum.virgin) {
      table = height2virgin_size;
      // 耐性不会导致扩张能力下降
      // 淫壶+2扩张能力
      abt =
        Math.floor((era.get(`abl:${other_id}:阴道耐性`) + 1) / 2) +
        Math.min(era.get(`exp:${other_id}:生产次数`), 2) +
        2 * (era.get(`talent:${other_id}:淫壶`) === 2) +
        (era.get(`tcvar:${other_id}:阴道扩张`) > 0 ||
          era.get(`tcvar:${other_id}:阴道接触部位`).part === part_enum.penis);
    } else if (part === part_enum.anal) {
      table = height2anal_size;
      // 耐性不会导致扩张能力下降
      // 淫臀+2扩张能力
      abt =
        Math.floor((era.get(`abl:${other_id}:肛门耐性`) + 1) / 2) +
        2 * (era.get(`talent:${other_id}:淫臀`) === 2) +
        (era.get(`tcvar:${other_id}:肛门扩张`) > 0 ||
          era.get(`tcvar:${other_id}:肛门接触部位`).part === part_enum.penis);
    } else {
      return 0;
    }
    let coefficient = penis_size - table[height_coefficient];
    if (coefficient > 1 && abt > 0) {
      // 结算耐性带来的扩张能力
      coefficient -= abt;
      // 结算润滑带来的扩张能力
      coefficient -= check_lubrication(other_id, part);
      // 扩张能力不会使相对大小过分下降
      if (coefficient < 1) {
        coefficient = 1;
      }
    }
    return coefficient;
  },
  /**
   * @param {number} chara_id
   * @returns {number}
   */
  get_hip_size(chara_id) {
    return Math.floor(
      era.get(`cflag:${chara_id}:臀围`) +
        5 * (era.get(`talent:${chara_id}:淫臀`) === 2) +
        2 * era.get(`status:${chara_id}:发情`) +
        era.get(`base:${chara_id}:体重偏差`) / 2000,
    );
  },
  /**
   * @param {number} chara_id
   * @returns {number}
   */
  get_nipple_buff(chara_id) {
    return (
      0.2 +
      0.2 *
        ((era.get(`talent:${chara_id}:乳头类型`) === 2) *
          (2 * era.get(`tcvar:${chara_id}:乳突`) - 1)) +
      0.1 *
        (era.get(`talent:${chara_id}:泌乳`) === 3 ||
          era.get(`cflag:${chara_id}:性别`) === 1)
    );
  },
  get_penis_size,
  /**
   * @param {number} chara_id
   * @param {number} [other_id]
   * @returns {number}
   */
  get_pregnant_ratio(chara_id, other_id) {
    if (
      // 本格化后才能怀孕
      era.get(`cflag:${chara_id}:成长阶段`) < 2 ||
      // 已怀孕or恢复期、经期不会怀孕
      (era.get(`cflag:${chara_id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no &&
        (era.get(`cflag:${chara_id}:妊娠回合计时`) ||
          (chara_id > 0 && era.get(`mark:${chara_id}:淫纹`) >= 2))) ||
      era.get(`status:${chara_id}:经期`) ||
      (other_id !== undefined &&
        !era.get(`cflag:${other_id}:性别`) &&
        !era.get(`status:${other_id}:弗隆P`)) ||
      CharaInmon.get(chara_id).on(plugin_enum.no_preg)
    ) {
      return 0;
    }
    let ratio = get_custom_mec(chara_id).get_pregnant_ratio();
    if (ratio > 0) {
      return ratio;
    }
    // 生够了锁5%
    // 怀孕基础概率1%，排卵期+50%，发情期+25%，弗隆P+20%
    ratio = 0.05;

    if (!chara_id || era.get(`exp:${chara_id}:生产次数`) < baby_limit) {
      ratio +=
        0.5 * era.get(`status:${chara_id}:排卵期`) +
        0.25 * era.get(`status:${chara_id}:发情`) +
        0.1 * era.get(`status:${chara_id}:反避孕套`);
      if (other_id !== undefined) {
        ratio += 0.2 * era.get(`status:${other_id}:弗隆P`);
      }
    }
    if (
      // 避孕药98%避孕
      (era.get(`status:${chara_id}:短效避孕药`) ||
        era.get(`status:${chara_id}:长效避孕药`)) &&
      // 避孕药对孕袋无效
      (chara_id || era.get('flag:惩戒力度') !== 3)
    ) {
      ratio *= 0.02;
    }
    return ratio;
  },
  get_sex_acceptable,
  /**
   * @param {number} chara_id
   * @returns {number}
   */
  get_waist_size(chara_id) {
    return Math.floor(
      era.get(`cflag:${chara_id}:腰围`) +
        LifeEventMarks.get_marks(chara_id).waist_buff +
        era.get(`base:${chara_id}:体重偏差`) / 1000,
    );
  },
  /**
   * 结算顺序：先次要部位，再有快感联动的次要部位，再有分泌物部位，最后主要部位
   * 口腔身体施虐受虐是次要部位
   * 外阴与阴道、肛门与阴茎有等额快感联动
   * 胸部肛门有分泌物
   * 阴茎阴道是主要部位
   * @type {number[]}
   */
  orgasm_check_list: [
    part_enum.mouth,
    part_enum.body,
    part_enum.sadism,
    part_enum.masochism,
    part_enum.clitoris,
    part_enum.breast,
    part_enum.anal,
    part_enum.penis,
    part_enum.virgin,
  ],
};
