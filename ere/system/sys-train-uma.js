const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');
const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_get_succ_rate } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { get_custom_edu, run_custom_edu } = require('#/event/edu/edu-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const event_hooks = require('#/data/event/event-hooks');
const TrainFailParams = require('#/data/event/extra-flag/train-fail-params');
const TrainSuccessParams = require('#/data/event/extra-flag/train-success-params');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');
const LightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-345');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_train_buff } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const {
  attr_enum,
  attr_names,
  fumble_border,
  time_cost,
} = require('#/data/train-const');

/**
 * @param {number} cid
 * @param {number} attr
 * @param {number} exp
 */
function add_train_exp(cid, attr, exp) {
  const train = attr_names[attr];
  if (exp <= 0) {
    return era.get(`exp:${cid}:${train}训练经验`);
  }
  if (era.get('cflag:345:招募状态') === recruit_flags.yes) {
    exp *= 1 + 0.25 * (1 + new LightLifeMarks().buff);
  }
  exp = Math.floor(exp);
  return era.add(`exp:${cid}:${train}训练经验`, exp);
}

/**
 * 计算训练的基础奖励
 * @param {number} cid
 * @param {number} attr
 * @param {number} train_level
 * @param {{stamina:number,time:number}} train_cost
 * @param {{attr_change:number[],pt_change:number}} changes
 * @param {{[buff]:number,[teach_chara]:number}} [between_weeks]
 */
function get_success_base_reward(
  cid,
  attr,
  train_level,
  train_cost,
  changes,
  between_weeks,
) {
  let base_inc = train_level * 2 + get_random_value(3, 8);

  let train_buff =
    get_train_bonus(cid, attr, between_weeks) +
    10 * (era.get(`cflag:${cid}:位置`) === location_enum.beach);
  if (between_weeks !== undefined) {
    if (between_weeks.teach_chara > 0) {
      train_buff +=
        Math.max(
          era.get(
            `cflag:${between_weeks.teach_chara}:${attr_names[attr]}加成`,
          ) || 0,
          0,
        ) +
        get_custom_mec(between_weeks.teach_chara).get_take_care_buff(
          cid,
          attr,
        ) +
        50;
    }
    if (between_weeks.buff !== undefined) {
      train_buff += between_weeks.buff;
    }
  }

  base_inc *= (100 + train_buff) / 100;

  changes.pt_change = 4;
  switch (attr) {
    case attr_enum.speed:
      changes.attr_change[attr_enum.speed] = base_inc;
      changes.attr_change[attr_enum.strength] = base_inc / 3;
      break;
    case attr_enum.endurance:
      changes.attr_change[attr_enum.endurance] = (base_inc * 4) / 5;
      changes.attr_change[attr_enum.toughness] = (base_inc * 3) / 5;
      train_cost.stamina *= 1.1;
      break;
    case attr_enum.strength:
      changes.attr_change[attr_enum.strength] = (base_inc * 4) / 5;
      changes.attr_change[attr_enum.endurance] = (base_inc * 2) / 5;
      break;
    case attr_enum.toughness:
      changes.attr_change[attr_enum.toughness] = base_inc;
      changes.attr_change[attr_enum.speed] = base_inc / 4;
      changes.attr_change[attr_enum.strength] = base_inc / 4;
      train_cost.stamina *= 1.1;
      break;
    case attr_enum.intelligence:
      changes.attr_change[attr_enum.intelligence] = (base_inc * 4) / 5;
      changes.attr_change[attr_enum.speed] = base_inc / 3;
      train_cost.stamina = -train_cost.stamina / 4;
      changes.pt_change = 8;
  }
  if (sys_get_chara(cid) === -1) {
    changes.attr_change = changes.attr_change.map((e) => e + (e > 0));
  }
  changes.pt_change += 1.25 * (train_level - 1);
  if (era.get('cflag:341:招募状态') === recruit_flags.yes) {
    changes.pt_change =
      changes.pt_change * (1 + 0.25 * (1 + new GodolphinLifeMarks().buff));
  }
  if (
    between_weeks !== undefined &&
    between_weeks.teach_chara > 0 &&
    train_buff > 0
  ) {
    changes.pt_change *= (100 + train_buff / 2) / 100;
  }
  changes.pt_change = Math.floor(changes.pt_change);
}

