const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;

aim_races[get_aim_race_index(race_enum.nikk_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kink_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

aim_races[get_aim_race_index(race_enum.takz_kin, 1)] = -4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = -4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = -4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (_, race_list) => {
    const wins_lists = [];
    let wins_list = [];
    race_list.forEach((e) => {
      if (race_infos[e.race].race_class <= class_enum.G3) {
        if (e.rank === 1) {
          wins_list.push(e.race);
        } else {
          if (wins_list.length !== 0) {
            wins_lists.push(wins_list);
          }
          wins_list = [];
        }
      }
    });
    if (wins_list.length > 0) {
      wins_lists.push(wins_list);
    }
    for (const _l of wins_lists) {
      if (
        _l.length >= 9 &&
        _l.indexOf(race_enum.tenn_spr) !== -1 &&
        _l.indexOf(race_enum.takz_kin) !== -1 &&
        _l.indexOf(race_enum.arim_kin) !== -1
      ) {
        return true;
      }
    }
    return false;
  },
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.nikk_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kink_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
