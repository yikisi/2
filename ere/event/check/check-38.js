const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hoch_rev, 1)] = 4;
aim_races[get_aim_race_index(race_enum.aoi_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.haks_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.ocae_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races, race_list) =>
    check_aim_race(races, race_enum.takm_kin, 2, 1) &&
    (check_aim_race(races, race_enum.sprt_sta, 1, 1) ||
      check_aim_race(races, race_enum.sprt_sta, 2, 1)) &&
    race_list.filter((e) => race_infos[e.race].span === 1200 && e.rank === 1)
      .length >= 9,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hoch_rev, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.aoi_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.haks_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.ocae_sta, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
  },
);
