const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const GrandEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-89');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.hans_dai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kyot_dai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    if (
      extra_flag.rank <= 3 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3 &&
      extra_flag.edu_weeks <= 48 + 46
    ) {
      new GrandEduMarks().goal++;
    }
  },
  (races) =>
    check_aim_race(races, race_enum.japa_cup, 1, 1) &&
    check_aim_race(races, race_enum.japa_cup, 2, 1) &&
    check_aim_race(races, race_enum.arim_kin, 1, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1),
  aim_races,
  (buffer, races) => {
    const goal = new GrandEduMarks().goal;
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push({
      check: Math.min(goal, 3) - 2,
      color: goal >= 3 ? attr_change_colors.up : attr_change_colors.down,
      content: `经典年 十二月第二周以前 三次G3以上比赛前三名 ${goal}/3 ${
        goal >= 3 ? '✔' : '✘'
      }`,
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_dai, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kyot_dai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
  },
);
