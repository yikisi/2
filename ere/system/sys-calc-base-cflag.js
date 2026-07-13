const era = require('#/era-electron');

const { sys_get_debuff } = require('#/system/sys-calc-chara-param');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const {
  attr_change_colors,
  attr_colors,
  motivation_colors,
} = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const RyokaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-344');
const recruit_flags = require('#/data/event/recruit-flags');
const extra_base = require('#/data/extra-base');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number} val
 * @returns {boolean}
 */
function sys_change_motivation(cid, val) {
  if (!cid || !(era.get(`cflag:${cid}:育成回合计时`) < 3 * 48)) {
    return false;
  }
  if (val > 0 && era.get(`status:${cid}:偏头痛`)) {
    return false;
  }
  const delta_change = era.get(`talent:${cid}:情感活动`);
  let delta = val;
  if (delta > 1) {
    delta += delta_change;
  }
  if (delta < -1) {
    delta -= delta_change;
  }
  const motivation = era.get(`cflag:${cid}:干劲`);
  const motivation_limit = Math.max(
    Math.min(
      2 -
        Math.floor(era.get(`base:${cid}:压力`) / 2500) +
        get_custom_mec(cid).get_motivation_limit(),
      2,
    ),
    -2,
  );
  const new_val = Math.max(Math.min(motivation + delta, motivation_limit), -2);
  if (new_val !== motivation) {
    era.set(`cflag:${cid}:干劲`, new_val);
    era.print(
      i18n().get_ui_change_motivation(get_chara_talk(cid).get_colored_name(), {
        content: di18n.n_mot[new_val + 2],
        color: motivation_colors[new_val + 2],
      }),
    );
    return true;
  }
  return false;
}

/**
 * @param {number} cid
 * @param {number} _val
 */
function sys_change_lust(cid, _val) {
  let val = _val;
  if (_val > 0) {
    val *=
      1 +
      0.2 * era.get(`talent:${cid}:淫乱`) +
      0.5 * era.get(`status:${cid}:发情`) +
      0.1 * era.get(`status:${cid}:排卵期`) +
      0.05 * era.get(`status:${cid}:经期`);
  }
  era.add(`base:${cid}:性欲`, val);
}

/**
 * @param {number} cid
 * @param {number} _val
 */
function sys_change_pressure(cid, _val) {
  if (!_val) {
    return era.get(`base:${cid}:压力`);
  }
  if (_val > 0) {
    const { buff } = new RyokaLifeMarks();
    _val *=
      1 +
      0.2 * era.get(`talent:${cid}:羞耻忍耐`) +
      get_custom_mec(cid).get_pressure_buff() -
      0.2 * buff;
    if (era.get(`cflag:${cid}:育成回合计时`) >= 3 * 48) {
      _val /= 2;
    }
  }
  const ret =
    era.get('flag:压力获取') && cid && era.add(`base:${cid}:压力`, _val);
  sys_change_motivation(cid, 0);
  return ret;
}

