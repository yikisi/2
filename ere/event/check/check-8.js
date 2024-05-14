const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const VodkaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-8');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;
aim_races[get_aim_race_index(race_enum.tuli_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = -4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.vict_mile, 2)] = 4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = -4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    if (
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class === class_enum.G1
    ) {
      new VodkaEduMarks().title_check++;
    }
  },
  (races) =>
    check_aim_race(races, race_enum.toky_yus, 1, 1) &&
    (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
      check_aim_race(races, race_enum.yasu_kin, 2, 1)) &&
    (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
      check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
    check_aim_race(races, race_enum.vict_mile, 2, 1) &&
    new VodkaEduMarks().title_check >= 7,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.tuli_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 20));
    buffer.push(check_aim_and_get_entry(races, race_enum.vict_mile, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
  },
);
