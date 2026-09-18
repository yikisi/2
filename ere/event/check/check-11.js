const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const GrassWonderEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-11');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.main_oka, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    const edu_marks = new GrassWonderEduMarks();
    if (
      extra_flag.rank === 1 &&
      era.get('cflag:11:干劲') <= 1 &&
      (extra_flag.race === race_enum.asah_sta ||
        extra_flag.race === race_enum.arim_kin ||
        (extra_flag.race === race_enum.takz_kin && extra_flag.edu_weeks >= 96))
    ) {
      edu_marks.aim_count++;
    }
  },
  () => new GrassWonderEduMarks().aim_count === 4,
  aim_races,
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%COUNT%',
        new GrassWonderEduMarks().aim_count.toString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.main_oka, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
