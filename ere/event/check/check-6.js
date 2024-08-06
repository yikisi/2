const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.nhk_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

aim_races[get_aim_race_index(race_enum.yasu_kin, 1)] = -4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = -4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    const edu_marks = new OguriEduMarks();
    if (
      get('cflag:6:育成回合计时') >= 96 &&
      get('cflag:6:育成回合计时') <= 95 + 24 &&
      race_infos[extra_flag.race].race_class === class_enum.G1 &&
      extra_flag.rank <= 3 &&
      edu_marks.aim_check < 2
    ) {
      edu_marks.aim_check++;
    }
  },
  (races, race_list) =>
    race_list.filter(
      (e) => race_infos[e.race].race_class === class_enum.G1 && e.pop === 1,
    ).length >= 6 &&
    check_aim_race(races, race_enum.mile_cha, 1, 1) &&
    (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
      check_aim_race(races, race_enum.yasu_kin, 2, 1)) &&
    (check_aim_race(races, race_enum.arim_kin, 1, 1) ||
      check_aim_race(races, race_enum.arim_kin, 2, 1)),
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.nhk_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    const { aim_check } = new OguriEduMarks();
    buffer.push({
      check: aim_check - 1,
      color: aim_check >= 2 ? attr_change_colors.up : attr_change_colors.down,
      content: `资深年 1-6月 二场G1 前三名 ${aim_check}/2 ${
        aim_check >= 2 ? '✔' : '✘'
      }`,
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
