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
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.vict_mile, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

const handlers = {};

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () => {
  const edu_weeks =
    era.get('flag:当前回合数') - era.get('cflag:86:育成回合计时');
  if (edu_weeks < 3 * 48) {
    check_and_register_aim_race(86, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, new EventObject(86, cb_enum.edu));
  }
};

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
    races = era.get('cflag:86:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.vict_mile, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
  return buffer;
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(86);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
  const races = era.get('cflag:86:育成成绩');
  if (
    check_aim_race(races, race_enum.oka_sho, 1, 1) &&
    check_aim_race(races, race_enum.yush_him, 1, 1) &&
    check_aim_race(races, race_enum.arim_kin, 1, 1) &&
    check_aim_race(races, race_enum.eliz_cup, 2, 1)
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(86).color,
      n: '魔性丽人',
    });
    extra_flag.aim_check && sys_personal_achievement.set(86, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['魔性丽人'];

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
