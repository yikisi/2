const era = require('#/era-electron');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const {
  height2anal_size,
  height2virgin_size,
} = require('#/data/ero/battle-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const {
  baby_limit,
  erect_border,
  lust_border,
} = require('#/data/ero/orgasm-const');
const {
  motion_enum,
  part2jid,
  part_enum,
  towards_enum,
  up_enum,
} = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number} v_size
 * @returns {boolean}
 */
function check_pregnant_unprotect(
  cid,
  v_size = era.get(`cflag:${cid}:阴道尺寸`),
) {
  // 男人没孕期保护
  if (v_size === 0) {
    return true;
  }
  const race = era.get(`cflag:${cid}:种族`);
  const p_stage = era.get(`cflag:${cid}:妊娠阶段`);
  if (race > 0) {
    // 马娘只有临产期和恢复期有孕期保护
    return (p_stage & 0b100001) === 0;
  } else {
    // 人类只有未怀孕和安定期没保护
    return (
      (p_stage & 0b1010) > 0 ||
      (p_stage !== 1 << pregnant_stage_enum.no &&
        era.get(`cflag:${cid}:妊娠回合计时`) < 4)
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
 * @param {number} cid owner
 * @param {number} part breast, virgin or anal
 * @returns {boolean}
 */
function check_lubrication(cid, part) {
  return (
    (era.get(`stain:${cid}:${i18n('zh-CN').tb_param[part2jid[part]]}`) &
      reversed_no_lubricant_stains) >
    0
  );
}

/**
 * @param {number} cid
 * @returns {number}
 */
function get_action_base_check(cid) {
  return (
    era.get(`love:${cid}`) +
    15 * era.get(`mark:${cid}:同心`) +
    10 * era.get(`mark:${cid}:欢愉`) -
    5 * (era.get(`mark:${cid}:苦痛`) + era.get(`mark:${cid}:羞耻`)) -
    15 * era.get(`mark:${cid}:反抗`) -
    10 * era.get(`talent:${cid}:反抗意愿`)
  );
}

/**
 * @param {number} cid
 * @param {boolean} show_true_bust
 * @returns {number}
 */
function get_float_breast_size(cid, show_true_bust) {
  let nipple = era.get(`tcvar:${cid}:乳突`);
  const down_size = era.get(`cflag:${cid}:下胸围`);
  const chara_sex = era.get(`cflag:${cid}:性别`);
  let ret =
    era.get(`cflag:${cid}:胸围`) +
    5 * (era.get(`talent:${cid}:淫乳`) === 2) +
    3 * era.get(`status:${cid}:发情`) -
    (era.get(`talent:${cid}:乳头类型`) === 2) +
    (nipple || 0) +
    era.get(`base:${cid}:体重偏差`) / 2000 +
    LifeEventMarks.get_marks(cid).breast_buff;
  // 母乳体质最小A
  if (
    chara_sex - 1 &&
    era.get(`talent:${cid}:泌乳`) === 3 &&
    ret < down_size + 10
  ) {
    ret = down_size + 10;
  }
  if (show_true_bust) {
    return ret;
  }
  // 非调教状态隐形巨乳-5cm胸围
  if (
    nipple === void 0 &&
    chara_sex - 1 &&
    era.get(`talent:${cid}:隐形巨乳`) &&
    ret - down_size > 13
  ) {
    ret = down_size + 13;
  }
  return ret;
}

/**
 * @param {number} cid
 * @returns {number}
 */
function get_penis_size(cid) {
  const penis_size = era.get(`cflag:${cid}:阴茎尺寸`);
  let ret = era.get(`status:${cid}:弗隆K`) || era.get(`status:${cid}:弗隆P`);
  if (era.get(`talent:${cid}:凶器`) > 0 && ret < 4) {
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
 * @param {number} cid
 * @returns {number}
 */
function get_sex_acceptable(cid) {
  return (
    get_custom_mec(cid).get_sex_acceptable() +
    get_action_base_check(cid) +
    Math.max(era.get(`base:${cid}:性欲`) - 5000, 0) / 200 +
    50 * (era.get('flag:惩戒力度') >= 2) +
    15 * era.get(`talent:${cid}:工口意愿`) -
    10 * era.get(`talent:${cid}:贞洁看法`) -
    60 +
    100 * era.get(`status:${cid}:超马跳Z`) -
    100 * !check_pregnant_unprotect(cid)
  );
}

module.exports = {
  /** @param {number} _new */
  change_ero_master(_new) {
    const _old = era.get('tflag:主导权');
    era.set(
      `tcvar:${_new}:体位`,
      era.set(`tcvar:${_old}:体位`, motion_enum.lie),
    );
    era.set(`tcvar:${_old}:朝向`, towards_enum.right);
    era.set(`tcvar:${_new}:朝向`, towards_enum.left);
    era.set(`tcvar:${_new}:上下`, up_enum.up);
    era.set(`tcvar:${_old}:上下`, up_enum.down);
    era.set('tflag:主导权', _new);
    era.set('tflag:前回行动', -1);
    era.set('tflag:对手行动', -1);
    era.set('tflag:当前助手', 0);
    era.set(`tcvar:${_new}:高潮满足`, 0);
  },
  /**
   * @param {number} cid
   * @param {number} [val]
   * @returns {boolean}
   */
  check_erect(cid, val) {
    const ret =
      era.get(`status:${cid}:弗隆K`) > 0 ||
      era.get(`status:${cid}:弗隆P`) > 0 ||
      CharaInmon.get(cid).on(plugin_enum.pe_up_1) ||
      (era.get(`cflag:${cid}:阴茎尺寸`) > 0 &&
        (val || era.get(`palam:${cid}:阴茎快感`)) >=
          era.get(`tcvar:${cid}:阴茎快感上限`) *
            (erect_border / (1 + era.get(`tcvar:${cid}:发情`))));
    if (ret && !val) {
      era.set(`tcvar:${cid}:不应期`, 0);
    }
    return ret;
  },
  check_lubrication,
  check_pregnant_unprotect,
  /**
   * @param cid
   * @returns {0|1|2} 0 - 完全没爽够，1 - 爽够了但是还想再爽，2 - 不能再爽了
   */
  check_satisfied(cid) {
    if (era.get(`tcvar:${cid}:脱力`) > 0 || era.get(`tcvar:${cid}:失神`) > 0) {
      era.logger.debug(`[${cid} 是否满足] 失去行动能力`);
      return 2;
    }
    if (
      !cid ||
      era.get(`status:${cid}:超马跳Z`) > 0 ||
      era.get(`mark:${cid}:反抗`) - era.get(`mark:${cid}:同心`) >= 2 ||
      Math.max(era.get(`mark:${cid}:苦痛`), era.get(`mark:${cid}:羞耻`)) -
        era.get(`mark:${cid}:欢愉`) >=
        2
    ) {
      cid > 0 && era.logger.debug(`[${cid} 是否满足] 发情 OR 抗拒`);
      return 0;
    }
    const lust = era.get(`base:${cid}:性欲`);
    if (
      !era.get(`tcvar:${cid}:高潮满足`) ||
      era.get(`tcvar:${cid}:接近高潮`) ||
      lust >= lust_border.itch
    ) {
      cid > 0 && era.logger.debug(`[${cid} 是否满足] 完全没爽够`);
      return 0;
    }
    const dice = Math.random();
    const border =
      (lust + era.get(`tcvar:${cid}:发情`) * 1000) / lust_border.absent_mind;
    era.logger.debug(
      `[${cid} 是否满足] 掷骰：${(dice * 100).toFixed(2)} / 概率：${(border * 100).toFixed(2)}`,
    );
    if (dice < border) {
      return 1;
    }
    return 2;
  },
  /**
   * 检查角色是否能进行阴道性行为<br>
   * 必须有阴道&未经期&未处于孕期保护
   * @param {number} cid
   * @returns {boolean}
   */
  check_virgin_enabled(cid) {
    const virgin_size = era.get(`cflag:${cid}:阴道尺寸`);
    return (
      virgin_size > 0 &&
      check_pregnant_unprotect(cid, virgin_size) &&
      (era.get(`cflag:${cid}:种族`) > 0 || !era.get(`status:${cid}:经期`))
    );
  },
  check_want_to_escape(cid) {
    return (
      !era.get(`status:${cid}:超马跳Z`) &&
      era.get(`mark:${cid}:淫纹`) < 3 &&
      ((era.getCharactersInTrain().length > 1 &&
        !era.get('tflag:强奸') &&
        get_sex_acceptable(cid) < 0) ||
        Math.random() <
          (Math.max(era.get(`mark:${cid}:苦痛`), era.get(`mark:${cid}:羞耻`)) -
            era.get(`mark:${cid}:欢愉`)) /
            3 ||
        era.get(`mark:${cid}:反抗`) >= 2)
    );
  },
  get_action_base_check,
  /**
   * @param {number} cid
   * @param {boolean} [show_true_bust=false]
   * @returns {number}
   */
  get_bust_delta(cid, show_true_bust = false) {
    return (
      get_float_breast_size(cid, show_true_bust) -
      era.get(`cflag:${cid}:下胸围`)
    );
  },
  /**
   * @param {number} cid
   * @param {boolean} [show_true_bust=false]
   * @returns {number}
   */
  get_bust_size(cid, show_true_bust = false) {
    return Math.floor(get_float_breast_size(cid, show_true_bust));
  },
  /**
   * get expansion coefficient
   * @param {number} penis_size penis size, 0=none, 1=tiny, 2=small, 3=normal, 4=big, 5=horse
   * @param {number} oid virgin's or anal's owner
   * @param {number} part virgin or anal
   * @returns {number} minus=too small, 0=suit, 1=bigger, >1=too big
   */
  get_expansion(penis_size, oid, part) {
    const height_coefficient =
      Math.floor(era.get(`cflag:${oid}:身高`) / 10) - 13;
    if (height2virgin_size[height_coefficient] === undefined) {
      return 0;
    }
    let table;
    let abt = era.get(`tcvar:${oid}:发情`) > 0;
    if (part === part_enum.virgin) {
      table = height2virgin_size;
      // 耐性不会导致扩张能力下降
      // 淫壶+2扩张能力
      abt =
        Math.floor((era.get(`abl:${oid}:阴道耐性`) + 1) / 2) +
        Math.min(era.get(`exp:${oid}:生产次数`), 2) +
        2 * (era.get(`talent:${oid}:淫壶`) === 2) +
        (era.get(`tcvar:${oid}:阴道扩张`) > 0 ||
          era.get(`tcvar:${oid}:阴道接触部位`).part === part_enum.penis);
    } else if (part === part_enum.anal) {
      table = height2anal_size;
      // 耐性不会导致扩张能力下降
      // 淫臀+2扩张能力
      abt =
        Math.floor((era.get(`abl:${oid}:肛门耐性`) + 1) / 2) +
        2 * (era.get(`talent:${oid}:淫臀`) === 2) +
        (era.get(`tcvar:${oid}:肛门扩张`) > 0 ||
          era.get(`tcvar:${oid}:肛门接触部位`).part === part_enum.penis);
    } else {
      return 0;
    }
    let coefficient = penis_size - table[height_coefficient];
    if (coefficient > 1 && abt > 0) {
      // 结算耐性带来的扩张能力
      coefficient -= abt;
      // 结算润滑带来的扩张能力
      coefficient -= check_lubrication(oid, part);
      // 扩张能力不会使相对大小过分下降
      if (coefficient < 1) {
        coefficient = 1;
      }
    }
    return coefficient;
  },
  /**
   * @param {number} cid
   * @returns {number}
   */
  get_hip_size(cid) {
    return Math.floor(
      era.get(`cflag:${cid}:臀围`) +
        5 * (era.get(`talent:${cid}:淫臀`) === 2) +
        2 * era.get(`status:${cid}:发情`) +
        era.get(`base:${cid}:体重偏差`) / 2000,
    );
  },
  /**
   * @param {number} cid
   * @returns {number}
   */
  get_nipple_buff(cid) {
    return (
      0.2 +
      0.2 *
        ((era.get(`talent:${cid}:乳头类型`) === 2) *
          (2 * era.get(`tcvar:${cid}:乳突`) - 1)) +
      0.1 *
        (era.get(`talent:${cid}:泌乳`) === 3 ||
          era.get(`cflag:${cid}:性别`) === 1)
    );
  },
  get_penis_size,
  /**
   * @param {number} cid
   * @param {number} [oid]
   * @returns {number}
   */
  get_pregnant_ratio(cid, oid = -1) {
    // 生到 500 强行关掉怀孕，不然最大 ID 会超过 1000
    // 在需要输入角色 ID 的场合，1000 以上是功能按钮，角色 ID 不低于 1000 会导致出错
    // 9017 皇帝不会被输出也不会被选中，所以无所谓
    if (era.get('flag:怀孕计数') >= 500) {
      return 0;
    }
    /** @type {CharaInmon} */
    let inmon;
    if (
      // 本格化后才能怀孕
      era.get(`cflag:${cid}:成长阶段`) < 2 ||
      // 已怀孕or恢复期、经期不会怀孕
      (era.get(`cflag:${cid}:妊娠阶段`) !== 1 << pregnant_stage_enum.no &&
        (era.get(`cflag:${cid}:妊娠回合计时`) > 0 ||
          (cid > 0 && era.get(`mark:${cid}:淫纹`) >= 2))) ||
      era.get(`status:${cid}:经期`) > 0 ||
      // 女性服用弗隆K不会授孕
      (oid >= 0 &&
        !era.get(`cflag:${oid}:性别`) &&
        !era.get(`status:${oid}:弗隆P`)) ||
      (inmon = CharaInmon.get(cid)).on(plugin_enum.no_preg)
    ) {
      return 0;
    }
    let ratio = get_custom_mec(cid).get_pregnant_ratio();
    // 机制脚本锁定怀孕率
    if (ratio > 0) {
      return ratio;
    }
    // 基础怀孕率5%
    ratio = 0.05;
    // 超出生育限制后锁定5%
    if (!cid || era.get(`exp:${cid}:生产次数`) < baby_limit) {
      ratio +=
        // 排卵期+15%
        0.15 * era.get(`status:${cid}:排卵期`) +
        // 发情期+10%
        0.1 * era.get(`status:${cid}:发情`) +
        // 避孕套溶解剂+5%
        0.05 * era.get(`status:${cid}:反避孕套`);
      if (
        oid >= 0 &&
        era.get(`cflag:${oid}:性别`) > 0 &&
        era.get(`status:${oid}:弗隆P`) > 0
      ) {
        // 射精方为男性或 FUTA 服用弗隆P时+10%
        ratio += 0.1;
      }
    }
    if (inmon.slave === slavery_enum.pregnant) {
      // 孕袋无视避孕药，+10%怀孕率
      ratio += 0.1;
    } else if (
      era.get(`status:${cid}:短效避孕药`) > 0 ||
      era.get(`status:${cid}:长效避孕药`) > 0
    ) {
      // 避孕药 98% 避孕（乘算）
      ratio *= 0.02;
    }
    return ratio;
  },
  get_sex_acceptable,
  /**
   * @param {number} cid
   * @returns {number}
   */
  get_waist_size(cid) {
    return Math.floor(
      era.get(`cflag:${cid}:腰围`) +
        LifeEventMarks.get_marks(cid).waist_buff +
        era.get(`base:${cid}:体重偏差`) / 1000,
    );
  },
  /**
   * 结算顺序：先次要部位，再有快感联动的次要部位，再有分泌物部位，最后主要部位<br>
   * 口腔身体施虐受虐是次要部位<br>
   * 外阴与阴道、肛门与阴茎有等额快感联动<br>
   * 胸部肛门有分泌物<br>
   * 阴茎阴道是主要部位<br>
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
