const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const LightEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-120');
const { class_enum, distance_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.aoi_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.ibis_das, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.ibis_das, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (e) => {
    if (
      e.race === race_enum.sprt_sta &&
      e.rank === 1 &&
      e.contestants[0].race.conditionParams.bashin_diff_behind >= 4
    ) {
      new LightEduMarks().title_check++;
    }
  },
  (races, race_list) =>
    check_aim_race(races, race_enum.ibis_das, 1, 1, (e) => e.st === 0) &&
    check_aim_race(races, race_enum.ibis_das, 2, 1, (e) => e.st === 0) &&
    new LightEduMarks().title_check > 0 &&
    race_list.filter(
      (e) =>
        race_infos[e.race].race_class <= class_enum.G3 &&
        race_infos[e.race].distance === distance_enum.short &&
        e.st === 0,
    ).length >= 9,
  aim_races,
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%STATUS%',
        new LightEduMarks().title_check > 0 ? i18n().ui_yes2 : i18n().ui_no2,
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 20));
    buffer.push(check_aim_and_get_entry(races, race_enum.aoi_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.ibis_das, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.ibis_das, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
  },
);
