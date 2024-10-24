const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_dai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const edu_marks = new TamaEduMarks();
    if (
      era.get('cflag:21:育成回合计时') <= 95 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3 &&
      extra_flag.rank === 1 &&
      edu_marks.aim_check < 4
    ) {
      edu_marks.aim_check++;
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      race_history = new RaceHistory(this.id),
      races = race_history.get(),
      race_list = race_history.get_values();
    if (
      race_list.filter(
        (e) => race_infos[e.race].race_class <= class_enum.G3 && e.rank === 1,
      ).length >= 8 &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      check_aim_race(races, race_enum.takz_kin, 2, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1)
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return ret;
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    const { aim_check } = new TamaEduMarks();
    buffer.push({
      check: aim_check - 3,
      color: aim_check >= 4 ? attr_change_colors.up : attr_change_colors.down,
      content: `新秀年&经典年 四场重赏 前三名 ${aim_check}/4 ${aim_check >= 4 ? '✔' : '✘'}`,
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_dai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
