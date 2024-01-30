const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const { add_event, cb_enum } = require('#/event/queue');

const check_stages = require('#/data/event/check-stages');
const UraraEventMarks = require('#/data/event/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_breast_cup } = require('#/data/info-generator');
const { race_enum } = require('#/data/race/race-const');
const { attr_change_colors } = require('#/data/color-const');
const check_aim_race = require('#/event/snippets/check-aim-race');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const handlers = {};

handlers[check_stages.love_event] = function () {
  era.get('love:52') === 49 &&
    add_event(event_hooks.week_end, new EventObject(52, cb_enum.love));
};

handlers[check_stages.next_week] = function () {
  const cup_size = get_breast_cup(60);
  if (cup_size >= 'E') {
    era.set('talent:60:泌乳', 3);
  }
  const edu_marks = new UraraEventMarks();
  const event_obj = new EventObject(52, cb_enum.edu);
  if (!edu_marks.loop && era.get('cflag:52:招募状态') === recruit_flags.yes) {
    edu_marks.loop++;
    add_event(event_hooks.week_start, event_obj);
  }
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:52:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.negi_sta, 2, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.elm_sta, 2, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.jbc_spr, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 16));
  const edu_marks = new UraraEventMarks();
  buffer.push({
    check: edu_marks.fans >= 25000,
    color:
      edu_marks.fans >= 25000 ? attr_change_colors.up : attr_change_colors.down,
    content: `粉丝数 ${edu_marks.fans}/25000 ${
      edu_marks.fans >= 25000 ? '✔' : '✘'
    }`,
  });
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(52);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const c = get_chara_talk(52).color;
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:52:育成成绩');
  if (new UraraEventMarks().fans >= 550000) {
    extra_flag.titles.push({
      c,
      n: '乌拉拉加油',
    });
  }
  if (check_aim_race(races, race_enum.arim_kin, 2, 1)) {
    extra_flag.titles.push({
      c,
      n: '中山之樱',
    });
    if (check_aim_race(races, race_enum.arim_kin, 1, 1)) {
      extra_flag.titles.push({
        c,
        n: '跨越世界',
      });
    }
    extra_flag.aim_check && sys_personal_achievement.set(52, 1);
  }
};

handlers[check_stages.personal_titles] = () => [
  '乌拉拉加油',
  '中山之樱',
  '跨越世界',
];

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
