const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_push_crazy_fan } = require('#/system/sys-calc-flag');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const handlers = {};

handlers[check_stages.after_punish] = (extra_flag) => {
  if (extra_flag.level === 1 || extra_flag.level === 3) {
    add_event(event_hooks.week_start, new EventObject(68, cb_enum.daily));
  }
};

const aim_races = {};

aim_races[race_enum.begin_race] = 2;

aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.stli_kin, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 2;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.love_event] = () =>
  add_event(event_hooks.week_end, new EventObject(68, cb_enum.love));

handlers[check_stages.next_week] = () => {
  const event_obj = new EventObject(68, cb_enum.edu),
    edu_weeks = era.get('cflag:68:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_marks = new KitaEduMarks();
    const event_obj_special = new EventObject(68, cb_enum.edu, true);
    check_and_add_event(
      event_marks,
      edu_weeks,
      'kitasan_touch',
      event_hooks.back_school,
      event_obj,
    );
    if (event_marks.hot_spring && edu_weeks > 95 + 24) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'hot_spring_event',
        event_hooks.out_start,
        event_obj,
      );
    }
    switch (edu_weeks) {
      case 38: // 优秀素质登场
      case 47 + 7: // 家人是很重要的
      case 47 + 29: // 夏季合宿
      case 47 + 48: // 圣诞夜的晚餐
      case 95 + 6: // 略微有些破碎的甜酒味
      case 95 + 29: // 合宿开始
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 42: // 悠闲的午后时光
        add_event(event_hooks.school_atrium, event_obj_special);
        break;
      case 47 + 1: // 新年的抱负
        add_event(event_hooks.out_church, event_obj_special);
        break;
      case 47 + 10: // 没有恶意的小小恶作剧
        if (event_marks.classical_valentine === 1) {
          add_event(event_hooks.week_start, event_obj_special);
        }
        break;
      case 47 + 11: // 稳健的支持与皋月阴云
        if (
          era.get('cflag:3:招募状态') === recruit_flags.yes &&
          era.get('cflag:3:育成回合计时') >= 96
        ) {
          add_event(event_hooks.week_start, event_obj_special);
        }
        break;
      case 47 + 32: // 合宿结束
      case 95 + 32: // 合宿结束
      case 95 + 48: // 与北部玄驹的酒吧生活
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 1: // 新年拜访
        add_event(event_hooks.week_start, event_obj_special);
        add_event(event_hooks.out_start, event_obj_special);
        break;
      case 95 + 10: // 奖励
        if (
          event_marks.senior_valentine === 1 &&
          era.get('love:68') >= 75 &&
          era.get('exp:68:受虐高潮次数') >= 10
        ) {
          add_event(event_hooks.week_end, event_obj_special);
        }
        break;
      case 95 + 14: //粉丝感谢祭！
        add_event(event_hooks.out_shopping, event_obj_special);
    }
    check_and_register_aim_race(68, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, event_obj);
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:68:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.stli_kin, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 16));
  return buffer;
};

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number,st:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  if (
    extra_flag.rank === 1 &&
    race_infos[extra_flag.race].race_class === class_enum.G1
  ) {
    new KitaEduMarks().g1_count++;
  }
};

handlers[check_stages.palace_check] = () => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:68:育成成绩');
  if (
    Object.values(races).filter(
      (e) => e.rank === 1 && e.race !== race_enum.begin_race,
    ).length < 4
  ) {
    new KitaEduMarks().crazy_fan++;
    sys_push_crazy_fan(68);
  } else {
    add_event(event_hooks.week_end, new EventObject(68, cb_enum.edu));
  }
  common_palace_check(68);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:68:育成成绩');
  if (
    (check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 1, 1)) ||
    (check_aim_race(races, race_enum.tenn_sho, 2, 1) &&
      (check_aim_race(races, race_enum.takz_kin, 1, 1) ||
        check_aim_race(races, race_enum.takz_kin, 2, 1)) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      new KitaEduMarks().g1_count >= 7)
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(68).color,
      n: '祭典少女',
    });
    extra_flag.aim_check && sys_personal_achievement.set(68, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['祭典少女'];

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
