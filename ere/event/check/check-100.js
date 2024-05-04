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
const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @type {Record<string,function(Record<string,any>)>} */
const handlers = {};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    races = new RaceHistory(100).get();
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_dir, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.siri_sta, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.kawa_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.kash_kin, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.teio_sho, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 2, 1));
  return buffer;
};

const aim_races = {};

aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 4;
aim_races[get_aim_race_index(race_enum.siri_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kawa_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kash_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 2)] = 4;

/**
 * @param {number} edu_weeks
 * @param {number} race
 */
handlers[check_stages.aim_race] = ({ edu_weeks, race }) =>
  aim_races[`${edu_weeks}_${race}`] || aim_races[race];

/** @param {AfterRaceParams} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  if (extra_flag.aim_race) {
    new AcuteEduMarks().ending += 2 * (extra_flag.rank === 1) - 1;
  }
};

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:100:育成回合计时');
  if (Math.random() < 0.2 * (era.get('status:0:熬夜') + 1)) {
    add_event(
      event_hooks.week_start,
      new EventObject(100, cb_enum.edu, true).set_arg('leg'),
    );
  }
  if (edu_weeks < 3 * 48) {
    switch (edu_weeks) {
      case 47 + 1: // 新年的抱负
      case 47 + 6: // 世纪初最强拳人节
      case 95 + 1: // 新春的贺礼
      case 95 + 6: // 拳人节·特大号追加超量叠放无敌燃烧版
      case 95 + 14: // 粉丝感谢会
        add_event(
          event_hooks.week_start,
          new EventObject(100, cb_enum.edu, true).set_arg(edu_weeks),
        );
    }
    check_and_register_aim_race(100, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(
      event_hooks.week_start,
      new EventObject(100, cb_enum.edu).set_arg('palace'),
    );
  }
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(100);
  return handlers[check_stages.aim_check]();
};

handlers[check_stages.personal_titles] = () => ['坚韧不拔的熏银'];

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const races = new RaceHistory(100).get();
  if (
    check_aim_race(races, race_enum.toky_dai, 1, 1) &&
    check_aim_race(races, race_enum.kash_kin, 2, 1) &&
    check_aim_race(races, race_enum.teio_sho, 2, 1) &&
    check_aim_race(races, race_enum.jbc_cls, 2, 1) &&
    era.get('base:100:根性') >= 1200
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(100).color,
      n: '坚韧不拔的熏银',
    });
    extra_flag.aim_check && sys_personal_achievement.set(100, 1);
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
