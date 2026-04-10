const era = require('#/era-electron');

const {
  sys_check_cuckold,
  sys_check_yandere,
} = require('#/system/chara/sys-calc-cheat');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_change_pressure } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_punish_unfaithful,
} = require('#/system/sys-calc-chara-others');

const print_ero_gif = require('#/event/ero/snippets/print-ero-gif');

const { get_random_value } = require('#/utils/value-utils');

const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part2jid } = require('#/data/ero/part-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const basement_owners = require('#/data/event/basement-owners');
const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const { ero_hooks, ero_tagged_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { location_enum } = require('#/data/locations');

const { i18n } = require('#/i18n/selector');

const current = new Date().getTime();

/** @type {Record<string,function>} */
const handlers = {};

[
  require('#/event/ero/result-handlers/communications'),
  require('#/event/ero/result-handlers/making-outs-1'),
  require('#/event/ero/result-handlers/making-outs-2'),
  require('#/event/ero/result-handlers/fucking'),
  require('#/event/ero/result-handlers/sm'),
  require('#/event/ero/result-handlers/orgy'),
  require('#/event/ero/result-handlers/items'),
].forEach((f) => f(handlers));

console.log(
  '调教指令通用结果函数注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number} cid
 * @param _
 * @param {{part:number}} extra
 */
handlers[ero_hooks.become_lubrication] = (cid, _, extra) => {
  const pname = i18n('zh-CN').tb_param[part2jid[extra.part]];
  const orgasm_exp = era.get(`exp:${cid}:${pname}高潮次数`);
  const ratio =
    1 -
    0.5 * era.get(`talent:${cid}:洁净重视`) -
    0.5 * era.get(`talent:${cid}:工口意愿`) +
    0.2 * !orgasm_exp;
  // JEWELNAME:14 = 反感
  add_juel(cid, 14, base_emotion_juel * ratio);
  if (!orgasm_exp) {
    // JEWELNAME:12 = 恐惧
    add_juel(cid, 12, (base_emotion_juel * ratio) / 2);
  }
};

handlers[ero_hooks.prison] = (cid) => {
  const life_marks = LifeEventMarks.get_marks(cid);
  let yandere = false;
  if (era.get(`status:${cid}:爱意克制`) > 0) {
    era.set(`status:${cid}:爱意克制`, 0);
    if (
      !era.get(`talent:${cid}:病娇`) &&
      Math.random() < 0.4 + 0.2 * era.get('flag:极端行为限制')
    ) {
      global_achievement.yandere = 1;
      yandere = true;
    }
  }
  if (sys_check_yandere(cid, (y) => y === 1)) {
    yandere = true;
  }
  if (yandere) {
    era.set(`talent:${cid}:病娇`, 2);
    life_marks.yandere = get_random_value(
      2,
      (era.get('flag:极端行为') * 2 * era.get(`love:${cid}`) -
        era.get(`relation:${cid}:0`)) /
        100,
    );
  }
  era.set('flag:当前位置', location_enum.basement);
  basement_owners.push(cid);
};

/**
 * @param _
 * @param __
 * @param {{father_id:number,mother_id:number,shown:boolean}} extra
 */
handlers[ero_hooks.cum_in_womb] = async (_, __, extra) => {
  if (extra.shown) {
    const last_action = era.get('tflag:前回行动');
    const master = era.get('tflag:主导权');
    const lover = era.get('tflag:前回对手');
    if (
      (master === extra.mother_id &&
        (last_action === ero_hooks.cowgirl ||
          last_action === ero_hooks.stimulate_glans_by_virgin)) ||
      (lover === extra.mother_id &&
        (last_action === ero_hooks.ask_cowgirl ||
          last_action === ero_hooks.ask_stimulate_glans_by_virgin ||
          last_action === ero_hooks.sitting ||
          last_action === ero_hooks.suspended_congress))
    ) {
      print_ero_gif('女上位射精', extra.shown);
    }
  }
};

/**
 * @param _
 * @param __
 * @param {{father_id:number,mother_id:number}} extra
 */
handlers[ero_hooks.report_pregnant_between_weeks] = async (_, __, extra) => {
  const { father_id, mother_id } = extra,
    love = era.get(`love:${mother_id || father_id}`),
    unexpected_pregnant =
      LifeEventMarks.get_marks(mother_id).unexpected_pregnant;
  era.println();
  let wait_flag;
  if (mother_id > 0) {
    let relation_change = 100;
    if (love < 90 && (mother_id < 340 || mother_id > 342)) {
      switch (unexpected_pregnant) {
        case unexpected_pregnant_enum.father_sleep:
          relation_change = 0;
          break;
        case unexpected_pregnant_enum.mother_sleep:
          relation_change = -450;
          break;
        default:
          relation_change = -400;
      }
    }
    if (era.get(`mark:${mother_id}:同心`) >= 2) {
      relation_change += 50;
    }
    wait_flag = sys_like_chara(mother_id, 0, relation_change, true);
  } else {
    wait_flag = sys_like_chara(
      father_id,
      0,
      50,
      unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
      5,
    );
  }
  wait_flag && (await era.waitAnyKey());
  await sys_punish_unfaithful(
    mother_id || father_id,
    era.get(`love:${mother_id || father_id}`),
  );
};

/**
 * @param {number} id
 * @param _
 * @param {number[]} partners
 * @returns {Promise<boolean>}
 */
handlers[ero_hooks.after_betrayed] = async (id, _, { partners }) => {
  const rape = era.get('tflag:强奸');
  era.add(`exp:${id}:被绿次数`, 1);
  if (sys_check_cuckold(id)) {
    sys_change_pressure(id, -get_random_value(500, 1000) * (1 + (rape > 0)));
    let wait_flag = sys_like_chara(id, 0, get_random_value(10, 20));
    return partners.reduce(
      (p, c) =>
        sys_like_chara(id, c, get_random_value(20, 40) * (1 + (rape > 0))) || p,
      wait_flag,
    );
  }
  sys_change_pressure(id, get_random_value(2000, 4000) / (1 + (rape > 0)));
  return sys_like_chara(
    id,
    0,
    -get_random_value(
      100,
      (200 +
        8 * (era.get(`love:${id}`) - 75) +
        100 * era.get(`talent:${id}:病娇`)) /
        (1 + (rape > 0)),
    ),
  );
};

/**
 * @param {number} cid
 * @param {HookArg} hook
 * @param {any} extra
 */
module.exports = async (cid, hook, extra) => {
  if (handlers[hook.hook]) {
    if (
      hook.hook > ero_hooks.ACTION_START &&
      hook.hook < ero_hooks.ACTION_END
    ) {
      extra.check = Math.min(100, extra.check || 0);
      const { attacker, defender } =
        (ero_tagged_hooks[hook.hook] || default_tags).condition !==
          condition_type.active || extra.attacker !== undefined
          ? extra
          : era.get('tflag:主导权')
            ? { attacker: cid, defender: 0 }
            : { attacker: 0, defender: cid };
      return await handlers[hook.hook](attacker, defender, hook, extra);
    } else {
      return await handlers[hook.hook](cid, hook, extra);
    }
  }
};
