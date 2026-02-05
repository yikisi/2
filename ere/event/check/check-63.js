const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aims = [
  [race_enum.hans_fil, 0, 5, 4],
  [race_enum.oka_sho, 1, 5, 4],
  [race_enum.flor_sta, 1, 5, 4],
  [race_enum.yush_him, 1, 5, 4],
  [race_enum.shuk_sho, 1, 3, 4],
  [race_enum.sank_hai, 2, 3, 4],
  [race_enum.tenn_spr, 2, 20, 4],
  [race_enum.yasu_kin, 2, 3, 4],
  [race_enum.takz_kin, 2, 3, 4],
  [race_enum.all_com, 2, 3, 4],
  [race_enum.eliz_cup, 2, 1, 4],
];

const aim_races = { [race_enum.begin_race]: 4 };
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races, race_list) =>
    check_aim_race(races, race_enum.yasu_kin, 2, 1) &&
    check_aim_race(races, race_enum.takz_kin, 2, 1) &&
    era.get('base:63:根性') >= 1200 &&
    race_list.filter((e) => race_infos[e.race].race_class <= class_enum.G3)
      .length >= 30,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(([race, year, rank]) =>
      buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
  },
);
