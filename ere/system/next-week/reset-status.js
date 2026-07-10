const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');
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
const CharaTitles = require('#/data/chara-titles');
const { buff_colors } = require('#/data/color-const');
const { mark_enum } = require('#/data/ero/mark-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const SasamiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-305');
const recruit_flags = require('#/data/event/recruit-flags');
const LoveLimitStatus = require('#/data/love-limit-status');
const RaceHistory = require('#/data/race/model/race-history');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

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
  let p_flag = false;
  for (const cid of characters) {
    const chara = get_chara_talk(cid);
    sys_fix_chara_base(cid);

    // 药物泌乳只维持一回合
    if (era.get(`talent:${cid}:泌乳`) === 2) {
      if (Math.random() < 0.05) {
        era.set(`talent:${cid}:泌乳`, 3);
        await era.printAndWait(
          i18n().timon.get_it_nt_get_milk(
            chara,
            di18n.tb_item.get_name(37),
            i18n().tb_talent.template.replace('%NAME%', i18n().tb_talent.s32),
          ),
          { color: buff_colors[2] },
        );
      } else {
        era.set(`talent:${cid}:泌乳`, 0);
      }
    }

    const weight_delta = era.get(`base:${cid}:体重偏差`);
    if (!era.get(`status:${cid}:发胖`) && weight_delta >= 4000) {
      era.set(`status:${cid}:发胖`, 1);
      era.print(
        i18n().timon.get_it_nt_become_fat(
          chara,
          i18n().tb_status.template.replace('%NAME%', i18n().tb_status[3]),
        ),
        { color: buff_colors[0] },
      );
      sys_change_pressure(cid, 1000);
    } else if (era.get(`status:${cid}:发胖`)) {
      if (weight_delta <= 2000) {
        era.set(`status:${cid}:发胖`, 0);
        era.print(
          i18n().timon.get_it_nt_not_be_fat(
            chara,
            i18n().tb_status.template.replace('%NAME%', i18n().tb_status[3]),
          ),
        );
      } else {
        sys_change_pressure(cid, weight_delta / 10 - 100);
      }
    }

    const health_talent = era.get(`talent:${cid}:身体素质`);
    const race = era.get(`cflag:${cid}:种族`);
    let drug_delta = era.add(
      `base:${cid}:药物残留`,
      ((20 * era.get(`status:${cid}:马跳Z`) +
        40 * era.get(`status:${cid}:马跳S`) +
        80 * era.get(`status:${cid}:超马跳Z`) +
        40 * era.get(`status:${cid}:弗隆K`) +
        50 * era.get(`status:${cid}:弗隆P`) +
        26 * (era.get(`status:${cid}:长效避孕药`) > 0) +
        25 * (era.get(`status:${cid}:短效避孕药`) > 0) +
        16 * (era.get(`talent:${cid}:泌乳`) === 2)) *
        (10 - 2 * health_buff)) /
        10 -
        (5 + health_talent + health_buff) *
          (1 + race + (era.get(`status:${cid}:健康茶`) > 0)),
    );
    let headache = 0;
    if (
      !era.get(`status:${cid}:偏头痛`) &&
      drug_delta >= 100 + 20 * health_talent + 50 * race
    ) {
      era.set(`status:${cid}:偏头痛`, 1);
      era.print(
        i18n().timon.get_it_nt_become_headache(
          chara,
          i18n().tb_status.template.replace('%NAME%', i18n().tb_status[4]),
        ),
        { color: buff_colors[0] },
      );
      sys_change_pressure(cid, get_random_value(500, 1500));
      headache = 1;
    } else if (era.get(`status:${cid}:偏头痛`) > 0) {
      if (drug_delta <= 80 + 20 * health_talent + 50 * race) {
        era.set(`status:${cid}:偏头痛`, 0);
        era.print(
          i18n().timon.get_it_nt_not_be_headache(
            chara,
            i18n().tb_status.template.replace('%NAME%', i18n().tb_status[4]),
          ),
        );
      } else {
        sys_change_pressure(cid, drug_delta * 4);
        headache = 1;
      }
    }

    let stay_up = era.get(`status:${cid}:熬夜`);
    if (era.get(`base:${cid}:性欲`) >= lust_border.absent_mind) {
      stay_up++;
      sys_change_lust(cid, -get_random_value(0, 2000));
    }
    // 体力精力恢复
    headache++;
    if (has_furniture > 0 && cid === 0) {
      era.add('base:0:体力', era.get('maxbase:0:体力') * 0.8);
      era.add('base:0:精力', era.get('maxbase:0:精力') / headache);
    } else if (has_furniture > 0 && cid === has_furniture) {
      era.add(`base:${cid}:体力`, era.get(`maxbase:${cid}:体力`) * 0.4);
      era.add(
        `base:${cid}:精力`,
        (era.get(`maxbase:${cid}:精力`) * 0.75) / headache,
      );
    } else {
      era.add(
        `base:${cid}:体力`,
        era.get(`maxbase:${cid}:体力`) * (0.6 - 0.2 * stay_up),
      );
      era.add(
        `base:${cid}:精力`,
        (era.get(`maxbase:${cid}:精力`) * (1 - 0.25 * stay_up)) / headache,
      );
    }
    if (cid > 0) {
      era.set(`cflag:${cid}:子宫内精液`, 0);
      era.set(`cflag:${cid}:肠道内精液`, 0);
      era.set(`cflag:${cid}:腹中精液`, 0);
    }
    era.set(`status:${cid}:马跳Z`, 0);
    if (
      era.get(`cflag:${cid}:阴茎尺寸`) < 4 &&
      Math.random() <
        0.05 * era.get(`status:${cid}:弗隆K`) +
          0.1 * era.get(`status:${cid}:弗隆P`)
    ) {
      era.add(`cflag:${cid}:阴茎尺寸`, 1);
      era.set(
        `abl:${cid}:阴茎耐性`,
        Math.max(era.get(`abl:${cid}:阴茎耐性`) - 2, 0),
      );
      if (era.get(`cflag:${cid}:性别`) === 0) {
        era.set(`cflag:${cid}:性别`, 10);
        era.print(i18n().timon.get_it_nt_have_penis(chara));
      }
    }
    era.set(`status:${cid}:弗隆K`, 0);
    era.set(`status:${cid}:弗隆P`, 0);
    era.set(`status:${cid}:超马跳Z`, 0);
    era.set(`status:${cid}:马跳S`, 0);
    era.set(`status:${cid}:沉睡`, 0);
    era.set(`status:${cid}:短效避孕药`, 0);
    era.set(`status:${cid}:反避孕套`, 0);
    if (era.get(`status:${cid}:长效避孕药`) > 0) {
      era.add(`status:${cid}:长效避孕药`, -1);
    }
    if (era.get(`status:${cid}:疲惫`) > 0) {
      era.set(
        `status:${cid}:疲惫`,
        Math.max(
          era.get(`status:${cid}:疲惫`) -
            (1 + (Math.random() < health_buff * 0.5 - 0.2)),
          0,
        ),
      );
    }
    if (era.get(`status:${cid}:伤病`) > 0) {
      era.set(
        `status:${cid}:伤病`,
        Math.max(
          era.get(`status:${cid}:伤病`) -
            (1 + (Math.random() < health_buff * 0.5 - 0.2)),
          0,
        ),
      );
    }
    era.set(`status:${cid}:健康茶`, 0);
    if (era.get(`status:${cid}:淫纹贴纸`) === 2) {
      era.set(
        `jewel:${cid}:顺从`,
        Math.max(era.get(`jewel:${cid}:顺从`) - 1666),
      );
    }
    era.set(`status:${cid}:淫纹贴纸`, 0);

    if (!isNaN(Number(era.get(`cflag:${cid}:育成回合计时`)))) {
      era.add(`cflag:${cid}:育成回合计时`, 1);
    }
    if (team_dict[cid]) {
      // 避战惩罚
      const registered_race = sys_reg_race(cid);
      if (
        registered_race.last.week > 0 &&
        registered_race.last.week < cur_round &&
        !RaceHistory.get(cid).get_result(
          era.get(`cflag:${cid}:育成回合计时`) - 1,
        )
      ) {
        out_race_list.push(cid);
        ret += 100;
        registered_race.curr = { race: -1, week: -1 };
      }
      registered_race.last.race = registered_race.curr.race;
      registered_race.last.week = registered_race.curr.week;
      let motivation_change = 0;
      if (cid > 0) {
        if (stay_up > 0) {
          sys_change_pressure(cid, 100 + 200 * stay_up);
        }
        if (out_race_list.at(-1) === cid) {
          sys_change_pressure(cid, get_random_value(1000, 2000));
        }
        let status_hate = era.get(`status:${cid}:讨厌药`);
        if (status_hate) {
          status_hate = era.add(`status:${cid}:讨厌药`, -1);
        }
        const status_limit = LoveLimitStatus.get(cid);
        if (
          !status_limit.is_empty() &&
          cur_round > status_limit.limit &&
          Math.random() > Math.pow(2, status_limit.limit - cur_round) + 0.5
        ) {
          era.set(`love:${cid}`, status_limit.cache);
          const limit_delta = cur_round - status_limit.limit;
          status_limit.clear();
          await era.printAndWait(
            i18n().timon.get_it_nt_love_unlimit(chara, me),
          );
          sys_love_uma(cid, limit_delta * 2 + 8, true) &&
            (await era.waitAnyKey());
          sys_change_lust(cid, limit_delta * 100 + get_random_value(800, 1800));
        }
        if (era.get(`cflag:${cid}:成长阶段`) >= 2) {
          if (
            (temp = era.get('flag:回合好感惩罚')) ||
            era.get(`status:${cid}:讨厌药`)
          ) {
            sys_like_chara(
              cid,
              0,
              temp - (era.get(`status:${cid}:讨厌药`) > 0) * 50,
              false,
            );
          }
          if ((temp = era.get('flag:回合爱慕惩罚')) > 0) {
            sys_love_uma(
              cid,
              (1 - (era.get(`status:${cid}:讨厌药`) > 0)) *
                (1 - !LoveLimitStatus.get(cid).is_empty()) *
                temp,
              false,
            );
          }
        }
        // 殿堂计算
        const edu_weeks = era.get(`cflag:${cid}:育成回合计时`);
        if (edu_weeks === 3 * 48) {
          sys_handle_palace(cid);
          p_flag = true;
          const love = era.get(`love:${cid}`);
          if (love >= 75) {
            global_achievement.edu_1_ex = 1;
          }
          if (
            love >= 90 ||
            (era.get(`mark:${cid}:${mark_enum.meek}`) === 3 &&
              !era.get(`mark:${cid}:${mark_enum.pain}`) &&
              !era.get(`mark:${cid}:${mark_enum.shame}`) &&
              !era.get(`mark:${cid}:${mark_enum.hate}`)) ||
            era.get(`mark:${cid}:${mark_enum.ero}`) === 3
          ) {
            global_achievement.edu_sex = 1;
          }
          if (
            // CFLAGNAME:15 = 父方角色
            era.get(`cflag:${cid}:15`) !== 0 &&
            // CFLAGNAME:16 = 母方角色
            era.get(`cflag:${cid}:16`) !== 0 &&
            love < 25 &&
            // EXPNAME:25 = 性爱次数
            !era.get(`exp:${cid}:25`)
          ) {
            global_achievement.edu_tch = 1;
          }
          // CFLAGNAME:49 = 育成次数
          const edu_count = era.get(`cflag:${cid}:49`);
          if (edu_count >= 2) {
            global_achievement.chan_sec = 1;
          }
          if (edu_count >= 3) {
            global_achievement.chan_thr = 1;
          }
          await era.waitAnyKey();
        } else if (edu_weeks < 3 * 48) {
          if (edu_weeks > 0 && edu_weeks % 48 === 0) {
            const skill_control = CharaSkills.get(cid);
            const available_control = CharaAvailableSkills.get(cid);
            let to_get = available_control.get();
            if (to_get.length === 0) {
              era.add(`exp:${cid}:技能点数`, 400);
            } else {
              if (edu_weeks < 96) {
                to_get = to_get.slice(0, Math.floor(to_get.length / 2));
              }
              available_control.remove(...to_get);
              get_skills_and_print_in_event(cid, to_get, skill_control);
            }
            for (let t = 0; t < 5; ++t) {
              if (update_train_level(cid, t)) {
                era.print(
                  i18n().timon.get_it_nt_train_level_up(
                    get_chara_talk(cid),
                    i18n().ui_train_level_up_template.replace(
                      '%ATTR%',
                      di18n.n_attr[t],
                    ),
                  ),
                );
              }
            }
          } else if (
            edu_weeks % 48 === 8 &&
            era.get(`cflag:${cid}:继承方1`) > 0
          ) {
            const a = era.get(`cflag:${cid}:继承方1`);
            const b = era.get(`cflag:${cid}:继承方2`);
            // PARAMNAME:20 - 22 = 粉 - 白
            const juel_list = new Array(3)
              .fill(0)
              .map(
                (_, i) =>
                  era.get(`juel:${a}:${20 + i}`) +
                  era.get(`juel:${b}:${20 + i}`),
              );
            if (edu_weeks > 96) {
              juel_list.forEach((count, i) =>
                era.add(`juel:${cid}:${20 + i}`, Math.floor(count * 0.4)),
              );
            } else {
              juel_list.forEach((cout, i) =>
                era.add(
                  `juel:${cid}:${20 + i}`,
                  cout - Math.floor(cout * 0.3) - Math.floor(cout * 0.4),
                ),
              );
            }
            era.print(i18n().timon.get_it_nt_get_jewel(get_chara_talk(cid)));
          }
          if (
            era.get(`status:${cid}:摸鱼`) ||
            (stay_up && Math.random() < 0.2)
          ) {
            motivation_change -= 1;
          }
        }
      }
      sys_change_motivation(cid, motivation_change);
    }
  }
  if (p_flag) {
    const p_count = characters.reduce(
      // CFLAGNAME:49 = 育成次数
      (p, c) => p + era.get(`cflag:${c}:49`),
      0,
    );
    if (p_count >= 1) {
      global_achievement.edu_one = 1;
    }
    if (p_count >= 3) {
      global_achievement.edu_thr = 1;
    }
    if (p_count >= 7) {
      global_achievement.edu_nrg = 1;
    }
    const wins = characters.reduce(
      (p, c) =>
        p + new CharaTitles(c).get().some((t) => t['wins'] || t.n === 'e_100w'),
      0,
    );
    if (wins >= 1) {
      global_achievement.wins_one = 1;
    }
    if (wins >= 6) {
      global_achievement.wins_six = 1;
    }
    if (wins >= 13) {
      global_achievement.wins_thr = 1;
    }
  }
  return ret;
}

module.exports = reset_status;
