const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};
const aim_races = {};
aim_races[race_enum.begin_race] = 2;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.love_event] = () =>
  add_event(event_hooks.week_end, new EventObject(400, cb_enum.love));

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:400:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const edu_event_marks = new SSEduMarks();
    const event_obj = new EventObject(400, cb_enum.edu);
    const event_obj_special = new EventObject(400, cb_enum.edu, true);
    check_and_add_event(
      edu_event_marks,
      edu_weeks,
      'play_dice',
      event_hooks.week_start,
      event_obj,
    );
    check_and_add_event(
      edu_event_marks,
      edu_weeks,
      'enjoy_cat',
      event_hooks.school_atrium,
      event_obj,
    );
    if (edu_weeks > 48) {
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'sugar_or_milk',
        event_hooks.week_start,
        event_obj,
      );
    }
    switch (edu_weeks) {
      case 31: //新马年8月第三周 积雨云
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 39: //新马年10月第三周 初始·承诺
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47: //新马年12月第四周  第一步
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 经典年1月第一周 新年 (已完成)
      case 47 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
      // 8月第一周 夏季合宿 (已完成)
      case 47 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 12月第四周 圣诞节 (已完成)
      case 47 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 资深年1月第一周 新年 (已完成)
      case 95 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
      // 2月第二周 情人节(已完成)
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 4月第二周  休息室内 暴雨将至
      case 95 + 13:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第一周 夏季合宿(已完成)
      case 95 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 12月第四周 圣诞节(已完成)
      case 95 + 47:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
    check_and_register_aim_race(400, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, new EventObject(400, cb_enum.edu));
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    races = new RaceHistory(400).get();

  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(400);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const races = new RaceHistory(400).get();
  if (
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    check_aim_race(races, race_enum.toky_yus, 1, 1) &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
    check_aim_race(races, race_enum.arim_kin, 1, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1)
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(400).color,
      n: '黑色君王',
    });
    extra_flag.aim_check && sys_personal_achievement.set(400, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['黑色君王'];

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
