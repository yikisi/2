const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const LoveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-132');
const { race_enum } = require('#/data/race/race-const');

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
  (buffer, races) => {
    const { title_check } = new LoveEduMarks();
    if (check_aim_race(races, race_enum.yush_him, 1)) {
      buffer.push({
        check: 1,
        color: undefined,
        content: `爱欲以上关系赢取日本橡树大赛：${(title_check & 0b1) > 0 ? '是' : '否'}`,
      });
    }
    if (
      check_aim_race(races, race_enum.eliz_cup, 1) ||
      check_aim_race(races, race_enum.eliz_cup, 2)
    ) {
      buffer.push({
        check: 1,
        color: undefined,
        content: `爱欲以上关系赢取伊丽莎白二世女皇杯：${(title_check & 0b10) > 0 ? '是' : '否'}`,
      });
    }
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
