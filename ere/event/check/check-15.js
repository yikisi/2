const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races, race_list) => {
    const wins = [];
    wins.push([]);
    race_list.forEach((e) => {
      if (race_infos[e.race].race_class <= class_enum.G3) {
        if (e.st === 3 && e.pop === 1) {
          wins.at(-1).push(e.race);
        } else {
          wins.push([]);
        }
      }
    });
    return wins.filter(
      (e) =>
        e.length >= 8 &&
        e.indexOf(race_enum.tenn_spr) !== -1 &&
        e.indexOf(race_enum.takz_kin) !== -1 &&
        e.indexOf(race_enum.tenn_sho) !== -1 &&
        e.indexOf(race_enum.japa_cup) !== -1 &&
        e.indexOf(race_enum.arim_kin) !== -1,
    );
  },
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
