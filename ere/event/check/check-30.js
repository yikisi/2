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
const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 2;

aim_races[get_aim_race_index(race_enum.sprg_sta, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = -4;

aim_races[get_aim_race_index(race_enum.nikk_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (race_infos[extra_flag.race].race_class <= class_enum.G3) {
      new RiceEduMarks().g3_count++;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(30).get(),
      titles = [];
    if (
      new RiceEduMarks().g3_count >= 23 &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
        check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
      check_aim_race(races, race_enum.takz_kin, 2, 1)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_marks = new RiceEduMarks(),
      event_obj = new EventObject(30, cb_enum.edu),
      edu_weeks = era.get('cflag:30:育成回合计时');
    if (
      era.get('cflag:30:招募状态') === recruit_flags.yes &&
      era.get('status:30:熬夜') &&
      !edu_marks.stay
    ) {
      edu_marks.stay = 1;
      add_event(event_hooks.week_start, event_obj.set_arg('stay'));
    }
    if (edu_weeks < 3 * 48) {
      const event_obj_special = new EventObject(30, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'teach',
        event_hooks.school_atrium,
        event_obj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'dance',
        event_hooks.office_study,
        event_obj,
      );
      if (RaceHistory.get(30).check_begin()) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'letter',
          event_hooks.office_rest,
          event_obj,
        );
      }

      switch (edu_weeks) {
        case 15: // 湖泊中绽放的花朵
        case 47 + 32: // 合宿结束
        case 95 + 32: // 夏季合宿结束
          add_event(event_hooks.week_end, event_obj_special);
          break;
        case 47 + 1: // 新年的抱负
        case 47 + 29: // 夏季合宿
        case 95 + 6: // 情人节
        case 95 + 24: // 不会折断的蔷薇
        case 95 + 29: // 夏合宿开始
        case 95 + 41: // 粉丝来信
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 47 + 46: // 劲敌的不幸
          if (
            check_aim_race(RaceHistory.get(30).get(), race_enum.kiku_sho, 1)
          ) {
            add_event(event_hooks.school_atrium, event_obj_special);
          }
          break;
        case 95 + 1: // 新年参拜
          add_event(event_hooks.out_church, event_obj_special);
          break;
        case 95 + 14: // 粉丝感谢祭 + 正因无法独自盛开
          add_event(event_hooks.week_start, event_obj_special);
          add_event(event_hooks.week_end, event_obj_special);
          break;
        case 95 + 21: // 万有一失
          add_event(event_hooks.out_shopping, event_obj_special);
          break;
        case 95 + 48:
          add_event(event_hooks.week_start, event_obj_special);
      }
      check_and_register_aim_race(30, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(30, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(30).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprg_sta, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.nikk_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }

  is_aim_race(race, edu_weeks, rank) {
    if (
      race === race_enum.tenn_sho &&
      !check_aim_race(RaceHistory.get(30).get(), race_enum.tenn_sho, 1, 1)
    ) {
      return -4;
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }
};
