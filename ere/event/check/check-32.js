const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const CharaTitles = require('#/data/chara-titles');
const check_stages = require('#/data/event/check-stages');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const check_aim_race = require('#/event/snippets/check-aim-race');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @type {Record<string,function(Record<string,*>)>} */
const handlers = {};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    races = new RaceHistory(32).get();
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.hope_sta, 0, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 1));
  if (new TachyonEduMarks().plan_b) {
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.prix_lat, 2, 1));
  } else {
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  }
  return buffer;
};

const aim_races = [{}, {}];

// planA:
aim_races[0][race_enum.begin_race] = 3;
aim_races[0][get_aim_race_index(race_enum.hope_sta, 0)] = 3;
aim_races[0][get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[0][get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[0][get_aim_race_index(race_enum.toky_yus, 1)] = 3;

aim_races[0][get_aim_race_index(race_enum.kiku_sho, 1)] = 3;
aim_races[0][get_aim_race_index(race_enum.sank_hai, 2)] = 3;
aim_races[0][get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[0][get_aim_race_index(race_enum.arim_kin, 2)] = 3;

aim_races[1][race_enum.begin_race] = 3;
aim_races[1][get_aim_race_index(race_enum.hope_sta, 0)] = 3;
aim_races[1][get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[1][get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[1][get_aim_race_index(race_enum.toky_yus, 1)] = 3;

aim_races[1][get_aim_race_index(race_enum.tenn_spr, 2)] = 3;
aim_races[1][get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[1][get_aim_race_index(race_enum.prix_lat, 2)] = 3;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) => {
  const { plan_b } = new TachyonEduMarks();
  return (
    aim_races[plan_b][`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
    aim_races[plan_b][extra_flag.race]
  );
};

handlers[check_stages.after_punish] = ({ level }) => {
  add_event(
    event_hooks.week_start,
    new EventObject(32, cb_enum.daily).set_arg(`p${level}`),
  );
};

/**
 * @param {number} edu_weeks
 * @param {number} rank
 */
handlers[check_stages.after_race] = ({ edu_weeks, rank }) => {
  if (edu_weeks <= 47 + race_infos[race_enum.sats_sho].date && rank !== 1) {
    new TachyonEduMarks().title_check = 1;
  }
};

handlers[check_stages.love_event] = () => {
  const love = era.get('love:32'),
    love_event = new EventObject(32, cb_enum.love).set_arg(love);
  if (love === 74) {
    add_event(event_hooks.week_start, love_event);
  } else {
    add_event(event_hooks.week_end, love_event);
  }
};

handlers[check_stages.next_week] = () => {
  if (era.get('cflag:32:招募状态') === recruit_flags.yes) {
    const daily_event_object = new EventObject(32, cb_enum.daily),
      life_marks = new TachyonLifeMarks(),
      relation = era.get('relation:32:0');
    let temp;
    if (
      era.get('mark:32:反抗') === 3 &&
      !life_marks.hate &&
      Math.random() < 0.2
    ) {
      life_marks.hate = 1;
      add_event(event_hooks.week_start, daily_event_object.set_arg('hate'));
    }
    life_marks.talk = 0;
    // 做饭检查
    if (life_marks.cook) {
      if (relation <= 225) {
        (temp = era.get('flag:当前回合数') - life_marks.l_cook) > 1 &&
          temp <= 4 &&
          add_event(
            event_hooks.week_start,
            daily_event_object
              .copy()
              .set_arg(`cook${Number(life_marks.cook >= 5)}${temp - 1}`),
          );
      } else if (life_marks.cook >= 10) {
        (temp = era.get('flag:当前回合数') - life_marks.l_cook) > 1 &&
          add_event(
            event_hooks.week_start,
            daily_event_object.copy().set_arg(`cook2${temp - 1}`),
          );
      }
    }
    const love = era.get('love:32');
    if (
      love >= 25 &&
      love < 50 &&
      life_marks.cook >= 10 &&
      !life_marks.ambiguous
    ) {
      life_marks.ambiguous = 1;
      add_event(
        event_hooks.week_start,
        new EventObject(32, cb_enum.love).set_arg(25),
      );
    }
  }
  const edu_weeks = era.get('cflag:32:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_marks = new TachyonEduMarks();
    const event_obj = new EventObject(32, cb_enum.edu);
    const event_obj_special = new EventObject(32, cb_enum.edu, true);
    const love = era.get('love:32');
    if (era.get('cflag:32:育成次数') === 1) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'restart',
        event_hooks.week_start,
        event_obj,
      );
    } else if (era.get('cflag:32:育成次数') > 1) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'reforger',
        event_hooks.week_start,
        event_obj,
      );
    }
    if (edu_weeks >= 20) {
      check_and_add_event(
        event_marks,
        edu_weeks,
        'deities_possible',
        event_hooks.out_church,
        event_obj,
      );
      if (love > 75) {
        check_and_add_event(
          event_marks,
          edu_weeks,
          'explore_reward',
          event_hooks.office_study,
          event_obj,
        );
        if (event_marks.explore_reward === 2) {
          check_and_add_event(
            event_marks,
            edu_weeks,
            'explore_reward1',
            event_hooks.office_study,
            event_obj,
          );
          if (event_marks.explore_reward1 === 2) {
            check_and_add_event(
              event_marks,
              edu_weeks,
              'explore_reward2',
              event_hooks.office_study,
              event_obj,
            );
          }
        }
      }
      if (event_marks.hot_spring && edu_weeks > 95 + 24) {
        check_and_add_event(
          event_marks,
          edu_weeks,
          'hot_spring_event',
          event_hooks.out_start,
          event_obj,
        );
      }
    }
    switch (edu_weeks) {
      case 16: //实验课题的订定
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 40: //项目成熟度评估
        add_event(event_hooks.week_start, event_obj_special);
        break; //二期目标确立
      case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 8: //研究计画与进度回报
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 23: //最速？最强？
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 25: // A or B (重要分歧点)
        add_event(event_hooks.week_start, event_obj_special);
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 47 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 31:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 47 + 41:
        if (new CharaTitles(32).get().findIndex((e) => e.c === '三冠')) {
          add_event(event_hooks.week_end, event_obj_special);
        }
        break;
      case 47 + 42:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 3:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 6:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 14:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 13:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 18:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 29:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 31:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 32:
        add_event(event_hooks.week_end, event_obj_special);
        break;
      case 95 + 35:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 39:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 41:
        if (
          new RaceHistory(25).get_result(95 + 40)?.race === race_enum.japa_cup
        ) {
          add_event(event_hooks.week_start, event_obj_special);
        }
        break;
      case 95 + 43:
        add_event(event_hooks.week_start, event_obj_special);
        break;
      case 95 + 45:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    }
  }
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(32);
  return handlers[check_stages.aim_check]();
};

handlers[check_stages.personal_titles] = () => [
  `超光速${era.get('cflag:32:性别') - 1 ? '公主' : '王子'}`,
];

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const races = new RaceHistory(32).get();
  if (
    !new TachyonEduMarks().title_check &&
    check_aim_race(races, race_enum.hope_sta, 0, 1) &&
    check_aim_race(races, race_enum.hoch_sho, 1, 1) &&
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    era.get('base:32:速度') >= 1200
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(32).color,
      n: handlers[check_stages.personal_titles]()[0],
    });
    extra_flag.aim_check && sys_personal_achievement.set(32, 1);
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
