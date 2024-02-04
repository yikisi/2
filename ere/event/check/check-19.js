const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { cb_enum, add_event } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const AgEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-19');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_change_colors } = require('#/data/color-const');

const handlers = {};
const aim_races = {};
aim_races[race_enum.begin_race] = 3;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
aim_races[get_aim_race_index(race_enum.nhk_cup, 1)] = 3;
aim_races[get_aim_race_index(race_enum.hyac_sta, 1)] = 3;
aim_races[get_aim_race_index(race_enum.nhk_cup, 1)] = 3;
aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 3;
aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 3;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 3;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = -4;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.love_event] = () => {
  const love = era.get('love:19'),
    love_event = new EventObject(19, cb_enum.love);
  switch (love) {
    case 49:
    case 74:
      add_event(event_hooks.week_start, love_event);
      break;
    case 89:
    case 99:
      add_event(event_hooks.week_end, love_event);
      break;
  }
  if (era.get('cflag:19:爱慕暂拒') === 1 && love === 74) {
    add_event(event_hooks.week_end, love_event);
  }
};

handlers[check_stages.next_week] = function () {
  const edu_weeks =
    era.get('flag:当前回合数') - era.get('cflag:19:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_marks = new AgEventMarks();
    const event_obj = new EventObject(19, cb_enum.edu);
    const event_obj_special = new EventObject(19, cb_enum.edu, true);
    if (event_marks.yuusha_fight === 3) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'yuusha_fight',
        event_hooks.week_start,
        event_obj,
      );
    }
    check_and_add_event(
      event_marks,
      edu_weeks,
      'catch_fish',
      event_hooks.out_river,
      event_obj,
    );
    if (era.get(`relation:19:0`) > 226) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'understand_universe',
        event_hooks.out_start,
        event_obj,
      );
    }
    if (era.get(`relation:19:0`) > 376) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'oshi',
        event_hooks.out_start,
        event_obj,
      );
    }
    switch (edu_weeks) {
      case 43:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 24:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 29: //夏季合宿
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 30: //夏合宿途中
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 32: //合宿结束
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 47 + 37:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 14:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 17:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 28:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
  }
};

/** @param {{edu_weeks:number,race:number,rank:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  const event_marks = new AgEventMarks();
  if (
    extra_flag.edu_weeks >= 96 &&
    extra_flag.edu_weeks < 96 + 24 &&
    extra_flag.rank === 1 &&
    race_infos[extra_flag.race] === class_enum.G1 &&
    event_marks.yuusha_fight < 3
  ) {
    event_marks.yuusha_fight++;
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:19:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.hyac_sta, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.nhk_cup, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_dir, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 1));
  const g1_count = Object.entries(races).filter((e) => {
    const weeks = Number(e[0]);
    const race = e[1];
    return (
      weeks >= 96 &&
      weeks < 96 + 24 &&
      race.rank <= 3 &&
      race_infos[race.race].race_class === class_enum.G1
    );
  }).length;
  buffer.push({
    check: Math.min(g1_count, 3) - 2,
    color: g1_count >= 3 ? attr_change_colors.up : attr_change_colors.down,
    content: `资深年 1-6月 三场G1 前三名 ${g1_count}/3 ${
      g1_count >= 3 ? '✔' : '✘'
    }`,
  });
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:19:育成成绩');
  if (
    check_aim_race(races, race_enum.nhk_cup, 1, 1) &&
    check_aim_race(races, race_enum.hyac_sta, 1, 1) &&
    check_aim_race(races, race_enum.nhk_cup, 1, 1) &&
    check_aim_race(races, race_enum.japa_dir, 1, 1) &&
    check_aim_race(races, race_enum.mile_cha, 1, 1) &&
    check_aim_race(races, race_enum.tenn_sho, 2, 1)
  ) {
    new AgEventMarks().yuusha++;
    add_event(event_hooks.week_start, new EventObject(19, cb_enum.edu));
  } else {
    throw new Error('unsupported stage!');
  }
  common_palace_check(19);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:19:育成成绩');
  if (
    check_aim_race(races, race_enum.japa_dir, 1, 1) &&
    check_aim_race(races, race_enum.febr_sta, 2, 1) &&
    (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
      check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1) &&
    (check_aim_race(races, race_enum.mile_cha, 1, 1) ||
      check_aim_race(races, race_enum.mile_cha, 2, 1)) &&
    (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
      check_aim_race(races, race_enum.yasu_kin, 2, 1))
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(19).color,
      n: '我推的马娘',
    });
    extra_flag.aim_check && sys_personal_achievement.set(19, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['我推的马娘'];

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
