const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_get_succ_rate } = require('#/system/sys-calc-chara-param');

const { get_custom_edu, run_custom_edu } = require('#/event/edu/edu-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');
const TrainFailParams = require('#/data/event/extra-flag/train-fail-params');
const TrainSuccessParams = require('#/data/event/extra-flag/train-success-params');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');
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
 * @param {number} chara_id
 * @param {number} attr
 * @param {boolean} [between_weeks]
 */
function get_train_bonus(chara_id, attr, between_weeks) {
  const chara_loc = era.get(`cflag:${chara_id}:位置`);
  let train_buff =
    era.get(`cflag:${chara_id}:${attr_names[attr]}加成`) +
    era.get('flag:训练加成') +
    (5 + (era.get(`cflag:${chara_id}:气性`) === 2)) *
      (era.get(`status:${chara_id}:摸鱼`)
        ? -4
        : era.get(`cflag:${chara_id}:干劲`)) +
    (era.get(`cflag:${chara_id}:气性`) === -3) -
    0.004 * era.get(`base:${chara_id}:压力`) +
    get_custom_mec(chara_id).get_train_buff();
  if (chara_loc > 0 && chara_loc !== location_enum.beach) {
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
      10 * era.get(`talent:${chara_id}:训练`) +
      get_trainer_train_buff(chara_id);
  }
  return Math.max(train_buff, -100);
}

/**
 * 计算训练的基础奖励
 * @param {number} chara_id
 * @param {number} attr
 * @param {number} train_level
 * @param {{stamina:number,time:number}} train_cost
 * @param {{attr_change:number[],pt_change:number}} changes
 * @param {boolean} [between_weeks]
 */
function get_success_base_reward(
  chara_id,
  attr,
  train_level,
  train_cost,
  changes,
  between_weeks,
) {
  let base_inc = train_level * 2 + get_random_value(3, 8);

  const train_buff =
    get_train_bonus(chara_id, attr, between_weeks) +
    10 * (era.get(`cflag:${chara_id}:位置`) === location_enum.beach);

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
  if (era.get(`cflag:${chara_id}:气性`) === -1) {
    changes.attr_change = changes.attr_change.map((e) => e + (e > 0));
  }
  changes.pt_change += 1.25 * (train_level - 1);
  if (era.get('cflag:342:招募状态') === recruit_flags.yes) {
    changes.pt_change =
      changes.pt_change * (1 + 0.5 * (1 + new GodolphinLifeMarks().buff));
  }
  changes.pt_change = Math.floor(changes.pt_change);
}

module.exports = {
  get_success_base_reward,
  get_train_bonus,
  /**
   * @param {number} chara_id
   * @param {number} attr
   * @param {number} extra_buff
   * @return {Promise<void>}
   */
  async train_uma(chara_id, attr, extra_buff) {
    era.set(`cflag:${chara_id}:自主训练`, 0);
    const buffer = [],
      changes = { attr_change: new Array(5).fill(0), pt_change: 0 },
      train_level =
        era.get(`cflag:${chara_id}:位置`) === location_enum.beach
          ? 5
          : era.get(`abl:${chara_id}:${attr_names[attr]}训练等级`) || 1,
      train_cost = {
        stamina: -time_cost[train_level - 1] * get_random_value(0.9, 1.2, true),
        time: -time_cost[train_level - 1],
      };
    let relation_change = era.get(`status:${chara_id}:摸鱼`) ? -10 : 0;

    const stamina_ratio =
        era.get(`base:${chara_id}:体力`) / era.get(`maxbase:${chara_id}:体力`),
      success_rate = sys_get_succ_rate(chara_id, attr, extra_buff);
    const flag_success = Math.random() * 100 < success_rate;

    if (await get_custom_edu(chara_id).train(attr)) {
      return;
    }
    era.println();

    if (flag_success) {
      // 训练成功时的处理（成功才扣体力）
      get_success_base_reward(
        chara_id,
        attr,
        train_level,
        train_cost,
        changes,
        era.get(`cflag:${chara_id}:位置`) !== era.get('cflag:0:位置'),
      );

      /** @type {TrainSuccessParams} */
      const ret = await run_custom_edu(
        chara_id,
        event_hooks.train_success,
        new TrainSuccessParams(
          stamina_ratio * !era.get(`status:${chara_id}:摸鱼`),
          attr,
        ),
      );
      ret.attr && (changes.attr_change[attr] += ret.attr);
      ret.stamina && (train_cost.stamina += ret.stamina);
      ret.relation_change && (relation_change += ret.relation_change);
      ret.pt_change && (changes.pt_change += ret.pt_change);
      !chara_id &&
        (changes.attr_change[attr_enum.intelligence] += get_random_value(1, 2));

      relation_change += 2;

      // 结算训练等级变动 逢五进一
      const exp = era.add(
        `exp:${chara_id}:${attr_names[attr]}训练经验`,
        100 + era.get(`cflag:${chara_id}:${attr_names[attr]}加成`),
      );
      if (
        train_level < 5 &&
        exp >= 800 &&
        exp >= train_level * 800 + get_random_value(0, 800)
      ) {
        era.add(`abl:${chara_id}:${attr_names[attr]}训练等级`, 1);
        era.set(`exp:${chara_id}:${attr_names[attr]}训练经验`, 0);
        buffer.push({
          config: { offset: 1, width: 23 },
          content: `${attr_names[attr]}训练 变得更擅长了！`,
          type: 'text',
        });
      }
    } else {
      switch (attr) {
        case attr_enum.toughness:
          train_cost.stamina *= 1.1;
          break;
        case attr_enum.intelligence:
          train_cost.stamina = -train_cost.stamina / 10;
      }
      const ret = await run_custom_edu(
        chara_id,
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
        train_cost.stamina += ret.stamina;
      }
    }

    const chara_talk = get_chara_talk(chara_id),
      me = chara_id === 0 ? chara_talk : get_chara_talk(0);
    // 无论成功与否都会扣去精力（=时间）
    if (chara_id > 0) {
      // 训自己不额外消耗时间
      era.print([
        me.get_colored_name(),
        ' 的 ',
        ...sys_change_attr_and_print(0, '精力', train_cost.time / 2),
      ]);
    }
    let to_print = [
      sys_change_attr_and_print(chara_id, '体力', train_cost.stamina),
      sys_change_attr_and_print(chara_id, '精力', train_cost.time),
    ];
    era.print(
      [
        chara_talk.get_colored_name(),
        ' 的 ',
        ...to_print[0],
        to_print[0].length && to_print[1].length ? '，' : undefined,
        ...to_print[1],
      ].filter((e) => e),
    );
    sys_like_chara(chara_id, 0, relation_change);

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
        const to_print = sys_change_attr_and_print(chara_id, index, stat);
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
        content: `获得了 ${changes.pt_change} 点技能点数`,
        type: 'text',
      });
      era.add(`exp:${chara_id}:技能点数`, changes.pt_change);
    }
    if (
      flag_success &&
      chara_id &&
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
            chara_talk.get_colored_name(),
            ' 的属性有了如下变化：',
          ],
          type: 'text',
        },
        ...buffer,
      ]);
    }
    await era.waitAnyKey();
  },
};
