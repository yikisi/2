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
const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

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

aim_races[race_enum.begin_race] = 3;

aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.stli_kin, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 3;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 3;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

/**
 * @param {number} edu_weeks
 * @param {number} race
 * @returns {number}
 */
handlers[check_stages.aim_race] = ({ edu_weeks, race }) => {
  if (new CoffeeEduMarks().toky_yus && race === race_enum.toky_yus) {
    return 0;
  }
  return aim_races[`${edu_weeks}_${race}`] || aim_races[race];
};

/**
 * @param {number} race
 * @param {number} rank
 */
handlers[check_stages.after_race] = ({ race, rank }) => {
  if (
    new TachyonEduMarks().plan_b === 1 &&
    era.get('cflag:32:育成回合计时') < 3 * 48
  ) {
    if (race === race_enum.kiku_sho) {
      add_event(
        event_hooks.week_end,
        new EventObject(32, cb_enum.edu).set_arg('limited_tachyon'),
      );
    } else if (
      race === race_enum.arim_kin &&
      era.get('cflag:25:育成回合计时') === 95 + 48 &&
      rank === 1
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(32, cb_enum.edu).set_arg('ending'),
      );
    }
  }
};

handlers[check_stages.love_event] = () => {
  const love = era.get('love:25');
  const event_object = new EventObject(25, cb_enum.love).set_arg(love);
  switch (love) {
    case 49:
    case 89:
    case 99:
      add_event(event_hooks.week_end, event_object);
      break;
    case 74:
      if (new CoffeeEduMarks().our_taste) {
        add_event(event_hooks.week_end, event_object);
      }
  }
};

handlers[check_stages.next_week] = () => {
  const edu_marks = new CoffeeEduMarks(),
    edu_weeks = era.get('cflag:25:育成回合计时');
  if (
    era.get('love:25') === 74 &&
    edu_marks.our_taste === 1 &&
    !era.get('flag:回合爱慕惩罚')
  ) {
    add_event(
      event_hooks.week_end,
      new EventObject(25, cb_enum.love).set_arg(74),
    );
  }
  if (edu_weeks < 3 * 48) {
    const event_obj_special = new EventObject(25, cb_enum.edu, true).set_arg(
      edu_weeks,
    );
    switch (edu_weeks) {
      case 28: // 灵障
      case 47 + 1: // 新年的抱负
      case 47 + 4: // 转变
      case 47 + 17: // 放弃与否
      case 47 + 29: // 夏合宿（经典年）开始
      case 95 + 18: // 别离
      case 95 + 29: // 夏合宿（资深年）开始
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 30:
        if (
          era.get('cflag:32:育成回合计时') < 3 * 48 &&
          new TachyonEduMarks().plan_b
        ) {
          add_event(event_hooks.week_start, event_obj_special);
        }
        break;
      case 47 + 31: // 朋友
      case 47 + 32: // 夏季合宿（经典年）结束
      case 95 + 32: // 夏季合宿（资深年）结束
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 1: // 新年的抱负
        add_event(event_hooks.out_church, event_obj_special);
    }
    check_and_register_aim_race(25, aim_races, edu_weeks);
    let temp;
    if (
      edu_weeks === 47 + race_infos[race_enum.toky_yus].date &&
      (temp = sys_reg_race(25)).curr.race === race_enum.toky_yus &&
      edu_marks.toky_yus
    ) {
      temp.curr = temp.last = {
        race: -1,
        week: -1,
      };
    }
  } else if (edu_weeks === 143 + 1) {
    add_event(
      event_hooks.week_start,
      new EventObject(25, cb_enum.edu).set_arg(143 + 1),
    );
  } else if (edu_weeks === 143 + 9) {
    add_event(
      event_hooks.week_start,
      new EventObject(25, cb_enum.edu).set_arg('palace'),
    );
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
