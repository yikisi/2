const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { class_enum, ground_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.leop_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kawa_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kash_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (_, race_list) =>
    race_list.filter(
      (e) =>
        race_infos[e.race].ground === ground_enum.mud &&
        race_infos[e.race].race_class === class_enum.G1 &&
        e.rank === 1,
    ).length >= 10,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.leop_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kawa_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kash_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.teio_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 2, 1));
  },
);
