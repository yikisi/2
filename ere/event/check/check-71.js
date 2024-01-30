const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const ArdanEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-71');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.aoba_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.main_oka, 2)] = 4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 4;

const handlers = {};

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () => {
  const event_marks = new ArdanEventMarks();
  if (event_marks.kiku_sho) {
    aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 4;
    aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 0;
  } else {
    aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 0;
    aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 4;
  }
  check_and_register_aim_race(71, aim_races);
};

handlers[check_stages.after_race] = () => {
  const event_marks = new ArdanEventMarks();
  if (era.get('cflag:71:干劲') !== 2) {
    event_marks.motivation_count++;
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
    races = era.get('cflag:71:育成成绩');
  const event_marks = new ArdanEventMarks();
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.aoba_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(
    check_aim_and_get_entry(
      races,
      event_marks.kiku_sho ? race_enum.kiku_sho : race_enum.tenn_sho,
      1,
      3,
    ),
  );
  buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.main_oka, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(71);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
  const races = era.get('cflag:71:育成成绩');
  const event_marks = new ArdanEventMarks();
  if (
    !event_marks.motivation_count &&
    !event_marks.train_fail &&
    check_aim_race(races, race_enum.toky_yus, 1, 1) &&
    check_aim_race(races, race_enum.tenn_sho, 1, 1) &&
    check_aim_race(races, race_enum.tenn_sho, 2, 1)
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(71).color,
      n: '不碎的玻璃',
    });
    extra_flag.aim_check && sys_personal_achievement.set(71, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['不碎的玻璃'];

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
