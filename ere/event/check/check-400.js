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
const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const SSLifeMarks = require('#/data/event/life-event-marks/life-event-marks-400');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 0b10;
aim_races[get_aim_race_index(race_enum.kent_der, 1)] = 0b10;
aim_races[get_aim_race_index(race_enum.prea_sta, 1)] = 0b10;
aim_races[get_aim_race_index(race_enum.belm_sta, 1)] = 0b10;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 0b10;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 0b10;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 0b10;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 0b10;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (era.get('cflag:400:育成回合计时') >= 47 && extra_flag.rank === 1) {
      new SSEduMarks().wins++;
    } else {
      new SSEduMarks().wins = 0;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(400).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.kent_der, 1, 1) &&
      check_aim_race(races, race_enum.prea_sta, 1, 1) &&
      check_aim_race(races, race_enum.belm_sta, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return titles;
  }

  check_love_events() {
    if (
      era.get('love:400') === 74 &&
      era.get('cflag:400:育成回合计时') <=
        47 + race_infos[race_enum.belm_sta].date
    ) {
      era.set('cflag:400:爱慕暂拒', 74);
    } else {
      super.check_love_events();
    }
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:400:育成回合计时');
    if (
      era.get('cflag:400:招募状态') === recruit_flags.yes &&
      !era.get('flag:回合爱慕惩罚') &&
      era.get('love:400') === 74 &&
      edu_weeks > 47 + race_infos[race_enum.belm_sta].date &&
      !new SSLifeMarks().love_74
    ) {
      new SSLifeMarks().love_74 = 1;
      add_event(
        event_hooks.week_end,
        new EventObject(400, cb_enum.love).set_arg(74),
      );
    }
    if (edu_weeks < 3 * 48) {
      const edu_event_marks = new SSEduMarks(),
        event_obj = new EventObject(400, cb_enum.edu),
        event_obj_special = new EventObject(400, cb_enum.edu, true).set_arg(
          edu_weeks,
        );
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'play_dice',
        event_hooks.office_game,
        event_obj,
      );
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'enjoy_cat',
        event_hooks.school_atrium,
        event_obj,
      );
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'sugar_or_milk',
        event_hooks.office_cook,
        event_obj,
      );
      switch (edu_weeks) {
        case 31: // 积雨云
        case 39: // 初始 · 承诺
        case 47: // 第一步
        case 47 + 29: // 愉快而炎热的夏日之初
        case 47 + 48: // 为了圣诞节所做的准备
        case 95 + 13: // 暴雨将至
        case 95 + 29: // 又是一年的夏季合宿
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 47 + 1: // 新年的抱负
        case 95 + 1: // 与周日宁静一起前往神社
          add_event(event_hooks.out_church, event_obj_special);
          break;
        case 47 + 24: // 深夜的暴风雨
          add_event(event_hooks.week_end, event_obj_special);
      }
      check_and_register_aim_race(400, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(400, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  check_palace_and_get_aims() {
    new SSEduMarks().wins = 0;
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(400).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.kent_der, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.prea_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.belm_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
