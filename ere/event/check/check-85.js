const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const { add_event, cb_enum } = require('#/event/queue');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const EduEventMarks = require('#/data/event/edu-event-marks');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};
const aim_races = {};
aim_races[race_enum.begin_race] = 3;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
aim_races[get_aim_race_index(race_enum.hoch_rev, 1)] = 2;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 2;
aim_races[get_aim_race_index(race_enum.rose_sta, 1)] = 2;

aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.swan_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.mile_cha, 2)] = 3;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.love_event] = () =>
  add_event(event_hooks.week_end, new EventObject(85, cb_enum.love));

handlers[check_stages.next_week] = function () {
  const rec_status = era.get('cflag:85:招募状态');
  const edu_weeks =
    era.get('flag:当前回合数') - era.get('cflag:85:育成回合计时');
  if (
    rec_status.round &&
    rec_status.flag === 5 &&
    era.get('flag:当前回合数') - rec_status.round >= 3
  ) {
    add_event(event_hooks.week_end, new EventObject(85, cb_enum.recruit));
    rec_status.round = 0;
  } else if (edu_weeks < 3 * 48) {
    const edu_event_marks = new EduEventMarks(85);
    const event_obj = new EventObject(85, cb_enum.edu);
    const event_obj_special = new EventObject(85, cb_enum.edu, true);
    check_and_add_event(
      edu_event_marks,
      edu_weeks,
      'rest_day',
      event_hooks.office_study,
      event_obj,
    );
    check_and_add_event(
      edu_event_marks,
      edu_weeks,
      'wait_station',
      event_hooks.out_station,
      event_obj,
    );
    if (edu_event_marks.get('sugu')) {
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'sugu',
        event_hooks.week_start,
        event_obj,
      );
    }
    if (edu_weeks > 95) {
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'shopping_together',
        event_hooks.out_shopping,
        event_obj,
      );
    }
    if (edu_event_marks.get('hot_spring') && edu_weeks > 95 + 24) {
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'hot_spring_event',
        event_hooks.out_start,
        event_obj,
      );
    }
    switch (edu_weeks) {
      case 39: //华丽的最高杰作
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47: //因此、不能松懈
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 1: //新年
        add_event(event_hooks.out_church, event_obj_special);
        break;
      case 47 + 19: //只是凝视着前方
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 29: //夏季合宿
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 30: //夏合宿途中
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 32: //海边 得到的启示
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 1: //神社参拜
        add_event(event_hooks.out_church, event_obj_special);
        break;
      case 95 + 29: //夏季合宿
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 32: //海边 夏季合宿结束
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 43: //“华丽一族”的训练员'
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 48: //圣诞节
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:85:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.hoch_rev, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 18));
  buffer.push(check_aim_and_get_entry(races, race_enum.kyo_sta, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 2, 1));
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  const edu_event_marks = new EduEventMarks(85);
  edu_event_marks.add('rose_master');
  add_event(event_hooks.week_start, new EventObject(85, cb_enum.edu));
  common_palace_check(85);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:85:育成成绩');
  if (
    check_aim_race(races, race_enum.oka_sho, 1, 1) &&
    (check_aim_race(races, race_enum.eliz_cup, 1, 1) ||
      check_aim_race(races, race_enum.eliz_cup, 2, 1)) &&
    check_aim_race(races, race_enum.yasu_kin, 2, 1) &&
    check_aim_race(races, race_enum.sprt_sta, 2, 1)
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(85).color,
      n: '华丽千金',
    });
    extra_flag.aim_check && sys_personal_achievement.set(85, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['华丽千金'];

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
