const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { race_enum } = require('#/data/race/race-const');

const aim_races = {};

aim_races[race_enum.begin_race] = 4;

aim_races[get_aim_race_index(race_enum.leop_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.miya_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 1)] = 4;

aim_races[get_aim_race_index(race_enum.febr_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.mile_nbh, 2)] = 4;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 2)] = 4;

aim_races[get_aim_race_index(race_enum.jbc_cls, 1)] = -4;
aim_races[get_aim_race_index(race_enum.miya_sta, 2)] = -4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  function (races) {
    return (
      check_aim_race(races, race_enum.cham_cup, 1, 1) &&
      check_aim_race(races, race_enum.cham_cup, 2, 1) &&
      check_aim_race(races, race_enum.leop_sta, 1, 1) &&
      (check_aim_race(races, race_enum.miya_sta, 1, 1) ||
        check_aim_race(races, race_enum.miya_sta, 2, 1)) &&
      check_aim_race(races, race_enum.febr_sta, 2, 1) &&
      check_aim_race(races, race_enum.teio_sho, 2, 1) &&
      (check_aim_race(races, race_enum.jbc_cls, 1, 1) ||
        check_aim_race(races, race_enum.jbc_cls, 2, 1)) &&
      get(`base:${this.id}:智力`) >= 1200
    );
  },
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.leop_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.miya_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.teio_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_nbh, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 2, 1));
  },
);
