const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const { add_event, cb_enum } = require('#/event/queue');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const RubyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-85');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RubyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-85');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.hoch_rev, 1)] = 2;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 2;
aim_races[get_aim_race_index(race_enum.rose_sta, 1)] = 2;

aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.swan_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.mile_cha, 2)] = 2;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.oka_sho, 1, 1) &&
      (check_aim_race(races, race_enum.eliz_cup, 1, 1) ||
        check_aim_race(races, race_enum.eliz_cup, 2, 1)) &&
      check_aim_race(races, race_enum.yasu_kin, 2, 1) &&
      check_aim_race(races, race_enum.sprt_sta, 2, 1)
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
    const rec_status = era.get(`cflag:${this.id}:招募状态`),
      edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (
      rec_status === recruit_flags.yes &&
      era.get('cflag:0:性别') === 1 &&
      era.get('cflag:85:性别') === 0
    ) {
      const love = era.get('love:85'),
        life_marks = new RubyLifeMarks();
      if (love >= 75 && !life_marks.love_75) {
        life_marks.love_75 = 1;
        add_event(
          event_hooks.out_start,
          new EventObject(this.id, cb_enum.love).set_arg('date'),
        );
        add_event(
          event_hooks.out_start,
          new EventObject(this.id, cb_enum.love).set_arg('delicious'),
        );
        add_event(
          event_hooks.office_cook,
          new EventObject(this.id, cb_enum.love).set_arg('dessert'),
        );
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('non_penetration'),
        );
      }
      if (love >= 90 && !life_marks.love_90) {
        life_marks.love_90 = 1;
        add_event(
          event_hooks.office_rest,
          new EventObject(this.id, cb_enum.love).set_arg('kiss'),
        );
        add_event(
          event_hooks.out_shopping,
          new EventObject(this.id, cb_enum.love).set_arg('jade'),
        );
        add_event(
          event_hooks.school_atrium,
          new EventObject(this.id, cb_enum.love).set_arg('dance'),
        );
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('take_shower'),
        );
      }
      if (love >= 100 && !life_marks.love_100) {
        life_marks.love_100 = 1;
        add_event(
          event_hooks.school_clinic,
          new EventObject(this.id, cb_enum.love).set_arg('clinic'),
        );
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('loli_wife'),
        );
        add_event(
          event_hooks.office_cook,
          new EventObject(this.id, cb_enum.love).set_arg('milking'),
        );
      }
      if (era.get('mark:85:羞耻') && !life_marks.shame) {
        life_marks.shame = 1;
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('shame'),
        );
      }
      if (
        (era.get('mark:85:欢愉') || era.get('mark:85:淫纹')) &&
        !life_marks.foot_job
      ) {
        life_marks.foot_job = 1;
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('foot_job'),
        );
      }
      if (era.get('mark:85:淫纹') && !life_marks.sex_mark) {
        life_marks.sex_mark = 1;
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.love).set_arg('sex_mark'),
        );
      }
    }
    if (
      rec_status.flag === 5 &&
      era.get('flag:当前回合数') - rec_status.round >= 3
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.recruit),
      );
      rec_status.round = era.get('flag:当前回合数');
    } else if (edu_weeks < 3 * 48) {
      const edu_marks = new RubyEduMarks();
      const ebj = new EventObject(this.id, cb_enum.edu);
      const ebj_s = new EventObject(this.id, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'rest_day',
        event_hooks.office_study,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'wait_station',
        event_hooks.out_station,
        ebj,
      );
      if (era.get('love:85') >= 75) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'station',
          event_hooks.out_station,
          ebj,
        );
      }
      if (edu_weeks >= 96) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'shopping_together',
          event_hooks.out_shopping,
          ebj,
        );
      }
      if (era.get('love:85') >= 75 && edu_weeks > 95 + 24) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'hot_spring_event',
          event_hooks.out_start,
          ebj,
        );
      }
      switch (edu_weeks) {
        case 35: // 华丽的最高杰作
        case 47: // 因此、不能松懈
        case 47 + 19: // 只是凝视着前方
        case 47 + 29: // 夏季合宿（经典年）
        case 95 + 43: // 「华丽一族」的训练员
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 47 + 1: // 新年
        case 95 + 1: // 神社参拜
          add_event(event_hooks.out_church, ebj_s);
          break;
        case 47 + 32: // 得到的启示
        case 95 + 32: // 夏季合宿结束（资深年）
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 95 + 29: // 夏季合宿（资深年）
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 95 + 30:
          add_event(event_hooks.week_end, ebj_s);
      }
      check_and_register_aim_race(this.id, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  check_palace_and_get_aims() {
    const aims = super.check_palace_and_get_aims();
    if (aims.every((e) => e.check === 1)) {
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.edu).set_arg('rose_master'),
      );
    }
    return aims;
  }

  is_aim_race(race, edu_weeks, rank) {
    if (race === race_enum.eliz_cup) {
      if (edu_weeks < 96) {
        return -4;
      } else if (!check_aim_race(RaceHistory.get(85).get(), race, 1, 1)) {
        return -4;
      }
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hoch_rev, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 18));
    buffer.push(check_aim_and_get_entry(races, race_enum.rose_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 2, 1));
    return buffer;
  }
};
