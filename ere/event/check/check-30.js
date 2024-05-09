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
const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const handlers = {};
const aim_races = {};
aim_races[race_enum.begin_race] = 2;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
aim_races[get_aim_race_index(race_enum.sprg_sta, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;

aim_races[get_aim_race_index(race_enum.nikk_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:30:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_marks = new RiceEduMarks(),
      event_obj = new EventObject(30, cb_enum.edu),
      event_obj_special = new EventObject(30, cb_enum.edu, true);
    check_and_add_event(
      event_marks,
      edu_weeks,
      'famous_educate',
      event_hooks.school_atrium,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'dance_study',
      event_hooks.office_study,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'fans_letter',
      event_hooks.back_school,
      event_obj,
    );

    switch (edu_weeks) {
      case 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 22:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 1: //新年
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 29: //夏季合宿
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 30: //夏合宿途中
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 32: //合宿结束
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 47 + 46:
        add_event(event_hooks.school_atrium, event_obj_special);
        break;
      case 95 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 14:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 15:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 28:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
    check_and_register_aim_race(30, aim_races, edu_weeks);
  } else {
    const event_obj_special = new EventObject(30, cb_enum.edu, true);
    switch (edu_weeks) {
      case 143 + 1:
      case 143 + 9:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:30:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.sprg_sta, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.nikk_sho, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  return buffer;
};

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number,st:number}} extra_flag */
handlers[check_stages.after_race] = function (extra_flag) {
  if (race_infos[extra_flag.race].race_class <= class_enum.G3) {
    new RiceEduMarks().g3_count++;
  }
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(30);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:30:育成成绩');
  if (
    new RiceEduMarks().g3_count >= 23 &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
    (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
      check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
    check_aim_race(races, race_enum.takz_kin, 2, 1)
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(30).color,
      n: '永恒碧蓝',
    });
    extra_flag.aim_check && sys_personal_achievement.set(30, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['永恒碧蓝'];

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
