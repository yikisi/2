const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const RickyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-98');
const { class_enum, ground_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.huku_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.febr_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kash_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.mile_nbh, 2)] = 4;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {
    if (get('cflag:98:干劲') !== 2) {
      new RickyEduMarks().mot_check++;
    }
  },
  (races, race_list, aim_check) =>
    race_list.filter(
      (e) =>
        e.rank === 1 &&
        race_infos[e.race].race_class === class_enum.G1 &&
        race_infos[e.race].ground === ground_enum.dirt,
    ).length >= 11 &&
    !new RickyEduMarks().mot_check &&
    aim_check,
  aim_races,
  function (buffer, races) {
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%COUNT%',
        new RickyEduMarks().mot_check.toString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.huku_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kash_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.teio_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_nbh, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 2, 1));
  },
);
