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
const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/**
 * 重要比赛的映射表<br>
 * key有两种形式，育成周数_比赛ID，或者比赛ID<br>
 * value是两位二进制，最低位是赛前事件指示，最高位是赛后事件指示
 * @type {Record<string,number>}
 */
const aim_races = {};
aim_races[race_enum.begin_race] = 2;
aim_races[get_aim_race_index(race_enum.hope_sta, 0)] = 2;

aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(7).get();
    const c = get_chara_color(7);
    const edu_marks = new GoldShipEduMarks();
    const titles = [];
    if (
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      check_aim_race(races, race_enum.takz_kin, 2, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      titles.push({
        c,
        n: '100701',
      });
      aim_check && sys_personal_achievement.set(7, 1);
      edu_marks.hoverboard = 1;
    }
    if (edu_marks.title_check === 2) {
      titles.push({
        c,
        n: '100702',
      });
    }
    return titles;
  }

  check_after_race(extra_flag) {
    if (extra_flag.race === race_enum.prix_lat) {
      new GoldShipEduMarks().title_check++;
    }
  }

  check_next_week() {
    const edu_marks = new GoldShipEduMarks();
    const e_random = new EventObject(7, cb_enum.edu);
    const edu_weeks = era.get('cflag:7:育成回合计时');
    if (edu_marks.carrot > 0) {
      if (era.get('cflag:7:招募状态') === recruit_flags.yes) {
        edu_marks.carrot = 0;
      } else if (--edu_marks.carrot === 0) {
        add_event(
          event_hooks.week_start,
          new EventObject(7, cb_enum.edu).set_arg('carrot'),
        );
      }
    }
    if (edu_weeks < 3 * 48) {
      const e_special = new EventObject(7, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'heroine_red',
        event_hooks.school_atrium,
        e_random,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'golden_ship_date',
        event_hooks.out_start,
        e_random,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'sudden_look_back',
        event_hooks.school_atrium,
        e_random,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'shoubu',
        event_hooks.school_rooftop,
        e_random,
      );

      switch (edu_weeks) {
        case 47 + 1: // 经典年1月第一周
        case 47 + 29: // 8月第一周
        case 47 + 41: // 11月第一周
        case 95 + 3: // 1月第三周
        case 95 + 29: // 8月第一周
          add_event(event_hooks.week_start, e_special);
          break;
        case 47 + 3: // 1月第三周
        case 95 + 41: // 11月第一周
          add_event(event_hooks.school_atrium, e_special);
          break;
        // 资深年1月第一周
        case 95 + 1:
          add_event(event_hooks.out_church, e_special);
      }
      check_and_register_aim_race(7, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 5) {
      if (edu_marks.hoverboard === 1) {
        add_event(event_hooks.week_start, e_random.set_arg('hoverboard'));
      }
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, e_random.set_arg('palace'));
    }
  }

  check_palace_and_get_aims() {
    if (new GoldShipEduMarks().keywords === 4) {
      add_event(
        event_hooks.week_start,
        new EventObject(7, cb_enum.edu).set_arg('eden'),
      );
    }
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(7).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hope_sta, 0, 5));

    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));

    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }

  get_personal_titles() {
    return ['100701', '100702'];
  }
};
