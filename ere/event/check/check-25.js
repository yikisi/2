const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');

const aim_races = {};

aim_races[race_enum.begin_race] = 3;

aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.stli_kin, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 3;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 3;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    if (
      new TachyonEduMarks().plan_b === 1 &&
      era.get('cflag:32:育成回合计时') < 3 * 48
    ) {
      if (extra.race === race_enum.kiku_sho) {
        add_event(
          event_hooks.week_end,
          new EventObject(32, cb_enum.edu).set_arg('limited_tachyon'),
        );
      } else if (
        extra.race === race_enum.japa_cup &&
        era.get('cflag:25:育成回合计时') >= 96 &&
        extra.rank === 1
      ) {
        add_event(
          event_hooks.week_end,
          new EventObject(32, cb_enum.edu).set_arg('cf_japa_cup'),
        );
      } else if (
        extra.race === race_enum.arim_kin &&
        era.get('cflag:25:育成回合计时') >= 96 &&
        extra.rank === 1
      ) {
        add_event(
          event_hooks.week_end,
          new EventObject(32, cb_enum.edu).set_arg('ending'),
        );
      }
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(25).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.kiku_sho, 1, 1, (e) => e.st === 2) &&
      check_aim_race(races, race_enum.arim_kin, 1, 1, (e) => e.st === 2) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1, (e) => e.st === 2) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1, (e) => e.st === 2) &&
      era.get('base:25:耐力') >= 1200
    ) {
      titles.push({
        c: get_chara_color(25),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(25, 1);
    }
    return titles;
  }

  check_love_events() {
    const love = era.get('love:25');
    const event_object = new EventObject(25, cb_enum.love).set_arg([love]);
    switch (love) {
      case 49:
      case 89:
      case 99:
        add_event(event_hooks.week_end, event_object);
        break;
      case 74:
        if (new CoffeeEduMarks().our_taste) {
          add_event(event_hooks.week_end, event_object);
        }
    }
  }

  check_next_week() {
    const edu_marks = new CoffeeEduMarks();
    const edu_weeks = era.get('cflag:25:育成回合计时');
    if (
      era.get('cflag:25:招募状态') === recruit_flags.yes &&
      era.get('love:25') === 74 &&
      edu_marks.our_taste === 1 &&
      !era.get('flag:回合爱慕惩罚')
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(25, cb_enum.love).set_arg(74),
      );
    }
    if (edu_weeks < 3 * 48) {
      const ebj_s = new EventObject(25, cb_enum.edu, true).set_arg(edu_weeks);
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'scared',
        event_hooks.week_end,
        new EventObject(25, cb_enum.edu),
      );
      switch (edu_weeks) {
        case 28: // 灵障
        case 47 + 1: // 新年的抱负
        case 47 + 6: // 转变
        case 47 + 17: // 放弃与否
        case 47 + 29: // 夏合宿（经典年）开始
        case 95 + 19: // 别离
        case 95 + 29: // 夏合宿（资深年）开始
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 47 + 30:
          if (
            era.get('cflag:32:育成回合计时') < 3 * 48 &&
            new TachyonEduMarks().plan_b
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 47 + 31: // 朋友
        case 47 + 32: // 夏季合宿（经典年）结束
        case 95 + 32: // 夏季合宿（资深年）结束
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 95 + 1: // 新年的抱负
          add_event(event_hooks.out_church, ebj_s);
      }
      check_and_register_aim_race(25, aim_races, edu_weeks);
      let temp;
      if (
        edu_weeks === 47 + race_infos[race_enum.toky_yus].date &&
        (temp = sys_reg_race(25)).curr.race === race_enum.toky_yus &&
        edu_marks.toky_yus
      ) {
        temp.curr = temp.last = {
          race: -1,
          week: -1,
        };
      }
    } else if (edu_weeks === 143 + 1) {
      add_event(
        event_hooks.week_start,
        new EventObject(25, cb_enum.edu).set_arg(143 + 1),
      );
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(25, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.stli_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }

  is_aim_race(race, edu_weeks, rank) {
    if (new CoffeeEduMarks().toky_yus > 0 && race === race_enum.toky_yus) {
      return 0;
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }
};
