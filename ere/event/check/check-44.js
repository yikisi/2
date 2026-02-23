const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aims = [
  [race_enum.hans_fil, 0, 5, 4],
  [race_enum.oka_sho, 1, 5, 4],
  [race_enum.yush_him, 1, 5, 4],
  [race_enum.shuk_sho, 1, 1, 4],
  [race_enum.eliz_cup, 1, 3, 4],
  [race_enum.yasu_kin, 2, 3, 4],
  [race_enum.takz_kin, 2, 1, 4],
  [race_enum.tenn_sho, 2, 3, 4],
  [race_enum.eliz_cup, 2, 1, 4],
];
const aim_races = { [race_enum.begin_race]: 4 };
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class A extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get();
    const titles = [];
    if (
      check_aim_race(races, race_enum.tuli_sho, 1, 1, (e) => e.st === 3) &&
      check_aim_race(races, race_enum.shuk_sho, 1, 1, (e) => e.st === 3) &&
      check_aim_race(races, race_enum.takz_kin, 2, 1, (e) => e.st >= 2) &&
      check_aim_race(races, race_enum.eliz_cup, 2, 1, (e) => e.st >= 2) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1, (e) => e.st >= 2)
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
    const races = RaceHistory.get(this.id).get();
    return [
      check_aim_and_get_entry(races, race_enum.begin_race),
      ...aims.map(([race, year, rank]) =>
        check_aim_and_get_entry(races, race, year, rank),
      ),
    ];
  }
};
