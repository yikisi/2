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
const NNEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-60');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};

aim_races[race_enum.begin_race] = 2;

aim_races[get_aim_race_index(race_enum.waka_sta, 1)] = 2;
aim_races[get_aim_race_index(race_enum.koku_kin, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.chun_hai, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      extra_flag.rank <= 3 &&
      race_infos[extra_flag.race].race_class === class_enum.G1
    ) {
      new NNEduMarks().g1_count++;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(60).get(),
      titles = [];
    if (
      new NNEduMarks().g1_count >= 4 &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      titles.push({
        c: get_chara_color(60),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(60, 1);
    }
    return titles;
  }

  check_next_week() {
    const event_obj = new EventObject(60, cb_enum.edu),
      edu_weeks = era.get('cflag:60:育成回合计时');
    if (edu_weeks < 3 * 48) {
      const event_marks = new NNEduMarks();
      const event_obj_special = new EventObject(60, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'hard_work_trainer',
        event_hooks.out_shopping,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'grass_baseball',
        event_hooks.out_shopping,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'see_fish',
        event_hooks.back_school,
        event_obj,
      );

      switch (edu_weeks) {
        case 47 + 1: // 新年
        case 47 + 29: // 夏季合宿
        case 95 + 1: // 新年
        case 95 + 29: // 夏季合宿
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 47 + 32: // 夏季集训结束
        case 95 + 32: // 夏季集训结束
          add_event(event_hooks.week_end, event_obj_special);
          break;
        case 47 + 33: // 下定决心努力前行！
        case 47 + 42: // 王座的背后
        case 95 + 42: // 闪闪发光
          add_event(event_hooks.school_atrium, event_obj_special);
          break;
        case 95 + 10: // 内恰 in 目白
          add_event(event_hooks.out_start, event_obj_special);
      }

      check_and_register_aim_race(60, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, event_obj.set_arg('palace'));
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(60).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.waka_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.koku_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.chun_hai, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
