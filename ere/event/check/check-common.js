const era = require('#/era-electron');

const {
  check_pregnant_unprotect,
  check_want_to_escape,
} = require('#/system/ero/sys-calc-ero-status');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { log_600m4 } = require('#/utils/value-utils');

const { attr_change_colors } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { pressure_border } = require('#/data/train-const');

/** @param {number} chara_id */
function get_action_debuff(chara_id) {
  return (
    era.get(`status:${chara_id}:头风`) ||
    era.get(`status:${chara_id}:疲惫`) > 0 ||
    era.get(`status:${chara_id}:伤病`) > 0 ||
    (!era.get(`cflag:${chara_id}:种族`) &&
      era.get(`cflag:${chara_id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no)
  );
}

/** @type {Record<string,function(chara_id:number,extra_flag:*):*>} */
const handlers = {};

/** @param {number} chara_id */
handlers[check_stages.aim_check] = (chara_id) => {
  const buffer = [];
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get(`cflag:${chara_id}:育成成绩`);
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  let g1_count = 0,
    g2_count = 0,
    other_count = 0;
  Object.values(races).forEach((e) => {
    const info = race_infos[e.race];
    if (info.race_class === class_enum.G1) {
      g1_count += e.rank <= 5;
    } else if (info.race_class === class_enum.G2) {
      g2_count += e.rank <= 3;
    } else if (e.race !== race_enum.begin_race) {
      other_count += e.rank === 1;
    }
  });
  buffer.push({
    check: Number(g1_count > 0),
    color: g1_count > 0 ? attr_change_colors.up : attr_change_colors.down,
    content: `一场G1比赛 入着 ${g1_count}/1 ${g1_count > 0 ? '✔' : '✘'}`,
  });
  buffer.push({
    check: Math.min(g2_count, 3) - 2,
    color: g2_count >= 3 ? attr_change_colors.up : attr_change_colors.down,
    content: `三场G2比赛 前三名 ${g2_count}/3 ${g2_count >= 3 ? '✔' : '✘'}`,
  });
  buffer.push({
    check: Math.min(other_count, 5) - 4,
    color: other_count >= 5 ? attr_change_colors.up : attr_change_colors.down,
    content: `五场G3、OP、PreOP比赛 1着 ${other_count}/5 ${
      other_count >= 5 ? '✔' : '✘'
    }`,
  });
  return buffer;
};

handlers[check_stages.love_event] = (chara_id) =>
  chara_id &&
  add_event(event_hooks.week_end, new EventObject(chara_id, cb_enum.love));

const aim_races = {};
aim_races[race_enum.begin_race] = 2;

handlers[check_stages.next_week] = (chara_id) => {
  if (chara_id && era.get(`cflag:${chara_id}:种族`)) {
    const edu_weeks = era.get(`cflag:${chara_id}:育成回合计时`);
    if (edu_weeks < 3 * 48) {
      check_and_register_aim_race(chara_id, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, new EventObject(chara_id, cb_enum.edu));
    }
  }
};
handlers[check_stages.prison] = (chara_id) => {
  const love = era.get(`love:${chara_id}`),
    prison_limit = era.get('flag:极端行为限制'),
    relation = era.get(`relation:${chara_id}:0`);
  let delta = love * prison_limit - relation;
  if (
    era.get('flag:当前位置') === location_enum.basement ||
    !prison_limit ||
    love < 50 ||
    delta < 0
  ) {
    return false;
  }
  let ratio =
    (delta > 0) *
    (0.05 +
      // 地下室限制最大倍率3倍，3*100-0=300，好感在0以下必然地下室
      (delta >= 300 ? 1 : Math.pow(2, delta / 30 - 10)) -
      0.25 * get_action_debuff(chara_id));
  switch (era.get('flag:惩戒力度')) {
    case 2:
      ratio /= 10;
      break;
    case 3:
      ratio /= 20;
  }
  const dice = Math.random();
  era.logger.debug(
    `角色 ${chara_id} 地下室：${(ratio * 100).toFixed(2)}% 掷骰：${dice} 计算：
    ${ratio}=${delta > 0}(开关)*(0.05(基础)+${
      delta >= 300 ? 1 : Math.pow(2, delta / 30 - 10)
    }(好感爱慕)-${0.25 * get_action_debuff(chara_id)}(行动debuff))`,
  );
  return ratio >= 1 || dice < ratio;
};

handlers[check_stages.rape_in_sleeping] = (chara_id) => {
  const love = era.get(`love:${chara_id}`),
    raping_limit = era.get('flag:极端行为限制') * 2,
    punish_level = era.get('flag:惩戒力度'),
    relation = era.get(`relation:${chara_id}:0`) || 0;
  let delta = love * raping_limit - relation;
  if (
    (punish_level <= 1 &&
      (era.get('flag:当前位置') === location_enum.basement ||
        !raping_limit ||
        love < 50 ||
        delta < 0)) ||
    check_want_to_escape(chara_id)
  ) {
    return false;
  }
  if (delta < 0) {
    delta = 0;
  }
  let ratio =
    Math.pow(2, Math.min(delta / 6 - 100, 0)) * 0.3 +
    Math.pow(2, era.get(`base:${chara_id}:性欲`) / 2000 - 5) *
      (0.7 + 0.1 * era.get(`mark:${chara_id}:欢愉`)) +
    0.05 * era.get(`talent:${chara_id}:工口意愿`) -
    0.5 * get_action_debuff(chara_id);
  if (punish_level >= 2) {
    ratio += 0.3;
  }
  const dice = Math.random();
  era.logger.debug(
    `角色 ${chara_id} 睡奸：${(ratio * 100).toFixed(2)}%；掷骰：${dice} 计算：
    ${ratio}=${
      Math.pow(2, Math.min(delta / 6 - 100, 0)) * 0.3
    }(好感爱慕)+${Math.pow(
      2,
      era.get(`base:${chara_id}:性欲`) / 2000 - 5,
    )}(性欲)*(0.7+${0.1 * era.get(`mark:${chara_id}:欢愉`)}(欢愉))+${
      0.05 * era.get(`talent:${chara_id}:工口意愿`)
    }(好色)-${0.5 * get_action_debuff(chara_id)}(行动debuff)`,
  );
  return ratio >= 1 || dice < ratio;
};

handlers[check_stages.want_make_love] = (chara_id) => {
  if (
    !check_pregnant_unprotect(chara_id) ||
    !check_pregnant_unprotect(0) ||
    check_want_to_escape(chara_id)
  ) {
    return 0;
  }
  const love = era.get(`love:${chara_id}`);
  let ratio = 0;
  if (love >= 50) {
    ratio =
      Math.log(Math.max(6 * love - era.get(`relation:${chara_id}:0`), 1)) /
        log_600m4 +
      Math.pow(2, era.get(`base:${chara_id}:性欲`) / 1250 - 8) *
        (0.7 + 0.1 * era.get(`mark:${chara_id}:欢愉`)) +
      0.05 * era.get(`talent:${chara_id}:工口意愿`) -
      0.5 * get_action_debuff(chara_id);
    ratio *= (3 - era.get(`mark:${chara_id}:反抗`)) / 3;
  }
  const dice = Math.random();
  era.logger.debug(
    `角色 ${chara_id} 求爱：${(ratio * 100).toFixed(2)}%；掷骰：${dice} 计算：
    ${ratio}=${
      Math.log(Math.max(6 * love - era.get(`relation:${chara_id}:0`), 1)) /
      log_600m4
    }(好感爱慕)+${Math.pow(
      2,
      era.get(`base:${chara_id}:性欲`) / 1250 - 8,
    )}(性欲)*(0.7+${0.1 * era.get(`mark:${chara_id}:欢愉`)}(欢愉))+${
      0.05 * era.get(`talent:${chara_id}:工口意愿`)
    }(好色)-${0.5 * get_action_debuff(chara_id)}(行动debuff)`,
  );
  if (ratio >= 1 || dice < ratio) {
    return (
      1 +
      (era.get(`talent:${chara_id}:反抗意愿`) >= 0 &&
        (dice < 0.05 ||
          era.get('flag:惩戒力度') >= 2 ||
          era.get(`base:${chara_id}:性欲`) >= lust_border.want_sex ||
          era.get(`base:${chara_id}:压力`) >= pressure_border.apprehension ||
          era.get(`talent:${chara_id}:病娇`) === 2))
    );
  }
  return 0;
};

/** @param {number} chara_id */
handlers[check_stages.palace_check] = (chara_id) => {
  common_palace_check(chara_id);
  return handlers[check_stages.aim_check](chara_id);
};

handlers[check_stages.personal_action] = () => ({});

handlers[check_stages.personal_titles] = (chara_id) =>
  [era.get(`staticcstr:${chara_id}:称号`)].filter((e) => e);

/**
 * @param {number} chara_id
 * @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag
 */
handlers[check_stages.title_check] = (chara_id, extra_flag) => {
  const /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get(`cflag:${chara_id}:育成成绩`);
  if (
    Object.values(races).filter(
      (e) => e.rank === 1 && race_infos[e.race].race_class === class_enum.G1,
    ).length >= 6
  ) {
    extra_flag.titles.push({
      c: get_chara_talk(chara_id).color,
      n: era.get(`staticcstr:${chara_id}:称号`),
    });
    extra_flag.aim_check && sys_personal_achievement.set(chara_id, 1);
  }
};

/**
 * @param {number} chara_id
 * @param {number} stage_id
 * @param extra_flag
 * @returns {*}
 */
module.exports = (chara_id, stage_id, extra_flag) => {
  if (handlers[stage_id]) {
    return handlers[stage_id](chara_id, extra_flag);
  }
};
