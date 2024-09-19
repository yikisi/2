const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races, race_list) => {
    let max = 0,
      wins = 0;
    race_list.forEach((e) => {
      if (race_infos[e.race].race_class <= class_enum.G3) {
        if (e.st === 3 && e.pop === 1) {
          wins++;
          if (wins > max) {
            max = wins;
          }
        } else {
          wins = 0;
        }
      }
    });
    return max >= 6;
  },
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
