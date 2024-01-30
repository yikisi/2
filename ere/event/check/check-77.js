const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const NtrEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-77');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

const handlers = {};

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () => {
  check_and_register_aim_race(77, aim_races);
};

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    races = era.get('cflag:77:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  return buffer;
};

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number,st:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  let info;
  if (
    extra_flag.rank === 1 &&
    (info = race_infos[extra_flag.race]).race_class === class_enum.G1 &&
    info.span >= 2500
  ) {
    new NtrEventMarks().title_check++;
  }
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(77);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  if (
    era.get('base:77:耐力') >= 1200 &&
    era.get('cflag:77:长距离适性') >= 7 &&
    new NtrEventMarks().title_check >= 4
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(77).color,
      n: '优美的挑战者',
    });
    extra_flag.aim_check && sys_personal_achievement.set(77, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['优美的挑战者'];

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
