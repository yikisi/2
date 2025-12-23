const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const InariEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-34');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.main_oka, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    const info = race_infos[extra_flag.race];
    if (extra_flag.rank === 1 && info.race_class === class_enum.G1) {
      new InariEduMarks().add(`title_check${info.ground}`);
    }
  },
  (races) => {
    const event_marks = new InariEduMarks();
    return (
      (check_aim_race(races, race_enum.toky_dai, 1, 1, (e) => e.st === 1) ||
        check_aim_race(races, race_enum.toky_dai, 2, 1, (e) => e.st === 1)) &&
      check_aim_race(races, race_enum.takz_kin, 2, 1, (e) => e.st === 1) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1, (e) => e.st >= 2) &&
      (check_aim_race(races, race_enum.arim_kin, 1, 1, (e) => e.st >= 2) ||
        check_aim_race(races, race_enum.arim_kin, 2, 1, (e) => e.st >= 2)) &&
      event_marks.title_check0 >= 4 &&
      event_marks.title_check1 >= 4
    );
  },
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_dir, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.main_oka, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
