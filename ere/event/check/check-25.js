const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const { cb_enum, add_event } = require('#/event/queue');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const EduEventMarks = require('#/data/event/edu-event-marks');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};

const aim_races = {};

aim_races[race_enum.begin_race] = 2;

aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.stli_kin, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = function () {
  era.set('callname:25:0', `训练员${get_chara_talk(0).get_adult_sex_title()}`);
  const edu_weeks =
    era.get('flag:当前回合数') - era.get('cflag:25:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const edu_event_marks = new EduEventMarks(25);
    const event_obj = new EventObject(25, cb_enum.edu);
    const event_obj_special = new EventObject(25, cb_enum.edu, true);
    if (edu_weeks > 25) {
      check_and_add_event(
        edu_event_marks,
        edu_weeks,
        'our_flavor',
        event_hooks.back_school,
        event_obj,
      );
    }

    switch (edu_weeks) {
      case 1:
        add_event(event_hooks.train, event_obj_special);
        break;
      case 28:
        add_event(event_hooks.train, event_obj_special);
        break;
      case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 4:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 17:
        add_event(event_hooks.train, event_obj_special);
        break;
      case 47 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 30:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 31:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 47 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
      case 95 + 14:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 18:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }

    check_and_register_aim_race(25, aim_races, edu_weeks);
  }
};

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    races = era.get('cflag:25:育成成绩');
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
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(25);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number,st:number}>} */
  const races = era.get('cflag:25:育成成绩');
  if (
    check_aim_race(races, race_enum.kiku_sho, 1, 1, (e) => e.st === 2) &&
    check_aim_race(races, race_enum.arim_kin, 1, 1, (e) => e.st === 2) &&
    check_aim_race(races, race_enum.tenn_spr, 2, 1, (e) => e.st === 2) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1, (e) => e.st === 2) &&
    era.get('base:68:耐力') >= 1200
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(25).color,
      n: '漆黑幻影',
    });
    extra_flag.aim_check && sys_personal_achievement.set(25, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['漆黑幻影'];

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
