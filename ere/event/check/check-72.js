const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const RaceHistory = require('#/data/race/model/race-history');
const { class_enum, ground_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;

aim_races[get_aim_race_index(race_enum.main_hai, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races) =>
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    !RaceHistory.get(72)
      .get_entries()
      .some(
        (e) =>
          e.rank === 1 &&
          race_infos[e.race].race_class === class_enum.G1 &&
          race_infos[e.race].ground === ground_enum.grass &&
          e.weeks < 47 + race_infos[race_enum.sats_sho].date,
      ) &&
    check_aim_race(races, race_enum.sank_hai, 2, 1) &&
    check_aim_race(races, race_enum.yasu_kin, 2, 1) &&
    check_aim_race(races, race_enum.takz_kin, 2, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1) &&
    era.get('base:72:力量') >= 1200,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));

    buffer.push(check_aim_and_get_entry(races, race_enum.main_hai, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 20));

    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
  },
);
