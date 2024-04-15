const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

const edu_weeks_kiku_sho = 48 + race_infos[race_enum.kiku_sho].date,
  edu_weeks_shuk_sho = 48 + race_infos[race_enum.shuk_sho].date,
  edu_weeks_japa_dir = 48 + race_infos[race_enum.japa_dir].date;

/**
 * @param {PseudoUma[]} team_list
 * @param {number} race
 * @param {number} best_rank
 * @param {number} mvp_id
 * @returns {{hentai_flag:boolean,new_title_dict:Record<string,[{c:string,n:string}]>}}
 */
function sys_check_titles_after_race(team_list, race, best_rank, mvp_id) {
  const new_title_dict = {},
    pregnant_check =
      era.get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.embryo &&
      era.get('cflag:0:妊娠回合计时') === 0 &&
      new LifeEventMarks(0).sperm;
  let hentai_flag = false;
  team_list.forEach(({ index_chara: id }) => {
    new_title_dict[id] = [];
    const pregnant_stage = era.get(`cflag:${id}:妊娠阶段`);
    if (pregnant_stage >> pregnant_stage_enum.fetal > 0) {
      hentai_flag = true;
    }
    if (pregnant_stage >> pregnant_stage_enum.embryo > 0) {
      new_title_dict[id].push({ n: '亲子关系紧张', c: buff_colors[2] });
    }
    if (
      era.get(`cflag:${id}:腹中精液`) &&
      era.get(`cflag:${id}:子宫内精液`) &&
      era.get(`cflag:${id}:肠道内精液`)
    ) {
      new_title_dict[id].push({ n: '白浊浸染', c: buff_colors[2] });
    }
    if (id > 0 && Number(pregnant_check) === id) {
      new_title_dict[id].push({ n: '父亲力量', c: buff_colors[2] });
    }
  });
  if (
    (race === race_enum.kiku_sho ||
      race === race_enum.shuk_sho ||
      race === race_enum.japa_dir) &&
    best_rank === 1
  ) {
    let invincible_1 = true,
      invincible_2 = true,
      invincible_4 = true,
      cup_1 = 0,
      cup_2 = 0,
      cup_3 = 0;
    new RaceHistory(mvp_id).get_entries().forEach((e) => {
      if (e.rank === 1) {
        switch (e.race) {
          case race_enum.sats_sho:
            cup_1++;
            break;
          case race_enum.oka_sho:
            cup_1 += 2;
            break;
          case race_enum.hane_hai:
            cup_1 += 4;
            break;
          case race_enum.toky_yus:
            cup_2++;
            break;
          case race_enum.yush_him:
            cup_2 += 2;
            break;
          case race_enum.toky_der:
            cup_2 += 4;
            break;
          case race_enum.kiku_sho:
            cup_3++;
            break;
          case race_enum.shuk_sho:
            cup_3 += 2;
            break;
          case race_enum.japa_dir:
            cup_3 += 4;
        }
      } else {
        if (e.weeks < edu_weeks_kiku_sho) {
          invincible_1 = false;
        }
        if (e.weeks < edu_weeks_shuk_sho) {
          invincible_2 = false;
        }
        if (e.weeks < edu_weeks_japa_dir) {
          invincible_4 = false;
        }
      }
    });
    if (cup_1 & cup_2 & cup_3 & 0b1) {
      new_title_dict[mvp_id].push({ n: '三冠', c: buff_colors[1] });
      invincible_1 &&
        new_title_dict[mvp_id].push({ n: '无败三冠', c: buff_colors[1] });
    }
    if (cup_1 & cup_2 & cup_3 & 0b10) {
      new_title_dict[mvp_id].push({ n: '三宝冠', c: buff_colors[1] });
      invincible_2 &&
        new_title_dict[mvp_id].push({ n: '无败三宝冠', c: buff_colors[1] });
    }
    if (cup_1 & cup_2 & cup_3 & 0b100) {
      new_title_dict[mvp_id].push({ n: '泥地三冠', c: buff_colors[1] });
      invincible_4 &&
        new_title_dict[mvp_id].push({ n: '无败泥地三冠', c: buff_colors[1] });
    }
    if (
      (cup_1 & 0b11) > 0 &&
      (cup_2 & 0b11) > 0 &&
      (cup_3 & 0b11) > 0 &&
      (cup_1 & cup_2 & cup_3 & 0b11) === 0
    ) {
      new_title_dict[mvp_id].push({ n: '变则三冠', c: buff_colors[1] });
      if ((cup_3 & 1 && invincible_1) || (cup_3 & 2 && invincible_2)) {
        new_title_dict[mvp_id].push({ n: '无败变则三冠', c: buff_colors[1] });
      }
    }
    if ((cup_1 & cup_2 & cup_3 & 0b11) === 0b11) {
      new_title_dict[mvp_id].push({ n: '极限六冠', c: buff_colors[1] });
      if (invincible_1 && invincible_2) {
        new_title_dict[mvp_id].push({ n: '无败六冠', c: buff_colors[1] });
      }
    }
  }
  if (hentai_flag) {
    era.set('flag:变态行为', 1);
  }
  return { hentai_flag, new_title_dict };
}

module.exports = sys_check_titles_after_race;
