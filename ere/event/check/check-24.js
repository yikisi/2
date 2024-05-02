const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const MayaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-24');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const handlers = {};

const aim_races = {};
aim_races[race_enum.begin_race] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;
aim_races[get_aim_race_index(race_enum.hans_dai, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:24:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_marks = new MayaEduMarks();
    const event_obj = new EventObject(24, cb_enum.edu);
    const event_obj_special = new EventObject(24, cb_enum.edu, true);
    check_and_add_event(
      event_marks,
      edu_weeks,
      'adventure_game',
      event_hooks.school_atrium,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'star_wish',
      event_hooks.school_atrium,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'sweet_present',
      event_hooks.school_atrium,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'dokidoki_live',
      event_hooks.back_school,
      event_obj,
    );
    if (event_marks.get('dokidoki_live') === 2) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'excited_live',
        event_hooks.back_school,
        event_obj,
      );
    }
    if (event_marks.get('excited_live') === 2) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'kirakira_kessin',
        event_hooks.out_start,
        event_obj,
      );
    }
    check_and_add_event(
      event_marks,
      edu_weeks,
      'taisecu_hito',
      event_hooks.back_school,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'race_lesson',
      event_hooks.recruit_start,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'model_secret',
      event_hooks.office_study,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'maya_reading',
      event_hooks.office_study,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'maya_takeoff',
      event_hooks.office_study,
      event_obj,
    );

    switch (edu_weeks) {
      // 经典年1月第一周
      case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 3:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第一周
      case 47 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 30:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第三周
      case 47 + 31:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第四周
      case 47 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      // 资深年1月第一周
      case 95 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
      // 1月第二周
      case 95 + 2:
        add_event(event_hooks.out_start, event_obj_special);
        break;
      // 2月第二周
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        add_event(event_hooks.out_start, event_obj_special);
        break;
      // 8月第一周
      case 95 + 14:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 20:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第四周
      case 95 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      // 12月第四周
      case 95 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
    check_and_register_aim_race(24, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, new EventObject(24, cb_enum.edu));
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:24:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.hans_dai, 2, 2));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  return buffer;
};

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number,st:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  const event_marks = new MayaEduMarks();
  if (
    extra_flag.rank === 1 &&
    race_infos[extra_flag.race].race_class === class_enum.G1
  ) {
    event_marks.add(`st_check${extra_flag.st}`);
  }
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(24);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const event_marks = new MayaEduMarks();
  if (
    event_marks.st_check0 &&
    event_marks.st_check1 &&
    event_marks.st_check2 &&
    event_marks.st_check3
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(24).color,
      n: '千变万化',
    });
    extra_flag.aim_check && sys_personal_achievement.set(24, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['千变万化'];

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
