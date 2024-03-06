const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const check_stages = require('#/data/event/check-stages');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const color_17 = require('#/data/chara-colors').chara_colors[17];

const handlers = {};

const aim_races = {};
aim_races[race_enum.begin_race] = 2;
aim_races[get_aim_race_index(race_enum.saud_cup, 0)] = 2;

aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 3;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

/** @param {{edu_weeks:number,race:number,rank:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) => {
  const ret =
    aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
    aim_races[extra_flag.race];
  if (!ret && extra_flag.rank !== undefined) {
    const event_marks = new LunaEduMarks();
    if (
      extra_flag.rank <= 5 &&
      extra_flag.rank > 1 &&
      !event_marks.faith_collapse
    ) {
      return 2;
    } else if (
      event_marks.emperor &&
      race_infos[extra_flag.race].race_class === class_enum.G1 &&
      era.get('status:9017:神经衰弱') &&
      !event_marks.fall_into_hell
    ) {
      return 1;
    }
  }
  return ret;
};

handlers[check_stages.love_event] = () => {
  add_event(event_hooks.week_end, new EventObject(17, cb_enum.love));
};

handlers[check_stages.next_week] = () => {
  const edu_object = new EventObject(17, cb_enum.edu),
    edu_weeks = era.get('cflag:17:育成回合计时');
  if (edu_weeks < 3 * 48) {
    add_event(event_hooks.week_start, edu_object);
    if (
      edu_weeks === 47 + 41 &&
      check_aim_race(era.get('cflag:17:育成成绩'), race_enum.kiku_sho, 1, 1)
    ) {
      add_event(event_hooks.week_end, edu_object);
    } else if (edu_weeks === 95 + 1) {
      add_event(event_hooks.out_church, new EventObject(17, cb_enum.edu, true));
    } else if (edu_weeks === 95 + 10) {
      add_event(event_hooks.week_end, edu_object);
    }
    check_and_register_aim_race(17, aim_races, edu_weeks);
  } else if (edu_weeks === 143 + 9) {
    add_event(event_hooks.week_start, edu_object);
  }
};

handlers[check_stages.aim_check] = function () {
  const buffer = [],
    races = era.get('cflag:17:育成成绩');

  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.saud_cup, 0, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
  buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));

  return buffer;
};

const edu_weeks_kiku_sho = 48 + race_infos[race_enum.kiku_sho].date;

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  if (extra_flag.rank !== 1 && extra_flag.edu_weeks < edu_weeks_kiku_sho) {
    new LunaEduMarks().title_check = 1;
  }
};

handlers[check_stages.palace_check] = function () {
  common_palace_check(17);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:17:育成成绩');
  const is_invisible =
    check_aim_race(races, race_enum.sats_sho, 1, 1) &&
    check_aim_race(races, race_enum.toky_yus, 1, 1) &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
    check_aim_race(races, race_enum.arim_kin, 1, 1) &&
    check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
    check_aim_race(races, race_enum.arim_kin, 2, 1) &&
    (check_aim_race(races, race_enum.japa_cup, 1, 1) ||
      check_aim_race(races, race_enum.japa_cup, 2, 1));
  if (is_invisible && !new LunaEduMarks().title_check) {
    extra_flag.titles.push({
      c: get_chara_talk(17).color,
      n: '皇帝',
    });
    extra_flag.aim_check && sys_personal_achievement.set(17, 1);
  }
};

handlers[check_stages.personal_titles] = () => ['皇帝'];

handlers[check_stages.personal_action] = function () {
  if (
    era.get('cflag:17:育成回合计时') < 48 * 3 - 1 &&
    era.get('cflag:17:位置') === era.get('cflag:0:位置')
  ) {
    return {
      name: '日月交替',
      handle() {
        const event_marks = new LunaEduMarks();
        event_marks.want_emperor = 1 - event_marks.want_emperor;
        const { luna, emperor } = event_marks.emperor
            ? { luna: 9017, emperor: 17 }
            : { luna: 17, emperor: 9017 },
          aim_talk = new CharaTalk(
            event_marks.want_emperor ? emperor : luna,
          ).set_color(color_17[event_marks.want_emperor]),
          chara = get_chara_talk(17);
        era.print(
          event_marks.want_emperor === event_marks.emperor
            ? [
                '下周 ',
                chara.get_colored_name(),
                ' 将尝试保持 ',
                aim_talk.get_colored_name(),
                ' 形态……',
              ]
            : [
                '下周 ',
                chara.get_colored_name(),
                ' 将尝试转换为 ',
                aim_talk.get_colored_name(),
                ' 形态……',
              ],
        );
      },
    };
  }
  return {};
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
