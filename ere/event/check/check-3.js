const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const {
  sys_change_pressure,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_change_fame,
  sys_push_crazy_fan,
} = require('#/system/sys-calc-flag');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { cb_enum, add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const handlers = {};

const aim_races = {};
aim_races[race_enum.begin_race] = 2;

aim_races[get_aim_race_index(race_enum.waka_sta, 1)] = 2;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.love_event] = () => {
  const love = era.get('love:3'),
    love_event = new EventObject(3, cb_enum.love);
  switch (love) {
    case 49:
    case 89:
      add_event(event_hooks.week_end, love_event);
      break;
    case 74:
    case 99:
      add_event(event_hooks.week_start, love_event);
  }
};

handlers[check_stages.next_week] = () => {
  const event_marks = new TeioEduMarks(),
    event_obj = new EventObject(3, cb_enum.edu),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:3:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_obj_special = new EventObject(3, cb_enum.edu, true),
      races = era.get('cflag:3:育成成绩');
    let temp;
    check_and_add_event(
      event_marks,
      edu_weeks,
      'lets_go_together',
      event_hooks.out_start,
      event_obj,
    );
    check_and_add_event(
      event_marks,
      edu_weeks,
      'dance_or_kongfu',
      event_hooks.out_start,
      event_obj,
    );
    if (edu_weeks >= 48) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'honey_power',
        event_hooks.out_shopping,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'wing_and_sky',
        event_hooks.school_rooftop,
        event_obj,
      );
    }
    era.get('status:3:腿伤') &&
      check_and_add_event(
        event_marks,
        edu_weeks,
        'rehabilitation',
        event_hooks.office_prepare,
        event_obj,
      );
    if (edu_weeks >= 96) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'the_days_together',
        event_hooks.school_atrium,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'uma_shopping',
        event_hooks.out_shopping,
        event_obj,
      );
    }
    switch (edu_weeks) {
      case 47 + 1: // 新年
      case 47 + 12: // 记者招待会
      case 95 + 5: // 天皇赏春前·放弃
      case 95 + 14: //粉丝感谢祭
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 17: // 腿伤发布会
        !event_marks.give_up &&
          add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 19: // 交涉
        if (
          !event_marks.give_up &&
          Object.entries(races).filter((e) => {
            const weeks = Number(e[0]);
            return weeks >= 48 && weeks < 96 && e[1].rank === 1;
          }).length >= 3
        ) {
          add_event(event_hooks.week_start, event_obj_special);
        }
        break;
      case 95 + 20: // 回归
        !event_marks.give_up &&
          add_event(event_hooks.school_atrium, event_obj_special);
        break;
      case 95 + 25: // 春之帝王
        if (
          Object.entries(races).filter(
            (e) =>
              Number(e[0]) > race_infos[race_enum.tenn_spr].date + 95 &&
              race_infos[e[1].race].race_class === RaceInfo.class_enum.G1 &&
              e[1].rank === 1,
          ).length
        ) {
          event_marks.spring_teio++;
          add_event(event_hooks.school_atrium, event_obj_special);
        }
        break;
      case 47 + 5: // 所以，衣服是怎样啦！
        add_event(event_hooks.school_atrium, event_obj_special);
        break;
      case 47 + 25: // 定时刷新的小兽
        add_event(event_hooks.office_rest, event_obj_special);
        break;
    }

    check_and_register_aim_race(3, aim_races, edu_weeks);
    // 选择放弃，春天皇赏强制避战
    if (
      edu_weeks >= 96 &&
      (temp = sys_reg_race(3).curr).race === race_enum.tenn_spr &&
      event_marks.give_up === 1
    ) {
      temp.race = -1;
      temp.week = -1;
    }
    if (!event_marks.famous_in_famous && edu_weeks >= 96) {
      let crowns = 0;
      crowns +=
        check_aim_race(races, race_enum.oka_sho, 1, 1) ||
        check_aim_race(races, race_enum.sats_sho, 1, 1);
      crowns +=
        check_aim_race(races, race_enum.yush_him, 1, 1) ||
        check_aim_race(races, race_enum.toky_yus, 1, 1);
      crowns +=
        check_aim_race(races, race_enum.shuk_sho, 1, 1) ||
        check_aim_race(races, race_enum.kiku_sho, 1, 1);
      if (crowns === 3) {
        event_marks.famous_in_famous++;
        add_event(event_hooks.out_start, event_obj);
      } else {
        event_marks.famous_in_famous = -1;
      }
    }
  } else if (edu_weeks === 143 + 5 && event_marks.good_end === 1) {
    add_event(event_hooks.week_end, event_obj);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, event_obj);
  }
};

const edu_weeks_toky_yus = race_infos[race_enum.toky_yus].date + 48;

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  const event_marks = new TeioEduMarks();
  if (extra_flag.rank !== 1) {
    event_marks.perfect_check = 1;
    if (extra_flag.edu_weeks < edu_weeks_toky_yus) {
      event_marks.normal_check = 1;
    }
  }
  if (era.get('status:3:腿伤')) {
    if (extra_flag.rank > 1) {
      sys_change_fame(-5);
    }
    if (extra_flag.rank > 5) {
      sys_change_fame(-5);
      sys_change_pressure(3, 2000);
    }
  } else if (
    era.get('flag:当前回合数') - era.get('cflag:3:育成回合计时') >= 96 &&
    extra_flag.race === race_enum.tenn_spr
  ) {
    add_event(event_hooks.back_school, new EventObject(3, cb_enum.edu));
  } else if (extra_flag.race === race_enum.toky_yus) {
    sys_hurt_uma(3, 3);
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:3:育成成绩');
  const event_marks = new TeioEduMarks();
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.waka_sta, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  if (!event_marks.give_up) {
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  }
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  const /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:3:育成成绩');
  if (era.get('status:3:腿伤')) {
    if (
      check_aim_race(races, race_enum.japa_cup, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      new TeioEduMarks().good_end++;
    } else if (era.get('flag:游戏结束')) {
      sys_push_crazy_fan(3);
    }
  }
  common_palace_check(3);
  return handlers[check_stages.aim_check]();
};

handlers[check_stages.personal_titles] = () => ['帝王', '无瑕帝王', '不屈帝王'];

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:3:育成成绩');
  const event_marks = new TeioEduMarks();
  let normal_title_check =
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    check_aim_race(races, race_enum.toky_yus, 1, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1);
  const perfect_title_check =
      normal_title_check &&
      !event_marks.perfect_check &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1),
    unyielding_title_check =
      normal_title_check &&
      check_aim_race(races, race_enum.japa_cup, 2, 1) &&
      era.get('status:3:腿伤');
  normal_title_check &&= !event_marks.normal_check;
  const c = get_chara_talk(3).color;
  if (unyielding_title_check) {
    extra_flag.titles.push({
      c,
      n: '不屈帝王',
    });
    extra_flag.aim_check && sys_personal_achievement.set(3, 1);
  }
  perfect_title_check &&
    extra_flag.titles.push({
      c,
      n: '无瑕帝王',
    });
  normal_title_check &&
    extra_flag.titles.push({
      c,
      n: '帝王',
    });
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
