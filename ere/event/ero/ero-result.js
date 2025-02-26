const era = require('#/era-electron');

const { add_juel } = require('#/system/ero/sys-calc-juel');
const { sys_change_pressure } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_punish_unfaithful,
} = require('#/system/sys-calc-chara-others');

const print_ero_gif = require('#/event/ero/snippets/print-ero-gif');

const { get_random_value } = require('#/utils/value-utils');

const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part_names } = require('#/data/ero/part-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const BasementOwners = require('#/data/event/basement-owners');
const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_action_names,
  ero_hooks,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { location_enum } = require('#/data/locations');

const current = new Date().getTime();

/** @type {Record<string,function>} */
const handlers = {};

[
  require('#/event/ero/ero-result-handlers/communications'),
  require('#/event/ero/ero-result-handlers/making-outs-1'),
  require('#/event/ero/ero-result-handlers/making-outs-2'),
  require('#/event/ero/ero-result-handlers/fucking'),
  require('#/event/ero/ero-result-handlers/sm'),
  require('#/event/ero/ero-result-handlers/orgy'),
  require('#/event/ero/ero-result-handlers/items'),
].forEach((f) => f(handlers));

console.log(
  '[ero-result.js] ero result handlers init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number} chara_id
 * @param _
 * @param {{part:number}} extra_flag
 */
handlers[ero_hooks.become_lubrication] = (chara_id, _, extra_flag) => {
  const ratio =
    1 -
    0.5 * era.get(`talent:${chara_id}:洁净重视`) -
    0.5 * era.get(`talent:${chara_id}:工口意愿`);
  add_juel(chara_id, '反感', base_emotion_juel * ratio);
  if (!era.get(`exp:${chara_id}:${part_names[extra_flag.part]}`)) {
    add_juel(chara_id, '恐惧', (base_emotion_juel * ratio) / 2);
  }
};

handlers[ero_hooks.prison] = (chara_id) => {
  const life_marks = LifeEventMarks.get_marks(chara_id);
  if (era.get(`talent:${chara_id}:病娇`) === 1) {
    era.set(`talent:${chara_id}:病娇`, 2);
    life_marks.yandere = get_random_value(
      2,
      (era.get('flag:极端行为') * 2 * era.get(`love:${chara_id}`) -
        era.get(`relation:${chara_id}:0`)) /
        100,
    );
  }
  era.set(`status:${chara_id}:爱意克制`, 0);
  era.set('flag:当前位置', location_enum.basement);
  new BasementOwners().push(chara_id);
};

/**
 * @param _
 * @param __
 * @param {{father_id:number,mother_id:number,shown:boolean}} extra_flag
 */
handlers[ero_hooks.cum_in_womb] = async (_, __, extra_flag) => {
  if (extra_flag.shown) {
    const last_action = era.get('tflag:前回行动'),
      master = era.get('tflag:主导权'),
      lover = era.get('tflag:前回对手');
    if (
      (master === extra_flag.mother_id &&
        (last_action === ero_hooks.cowgirl ||
          last_action === ero_hooks.stimulate_glans_by_virgin)) ||
      (lover === extra_flag.mother_id &&
        (last_action === ero_hooks.ask_cowgirl ||
          last_action === ero_hooks.ask_stimulate_glans_by_virgin ||
          last_action === ero_hooks.sitting ||
          last_action === ero_hooks.suspended_congress))
    ) {
      print_ero_gif('女上位射精', extra_flag.shown);
    }
  }
};

/**
 * @param _
 * @param __
 * @param {{father_id:number,mother_id:number}} extra_flag
 */
handlers[ero_hooks.report_pregnant_between_weeks] = async (
  _,
  __,
  extra_flag,
) => {
  const { father_id, mother_id } = extra_flag,
    love = era.get(`love:${mother_id || father_id}`),
    unexpected_pregnant =
      LifeEventMarks.get_marks(mother_id).unexpected_pregnant;
  era.println();
  let wait_flag;
  if (mother_id) {
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
 * @param {number} chara_id
 * @param _
 * @param {number[]} partners
 * @returns {Promise<boolean>}
 */
handlers[ero_hooks.after_betrayed] = async (chara_id, _, { partners }) => {
  const rape = era.get('tflag:强奸');
  era.add(`exp:${chara_id}:被绿次数`, 1);
  if (era.get(`talent:${chara_id}:绿帽癖`)) {
    sys_change_pressure(
      chara_id,
      -get_random_value(500, 1000) * (1 + (rape > 0)),
    );
    let wait_flag = sys_like_chara(chara_id, 0, get_random_value(10, 20));
    return partners.reduce(
      (p, c) =>
        sys_like_chara(
          chara_id,
          c,
          get_random_value(20, 40) * (1 + (rape > 0)),
        ) || p,
      wait_flag,
    );
  }
  sys_change_pressure(
    chara_id,
    get_random_value(2000, 4000) / (1 + (rape > 0)),
  );
  return sys_like_chara(
    chara_id,
    0,
    -get_random_value(
      100,
      (200 +
        8 * (era.get(`love:${chara_id}`) - 75) +
        100 * era.get(`talent:${chara_id}:病娇`)) /
        (1 + (rape > 0)),
    ),
  );
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {any} extra_flag
 */
module.exports = async (chara_id, hook, extra_flag) => {
  if (handlers[hook.hook]) {
    if (ero_action_names[hook.hook]) {
      extra_flag.check = Math.min(100, extra_flag.check || 0);
      const { attacker, defender } =
        (ero_tagged_hooks[hook.hook] || default_tags).condition !==
          condition_type.active || extra_flag.attacker !== undefined
          ? extra_flag
          : era.get('tflag:主导权')
            ? { attacker: chara_id, defender: 0 }
            : { attacker: 0, defender: chara_id };
      return await handlers[hook.hook](attacker, defender, hook, extra_flag);
    } else {
      return await handlers[hook.hook](chara_id, hook, extra_flag);
    }
  }
};
