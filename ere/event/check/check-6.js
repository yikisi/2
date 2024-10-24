const { get } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const { get_chara_rank } = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
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

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
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
  }

  check_and_get_titles(aim_check) {
    const race_history = new RaceHistory(7),
      races = race_history.get(),
      race_list = race_history.get_values(),
      titles = [];
    if (
      race_list.filter(
        (e) => race_infos[e.race].race_class === class_enum.G1 && e.pop === 1,
      ).length >= 6 &&
      check_aim_race(races, race_enum.mile_cha, 1, 1) &&
      (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
        check_aim_race(races, race_enum.yasu_kin, 2, 1)) &&
      (check_aim_race(races, race_enum.arim_kin, 1, 1) ||
        check_aim_race(races, race_enum.arim_kin, 2, 1))
    ) {
      titles.push({
        c: get_chara_rank(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return titles;
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(this.id).get();
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
    return buffer;
  }
};
