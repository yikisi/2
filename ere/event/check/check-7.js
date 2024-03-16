const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_aim_race = require('#/event/snippets/check-aim-race');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { cb_enum, add_event } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    races = era.get('cflag:7:育成成绩');
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
};

/**
 * 重要比赛的映射表<br>
 * key有两种形式，育成周数_比赛ID，或者比赛ID<br>
 * value是两位二进制，最低位是赛前事件指示，最高位是赛后事件指示
 *
 * @type {Record<string,number>}
 */
const aim_races = {};
aim_races[race_enum.begin_race] = 2;
aim_races[get_aim_race_index(race_enum.hope_sta, 0)] = 2;

aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

aim_races[get_aim_race_index(race_enum.tenn_spr, 1)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 1)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  if (extra_flag.race === race_enum.prix_lat) {
    new GoldShipEduMarks().title_check++;
  }
};

handlers[check_stages.next_week] = () => {
  const event_marks = new GoldShipEduMarks(7),
    event_obj = new EventObject(7, cb_enum.edu),
    edu_weeks = era.get('cflag:7:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_obj_special = new EventObject(7, cb_enum.edu, true);
    check_and_add_event(
      event_marks,
      edu_weeks,
      'heroine_red',
      event_hooks.school_atrium,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'golden_ship_date',
      event_hooks.out_start,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'sudden_look_back',
      event_hooks.school_atrium,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'shoubu',
      event_hooks.school_rooftop,
      event_obj,
    );

    switch (edu_weeks) {
      case 47 + 1: // 经典年1月第一周
      case 47 + 29: // 8月第一周
      case 47 + 41: // 11月第一周
      case 95 + 3: // 1月第三周
      case 95 + 29: // 8月第一周
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 3: // 1月第三周
      case 95 + 41: // 11月第一周
        add_event(event_hooks.school_atrium, event_obj_special);
        break;
      // 资深年1月第一周
      case 95 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
    }

    check_and_register_aim_race(7, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, event_obj);
  }
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(7);
  if (new GoldShipEduMarks().keywords === 4) {
    add_event(event_hooks.week_start, new EventObject(7, cb_enum.edu));
  }
  return handlers[check_stages.aim_check]();
};

handlers[check_stages.personal_titles] = () => ['破天荒', '粉丝服务'];

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:7:育成成绩');
  const c = get_chara_talk(7).color,
    event_marks = new GoldShipEduMarks();
  if (
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
    check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
    check_aim_race(races, race_enum.takz_kin, 2, 1) &&
    check_aim_race(races, race_enum.tenn_sho, 2, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1)
  ) {
    extra_flag.titles.push({
      c,
      n: '破天荒',
    });
    extra_flag.aim_check && sys_personal_achievement.set(7, 1);
  }
  if (event_marks.title_check === 2) {
    extra_flag.titles.push({
      c,
      n: '粉丝服务',
    });
  }
};

/**
 * @param {number} stage_id
 * @param extra_flag
 */
module.exports = (stage_id, extra_flag) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  return handlers[stage_id](extra_flag);
};
