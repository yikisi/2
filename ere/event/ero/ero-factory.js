const { get } = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const update_orgasms = require('#/system/ero/sub-calc-ero-orgasm/update-orgasms');
const sys_calc_orgasm = require('#/system/ero/sys-calc-orgasm');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const ero_0_script = require('#/event/ero/ero-0');
const EroChild = require('#/event/ero/ero-child');
const CustomizedEro = require('#/event/ero/ero-common');
const ero_result = require('#/event/ero/ero-result');
const script_dict = require('#/event/script-dict.json');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_action_names,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');
const HookArg = require('#/data/event/hook-arg');
const { first_child_id } = require('#/data/other-const');

/** @type {Record<string,CustomizedEro>} */
const cons_dict = {};
/** @type {Record<string,CustomizedEro>} */
const obj_dict = {};

let current = new Date().getTime();

cons_dict[3] = require('#/event/ero/ero-3');
cons_dict[7] = require('#/event/ero/ero-7');
cons_dict[9] = require('#/event/ero/ero-9');
cons_dict[25] = require('#/event/ero/ero-25');
cons_dict[32] = require('#/event/ero/ero-32');
cons_dict[52] = require('#/event/ero/ero-52');
cons_dict[56] = require('#/event/ero/ero-56');
cons_dict[64] = require('#/event/ero/ero-64');
cons_dict[100] = require('#/event/ero/ero-100');
cons_dict[205] = require('#/event/ero/ero-205');
cons_dict[340] = require('#/event/ero/ero-340');
cons_dict[341] = require('#/event/ero/ero-341');
cons_dict[342] = require('#/event/ero/ero-342');

CustomizedEro.me = obj_dict[0] = new ero_0_script(0);

console.log(
  '[ero-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/** @type {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} */
const handlers = {};
/** @type {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} */
const sleeping_handlers = {};

current = new Date().getTime();

[
  require('#/event/ero/common-lines/action-descriptions/desc-communications'),
  require('#/event/ero/common-lines/action-descriptions/desc-pettings'),
  require('#/event/ero/common-lines/action-descriptions/desc-fuckings'),
  require('#/event/ero/common-lines/action-descriptions/desc-orgy-fuckings'),
  require('#/event/ero/common-lines/action-descriptions/desc-orgy-pettings'),
  require('#/event/ero/common-lines/action-descriptions/desc-sm'),
  require('#/event/ero/common-lines/action-descriptions/desc-items'),
].forEach((f) => f(handlers));

[
  require('#/event/ero/common-lines/action-descriptions/desc-sleeping-communications'),
  require('#/event/ero/common-lines/action-descriptions/desc-sleeping-communications'),
  require('#/event/ero/common-lines/action-descriptions/desc-sleeping-fuckings'),
].forEach((f) => f(sleeping_handlers));

console.log(
  '[ero-factory.js] ero common description handlers init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number} chara_id
 * @returns {CustomizedEro}
 */
function get_custom_ero(chara_id) {
  if (!obj_dict[chara_id]) {
    const { n: script_name, c: cons } =
      chara_id >= first_child_id
        ? { n: get(`callname:${chara_id}:-2`), c: EroChild }
        : { n: chara_id, c: CustomizedEro };
    obj_dict[chara_id] = new (cons_dict[
      script_dict[script_name] || script_name
    ] || cons)(chara_id);
  }
  return obj_dict[chara_id];
}

/**
 * @param {number} chara_id
 * @param {number} action
 * @param [extra_flag]
 */
async function run_custom_ero(chara_id, action, extra_flag) {
  const handler = get_custom_ero(chara_id),
    hook = new HookArg(action),
    _extra = extra_flag || {};
  let ret;
  if (_extra.shown !== false) {
    if (ero_action_names[action] !== undefined) {
      const master = get('tflag:主导权'),
        { attacker: _a, defender: _d } =
          (ero_tagged_hooks[action] || default_tags).condition ===
          condition_type.active
            ? master > 0
              ? { attacker: chara_id, defender: 0 }
              : { attacker: 0, defender: chara_id }
            : extra_flag;
      if (_a === master) {
        hook.arg = get('tflag:前回行动') !== hook.hook;
      } else if (_a === get('tflag:前回对手')) {
        hook.arg = get('tflag:对手行动') !== hook.hook;
      } else {
        hook.arg = true;
      }
      const attacker = get_chara_talk(_a),
        defender = get_chara_talk(_d);
      if (!sys_check_awake(_d)) {
        await sleeping_handlers[action](attacker, defender, hook, extra_flag);
        ret = await handler.sleep.run(attacker, defender, hook, extra_flag);
      } else if (get('tflag:强奸') >= 0) {
        await handlers[action](attacker, defender, hook, extra_flag);
        ret = await handler.rape.run(attacker, defender, hook, extra_flag);
      } else {
        await handlers[action](attacker, defender, hook, extra_flag);
        ret = await handler.normal.run(attacker, defender, hook, extra_flag);
      }
    } else {
      ret = await handler.run(hook, _extra);
    }
  }
  if (!hook.override) {
    ret = (await ero_result(chara_id, hook, _extra)) || ret;
  }
  return ret;
}

CustomizedEro.run_custom_ero = run_custom_ero;
sys_calc_orgasm.init(get_custom_ero, run_custom_ero);
update_orgasms.init(run_custom_ero);
update_marks.init(get_custom_ero);

module.exports = {
  get_custom_ero,
  run_custom_ero,
};
