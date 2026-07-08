const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aims = [
  [race_enum.hope_sta, 0, 5, 4],
  [race_enum.sats_sho, 1, 5, 4],
  [race_enum.toky_yus, 1, 5, 4],
  [race_enum.kiku_sho, 1, 20, 4],
  [race_enum.takm_kin, 2, 1, 4],
  [race_enum.yasu_kin, 2, 3, 4],
  [race_enum.sprt_sta, 2, 1, 4],
  [race_enum.tenn_sho, 2, 1, 4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 0b11;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(([race, year, rank]) =>
      buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
    return buffer;
  }
};
