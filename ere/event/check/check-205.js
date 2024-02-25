const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_aim_race = require('#/event/snippets/check-aim-race');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { cb_enum, add_event } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');
const { attr_change_colors } = require('#/data/color-const');
const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const handlers = {};

const aim_races = {};
aim_races[race_enum.begin_race] = 4;

aim_races[get_aim_race_index(race_enum.prix_prb, 1)] = 4;
aim_races[get_aim_race_index(race_enum.prix_dia, 1)] = 4;
aim_races[get_aim_race_index(race_enum.prix_lat, 1)] = 3;
aim_races[get_aim_race_index(race_enum.prix_lat, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) => {
  if (extra_flag.race === race_enum.japa_cup) {
    return new TreveEduMarks().japa_cup;
  }
  return (
    aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
    aim_races[extra_flag.race]
  );
};

handlers[check_stages.next_week] = () => {
  if (era.get('cflag:205:招募状态')) {
    const edu_weeks =
      era.get('flag:当前回合数') - era.get('cflag:205:育成回合计时');
    if (edu_weeks < 3 * 48) {
      switch (edu_weeks) {
        case 47 + 24:
          if (
            check_aim_race(
              era.get('cflag:205:育成成绩'),
              race_enum.prix_prb,
              1,
              1,
            ) &&
            check_aim_race(
              era.get('cflag:205:育成成绩'),
              race_enum.prix_prb,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.week_start,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
          }
          break;
        case 47 + 33:
          if (sys_reg_race(205).curr.race === race_enum.prix_lat) {
            add_event(
              event_hooks.week_start,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
            add_event(
              event_hooks.week_end,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
          }
          break;
        case 47 + 35:
          if (era.get('cflag:205:位置') === location_enum.paris) {
            add_event(
              event_hooks.foreign_travel,
              new EventObject(205, cb_enum.edu, true).set_arg(edu_weeks),
            );
          }
          break;
        case 95 + 25:
          if (
            check_aim_race(
              era.get('cflag:205:育成成绩'),
              race_enum.prix_lat,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.week_start,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
            add_event(
              event_hooks.out_start,
              new EventObject(205, cb_enum.edu, true).set_arg(edu_weeks),
            );
          }
          break;
        case 95 + 26:
          if (new TreveEduMarks().tea) {
            new EventMarks(0).sub(event_hooks.out_start);
          }
          era.set('cflag:205:招募状态', recruit_flags.yes);
          if (!era.get('flag:当前互动角色')) {
            era.set('flag:当前互动角色', 205);
          }
          break;
        case 95 + 28:
          if (
            check_aim_race(
              era.get('cflag:205:育成成绩'),
              race_enum.prix_lat,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.week_end,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
          }
          break;
        case 95 + 29:
          if (
            check_aim_race(
              era.get('cflag:205:育成成绩'),
              race_enum.prix_lat,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.week_start,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
          }
          break;
        case 95 + 33:
          if (era.get('cflag:205:招募状态') !== recruit_flags.yes) {
            add_event(
              event_hooks.week_end,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
          }
          break;
        case 95 + 42:
          if (
            check_aim_race(
              era.get('cflag:205:育成成绩'),
              race_enum.prix_lat,
              1,
              1,
            ) &&
            check_aim_race(
              era.get('cflag:205:育成成绩'),
              race_enum.prix_lat,
              2,
              1,
            )
          ) {
            add_event(
              event_hooks.week_end,
              new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
            );
          }
      }
      check_and_register_aim_race(205, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(205, cb_enum.edu).set_arg(edu_weeks),
      );
    }
  } else if (
    era.get('cflag:205:随机招募') < 0 &&
    era.get('flag:当前声望') >= 1000
  ) {
    era.set('cflag:205:随机招募', 1);
    era.print(
      '据说有一名优秀的法国幼驹已经准备来到中央交流，也许可以在训练场遇到……',
    );
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
    races = era.get('cflag:205:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.prix_prb, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.prix_dia, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.prix_lat, 1, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.prix_lat, 2, 1));
  let g1_count = Object.values(races).filter(
    (e) =>
      race_infos[e.race].race_class === class_enum.G1 &&
      e.race !== race_enum.prix_lat &&
      e.race !== race_enum.prix_dia &&
      e.race !== race_enum.prix_prb &&
      e.rank === 1,
  ).length;
  buffer.push({
    check: Math.min(g1_count, 5) - 4,
    color: g1_count >= 5 ? attr_change_colors.up : attr_change_colors.down,
    content: `5场其他G1比赛 一着 ${g1_count}/5 ${g1_count >= 5 ? '✔' : '✘'}`,
  });
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(205);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number,st:number,pop:number}>} */
  const races = era.get('cflag:205:育成成绩');
  if (
    check_aim_race(races, race_enum.prix_prb, 1, 1, (e) => e.pop === 1) &&
    check_aim_race(races, race_enum.prix_dia, 1, 1, (e) => e.pop === 1) &&
    check_aim_race(races, race_enum.prix_lat, 1, 1, (e) => e.pop === 1) &&
    check_aim_race(races, race_enum.prix_lat, 2, 1, (e) => e.pop === 1)
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(205).color,
      n: '凯旋门的维纳斯',
    });
    extra_flag.aim_check && sys_personal_achievement.set(205, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['凯旋门的维纳斯'];

handlers[check_stages.prison] = handlers[check_stages.rape_in_sleeping] =
  () => {
    if (era.get('cflag:205:招募状态') === recruit_flags.yes) {
      throw new Error();
    }
    return false;
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
