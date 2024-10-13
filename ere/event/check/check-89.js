const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const GrandEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-89');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.hans_dai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kyot_dai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      extra_flag.rank <= 3 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3 &&
      extra_flag.edu_weeks <= 48 + 46
    ) {
      new GrandEduMarks().goal++;
    }
  }

  check_and_get_titles(aim_check) {
    const races = new RaceHistory(this.id).get(),
      ret = [];
    if (
      check_aim_race(races, race_enum.japa_cup, 1, 1) &&
      check_aim_race(races, race_enum.japa_cup, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
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
    const { goal } = new GrandEduMarks(),
      races = new RaceHistory(this.id).get(),
      ret = [];
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    ret.push({
      check: Math.min(goal, 3) - 2,
      color: goal >= 3 ? attr_change_colors.up : attr_change_colors.down,
      content: `经典年 十二月第二周以前 三次G3以上比赛前三名 ${goal}/3 ${
        goal >= 3 ? '✔' : '✘'
      }`,
    });
    ret.push(check_aim_and_get_entry(races, race_enum.hans_dai, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.kyot_dai, 2, 3));
    ret.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
    return ret;
  }
};
