const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_train_enabled,
  sys_get_debuff,
} = require('#/system/sys-calc-chara-param');
const {
  add_train_exp,
  get_success_base_reward,
  update_train_level,
} = require('#/system/sys-train-uma');

const all_reward_in_event = require('#/event/snippets/all-reward-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { attr_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { location_enum } = require('#/data/locations');
const { attr_enum, fail_sta_border, time_cost } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @param {number[]} in_team_list */
function randomly_interact(in_team_list) {
  /** @type {Array<{chara:CharaTalk,level:number,stamina_ratio:number,teach_chara:number,train:number}>} */
  const take_care_list = [];
  /** @type {Record<string,Array<{chara:CharaTalk,level:number,train:number}>>} */
  const self_list = {};
  // 回合结束结算
  for (const cid of in_team_list) {
    const stamina_ratio =
      era.get(`base:${cid}:体力`) / era.get(`maxbase:${cid}:体力`);
    const debuff = sys_get_debuff(cid);
    const time = era.get(`base:${cid}:精力`);
    if (
      debuff < 0.5 &&
      sys_check_train_enabled(cid) &&
      era.get(`cflag:${cid}:自主训练`) > 0 &&
      stamina_ratio >= fail_sta_border.intelligence
    ) {
      const in_beach = era.get(`cflag:${cid}:位置`) === location_enum.beach;
      const train_need_attrs = new Array(5)
        .fill(0)
        .map((_, i) => i)
        .filter(
          (attr) =>
            // BASENAME:5 - 9 = 速度 - 智力
            era.get(`base:${cid}:${5 + attr}`) <
              era.get(`maxbase:${cid}:${5 + attr}`) &&
            // ABLNAME:0 - 4 = 速度训练等级 - 智力训练等级
            time >=
              time_cost[
                (in_beach ? 5 : era.get(`abl:${cid}:${attr}`) || 1) - 1
              ],
        );
      if (train_need_attrs.length > 0) {
        const teach_chara = era.get(`cflag:${cid}:照看`);
        const train =
          stamina_ratio >= fail_sta_border.other
            ? get_random_entry(
                train_need_attrs.filter(
                  (attr) => attr !== attr_enum.intelligence,
                ),
              )
            : attr_enum.intelligence;
        // ABLNAME:0 - 4 = 速度训练等级 - 智力训练等级
        const level = in_beach ? 5 : era.get(`abl:${cid}:${train}`) || 1;
        if (teach_chara > 0) {
          take_care_list.push({
            chara: get_chara_talk(cid),
            level,
            stamina_ratio,
            teach_chara,
            train,
          });
        } else {
          (self_list[train] ||= []).push({
            chara: get_chara_talk(cid),
            level,
            stamina_ratio,
          });
        }
      }
    }
  }
  for (const e of take_care_list) {
    const changes = {
      attr_change: new Array(5).fill(0),
      pt_change: 0,
    };
    const base_time_cost = time_cost[e.level - 1];
    const train_cost = {
      stamina: -base_time_cost * get_random_value(0.9, 1.2, true),
      time: -base_time_cost,
    };
    const cost_result = [
      sys_change_attr_and_print(e.chara.id, attr_enum.hp, train_cost.stamina),
      sys_change_attr_and_print(e.chara.id, attr_enum.tp, train_cost.time),
    ];
    add_train_exp(
      e.chara.id,
      e.train,
      // CFLAGNAME:25 - 29 = 速度加成 - 智力加成
      100 + era.get(`cflag:${e.chara.id}:${25 + e.train}`),
    );
    if (e.teach_chara > 0 && e.level < 5) {
      let exp = add_train_exp(
        e.chara.id,
        e.train,
        // CFLAGNAME:25 - 29 = 速度加成 - 智力加成
        Math.max(era.get(`cflag:${e.teach_chara}:${25 + e.train}`) / 2, 0),
      );
      if (
        exp >= 800 &&
        exp >= e.level * 800 + get_random_value(0, 800) &&
        update_train_level(e.chara.id, e.train)
      ) {
        cost_result.unshift([
          i18n().ui_train_level_up_template.replace(
            '%ATTR%',
            di18n.n_attr[e.train],
          ),
        ]);
      }
    }
    get_success_base_reward(e.chara.id, e.train, e.level, train_cost, changes, {
      teach_chara: e.teach_chara,
    });
    era.printMultiColumns([
      {
        content: i18n().timon.get_it_train_take_care(
          e.chara,
          get_chara_talk(e.teach_chara),
          {
            content: di18n.n_attr[e.train],
            color: attr_colors[e.train],
          },
        ),
        type: 'text',
      },
      ...cost_result.map((e) => ({
        content: e,
        config: { offset: 1, width: 23 },
        type: 'text',
      })),
      ...changes.attr_change
        .map((stat, attr) => sys_change_attr_and_print(e.chara.id, attr, stat))
        .filter((e) => e.length > 0)
        .map((e) => ({
          config: { offset: 1, width: 23 },
          content: e,
          type: 'text',
        })),
      {
        content: i18n().ui_get_pt_template.replace(
          '%PT%',
          changes.pt_change.toString(),
        ),
        config: { offset: 1, width: 23 },
        type: 'text',
      },
    ]);
    sys_like_chara(e.chara.id, e.teach_chara, get_random_value(15, 25));
    sys_like_chara(e.teach_chara, e.chara.id, get_random_value(5, 15));
    era.println();
    era.add(`exp:${e.chara.id}:技能点数`, changes.pt_change);
  }
  for (let train = 0; train < 5; ++train) {
    if (!self_list[train] || self_list[train].length === 0) {
      continue;
    }
    const list = self_list[train].reduce(
      (p, c) => {
        if (p.at(-1).length > 0) {
          if (
            p.at(-1).length === 5 ||
            era.get(`cflag:${p.at(-1).at(-1).chara.id}:位置`) !==
              era.get(`cflag:${c.chara.id}:位置`)
          ) {
            p.push([]);
          }
        }
        p.at(-1).push(c);
        return p;
      },
      [[]],
    );
    for (const l of list) {
      if (l.length > 1) {
        const tmp = [];
        for (let i = 0; i < l.length; ++i) {
          if (i === l.length - 1) {
            tmp.push(i18n().ui_conjunction);
          } else if (i > 0) {
            tmp.push(i18n().ui_comma2);
          }
          tmp.push(l[i].chara.get_colored_name());
        }
        era.print(
          i18n().timon.get_it_train_together(tmp, {
            color: attr_colors[train],
            content: di18n.n_attr[train],
          }),
        );
      } else {
        era.print(
          i18n().timon.get_it_train_lonely(l[0].chara, {
            color: attr_colors[train],
            content: di18n.n_attr[train],
          }),
        );
      }
      for (const c of l) {
        const changes = {
          attr_change: new Array(5).fill(0),
          pt_change: 0,
        };
        const base_time_cost = time_cost[c.level - 1];
        const train_cost = {
          stamina: -base_time_cost * get_random_value(0.9, 1.2, true),
          time: -base_time_cost,
        };
        era.add(
          // EXPNAME:5 - 9 = 速度训练经验 - 智力训练经验
          `exp:${c.chara.id}:${5 + train}`,
          // CFLAGNAME:25 - 29 = 速度加成 - 智力加成
          100 + era.get(`cflag:${c.chara.id}:${25 + train}`),
        );
        get_success_base_reward(
          c.chara.id,
          train,
          c.level,
          train_cost,
          changes,
          { buff: l.length * 5 },
        );
        all_reward_in_event(c.chara.id, {
          attr: changes.attr_change,
          base: [train_cost.stamina, train_cost.time],
          pt: changes.pt_change,
          relation: 0,
          skip_line_break: true,
        });
        era.add(`exp:${c.chara.id}:技能点数`, changes.pt_change);
      }
      for (let i = 0; i < l.length; ++i) {
        for (let j = 0; j < l.length; ++j) {
          if (i === j) {
            continue;
          }
          sys_like_chara(
            l[i].chara.id,
            l[j].chara.id,
            get_random_value(10, 20 + 2 * l.length),
          );
        }
      }
      era.println();
    }
  }
  for (const cid of in_team_list) {
    if (
      era.get(`cflag:${cid}:种族`) > 0 &&
      era.get(`cflag:${cid}:成长阶段`) >= 2
    ) {
      era.set(
        `status:${cid}:熬夜`,
        Math.random() < 0.05 + 0.025 * era.get(`talent:${cid}:时间观念`),
      );
      if (cid > 0 && era.get(`cflag:${cid}:育成回合计时`) < 3 * 48) {
        era.set(
          `status:${cid}:摸鱼`,
          Math.random() < 0.02 + 0.01 * era.get(`talent:${cid}:偷懒克制`),
        );
        sys_change_pressure(cid, -500);
      }
    } else {
      era.set(`status:${cid}:熬夜`, 0);
      era.set(`status:${cid}:摸鱼`, 0);
    }
    // 育成结束的那周不再自主训练
    if (
      era.get(`cflag:${cid}:育成回合计时`) < 3 * 48 - 1 &&
      !era.get(`status:${cid}:摸鱼`) &&
      !era.get(`status:${cid}:偏头痛`) &&
      !CharaInmon.get(cid).on(plugin_enum.sex_2)
    ) {
      era.set(`cflag:${cid}:自主训练`, 1);
    }
  }
}

module.exports = randomly_interact;
