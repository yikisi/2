const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const ViblosEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-91');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shio_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 1)] = -4;
aim_races[get_aim_race_index(race_enum.naka_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.vict_mile, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

const handlers = {};

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:91:育成回合计时');
  if (edu_weeks < 3 * 48) {
    check_and_register_aim_race(91, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, new EventObject(91, cb_enum.edu));
  }
};

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
    races = era.get('cflag:91:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.shio_sta, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.naka_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.vict_mile, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
  return buffer;
};

/** @param {{aim_race:boolean,edu_weeks:number,pop:number,race:number,rank:number,st:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  if (
    extra_flag.rank === 1 &&
    extra_flag.pop === 1 &&
    race_infos[extra_flag.race].race_class <= class_enum.G3
  ) {
    new ViblosEduMarks().goal++;
  }
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(91);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
  const races = era.get('cflag:91:育成成绩');
  if (
    check_aim_race(races, race_enum.oka_sho, 1, 1) &&
    check_aim_race(races, race_enum.eliz_cup, 2, 1) &&
    check_aim_race(races, race_enum.vict_mile, 2, 1) &&
    new ViblosEduMarks().goal >= 6
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(91).color,
      n: '小恶魔系马娘',
    });
    extra_flag.aim_check && sys_personal_achievement.set(91, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['小恶魔系马娘'];

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
