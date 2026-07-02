const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const LaurelEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-76');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.naka_kim, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra_flag) => {
    if (
      extra_flag.rank <= 3 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3
    ) {
      if (extra_flag.edu_weeks < 48 + 16) {
        new LaurelEduMarks().goal_1++;
      } else if (extra_flag.edu_weeks < 47 + 44) {
        new LaurelEduMarks().goal_2++;
      }
    }
  },
  (races) =>
    era.get('base:76:耐力') >= 1200 &&
    check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1),
  aim_races,
  function (buffer, races) {
    const event_marks = new LaurelEduMarks();
    event_marks.goal_1 ||= 0;
    event_marks.goal_2 ||= 0;
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push({
      check: Math.min(event_marks.goal_1, 1),
      color: event_marks.goal_1
        ? attr_change_colors.up
        : attr_change_colors.down,
      current: event_marks.goal_1.toString(),
      desc: i18n()
        .detail.edu_aim_desc_template.replace('%EDUTIME%', di18n.n_edu[1])
        .replace('%RACE%', i18n().kojo[this.id].aim_desc_1),
      mark:
        event_marks.goal_1 > 0
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '1'),
    });
    buffer.push({
      check: Math.min(event_marks.goal_2, 1),
      color:
        event_marks.goal_2 > 0
          ? attr_change_colors.up
          : attr_change_colors.down,
      current: event_marks.goal_2.toString(),
      desc: i18n()
        .detail.edu_aim_desc_template.replace('%EDUTIME%', di18n.n_edu[1])
        .replace('%RACE%', i18n().kojo[this.id].aim_desc_2),
      mark:
        event_marks.goal_2 > 0
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '1'),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.naka_kim, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  },
);
