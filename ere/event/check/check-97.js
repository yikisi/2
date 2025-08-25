const { get } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;

aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 1)] = 4;

aim_races[get_aim_race_index(race_enum.kink_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get();
    const titles = [];
    if (
      check_aim_race(races, race_enum.oka_sho, 1, 1) &&
      check_aim_race(races, race_enum.yush_him, 1, 1) &&
      check_aim_race(races, race_enum.shuk_sho, 1, 1) &&
      (check_aim_race(races, race_enum.eliz_cup, 1, 1) ||
        check_aim_race(races, race_enum.eliz_cup, 2, 1)) &&
      (check_aim_race(races, race_enum.takz_kin, 1, 1) ||
        check_aim_race(races, race_enum.takz_kin, 2, 1)) &&
      get(`base:${this.id}:智力`) >= 1200
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

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kink_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
    return buffer;
  }
};