/**
 * @param {number} cid
 * @param {number} attr
 * @param {{teach_chara:number}} [between_weeks]
 */
function get_train_bonus(cid, attr, between_weeks) {
  const c_loc = era.get(`cflag:${cid}:位置`);
  const inmon = CharaInmon.get(cid);
  let train_buff =
    era.get(`cflag:${cid}:${attr_names[attr]}加成`) +
    era.get('flag:训练加成') +
    (5 + (sys_get_chara(cid) === 2)) *
      (era.get(`status:${cid}:摸鱼`) ? -4 : era.get(`cflag:${cid}:干劲`)) +
    (sys_get_chara(cid) === -3) -
    0.004 * era.get(`base:${cid}:压力`) +
    get_custom_mec(cid).get_train_buff() -
    5 * era.get(`status:${cid}:疲惫`) -
    50 * inmon.on(plugin_enum.sex_1) -
    999 * inmon.on(plugin_enum.sex_2);
  if (c_loc > 0 && c_loc !== location_enum.beach) {
    train_buff -= 25;
  }
  switch (attr) {
    case attr_enum.speed:
    case attr_enum.strength:
      if (era.get('cflag:340:招募状态') === recruit_flags.yes) {
        train_buff += 50 * (1 + new DarleyLifeMarks().buff);
      }
      break;
    case attr_enum.intelligence:
      if (era.get('cflag:341:招募状态') === recruit_flags.yes) {
        train_buff += 50 * (1 + new GodolphinLifeMarks().buff);
      }
      break;
    case attr_enum.endurance:
    case attr_enum.toughness:
      if (era.get('cflag:342:招募状态') === recruit_flags.yes) {
        train_buff += 50 * (1 + new ByerleyLifeMarks().buff);
      }
  }
  if (!between_weeks) {
    train_buff +=
      10 * inmon.on(plugin_enum.tra_1) +
      20 * inmon.on(plugin_enum.tra_2) +
      270 * inmon.on(plugin_enum.tra_3);
  }
  if (!between_weeks || between_weeks.teach_chara > 0) {
    train_buff += get_trainer_train_buff(cid);
  }
  return Math.max(train_buff, -100);
}

/**
 * @param {number} cid
 * @param {string} train
 * @returns {boolean}
 */
function update_train_level(cid, train) {
  if (era.get(`abl:${cid}:${train}训练等级`) < 5) {
    era.add(`abl:${cid}:${train}训练等级`, 1);
    era.set(`exp:${cid}:${train}训练经验`, 0);
    return true;
  }
  return false;
}

