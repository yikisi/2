const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { cb_enum, add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};

const aim_races = {};

aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 2;
aim_races[get_aim_race_index(race_enum.siri_sta, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_dai, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kawa_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.kash_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 2;
aim_races[get_aim_race_index(race_enum.cham_cup, 2)] = 2;
aim_races[get_aim_race_index(race_enum.toky_dai, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = function () {
  era.set('callname:100:0', `小${get_chara_talk(0).actual_name}`);
  era.set('callname:0:0', `我`);
  const edu_weeks =
    era.get('flag:当前回合数') - era.get('cflag:100:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_obj_special = new EventObject(100, cb_enum.edu, true);

    switch (edu_weeks) {
      case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 14:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
    check_and_register_aim_race(100, aim_races, edu_weeks);
  }
};

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    races = era.get('cflag:100:育成成绩');
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

handlers[check_stages.palace_check] = function () {
  common_palace_check(100);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:100:育成成绩');
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

handlers[check_stages.personal_titles] = () => ['坚韧不拔的熏银'];

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
