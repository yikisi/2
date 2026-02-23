const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const HeliosEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-65');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;

aim_races[get_aim_race_index(race_enum.aoi_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 4;

aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {
    if (era.get('cflag:65:干劲') !== 2) {
      new HeliosEduMarks().mot_check++;
    }
  },
  (races) =>
    check_aim_race(races, race_enum.mile_cup, 2, 1) &&
    check_aim_race(races, race_enum.mile_cha, 1, 1) &&
    check_aim_race(races, race_enum.mile_cha, 2, 1) &&
    !new HeliosEduMarks().mot_check &&
    era.get('base:65:力量') >= 1200,
  aim_races,
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%COUNT%',
        new HeliosEduMarks().mot_check.toString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.aoi_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cup, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 20));
  },
);
