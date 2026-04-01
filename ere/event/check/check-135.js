const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { race_enum } = require('#/data/race/race-const');

const aims = [
  [race_enum.sats_sho, 1, 5, 4],
  [race_enum.toky_yus, 1, 5, 4],
  [race_enum.tenn_sho, 1, 2, 4],
  [race_enum.tenn_spr, 2, 3, 4],
  [race_enum.takz_kin, 2, 3, 4],
  [race_enum.tenn_sho, 2, 3, 4],
  [race_enum.japa_cup, 2, 1, 4],
  [race_enum.arim_kin, 2, 1, 4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (_, race_list) => race_list.every((r) => r.pop <= 3),
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(([race, year, rank]) =>
      buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
  },
);
