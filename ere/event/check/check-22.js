const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const FineEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-22');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sapp_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = -4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 2)] = -4;
aim_races[get_aim_race_index(race_enum.mile_cha, 2)] = -4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = -4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    if (era.get('cflag:22:育成回合计时') <= 95) {
      switch (extra_flag.race) {
        case race_enum.shuk_sho:
          if (
            extra_flag.pop !== 1 ||
            extra_flag.rank !== 1 ||
            extra_flag.contestants.find((e) => e.rank.curr === 1).race
              .conditionParams.bashin_diff_behind < 3.5
          ) {
            new FineEduMarks().title_check = 1;
          }
          break;
        case race_enum.eliz_cup:
        case race_enum.arim_kin:
          if (extra_flag.pop !== 1 || extra_flag.rank !== 1) {
            new FineEduMarks().title_check = 1;
          }
          break;
        default:
          if (extra_flag.rank !== 1) {
            new FineEduMarks().title_check = 1;
          }
      }
    }
  },
  () => !new FineEduMarks().title_check,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sapp_kin, 2, 3));
    let final_check = [
      race_enum.tenn_sho,
      race_enum.eliz_cup,
      race_enum.mile_cha,
      race_enum.arim_kin,
    ].map((e) => ({ c: check_aim_race(races, e, 2, 1), r: e }));
    const win_race =
      final_check.reduce((p, c) => p || (c.c && race_infos[c.r].name_zh), '') ||
      '未胜利';
    final_check = Number(final_check.reduce((p, c) => p || c.c, false));
    buffer.push({
      check: final_check,
      color: final_check ? attr_change_colors.up : attr_change_colors.down,
      content: `资深年 任意指定赛事赢取一着 ${win_race}/秋季天皇赏or伊丽莎白女王杯or英里冠军赛or有马纪念 ${
        final_check === 1 ? '✔' : '✘'
      }`,
    });
  },
);
