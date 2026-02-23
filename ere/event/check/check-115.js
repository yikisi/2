const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const OrfevreEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-115');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  function (extra_flag) {
    if (
      extra_flag.race === race_enum.arim_kin &&
      get(`cflag:${this.id}:育成回合计时`) > 96 &&
      extra_flag.rank === 1 &&
      extra_flag.contestants.find((e) => e.rank.curr === 1).race.conditionParams
        .bashin_diff_behind >= 8
    ) {
      new OrfevreEduMarks().title_check++;
    }
  },
  (races) =>
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    check_aim_race(races, race_enum.toky_yus, 1, 1) &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
    check_aim_race(races, race_enum.arim_kin, 1, 1) &&
    check_aim_race(races, race_enum.takz_kin, 2, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1) &&
    new OrfevreEduMarks().title_check === 1,
  {
    [race_enum.begin_race]: 4,
    [get_aim_race_index(race_enum.sats_sho, 1)]: 4,
    [get_aim_race_index(race_enum.toky_yus, 1)]: 4,
    [get_aim_race_index(race_enum.kiku_sho, 1)]: 4,
    [get_aim_race_index(race_enum.arim_kin, 1)]: 4,
    [get_aim_race_index(race_enum.tenn_spr, 2)]: 4,
    [get_aim_race_index(race_enum.takz_kin, 2)]: 4,
    [get_aim_race_index(race_enum.japa_cup, 2)]: 4,
    [get_aim_race_index(race_enum.arim_kin, 2)]: 4,
  },
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%STATUS%',
        new OrfevreEduMarks().title_check > 0 ? i18n().ui_yes2 : i18n().ui_no2,
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
