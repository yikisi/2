const era = require('#/era-electron');

const { add_juel } = require('#/system/ero/sys-calc-juel');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_punish_unfaithful,
} = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const print_ero_gif = require('#/event/ero/snippets/print-ero-gif');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_random_name = require('#/utils/naming');
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
  require('#/event/ero/ero-result-handlers/ero-result-communications'),
  require('#/event/ero/ero-result-handlers/ero-result-pettings-1'),
  require('#/event/ero/ero-result-handlers/ero-result-pettings-2'),
  require('#/event/ero/ero-result-handlers/ero-result-fuckings'),
  require('#/event/ero/ero-result-handlers/ero-result-sm'),
  require('#/event/ero/ero-result-handlers/ero-result-orgy'),
  require('#/event/ero/ero-result-handlers/ero-result-items'),
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
  const life_marks = new LifeEventMarks(chara_id);
  if (era.get(`talent:${chara_id}:病娇`) === 1) {
    era.set(`talent:${chara_id}:病娇`, 2);
    life_marks.yandere = get_random_value(
      2,
      (era.get('flag:极端行为') * 2 * era.get(`love:${chara_id}`) -
        era.get(`relation:${chara_id}:0`)) /
        100,
    );
  }
  life_marks.b_cd = get_random_value(4, 8);
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
      print_ero_gif('女上位射精');
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
    unexpected_pregnant = new LifeEventMarks(mother_id).unexpected_pregnant;
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
 * @param _
 * @param {HookArg} hook
 * @param {{child_id:number}} extra_flag
 */
handlers[ero_hooks.have_baby] = async (_, hook, extra_flag) => {
  const father_id = era.get(`cflag:${extra_flag.child_id}:父方角色`),
    mother_id = era.get(`cflag:${extra_flag.child_id}:母方角色`);
  let ret;
  // chara_id一定是母亲
  // 虽然不是很情愿，但是还是留一下吧，只有玩家是孩子父亲或者母亲的情况下才拥有命名决定权
  if ((mother_id && father_id) || hook.arg) {
    // 如果和玩家没关系，直接用母亲来命名
    ret = get_random_name(mother_id);
  } else if (era.get('flag:惩戒力度') >= 2) {
    // 性奴和孕袋没有命名权
    ret = get_random_name(mother_id || father_id);
  } else {
    if (
      await select_yes_or_no(
        '',
        `让${mother_id ? '母亲' : '父亲'}起名`,
        '亲自起名',
      )
    ) {
      ret = get_random_name(mother_id || father_id);
    } else {
      era.print('想给孩子起什么名字呢？');
      ret = await era.input();
    }
  }
  era.set(
    `callname:${extra_flag.child_id}:-2`,
    era.set(`callname:${extra_flag.child_id}:-1`, ret),
  );
  await era.printAndWait([
    get_chara_talk(mother_id).get_colored_name(),
    ' 的孩子起名为 ',
    get_chara_talk(extra_flag.child_id).get_colored_name(),
    '！',
  ]);
  return ret;
};

handlers[ero_hooks.shop_end] = async (chara_id, hook, extra_flag) => {
  if (!chara_id) {
    return;
  }
  const change =
    Math.abs(extra_flag.skill || 0) + Math.abs(extra_flag.talent || 0);
  switch (hook.arg) {
    case 1:
      sys_like_chara(
        chara_id,
        0,
        -10 * change * (1 + era.get(`mark:${chara_id}:反抗`)),
      );
      await add_juel_out_of_train(chara_id, '反感', 100 * change);
      break;
    case 2:
      sys_like_chara(
        chara_id,
        0,
        10 *
          change *
          (1 +
            era.get(`mark:${chara_id}:淫纹`) +
            era.get(`mark:${chara_id}:欢愉`)),
      );
      await add_juel_out_of_train(chara_id, '顺从', 100 * change);
      sys_change_lust(chara_id, 100);
      break;
    case 3:
      sys_like_chara(
        chara_id,
        0,
        (-10 * change) / (era.get(`mark:${chara_id}:同心`) - 1),
      );
      await add_juel_out_of_train(chara_id, '羞耻', 100 * change);
      sys_change_lust(chara_id, 50);
      sys_like_chara(chara_id, 0, -50);
      break;
    case 4:
      sys_like_chara(chara_id, 0, -50);
      await add_juel_out_of_train(
        chara_id,
        ['羞耻', '反感'],
        new Array(2).fill(100 * change),
      );
  }
  hook.arg && (await era.waitAnyKey());
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
