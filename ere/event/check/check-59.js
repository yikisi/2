const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { get_random_value } = require('#/utils/value-utils');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;

aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.fuch_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 2)] = 4;

aim_races[get_aim_race_index(race_enum.eliz_cup, 1)] = -4;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      titles = [];
    if (
      check_aim_race(
        races,
        race_enum.hans_fil,
        0,
        1,
        (e) => e.pop === 1 && e.st === 2,
      ) &&
      check_aim_race(
        races,
        race_enum.oka_sho,
        1,
        1,
        (e) => e.pop === 1 && e.st === 2,
      ) &&
      check_aim_race(
        races,
        race_enum.yush_him,
        1,
        1,
        (e) => e.pop === 1 && e.st === 2,
      ) &&
      check_aim_race(
        races,
        race_enum.shuk_sho,
        1,
        1,
        (e) => e.pop === 1 && e.st === 2,
      ) &&
      check_aim_race(races, race_enum.eliz_cup, 1, 1) &&
      check_aim_race(races, race_enum.eliz_cup, 2, 1)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
    }
    return titles;
  }

  check_palace_and_get_aims() {
    const my_marks = new MyEduMarks();
    if (my_marks.nice_weekend === 0) {
      my_marks.nice_weekend = get_random_value(2, 4) + 1;
    }
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 20));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.fuch_sta, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 2, 1));
    return buffer;
  }
};
