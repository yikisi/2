const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { class_enum, track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.zeni_you, 0)] = 4;

aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 4;
aim_races[get_aim_race_index(race_enum.jbc_cls, 1)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 1)] = 4;

aim_races[get_aim_race_index(race_enum.febr_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.dio_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kash_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  function (_, race_list) {
    const dict = {};
    race_list.forEach((e) => {
      if (e.rank === 1) {
        const info = race_infos[e.race];
        if (info.race_class === class_enum.G1) {
          dict[info.track] = 1;
        }
      }
    });
    return (
      dict[track_enum.kawasaki] === 1 &&
      dict[track_enum.ohi] === 1 &&
      dict[track_enum.funabashi] === 1 &&
      get(`base:${this.id}:根性`) >= 1200
    );
  },
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.zeni_you, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_dir, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.dio_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.kash_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.teio_sho, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 2, 1));
  },
);
