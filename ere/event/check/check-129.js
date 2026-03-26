const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const EyeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-129');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aims = [
  [race_enum.shin_kin, 1, 1, 4],
  [race_enum.oka_sho, 1, 1, 4],
  [race_enum.yush_him, 1, 1, 4],
  [race_enum.shuk_sho, 1, 1, 4],
  [race_enum.japa_cup, 1, 1, 4],
  [race_enum.sank_hai, 2, 1, 4],
  [race_enum.vict_mile, 2, 1, 4],
  [race_enum.yasu_kin, 2, 1, 4],
  [race_enum.tenn_sho, 2, 1, 4],
  [race_enum.japa_cup, 2, 1, 4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  function () {
    // CFLAGNAME:40 = 干劲
    if (era.get(`cflag:${this.id}:40`) < 2) {
      new EyeEduMarks().title_check++;
    }
  },
  (races) =>
    !new EyeEduMarks().title_check &&
    check_aim_race(races, race_enum.oka_sho, 1, 1) &&
    check_aim_race(races, race_enum.yush_him, 1, 1) &&
    check_aim_race(races, race_enum.shuk_sho, 1, 1) &&
    (check_aim_race(races, race_enum.japa_cup, 1, 1) ||
      check_aim_race(races, race_enum.japa_cup, 2, 1)),
  aim_races,
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%COUNT%',
        new EyeEduMarks().title_check.toString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(([race, year, rank]) =>
      buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
  },
);
