const { get } = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const CityEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-40');
const { race_enum } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  function () {
    if (get(`cflag:${this.id}:干劲`) !== 2) {
      new CityEduMarks().title_check++;
    }
  },
  function (races) {
    return (
      check_aim_race(races, race_enum.hans_fil, 0, 1) &&
      attr_names.findIndex((e) => get(`abl:${this.id}:${e}训练等级`) <= 3) ===
        -1 &&
      !new CityEduMarks().title_check
    );
  },
  aim_races,
  (buffer, races) => {
    buffer.push({
      check: 1,
      color: undefined,
      content: `以非极佳干劲完赛次数：${new CityEduMarks().title_check}`,
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
  },
);
