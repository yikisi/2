const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const PandoraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-113');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.vict_mile, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sapp_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  function () {
    // CFLAGNAME:40 = 干劲
    if (era.get(`cflag:${this.id}:40`) < 2) {
      new PandoraEduMarks().title_check++;
    }
  },
  (races) =>
    !new PandoraEduMarks().title_check &&
    check_aim_race(races, race_enum.eliz_cup, 1, 1) &&
    check_aim_race(races, race_enum.eliz_cup, 2, 1),
  aim_races,
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%COUNT%',
        new PandoraEduMarks().title_check.toString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.vict_mile, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sapp_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 2, 1));
  },
);
