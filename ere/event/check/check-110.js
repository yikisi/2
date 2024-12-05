const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.flow_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = -4;
aim_races[get_aim_race_index(race_enum.vict_mile, 2)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  function (races) {
    return (
      check_aim_race(races, race_enum.oka_sho, 1, 1) &&
      check_aim_race(races, race_enum.yush_him, 1, 1) &&
      check_aim_race(races, race_enum.shuk_sho, 1, 1) &&
      (check_aim_race(races, race_enum.japa_cup, 1, 1) ||
        check_aim_race(races, race_enum.japa_cup, 2, 1)) &&
      get(`base:${this.id}:速度`) >= 1200
    );
  },
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.flow_cup, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.vict_mile, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
  },
);
