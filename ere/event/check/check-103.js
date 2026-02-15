const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { race_enum } = require('#/data/race/race-const');

const aims = [
  [race_enum.aoba_sho, 1, 1, 4],
  [race_enum.toky_yus, 1, 5, 4],
  [race_enum.kiku_sho, 1, 20, 4],
  [race_enum.sank_hai, 2, 3, 4],
  [race_enum.all_com, 2, 3, 4],
  [race_enum.tenn_sho, 2, 3, 4],
  [race_enum.japa_cup, 2, 1, 4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races) =>
    check_aim_race(races, race_enum.aoba_sho, 1, 1) &&
    check_aim_race(races, race_enum.toky_yus, 1, 1),
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims
      .filter((a) => a[3] > 0)
      .forEach(([race, year, rank]) =>
        buffer.push(check_aim_and_get_entry(races, race, year, rank)),
      );
  },
);
