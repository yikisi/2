const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const SpeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-1');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.kisa_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = -4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = -4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = -4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (extra_flag.race === race_enum.toky_yus) {
      if (
        extra_flag.rank === 1 &&
        extra_flag.pop === 1 &&
        extra_flag.contestants.find((e) => e.rank.curr === 1).race
          .conditionParams.bashin_diff_behind >= 5
      ) {
        new SpeEduMarks().title_check = 1;
      }
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      races = new RaceHistory(this.id).get();
    if (
      new SpeEduMarks().title_check &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
        check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
      (check_aim_race(races, race_enum.japa_cup, 1, 1) ||
        check_aim_race(races, race_enum.japa_cup, 2, 1))
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return ret;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:1:育成回合计时');
    if (edu_weeks < 3 * 48 + 4) {
      const edu_marks = new SpeEduMarks(),
        event_obj = new EventObject(1, cb_enum.edu),
        event_obj_special = new EventObject(1, cb_enum.edu, true).set_arg(
          edu_weeks,
        );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'borrow_money',
        event_hooks.school_atrium,
        event_obj,
      );

      switch (edu_weeks) {
        case 47 + 1:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 47 + 29:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 95 + 29:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 47 + 48:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 95 + 48:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 95 + 6:
          add_event(event_hooks.week_start, event_obj_special);
      }
      check_and_register_aim_race(1, aim_races, edu_weeks);
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.kisa_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
