const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const LoveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-132');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {
  [race_enum.begin_race]: 4,
  [get_aim_race_index(race_enum.oka_sho, 1)]: 4,
  [get_aim_race_index(race_enum.yush_him, 1)]: 4,
  [get_aim_race_index(race_enum.shuk_sho, 1)]: 4,
  [get_aim_race_index(race_enum.eliz_cup, 1)]: 4,
  [get_aim_race_index(race_enum.kyot_kin, 2)]: 4,
  [get_aim_race_index(race_enum.vict_mile, 2)]: 4,
  [get_aim_race_index(race_enum.takz_kin, 2)]: 4,
  [get_aim_race_index(race_enum.eliz_cup, 2)]: 4,
  [get_aim_race_index(race_enum.japa_cup, 2)]: 4,
};

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  function (extra) {
    if (era.get(`love:${this.id}`) >= 50 && extra.rank === 1) {
      switch (extra.race) {
        case race_enum.yush_him:
          new LoveEduMarks().title_check |= 0b1;
          break;
        case race_enum.eliz_cup:
          new LoveEduMarks().title_check |= 0b10;
      }
    }
  },
  function () {
    return new LoveEduMarks().title_check === 0b11;
  },
  aim_races,
  function (buffer, races) {
    const { title_check } = new LoveEduMarks();
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template_1.replace(
        '%STATUS%',
        (title_check & 0b1) > 0 ? i18n().ui_yes2 : i18n().ui_no2,
      ),
    });
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template_2.replace(
        '%STATUS%',
        (title_check & 0b10) > 0 ? i18n().ui_yes2 : i18n().ui_no2,
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kyot_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.vict_mile, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
  },
);
