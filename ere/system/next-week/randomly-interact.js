const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_check_train_enabled,
  sys_get_debuff,
} = require('#/system/sys-calc-chara-param');
const { get_success_base_reward } = require('#/system/sys-train-uma');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const {
  attr_enum,
  attr_names,
  fail_sta_border,
  time_cost,
} = require('#/data/train-const');

/** @param {number[]} in_team_list */
function randomly_interact(in_team_list) {
  // 回合结束结算
  for (const chara_id of in_team_list) {
    const stamina_ratio =
        era.get(`base:${chara_id}:体力`) / era.get(`maxbase:${chara_id}:体力`),
      time = era.get(`base:${chara_id}:精力`);
    const debuff = sys_get_debuff(chara_id);
    if (
      debuff < 0.5 &&
      sys_check_train_enabled(chara_id) &&
      era.get(`cflag:${chara_id}:自主训练`) &&
      !era.get(`status:${chara_id}:摸鱼`) &&
      stamina_ratio >= fail_sta_border.intelligence &&
      time >= time_cost.uma * (1 + debuff)
    ) {
      const train_need_attrs = Object.values(attr_enum).filter(
        (attr) =>
          era.get(`base:${chara_id}:${attr_names[attr]}`) <=
          era.get(`maxbase:${chara_id}:${attr_names[attr]}`),
      );
      const changes = {
          attr_change: new Array(5).fill(0),
          pt_change: 0,
        },
        train_attr =
          stamina_ratio >= fail_sta_border.other
            ? get_random_entry(
                train_need_attrs.filter(
                  (attr) => attr !== attr_enum.intelligence,
                ),
              )
            : attr_enum.intelligence,
        train_cost = {
          stamina: -time_cost.uma * (0.9 + Math.random() * 0.3), // -400*[0.9,1.2]
          time: -time_cost.uma,
        },
        cost_result = [
          sys_change_attr_and_print(chara_id, '体力', train_cost.stamina),
          sys_change_attr_and_print(chara_id, '精力', train_cost.time),
        ];
      era.add(
        `exp:${chara_id}:${attr_names[train_attr]}训练经验`,
        100 + era.get(`cflag:${chara_id}:${attr_names[train_attr]}加成`),
      );
      get_success_base_reward(
        chara_id,
        train_attr,
        era.get(`abl:${chara_id}:${attr_names[train_attr]}训练等级`),
        train_cost,
        changes,
        true,
      );
      era.printMultiColumns([
        {
          content: [
            get_chara_talk(chara_id).get_colored_name(),
            ' 进行了自主训练……',
          ],
          type: 'text',
        },
        ...cost_result.map((e) => {
          return {
            content: e,
            config: { offset: 1, width: 23 },
            type: 'text',
          };
        }),
        ...changes.attr_change
          .map((stat, attr) => sys_change_attr_and_print(chara_id, attr, stat))
          .filter((e) => e.length)
          .map((e) => {
            return {
              content: e,
              config: { offset: 1, width: 23 },
              type: 'text',
            };
          }),
        {
          content: [
            { content: `获得了 ${changes.pt_change} 点技能点数` },
            { isBr: true },
            { isBr: true },
          ],
          config: { offset: 1, width: 23 },
          type: 'text',
        },
      ]);
      era.add(`exp:${chara_id}:技能点数`, changes.pt_change);
    }
    if (
      era.get(`cflag:${chara_id}:种族`) &&
      era.get(`cflag:${chara_id}:成长阶段`) >= 2
    ) {
      era.set(
        `status:${chara_id}:熬夜`,
        Math.random() < 0.05 + 0.025 * era.get(`talent:${chara_id}:时间观念`),
      );
      if (chara_id && era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48) {
        era.set(
          `status:${chara_id}:摸鱼`,
          Math.random() < 0.02 + 0.01 * era.get(`talent:${chara_id}:偷懒克制`),
        );
        sys_change_pressure(chara_id, -500);
      }
    } else {
      era.set(`status:${chara_id}:熬夜`, 0);
      era.set(`status:${chara_id}:摸鱼`, 0);
    }
    if (era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48) {
      era.set(`cflag:${chara_id}:自主训练`, 1);
    }
  }
}

module.exports = randomly_interact;
