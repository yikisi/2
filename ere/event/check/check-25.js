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
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    races = new RaceHistory(25).get();
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

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:25:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const edu_event_marks = new EduEventMarks(25),
      event_obj = new EventObject(25, cb_enum.edu),
      event_obj_special = new EventObject(25, cb_enum.edu, true);
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
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, new EventObject(25, cb_enum.edu));
  }
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(25);
  return handlers[check_stages.aim_check]();
};

handlers[check_stages.personal_titles] = () => ['漆黑幻影'];

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const races = new RaceHistory(25).get();
  if (
    check_aim_race(races, race_enum.kiku_sho, 1, 1, (e) => e.st === 2) &&
    check_aim_race(races, race_enum.arim_kin, 1, 1, (e) => e.st === 2) &&
    check_aim_race(races, race_enum.tenn_spr, 2, 1, (e) => e.st === 2) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1, (e) => e.st === 2) &&
    era.get('base:25:耐力') >= 1200
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(25).color,
      n: '漆黑幻影',
    });
    extra_flag.aim_check && sys_personal_achievement.set(25, 1);
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
