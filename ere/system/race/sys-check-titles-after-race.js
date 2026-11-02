const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');

const CharaTitles = require('#/data/chara-titles');
const { adaptability_colors, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { i18n } = require('#/i18n/selector');

const edu_weeks_kiku_sho = 48 + race_infos[race_enum.kiku_sho].date;
const edu_weeks_shuk_sho = 48 + race_infos[race_enum.shuk_sho].date;
const edu_weeks_japa_dir = 48 + race_infos[race_enum.japa_dir].date;
const edu_weeks_belm_sta = 48 + race_infos[race_enum.belm_sta].date;

// 无暇：互不包含的最小无败称号集合（无败六冠已包含无败三冠、无败三宝冠）
const flawless_titles = [
  'r_6crown_i',
  'r_3crown_mi',
  'r_3crown_di',
  'r_3crown_ai',
];

// 八大竞走：经典三冠、牝马经典赛、古马最高赛事
const eight_major_races = [
  race_enum.sats_sho,
  race_enum.toky_yus,
  race_enum.kiku_sho,
  race_enum.oka_sho,
  race_enum.yush_him,
  race_enum.tenn_spr,
  race_enum.tenn_sho,
  race_enum.arim_kin,
];

/**
 * @param {PseudoUma[]} team_list
 * @param {number} race
 * @param {number} best_rank
 * @param {number} mvp_id
 * @returns {{hentai_count:number,new_title_dict:Record<string,[{c:string,n:string}]>}}
 */
function sys_check_titles_after_race(team_list, race, best_rank, mvp_id) {
  const new_title_dict = {};
  const pregnant_check =
    era.get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.embryo &&
    era.get('cflag:0:妊娠回合计时') === 0 &&
    LifeEventMarks.get_marks(0).sperm > 0;
  let p_flag = 0;
  let o_flag = 0;
  team_list.forEach((uma) => {
    const cid = uma.index_chara;
    new_title_dict[cid] = [];
    const pregnant_stage = era.get(`cflag:${cid}:妊娠阶段`);
    if (pregnant_stage >> pregnant_stage_enum.late > 0) {
      p_flag++;
    }
    if (pregnant_stage >> pregnant_stage_enum.embryo > 0) {
      new_title_dict[cid].push({ n: 's_with_baby', c: buff_colors[2] });
    }
    if (
      era.get(`cflag:${cid}:腹中精液`) > 0 &&
      era.get(`cflag:${cid}:子宫内精液`) > 0 &&
      era.get(`cflag:${cid}:肠道内精液`) > 0
    ) {
      new_title_dict[cid].push({ n: 's_dirty', c: buff_colors[2] });
    }
    if (cid > 0 && Number(pregnant_check) === cid) {
      new_title_dict[cid].push({ n: 's_be_father', c: buff_colors[2] });
    }
    if (uma.ero.orgasm > 0) {
      o_flag += Math.random() < Math.min(uma.ero.orgasm, 6) ** 2 / (6 ** 2 * 2);
      if (!uma.race.conditionParams.item) {
        new_title_dict[cid].push({ n: 's_unlucky_1', c: buff_colors[2] });
      }
      if (uma.ero.orgasm >= 6) {
        new_title_dict[cid].push({ n: 's_hentai', c: buff_colors[2] });
        if (!uma.race.conditionParams.item) {
          new_title_dict[cid].push({ n: 's_unlucky_2', c: buff_colors[2] });
          if (uma.rank.curr === 1) {
            global_achievement.wins_hnt = 1;
          }
        }
      }
    }
  });
  if (best_rank === 1) {
    const current_year = era.get('flag:当前年');
    switch (race) {
      case race_enum.kiku_sho:
      case race_enum.shuk_sho:
        {
          let invincible_1 = true;
          let invincible_2 = true;
          let cup_1 = 0;
          let cup_2 = 0;
          let cup_3 = 0;
          RaceHistory.get(mvp_id)
            .get_entries()
            .forEach((e) => {
              if (e.rank === 1) {
                switch (e.race) {
                  case race_enum.sats_sho:
                    cup_1++;
                    break;
                  case race_enum.oka_sho:
                    cup_1 += 2;
                    break;
                  case race_enum.toky_yus:
                    cup_2++;
                    break;
                  case race_enum.yush_him:
                    cup_2 += 2;
                    break;
                  case race_enum.kiku_sho:
                    cup_3++;
                    break;
                  case race_enum.shuk_sho:
                    cup_3 += 2;
                }
              } else {
                if (e.weeks < edu_weeks_kiku_sho) {
                  invincible_1 = false;
                }
                if (e.weeks < edu_weeks_shuk_sho) {
                  invincible_2 = false;
                }
              }
            });
          if ((cup_1 & cup_2 & cup_3 & 0b1) > 0) {
            new_title_dict[mvp_id].push({
              n: 'r_3crown_c',
              c: adaptability_colors.at(-3),
            });
            global_achievement.r_3crown_c = 1;
            invincible_1 &&
              new_title_dict[mvp_id].push({
                n: 'r_3crown_ci',
                c: adaptability_colors.at(-2),
              });
          }
          if ((cup_1 & cup_2 & cup_3 & 0b10) > 0) {
            new_title_dict[mvp_id].push({
              n: 'r_3crown_f',
              c: adaptability_colors.at(-3),
            });
            global_achievement.r_3crown_f = 1;
            invincible_2 &&
              new_title_dict[mvp_id].push({
                n: 'r_3crown_fi',
                c: adaptability_colors.at(-2),
              });
          }
          if (
            cup_1 > 0 &&
            cup_2 > 0 &&
            cup_3 > 0 &&
            (cup_1 & cup_2 & cup_3) === 0
          ) {
            new_title_dict[mvp_id].push({
              n: 'r_3crown_m',
              c: adaptability_colors.at(-3),
            });
            global_achievement.r_3crown_m = 1;
            if ((cup_3 & 1 && invincible_1) || (cup_3 & 2 && invincible_2)) {
              new_title_dict[mvp_id].push({
                n: 'r_3crown_mi',
                c: adaptability_colors.at(-2),
              });
            }
          }
          if ((cup_1 & cup_2 & cup_3) === 0b11) {
            new_title_dict[mvp_id].push({
              n: 'r_6crown',
              c: adaptability_colors.at(-2),
            });
            global_achievement.r_6crown = 1;
            if (invincible_1 && invincible_2) {
              new_title_dict[mvp_id].push({
                n: 'r_6crown_i',
                c: adaptability_colors.at(-1),
              });
            }
          }
        }
        break;
      case race_enum.japa_dir:
        {
          let invincible_4 = true;
          let cup = 0;
          RaceHistory.get(mvp_id)
            .get_entries()
            .forEach((e) => {
              if (e.rank === 1) {
                switch (e.race) {
                  case race_enum.hane_hai:
                    cup++;
                    break;
                  case race_enum.toky_der:
                    cup++;
                }
              } else {
                if (e.weeks < edu_weeks_japa_dir) {
                  invincible_4 = false;
                }
              }
            });
          if (cup === 2) {
            new_title_dict[mvp_id].push({
              n: 'r_3crown_d',
              c: adaptability_colors.at(-3),
            });
            global_achievement.r_3crown_d = 1;
            invincible_4 &&
              new_title_dict[mvp_id].push({
                n: 'r_3crown_di',
                c: adaptability_colors.at(-2),
              });
          }
        }
        break;
      case race_enum.belm_sta:
        {
          let invincible = true,
            cup = 0;
          RaceHistory.get(mvp_id)
            .get_entries()
            .forEach((e) => {
              if (e.rank === 1) {
                switch (e.race) {
                  case race_enum.kent_der:
                    cup++;
                    break;
                  case race_enum.prea_sta:
                    cup++;
                }
              } else {
                if (e.weeks < edu_weeks_belm_sta) {
                  invincible = false;
                }
              }
            });
          if (cup === 2) {
            new_title_dict[mvp_id].push({
              n: 'r_3crown_a',
              c: adaptability_colors.at(-3),
            });
            global_achievement.r_3crown_a = 1;
            invincible &&
              new_title_dict[mvp_id].push({
                n: 'r_3crown_ai',
                c: adaptability_colors.at(-2),
              });
          }
        }
        break;
      case race_enum.takz_kin:
        {
          // 春三冠：大阪杯、春季天皇赏、宝冢纪念，需要在同一年全部获胜
          let cup_1 = 0;
          let cup_2 = 0;
          let cup_3 = 0;
          RaceHistory.get(mvp_id)
            .get_entries()
            .forEach((e) => {
              if (e.rank === 1 && e.year === current_year) {
                switch (e.race) {
                  case race_enum.sank_hai:
                    cup_1 = 1;
                    break;
                  case race_enum.tenn_spr:
                    cup_2 = 1;
                    break;
                  case race_enum.takz_kin:
                    cup_3 = 1;
                }
              }
            });
          if (cup_1 && cup_2 && cup_3) {
            new_title_dict[mvp_id].push({
              n: 'r_3crown_sp',
              c: adaptability_colors.at(-4),
            });
            global_achievement.r_3crown_sp = 1;
          }
        }
        break;
      case race_enum.arim_kin: {
        // 秋三冠：秋季天皇赏、日本杯、有马纪念，需要在同一年全部获胜
        let cup_1 = 0;
        let cup_2 = 0;
        let cup_3 = 0;
        RaceHistory.get(mvp_id)
          .get_entries()
          .forEach((e) => {
            if (e.rank === 1 && e.year === current_year) {
              switch (e.race) {
                case race_enum.tenn_sho:
                  cup_1 = 1;
                  break;
                case race_enum.japa_cup:
                  cup_2 = 1;
                  break;
                case race_enum.arim_kin:
                  cup_3 = 1;
              }
            }
          });
        if (cup_1 && cup_2 && cup_3) {
          new_title_dict[mvp_id].push({
            n: 'r_3crown_au',
            c: adaptability_colors.at(-4),
          });
          global_achievement.r_3crown_au = 1;
        }
      }
    }
    if (eight_major_races.includes(race)) {
      const won_races = new Set();
      era.getAddedCharacters().forEach((cid) => {
        RaceHistory.get(cid)
          .get_entries()
          .forEach((e) => {
            if (e.rank === 1) {
              won_races.add(e.race);
            }
          });
      });
      if (eight_major_races.every((r) => won_races.has(r))) {
        global_achievement.eight_major = 1;
      }
    }
    if (!global_achievement.flawless) {
      const owned_titles = new Set();
      era.getAddedCharacters().forEach((cid) => {
        CharaTitles.get(cid)
          .get()
          .forEach(({ n }) => owned_titles.add(n));
      });
      Object.values(new_title_dict).forEach((titles) => {
        titles.forEach(({ n }) => owned_titles.add(n));
      });
      if (flawless_titles.every((n) => owned_titles.has(n))) {
        global_achievement.flawless = 1;
      }
    }
  }
  if (p_flag > 0) {
    era.print(i18n().timon.race.in_race_pregnant_info);
  }
  if (o_flag > 0) {
    era.print(i18n().timon.race.in_race_orgasm_info);
  }
  if (p_flag > 0 || o_flag > 0) {
    era.set('flag:变态行为', 1);
  }
  return { hentai_count: p_flag + o_flag, new_title_dict };
}

module.exports = sys_check_titles_after_race;
