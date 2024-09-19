const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.swan_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races) =>
    (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
      check_aim_race(races, race_enum.yasu_kin, 2, 1)) &&
    (check_aim_race(races, race_enum.mile_cha, 1, 1) ||
      check_aim_race(races, race_enum.mile_cha, 2, 1)) &&
    check_aim_race(races, race_enum.sprt_sta, 1, 1) &&
    check_aim_race(races, race_enum.sprt_sta, 2, 1) &&
    era.get('base:28:力量') >= 1200,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.swan_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 2, 1));
  },
);
