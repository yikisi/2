const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { race_enum } = require('#/data/race/race-const');

const aims = [
  [race_enum.hans_fil, 0, 5, 4],
  [race_enum.hoch_rev, 1, 5, 4],
  [race_enum.oka_sho, 1, 5, 4],
  [race_enum.nhk_cup, 1, 5, 4],
  [race_enum.shuk_sho, 1, 20, 4],
  [race_enum.hans_sta, 2, 3, 4],
  [race_enum.vict_mile, 2, 3, 4],
  [race_enum.quee_sta, 2, 1, 4],
  [race_enum.fuch_sta, 2, 1, 4],
  [race_enum.mile_cha, 2, 1, 4],
  [race_enum.mile_cha, 1, 1, -4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races) =>
    check_aim_race(races, race_enum.oka_sho, 1, 1) &&
    check_aim_race(races, race_enum.yush_him, 1, 1) &&
    check_aim_race(races, race_enum.shuk_sho, 1, 1) &&
    era.get(`base:${this.d}:力量`) >= 1200,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(
      ([race, year, rank, c]) =>
        c > 0 && buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
  },
);
