const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const GenesisEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-133');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;

aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

aim_races[get_aim_race_index(race_enum.takz_kin, 1)] = -4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = -4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra) => {
    if (
      extra.race === race_enum.arim_kin &&
      extra.rank === 1 &&
      extra.contestants.find((e) => e.rank.curr === 1).race.conditionParams
        .bashin_diff_behind >= 8
    ) {
      new GenesisEduMarks().title_check = 1;
    }
  },
  function (races) {
    return (
      check_aim_race(races, race_enum.oka_sho, 1, 1) &&
      (check_aim_race(races, race_enum.takz_kin, 1, 1) ||
        check_aim_race(races, race_enum.takz_kin, 2, 1)) &&
      (check_aim_race(races, race_enum.arim_kin, 1, 1) ||
        check_aim_race(races, race_enum.arim_kin, 2, 1)) &&
      new GenesisEduMarks().title_check > 0 &&
      get(`base:${this.id}:智力`) >= 1200
    );
  },
  aim_races,
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%STATUS%',
        new GenesisEduMarks().title_check > 0 ? i18n().ui_yes2 : i18n().ui_no2,
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
