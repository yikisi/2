const { get } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const VegaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-33');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hope_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.sats_sho, 1, 1, (e) => e.pop === 1) &&
      check_aim_race(races, race_enum.toky_yus, 1, 1, (e) => e.pop === 1) &&
      (check_aim_race(races, race_enum.takz_kin, 1, 1, (e) => e.pop === 1) ||
        check_aim_race(races, race_enum.takz_kin, 2, 1, (e) => e.pop === 1))
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
    }
    return titles;
  }

  check_next_week() {
    const edu_marks = new VegaEduMarks();
    if (edu_marks.meteor > 0) {
      if (get('cflag:33:招募状态') === recruit_flags.yes) {
        edu_marks.meteor = 0;
      } else if (--edu_marks.meteor === 0) {
        if (
          get('cflag:0:位置') > 0 ||
          get('flag:当前位置') === location_enum.basement
        ) {
          edu_marks.meteor = 1;
        } else {
          add_event(
            event_hooks.week_end,
            new EventObject(33, cb_enum.edu).set_arg('meteor'),
          );
        }
      }
    }
    super.check_next_week();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hope_sta, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 18));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
    return buffer;
  }
};
