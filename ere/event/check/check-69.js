const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const SakuraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-69');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      ret = [];
    if (
      check_aim_race(races, race_enum.asah_sta, 0, 1) &&
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      check_aim_race(races, race_enum.toky_yus, 1, 1) &&
      (check_aim_race(races, race_enum.japa_cup, 1, 1) ||
        check_aim_race(races, race_enum.japa_cup, 2, 1))
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
    }
    return ret;
  }

  get_aim_races() {
    const aim_races = {};
    aim_races[race_enum.begin_race] = 4;
    aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 4;

    aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
    aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
    aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 4;

    aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
    aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

    aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = -4;
    if (new SakuraEduMarks().yasu_route) {
      aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
    } else {
      aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
    }
    return aim_races;
  }

  get_edu_aims() {
    const races = RaceHistory.get(this.id).get(),
      ret = [];
    ret.push(check_aim_and_get_entry(races, race_enum.begin_race));
    ret.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 5));
    ret.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    ret.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 1, 3));
    if (new SakuraEduMarks().yasu_route) {
      ret.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 3));
    } else {
      ret.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    }
    ret.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    ret.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
    return ret;
  }
};
