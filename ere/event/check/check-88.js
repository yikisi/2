const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const CrownEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-88');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.toky_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kyot_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.hk_vas, 2)] = 4;

const edu_weeks_hoch_sho = race_infos[race_enum.hoch_sho].date + 48;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    if (extra_flag.edu_weeks < edu_weeks_hoch_sho && extra_flag.rank !== 1) {
      new CrownEduMarks().title_check = 1;
    }
  },
  (races) =>
    check_aim_race(races, race_enum.hoch_sho, 1, 1, (e) => e.pop === 1) &&
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    check_aim_race(races, race_enum.toky_yus, 1, 1) &&
    check_aim_race(races, race_enum.sank_hai, 2, 1) &&
    (check_aim_race(races, race_enum.takz_kin, 1, 1) ||
      check_aim_race(races, race_enum.takz_kin, 2, 1)) &&
    (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
      check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
    (check_aim_race(races, race_enum.hk_vas, 1, 1) ||
      check_aim_race(races, race_enum.hk_vas, 2, 1) ||
      check_aim_race(races, race_enum.hk_cup, 1, 1) ||
      check_aim_race(races, race_enum.hk_cup, 2, 1)) &&
    era.get('base:88:力量') >= 1200 &&
    !new CrownEduMarks().title_check,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_sta, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kyot_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.hk_vas, 2, 1));
  },
);
