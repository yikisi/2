const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { cb_enum, add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const check_stages = require('#/data/event/check-stages');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { get_chara_color } = require('#/data/chara-colors');

const handlers = {};

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.kisa_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 3;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:1:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.kisa_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  return buffer;
};

handlers[check_stages.next_week] = function () {
  const edu_weeks = era.get('cflag:1:育成回合计时');
  if (edu_weeks < 3 * 48 + 4) {
    const edu_marks = new EduEventMarks(1),
      event_obj = new EventObject(1, cb_enum.edu),
      event_obj_special = new EventObject(1, cb_enum.edu, true);
    check_and_add_event(
      edu_marks,
      edu_weeks,
      'borrow_money',
      event_hooks.school_atrium,
      event_obj,
    );

    switch (edu_weeks) {
      case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
    }
    check_and_register_aim_race(1, aim_races, edu_weeks);
  }
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(1);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const races = new RaceHistory(1).get();
  if (
    check_aim_race(races, race_enum.toky_yus, 1, 1, (e) => e.pop === 1) &&
    check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
    (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
      check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
    (check_aim_race(races, race_enum.japa_cup, 1, 1) ||
      check_aim_race(races, race_enum.japa_cup, 2, 1))
  ) {
    extra_flag.titles.push({
      c: get_chara_color(1),
      n: '日本的总大将',
    });
    extra_flag.aim_check && sys_personal_achievement.set(1, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['日本的总大将'];

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
