const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { class_enum, distance_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.shin_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.nhk_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.unic_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 2)] = 4;

aim_races[get_aim_race_index(race_enum.yasu_kin, 1)] = -4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races, race_list) =>
    race_list.filter(
      (e) =>
        race_infos[e.race].distance === distance_enum.mile &&
        race_infos[e.race].race_class <= class_enum.G3 &&
        e.rank === 1,
    ).length >= 5 &&
    check_aim_race(races, race_enum.unic_sta, 1, 1) &&
    (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
      check_aim_race(races, race_enum.yasu_kin, 2, 1)) &&
    (check_aim_race(races, race_enum.mile_cha, 1, 1) ||
      check_aim_race(races, race_enum.mile_cha, 2, 1)),
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.shin_kin, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.nhk_cup, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.unic_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 2, 1));
  },
);
