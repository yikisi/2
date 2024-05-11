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
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

const handlers = {};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    races = new RaceHistory(41).get();
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.keio_sta, 0, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.sprg_sta, 1, 20));
  buffer.push(check_aim_and_get_entry(races, race_enum.aoi_sta, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takm_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.haks_sta, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.cbc_sho, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.cent_sta, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.sprt_sta, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 2, 1));
  return buffer;
};

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.keio_sta, 0)] = 4;
aim_races[get_aim_race_index(race_enum.sprg_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.aoi_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.takm_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.haks_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.cbc_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.cent_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.sprt_sta, 2)] = 4;
aim_races[get_aim_race_index(race_enum.mile_cha, 2)] = 4;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:41:育成回合计时');
  if (edu_weeks < 3 * 48) {
    check_and_register_aim_race(41, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(
      event_hooks.week_start,
      new EventObject(41, cb_enum.edu).set_arg('palace'),
    );
  }
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(41);
  return handlers[check_stages.aim_check]();
};

handlers[check_stages.personal_titles] = () => ['爆进王'];

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const races = new RaceHistory(41);
  if (
    races
      .get_values()
      .filter((e) => e.rank === 1 && race_infos[e.race].span >= 1400).length >=
      11 &&
    check_aim_race(
      races.get(),
      race_enum.sprt_sta,
      2,
      1,
      (extra_flag) => extra_flag.pop === 1,
    )
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(41).color,
      n: '爆进王',
    });
    extra_flag.aim_check && sys_personal_achievement.set(41, 1);
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