module.exports = {
  add_train_exp,
  get_success_base_reward,
  get_train_bonus,
  /**
   * @param {number} cid
   * @param {number} attr
   * @param {number} extra_buff
   * @return {Promise<void>}
   */
  async train_uma(cid, attr, extra_buff) {
    era.set(`cflag:${cid}:自主训练`, 0);
    const buffer = [];
    const changes = { attr_change: new Array(5).fill(0), pt_change: 0 };
    const t_level =
      era.get(`cflag:${cid}:位置`) === location_enum.beach
        ? 5
        : era.get(`abl:${cid}:${attr_names[attr]}训练等级`) || 1;
    const t_cost = {
      stamina: -time_cost[t_level - 1] * get_random_value(0.9, 1.2, true),
      time: -time_cost[t_level - 1],
    };
    let relation_change = era.get(`status:${cid}:摸鱼`) ? -10 : 0;

    const stamina_ratio =
      era.get(`base:${cid}:体力`) / era.get(`maxbase:${cid}:体力`);
    const succ_rate = sys_get_succ_rate(cid, attr, extra_buff);
    const f_succ = Math.random() * 100 < succ_rate;

    if (await get_custom_edu(cid).train(attr)) {
      return;
    }
    era.println();

    if (f_succ) {
      // 训练成功时的处理（成功才扣体力）
      get_success_base_reward(
        cid,
        attr,
        t_level,
        t_cost,
        changes,
        era.get(`cflag:${cid}:位置`) !== era.get('cflag:0:位置')
          ? { teach_chara: 0 }
          : undefined,
      );

      /** @type {TrainSuccessParams} */
      const ret = await run_custom_edu(
        cid,
        event_hooks.train_success,
        new TrainSuccessParams(
          stamina_ratio * !era.get(`status:${cid}:摸鱼`),
          attr,
        ),
      );
      if (ret.attr !== 0) {
        changes.attr_change[attr] += ret.attr;
      }
      if (ret.stamina !== 0) {
        t_cost.stamina += ret.stamina;
      }
      if (ret.relation_change !== 0) {
        relation_change += ret.relation_change;
      }
      if (ret.pt_change !== 0) {
        changes.pt_change += ret.pt_change;
      }
      if (!cid) {
        changes.attr_change[attr_enum.intelligence] += get_random_value(1, 2);
      }

      relation_change += 2;

      // 结算训练等级变动
      const exp = add_train_exp(
        cid,
        attr,
        100 + era.get(`cflag:${cid}:${attr_names[attr]}加成`),
      );

      if (
        exp >= 800 &&
        exp >= t_level * 800 + get_random_value(0, 800) &&
        update_train_level(cid, attr_names[attr])
      ) {
        buffer.push({
          config: { offset: 1, width: 23 },
          content: `${attr_names[attr]}训练 变得更擅长了！`,
          type: 'text',
        });
      }
    } else {
      switch (attr) {
        case attr_enum.toughness:
          t_cost.stamina *= 1.1;
          break;
        case attr_enum.intelligence:
          t_cost.stamina = -t_cost.stamina / 10;
      }
      const ret = await run_custom_edu(
        cid,
        event_hooks.train_fail,
        new TrainFailParams(
          Math.random() < 1 - stamina_ratio / fumble_border,
          stamina_ratio,
          attr,
        ),
      );
      changes.attr_change = ret.attr_change;
      relation_change += ret.relation_change;
      if (ret.stamina) {
        t_cost.stamina += ret.stamina;
      }
    }

    const chara = get_chara_talk(cid);
    const me = cid === 0 ? chara : get_chara_talk(0);
    // 无论成功与否都会扣去精力（=时间）
    if (cid > 0) {
      // 训自己不额外消耗时间
      era.print([
        me.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(0, '精力', t_cost.time / 2),
      ]);
    }
    const i_t3 = CharaInmon.get(cid).on(plugin_enum.tra_3);
    if (i_t3) {
      t_cost.stamina = -era.get(`base:${cid}:体力`);
      t_cost.time = -era.get(`base:${cid}:精力`);
    }
    let to_print = [
      sys_change_attr_and_print(cid, '体力', t_cost.stamina),
      sys_change_attr_and_print(cid, '精力', t_cost.time),
    ];
    era.print(
      [
        chara.get_colored_name(),
        ' 的 ',
        ...to_print[0],
        to_print[0].length && to_print[1].length ? '，' : undefined,
        ...to_print[1],
      ].filter((e) => e),
    );
    sys_like_chara(cid, 0, relation_change);

    // 结算数值变动
    changes.attr_change
      .map(
        (stat) =>
          stat &&
          (stat > 0
            ? Math.max(stat, 1)
            : Math.min((stat * (100 - era.get('flag:训练加成'))) / 100, -1)),
      )
      .forEach((stat, index) => {
        const to_print = sys_change_attr_and_print(cid, index, stat);
        if (to_print.length) {
          buffer.push({
            config: { offset: 1, width: 23 },
            content: to_print,
            type: 'text',
          });
        }
      });
    if (changes.pt_change) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: `获得了 ${changes.pt_change.toLocaleString()} 点技能点数`,
        type: 'text',
      });
      era.add(`exp:${cid}:技能点数`, changes.pt_change);
    }
    if (
      f_succ &&
      cid > 0 &&
      (to_print = sys_change_attr_and_print(
        0,
        attr_enum.intelligence,
        get_random_value(1, 2),
      )).length
    ) {
      era.print([
        { isBr: true },
        get_chara_talk(0).get_colored_name(),
        ' 的 ',
        ...to_print,
      ]);
    }
    if (buffer.length) {
      era.printMultiColumns([
        {
          content: [
            { isBr: true },
            `经过训练，`,
            chara.get_colored_name(),
            ' 的属性有了如下变化：',
          ],
          type: 'text',
        },
        ...buffer,
      ]);
    }
    if (i_t3) {
      sys_hurt_uma(cid, 1);
      sys_change_fame(-1);
    }
    await era.waitAnyKey();
  },
  update_train_level,
};
