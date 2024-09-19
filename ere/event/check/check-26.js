const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const BourbonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-26');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.sprg_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

const edu_weeks_toky_yus = 48 + race_infos[race_enum.toky_yus].date;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    if (extra_flag.rank !== 1 && extra_flag.edu_weeks < edu_weeks_toky_yus) {
      new BourbonEduMarks().goal_check = 1;
    }
  },
  (races) =>
    check_aim_race(
      races,
      race_enum.asah_sta,
      0,
      1,
      (e) => e.pop === 1 && e.st === 0,
    ) &&
    check_aim_race(
      races,
      race_enum.sats_sho,
      1,
      1,
      (e) => e.pop === 1 && e.st === 0,
    ) &&
    check_aim_race(
      races,
      race_enum.toky_yus,
      1,
      1,
      (e) => e.pop === 1 && e.st === 0,
    ) &&
    era.get('base:26:耐力') >= 1200 &&
    !new BourbonEduMarks().goal_check,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprg_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