module.exports = {
  /**
   * @param {number} cid
   * @param {number} attr
   * @param {number} change
   * @returns {(PrintedSpan|string)[]}
   */
  sys_change_attr_and_print(cid, attr, change) {
    if (!change) {
      return [];
    }
    // 转换为 base 表中的变量序号
    const bid = attr > attr_enum.intelligence ? attr - attr_enum.hp : attr + 5;
    const val = era.get(`base:${cid}:${bid}`);
    const max = era.get(`maxbase:${cid}:${bid}`);
    let ret = [];
    if (attr > attr_enum.intelligence) {
      if (change < 0) {
        const in_train = era.getCharactersInTrain().includes(cid);
        let debuff =
          sys_get_debuff(cid) +
          // FLAGNAME:4 = 当前位置
          (era.get('flag:4') === location_enum.beach && attr === attr_enum.hp) *
            0.2;
        if (debuff <= 10) {
          change = Math.floor(change * (debuff + 1));
        }
        if (attr === attr_enum.hp) {
          let lose_weight =
            // STATUSNAME:3 = 发胖
            // STATUSNAME:16 = 健康茶
            1 - 0.4 * era.get(`status:${cid}:3`) + era.get(`status:${cid}:16`);
          // CFLAGNAME:66 = 招募状态
          if (era.get('cflag:207:66') === recruit_flags.yes) {
            lose_weight += 0.5;
          }
          // BASENAME:12 = 体重偏差
          era.add(`base:${cid}:12`, lose_weight * change);
          sys_change_pressure(cid, get_random_value(change / 5, 0));
          let delta = Math.min(-change / 500, 1);
          // BASENAME:0 = 体力
          if (era.get(`base:${cid}:0`) < 0.45 * max) {
            delta += Math.random();
          }
          if (in_train) {
            add_attr_exp(cid, attr_enum.endurance, delta);
          } else {
            // BASENAME:6 = 耐力
            era.add(`base:${cid}:6`, delta);
          }
        } else {
          sys_change_lust(cid, get_random_value(change, 0) / 4);
          let lose_pressure = get_random_value(change / 10, 0);
          if (era.get('cflag:344:66') === recruit_flags.yes) {
            lose_pressure *= 1.5;
          }
          sys_change_pressure(cid, lose_pressure);
          let delta = Math.min(-change / 500, 1);
          // BASENAME:1 = 精力
          if (era.get(`base:${cid}:1`) < 0.5 * max) {
            delta += Math.random();
          }
          if (in_train) {
            add_attr_exp(cid, attr_enum.intelligence, delta);
          } else {
            // BASENAME:9 = 智力
            era.add(`base:${cid}:9`, delta);
          }
        }
      }
      if (change > 0) {
        change = Math.max(change, 1);
      } else {
        change = Math.min(change, -1);
      }
    } else if (cid && !(era.get(`cflag:${cid}:66`) < 3 * 48)) {
      return [];
    } else if (attr === attr_enum.speed && era.get(`status:${cid}:3`)) {
      return [];
    }
    if (change > max - val) {
      change = max - val;
    }
    if (change + val < 0) {
      change = 0 - val;
    }
    if (change) {
      const o = Math.floor(era.get(`base:${cid}:${bid}`));
      const stat = Math.abs(
        Math.floor(era.add(`base:${cid}:${bid}`, change)) - o,
      );
      ret = i18n().get_ui_change_attr(
        {
          color: attr_colors[attr],
          content:
            attr > attr_enum.intelligence
              ? di18n.n_base[attr - attr_enum.hp]
              : di18n.n_attr[attr],
        },
        change > 0
          ? {
              color: attr_change_colors.up,
              content: i18n().ui_increase,
            }
          : {
              color: attr_change_colors.down,
              content: i18n().ui_decrease,
            },
        stat >= 1
          ? {
              color: attr_colors[attr],
              content: stat.toLocaleString(lan()),
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
   * 变更体重，体重最大值 1000，一般 4000 左右开始发胖
   * @param {number} cid
   * @param {number} val 实际值/10
   */
  sys_change_weight(cid, val) {
    // BASENAME:12 = 体重偏差
    // TALENTNAME:14 = 进食控制
    era.add(`base:${cid}:12`, val * (10 + era.get(`talent:${cid}:14`)));
  },
  /** @param {number} cid */
  sys_fix_chara_base(cid) {
    let src_id = era.get(`cflag:${cid}:模版角色`);
    if (src_id === -1) {
      src_id = cid;
    }
    const maxbase_buff =
      get_custom_mec(cid).get_maxbase_buff() -
      (era.get(`cflag:${cid}:妊娠阶段`) === 1 << pregnant_stage_enum.resume &&
        (era.get(`cflag:${cid}:妊娠回合计时`) - 1) * 100);
    const { stamina: extra_stamina, time: extra_time } =
      cid === 0 ? extra_base : { stamina: 0, time: 0 };
    era.set(
      `maxbase:${cid}:体力`,
      Math.max(
        Math.floor(
          era.get(`staticbase:${src_id}:体力`) +
            era.get(`base:${cid}:耐力`) / 2 +
            maxbase_buff +
            extra_stamina,
        ),
        200,
      ),
    );
    era.set(
      `maxbase:${cid}:精力`,
      Math.max(
        Math.floor(
          era.get(`staticbase:${src_id}:精力`) +
            era.get(`base:${cid}:智力`) / 2 +
            maxbase_buff +
            extra_time,
        ),
        200,
      ),
    );
  },
  /** @returns {{creditor:number,repay:number,timer:number}[]} */
  sys_get_billings() {
    // FLAGNAME:17 = 账单
    return (
      era.get('flag:17') ||
      era.set('flag:17', [{ creditor: 0, repay: 0, timer: 0 }])
    );
  },
  /**
   * @param {{stamina:number,time:number}} cost
   * @param {number} cid
   */
  sys_handle_action(cost, cid = 0) {
    era.add('base:0:体力', -cost.stamina);
    era.add('base:0:精力', -cost.time);
    if (cid > 0) {
      era.add(`base:${cid}:体力`, -cost.stamina);
      era.add(`base:${cid}:精力`, -cost.time);
    }
  },
  /**
   * @param {number} cid
   * @returns {{curr:{race:number,week:number},last:{race:number,week:number}}}
   */
  sys_reg_race(cid) {
    const ret =
      era.get(`cflag:${cid}:出走登记`) ||
      era.set(`cflag:${cid}:出走登记`, {
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
