const { add_event, cb_enum } = require('#/event/queue');

const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const era = require('#/era-electron');
const check_aim_race = require('#/event/snippets/check-aim-race');
const SuEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');

const handlers = {};
const aim_races = {};
aim_races[race_enum.begin_race] = 3;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
//planA:
aim_races[get_aim_race_index(race_enum.hope_sta, 0)] = 3;
aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 3;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 3;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

/* todo planB
aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 3;
aim_races[get_aim_race_index(race_enum.hope_sta, 0)] = 3;
aim_races[get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 3;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[get_aim_race_index(race_enum.prix_lat, 2)] = 3;
*/
handlers[check_stages.after_punish] = () => {
  add_event(event_hooks.week_start, new EventObject(32, cb_enum.daily));
};

handlers[check_stages.next_week] = () => {
  const edu_weeks =
    era.get('flag:当前回合数') - era.get('cflag:32:育成回合计时');
  if (edu_weeks < 3 * 48) {
    const event_marks = new SuEduMarks();
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
          'different_opinion',
          event_hooks.out_start,
          event_obj,
        );
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
        //  todo If 爱丽速子获得三冠 三冠之梦
        add_event(event_hooks.week_end, event_obj_special);
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
      //todo 曼城茶座日本杯参赛后
      case 95 + 41:
        add_event(event_hooks.week_start, event_obj_special);
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

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:32:育成成绩');
  // Plan A
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.hope_sta, 0, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 2));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
  /*
  // Plan B
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.hope_sta, 0, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.prix_lat, 2, 1));
*/
  return buffer;
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
