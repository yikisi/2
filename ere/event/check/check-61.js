const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hope_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  undefined,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hope_sta, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 20));
    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
  },
);
