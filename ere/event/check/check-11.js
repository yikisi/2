const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const GrassWonderEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-11');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.main_oka, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

const handlers = {};

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () =>
  check_and_register_aim_race(11, aim_races);

/** @param {{edu_weeks:number,race:number,rank:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  const event_marks = new GrassWonderEventMarks();
  if (
    extra_flag.rank === 1 &&
    era.get('cflag:11:干劲') <= 1 &&
    (extra_flag.race === race_enum.asah_sta ||
      extra_flag.race === race_enum.arim_kin ||
      (extra_flag.race === race_enum.takz_kin && extra_flag.edu_weeks >= 96))
  ) {
    event_marks.aim_count++;
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
    races = era.get('cflag:11:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.main_oka, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(11);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const event_marks = new GrassWonderEventMarks();
  if (event_marks.aim_count === 4) {
    extra_flag.titles.push({
      c: get_chara_talk(11).color,
      n: '不死鸟',
    });
    extra_flag.aim_check && sys_personal_achievement.set(11, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['不死鸟'];

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
