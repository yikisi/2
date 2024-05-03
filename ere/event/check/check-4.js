const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');
const { sys_push_crazy_fan } = require('#/system/sys-calc-flag');

const handlers = {};

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 3;
aim_races[get_aim_race_index(race_enum.sprg_sta, 1)] = 3;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.radi_shi, 1)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 3;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 3;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 3;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 3;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.love_event] = () => {
  switch (era.get('love:4')) {
    case 49:
    case 74:
    case 89:
    case 99:
      add_event(event_hooks.week_end, new EventObject(4, cb_enum.love));
      break;
  }
};

handlers[check_stages.next_week] = () => {
  const edu_weeks = era.get('cflag:4:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_marks = new MaEduMarks(4);
    const event_obj = new EventObject(4, cb_enum.edu);
    const event_obj_special = new EventObject(4, cb_enum.edu, true);
    if (edu_weeks >= 20) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'current_trend',
        event_hooks.school_atrium,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'feel_speed',
        event_hooks.out_start,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'favourite_things',
        event_hooks.back_school,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'beautiful_winner',
        event_hooks.school_rooftop,
        event_obj,
      );
    }
    era.get('love:4') >= 75 &&
      check_and_add_event(
        event_marks,
        edu_weeks,
        'find_love',
        event_hooks.back_school,
        event_obj,
      );
    switch (edu_weeks) {
      case 5: //来自姐姐的礼物(情人节)
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 24: //一见如故 (已完成)
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 30: //三女神的孩子们
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 34: //意外的见面 (已完成)
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 39: //万圣节 (已完成)
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 41: //训练员与担当马娘 (已完成)
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47: //圣诞节 (已完成)
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 经典年1月第一周 新年 (已完成)
      case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 2月1日 春冬之交(已完成)
      case 47 + 5:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 1月第三周 情人节 (已完成)
      case 47 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 5月第三周 未来的憧憬 (已完成)
      case 47 + 19:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第一周 夏季合宿 (已完成)
      case 47 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第二周 庙会
      case 47 + 30:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      //8月第三周 水火不容 (已完成)
      case 47 + 31:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      //8月第四周 沙滩上的烟火 (已完成)
      case 47 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //9月第二周 失而复得（已完成）
      case 47 + 34:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //9月第四周 一体两面
      case 47 + 36:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //10月第一周 思绪 (已完成)
      case 47 + 37:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //10月第一周 无风 (已完成)
      case 47 + 38:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //10月第四周 祈祷 (已完成)
      case 47 + 39:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //11月第四周 万圣节 (已完成)
      case 47 + 40:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      // 12月第四周 圣诞节 (已完成)
      case 47 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 资深年1月第一周 新年 (已完成)
      case 95 + 1:
        add_event(event_hooks.out_church, event_obj_special);
        break;
      // 2月第二周 情人节(已完成)
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      //2月第四周 焱炎 (已完成)
      case 95 + 9:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      // 4月第二周 粉丝感谢祭(已完成)
      case 95 + 14:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第一周 夏季合宿开始(已完成)
      case 95 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 8月第四周 夏季合宿结束 (已完成)
      case 95 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //10月第四周 不给糖就捣蛋！ (已完成)
      case 95 + 40:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      //10月第三周 温柔的风 (已完成)
      case 95 + 43:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      // 12月第四周 圣诞节(已完成)
      case 95 + 48:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      // 3月第四周 姐姐的烦恼
      case 47 + 12:
        if (
          edu_weeks === 47 + 12 &&
          check_aim_race(era.get('cflag:4:育成成绩'), race_enum.sprg_sta, 1, 1)
        ) {
          event_marks.sister_annoyance++;
          add_event(event_hooks.week_end, event_obj_special);
        }
        break;
      // 6月第三周 少女的忧郁（上）
      case 47 + 25:
        if (
          check_aim_race(era.get('cflag:4:育成成绩'), race_enum.toky_yus, 1, 1)
        ) {
          event_marks.girls_blue++;
          add_event(event_hooks.week_end, event_obj_special);
        }
        break;
      // 6月第四周 少女的忧郁（下）
      case 47 + 26:
        if (
          check_aim_race(era.get('cflag:4:育成成绩'), race_enum.toky_yus, 1, 1)
        ) {
          add_event(event_hooks.school_rooftop, event_obj_special);
        }
        break;
    }
  }
};

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:4:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.sprg_sta, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 16));
  buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  const /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:4:育成成绩');
  if (
    check_aim_race(races, race_enum.sank_hai, 3, 1) &&
    check_aim_race(races, race_enum.tenn_sho, 3, 1)
  ) {
    new MaEduMarks().gentle_wind++;
  } else if (check_aim_race(races, race_enum.sank_hai, 3, 1)) {
    new MaEduMarks().girls_dream++;
  } else {
    new MaEduMarks().crazy_fan++;
    sys_push_crazy_fan(4);
  }
  common_palace_check(4);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {{race:number,rank:number}[]} */
  const races = Object.values(era.get('cflag:4:育成成绩'));
  let max = 0,
    win = 0;
  races.forEach((e) => {
    if (e.rank === 1) {
      win++;
    } else {
      win = 0;
    }
    max = Math.max(max, win);
  });
  if (max >= 8) {
    extra_flag.titles.push({
      c: get_chara_talk(4).color,
      n: 'Super Car',
    });
    extra_flag.aim_check && sys_personal_achievement.set(4, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['Super Car'];

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
