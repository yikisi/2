const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_change_motivation,
  sys_change_pressure,
  sys_fix_chara_base,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const sys_handle_palace = require('#/system/sys-handle-palace');
const { update_train_level } = require('#/system/sys-train-uma');

const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const CharaSkills = require('#/data/chara-skills');
const { buff_colors } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const SasamiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-305');
const recruit_flags = require('#/data/event/recruit-flags');
const LoveLimitStatus = require('#/data/love-limit-status');
const { gene_juel_names } = require('#/data/other-const');
const RaceHistory = require('#/data/race/model/race-history');
const { attr_names } = require('#/data/train-const');

/**
 * @param {number[]} characters
 * @param {Record<string,number>} team_dict
 * @param {number[]} out_race_list
 * @param {CharaTalk} me
 * @param {number} cur_round
 * @param {number} has_furniture
 * @returns {Promise<number>}
 */
async function reset_status(
  characters,
  team_dict,
  out_race_list,
  me,
  cur_round,
  has_furniture,
) {
  const health_buff =
    (era.get('cflag:305:招募状态') === recruit_flags.yes) *
    (new SasamiLifeMarks().buff + 1);
  let ret = 0;
  let temp;
  for (const chara_id of characters) {
    sys_fix_chara_base(chara_id);
    let stay_up = era.get(`status:${chara_id}:熬夜`);
    if (era.get(`base:${chara_id}:性欲`) >= lust_border.absent_mind) {
      stay_up++;
      sys_change_lust(chara_id, -get_random_value(0, 2000));
    }
    // 体力精力恢复
    if (has_furniture > 0 && chara_id === 0) {
      era.add('base:0:体力', Math.floor(era.get('maxbase:0:体力') * 0.8));
      era.add('base:0:精力', era.get('maxbase:0:精力'));
    } else if (has_furniture > 0 && chara_id === has_furniture) {
      era.add(
        `base:${chara_id}:体力`,
        Math.floor(era.get(`maxbase:${chara_id}:体力`) * 0.4),
      );
      era.add(
        `base:${chara_id}:精力`,
        Math.floor(era.get(`maxbase:${chara_id}:精力`) * 0.75),
      );
    } else {
      era.add(
        `base:${chara_id}:体力`,
        Math.floor(era.get(`maxbase:${chara_id}:体力`) * (0.6 - 0.2 * stay_up)),
      );
      era.add(
        `base:${chara_id}:精力`,
        Math.floor(era.get(`maxbase:${chara_id}:精力`) * (1 - 0.25 * stay_up)),
      );
    }

    const chara = get_chara_talk(chara_id);

    // 药物泌乳只维持一回合
    if (era.get(`talent:${chara_id}:泌乳`) === 2) {
      if (Math.random() < 0.05) {
        era.set(`talent:${chara_id}:泌乳`, 3);
        await era.printAndWait([
          chara.get_colored_name(),
          ' 在 [母乳药剂] 的影响下变成 ',
          { color: buff_colors[2], content: '[母乳体质]' },
          ' 了！',
        ]);
      } else {
        era.set(`talent:${chara_id}:泌乳`, 0);
      }
    }

    const weight_delta = era.get(`base:${chara_id}:体重偏差`);
    if (!era.get(`status:${chara_id}:发胖`) && weight_delta >= 4000) {
      era.set(`status:${chara_id}:发胖`, 1);
      era.print([
        chara.get_colored_name(),
        ' ',
        { color: buff_colors[0], content: '[发胖]' },
        '了……',
      ]);
      sys_change_pressure(chara_id, 1000);
    } else if (era.get(`status:${chara_id}:发胖`)) {
      if (weight_delta <= 2000) {
        era.set(`status:${chara_id}:发胖`, 0);
        era.print([chara.get_colored_name(), ' 的体重恢复了正常……']);
      } else {
        sys_change_pressure(chara_id, weight_delta / 10 - 100);
      }
    }

    const health_talent = era.get(`talent:${chara_id}:身体素质`),
      race = era.get(`cflag:${chara_id}:种族`);
    let drug_delta = era.add(
      `base:${chara_id}:药物残留`,
      ((15 * era.get(`status:${chara_id}:马跳Z`) +
        25 * era.get(`status:${chara_id}:马跳S`) +
        80 * era.get(`status:${chara_id}:超马跳Z`) +
        25 * era.get(`status:${chara_id}:弗隆K`) +
        30 * era.get(`status:${chara_id}:弗隆P`) +
        16 * (era.get(`status:${chara_id}:长效避孕药`) > 0) +
        15 * (era.get(`status:${chara_id}:短效避孕药`) > 0) +
        10 * (era.get(`talent:${chara_id}:泌乳`) === 2)) *
        (10 - 2 * health_buff)) /
        10 -
        (5 + health_talent + health_buff) *
          (1 + race + era.get(`status:${chara_id}:健康茶`)),
    );
    if (
      !era.get(`status:${chara_id}:偏头痛`) &&
      drug_delta >= 100 + 20 * health_talent + 50 * race
    ) {
      era.set(`status:${chara_id}:偏头痛`, 1);
      era.print([
        chara.get_colored_name(),
        ' 罹患了 ',
        { color: buff_colors[0], content: '[偏头痛]' },
        '……',
      ]);
      sys_change_pressure(chara_id, get_random_value(500, 1500));
    } else if (era.get(`status:${chara_id}:偏头痛`)) {
      if (drug_delta <= 80 + 20 * health_talent + 50 * race) {
        era.set(`status:${chara_id}:偏头痛`, 0);
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { color: buff_colors[0], content: '[偏头痛]' },
          ' 痊愈了……',
        ]);
      } else {
        sys_change_pressure(chara_id, drug_delta * 4);
      }
    }
    if (chara_id > 0) {
      era.set(`cflag:${chara_id}:子宫内精液`, 0);
      era.set(`cflag:${chara_id}:肠道内精液`, 0);
      era.set(`cflag:${chara_id}:腹中精液`, 0);
    }
    era.set(`status:${chara_id}:马跳Z`, 0);
    if (
      era.get(`cflag:${chara_id}:阴茎尺寸`) < 4 &&
      Math.random() <
        0.05 * era.get(`status:${chara_id}:弗隆K`) +
          0.1 * era.get(`status:${chara_id}:弗隆P`)
    ) {
      era.add(`cflag:${chara_id}:阴茎尺寸`, 1);
      era.set(
        `abl:${chara_id}:阴茎耐性`,
        Math.max(era.get(`abl:${chara_id}:阴茎耐性`) - 2, 0),
      );
      if (era.get(`cflag:${chara_id}:性别`) === 0) {
        era.set(`cflag:${chara_id}:性别`, 10);
        era.print([chara.get_colored_name(), ' 的阴核长成了一根肉棒！']);
      }
    }
    era.set(`status:${chara_id}:弗隆K`, 0);
    era.set(`status:${chara_id}:弗隆P`, 0);
    era.set(`status:${chara_id}:超马跳Z`, 0);
    era.set(`status:${chara_id}:马跳S`, 0);
    era.set(`status:${chara_id}:沉睡`, 0);
    era.set(`status:${chara_id}:短效避孕药`, 0);
    era.set(`status:${chara_id}:反避孕套`, 0);
    if (era.get(`status:${chara_id}:长效避孕药`) > 0) {
      era.add(`status:${chara_id}:长效避孕药`, -1);
    }
    if (era.get(`status:${chara_id}:疲惫`) > 0) {
      era.set(
        `status:${chara_id}:疲惫`,
        Math.max(
          era.get(`status:${chara_id}:疲惫`) -
            (1 + (Math.random() < health_buff * 0.5 - 0.2)),
          0,
        ),
      );
    }
    if (era.get(`status:${chara_id}:伤病`) > 0) {
      era.set(
        `status:${chara_id}:伤病`,
        Math.max(
          era.get(`status:${chara_id}:伤病`) -
            (1 + (Math.random() < health_buff * 0.5 - 0.2)),
          0,
        ),
      );
    }
    era.set(`status:${chara_id}:健康茶`, 0);

    if (!isNaN(Number(era.get(`cflag:${chara_id}:育成回合计时`)))) {
      era.add(`cflag:${chara_id}:育成回合计时`, 1);
    }
    if (team_dict[chara_id]) {
      // 避战惩罚
      const registered_race = sys_reg_race(chara_id);
      if (
        registered_race.last.week > 0 &&
        registered_race.last.week < cur_round &&
        !new RaceHistory(chara_id).get_result(
          era.get(`cflag:${chara_id}:育成回合计时`) - 1,
        )
      ) {
        out_race_list.push(chara_id);
        ret += 100;
        registered_race.curr = { race: -1, week: -1 };
      }
      registered_race.last.race = registered_race.curr.race;
      registered_race.last.week = registered_race.curr.week;
      let motivation_change = 0;
      if (chara_id > 0) {
        stay_up > 0 && sys_change_pressure(chara_id, 100 + 200 * stay_up);
        out_race_list.at(-1) === chara_id &&
          sys_change_pressure(chara_id, get_random_value(1000, 2000));
        let status_hate = era.get(`status:${chara_id}:讨厌药`);
        status_hate && (status_hate = era.add(`status:${chara_id}:讨厌药`, -1));
        const status_limit = new LoveLimitStatus(chara_id);
        if (
          !status_limit.is_empty() &&
          cur_round > status_limit.limit &&
          Math.random() > Math.pow(2, status_limit.limit - cur_round) + 0.5
        ) {
          era.set(`love:${chara_id}`, status_limit.cache);
          const limit_delta = cur_round - status_limit.limit;
          status_limit.clear();
          await era.printAndWait([
            '下给 ',
            chara.get_colored_name(),
            ` 的抑制药失效了……${chara.sex}对 `,
            me.get_colored_name(),
            ' 的恋心汹涌而来',
          ]);
          sys_love_uma(chara_id, limit_delta * 2 + 8, true) &&
            (await era.waitAnyKey());
          sys_change_lust(
            chara_id,
            limit_delta * 100 + get_random_value(800, 1800),
          );
        }
        if (era.get(`cflag:${chara_id}:成长阶段`) >= 2) {
          if (
            (temp = era.get('flag:回合好感惩罚')) ||
            era.get(`status:${chara_id}:讨厌药`)
          ) {
            sys_like_chara(
              chara_id,
              0,
              temp - (era.get(`status:${chara_id}:讨厌药`) > 0) * 50,
              false,
            );
          }
          if ((temp = era.get('flag:回合爱慕惩罚'))) {
            sys_love_uma(
              chara_id,
              (1 - (era.get(`status:${chara_id}:讨厌药`) > 0)) *
                (1 - !new LoveLimitStatus(chara_id).is_empty()) *
                temp,
              false,
            );
          }
        }
        // 殿堂计算
        const edu_weeks = era.get(`cflag:${chara_id}:育成回合计时`);
        if (edu_weeks === 3 * 48) {
          sys_handle_palace(chara_id);
          await era.waitAnyKey();
        } else if (edu_weeks < 3 * 48) {
          if (edu_weeks > 0 && edu_weeks % 48 === 0) {
            const skill_control = new CharaSkills(chara_id),
              available_control = new CharaAvailableSkills(chara_id),
              to_get = available_control.get().slice(0, 2);
            if (to_get.length === 0) {
              era.add(`exp:${chara_id}:技能点数`, 400);
            } else {
              available_control.remove(...to_get);
              get_skills_and_print_in_event(chara_id, to_get, skill_control);
            }
            attr_names.forEach((e) => {
              if (update_train_level(chara_id, e)) {
                era.print([
                  get_chara_talk(chara_id).get_colored_name(),
                  ` 的 ${e}训练 变得更擅长了！`,
                ]);
              }
            });
          } else if (
            edu_weeks % 48 === 9 &&
            era.get(`cflag:${chara_id}:继承方1`) > 0
          ) {
            const a = era.get(`cflag:${chara_id}:继承方1`),
              b = era.get(`cflag:${chara_id}:继承方2`),
              juel_list = gene_juel_names.map(
                (e) => era.get(`juel:${a}:${e}`) + era.get(`juel:${b}:${e}`),
              );
            if (edu_weeks > 96) {
              juel_list.forEach((e, i) =>
                era.add(
                  `juel:${chara_id}:${gene_juel_names[i]}`,
                  Math.floor(e * 0.4),
                ),
              );
            } else {
              juel_list.forEach((e, i) =>
                era.add(
                  `juel:${chara_id}:${gene_juel_names[i]}`,
                  e - Math.floor(e * 0.3) - Math.floor(e * 0.4),
                ),
              );
            }
            era.print([
              get_chara_talk(chara_id).get_colored_name(),
              ' 继承了新的因子！',
            ]);
          }
          if (
            era.get(`status:${chara_id}:摸鱼`) ||
            (stay_up && Math.random() < 0.2)
          ) {
            motivation_change -= 1;
          }
        }
      }
      sys_change_motivation(chara_id, motivation_change);
    }
  }
  return ret;
}

module.exports = reset_status;
