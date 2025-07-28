const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const scripts = readdirSync(join(__dirname, '../../ere/event/ero'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
      !e.endsWith('result.js') &&
      !e.endsWith('child.js'),
  )
  .map((e) => e.substring(4).replace(/\.js$/, ''))
  .sort((a, b) => {
    const num_a = Number(a),
      num_b = Number(b),
      nan_a = isNaN(num_a),
      nan_b = isNaN(num_b);
    if (nan_a || nan_b) {
      if (nan_a && nan_b) {
        return a > b ? 1 : -1;
      } else if (nan_a) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return num_a - num_b;
    }
  });

let output = `const { get } = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const update_orgasms = require('#/system/ero/sub-calc-ero-orgasm/update-orgasms');
const sys_calc_orgasm = require('#/system/ero/sys-calc-orgasm');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const EroChild = require('#/event/ero/ero-child');
const CustomizedEro = require('#/event/ero/ero-common');
const ero_result = require('#/event/ero/ero-result');
const CommonKojoFactory = require('#/event/factory-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { condition_type, default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_action_names,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');
const HookArg = require('#/data/event/hook-arg');

/** @type {Record<string,CustomizedEro>} */
const cons_dict = {};

let current = new Date().getTime();

`;

scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/ero/ero-${e}');\n`),
);

output += `
console.log(
  '[ero-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/** @type {Record<string,Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>>} */
const describers = { c: {}, r: {}, s: {} };

current = new Date().getTime();

[
  require('#/event/ero/common/action-descriptions/normal-communications'),
  require('#/event/ero/common/action-descriptions/normal-making-outs'),
  require('#/event/ero/common/action-descriptions/normal-fucking'),
  require('#/event/ero/common/action-descriptions/normal-orgy'),
  require('#/event/ero/common/action-descriptions/normal-sm'),
  require('#/event/ero/common/action-descriptions/normal-items'),
].forEach((f) => f(describers.c));

[
  require('#/event/ero/common/action-descriptions/sleep-communications'),
  require('#/event/ero/common/action-descriptions/sleep-making-outs'),
  require('#/event/ero/common/action-descriptions/sleep-fucking'),
].forEach((f) => f(describers.s));

[
  require('#/event/ero/common/action-descriptions/rape-communications'),
  require('#/event/ero/common/action-descriptions/rape-making-outs'),
].forEach((f) => f(describers.r));

console.log(
  '[ero-factory.js] ero common description handlers init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class EroFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedEro, EroChild);
  }

  /**
   * @param {number} cid
   * @returns {CustomizedEro}
   */
  get_custom_ero(cid) {
    return this.get(cid);
  }

  /**
   * @param {number} cid
   * @param {number} action
   * @param [extra_flag={}]
   */
  async run_custom_ero(cid, action, extra_flag = {}) {
    const handler = this.get(cid);
    const hook = new HookArg(action);
    let ret;
    if (extra_flag.shown !== false) {
      if (ero_action_names[action] !== undefined) {
        const master = get('tflag:主导权'),
          { attacker: _a, defender: _d } =
            (ero_tagged_hooks[action] || default_tags).condition ===
            condition_type.active
              ? master > 0
                ? { attacker: cid, defender: 0 }
                : { attacker: 0, defender: cid }
              : extra_flag;
        if (_a === master) {
          hook.arg = get('tflag:前回行动') !== hook.hook;
        } else if (_a === get('tflag:前回对手')) {
          hook.arg = get('tflag:对手行动') !== hook.hook;
        } else {
          hook.arg = true;
        }
        const attacker = get_chara_talk(_a);
        const defender = get_chara_talk(_d);
        const raper = get('tflag:强奸');
        if (!sys_check_awake(_d)) {
          await (describers.s[action] || describers.c[action])(
            attacker,
            defender,
            hook,
            extra_flag,
          );
          ret = await handler.sleep.run(attacker, defender, hook, extra_flag);
        } else if (raper >= 0) {
          if (raper === _a) {
            await (describers.r[action] || describers.c[action])(
              attacker,
              defender,
              hook,
              extra_flag,
            );
          } else {
            await describers.c[action](attacker, defender, hook, extra_flag);
          }
          ret = await handler.rape.run(attacker, defender, hook, extra_flag);
        } else {
          await describers.c[action](attacker, defender, hook, extra_flag);
          ret = await handler.normal.run(attacker, defender, hook, extra_flag);
        }
      } else {
        ret = await handler.run(hook, extra_flag);
      }
    }
    if (!hook.override) {
      ret = (await ero_result(cid, hook, extra_flag)) || ret;
    }
    return ret;
  }
}

const ero_factory = new EroFactory();
CustomizedEro.get_custom_ero = ero_factory.get_custom_ero =
  ero_factory.get_custom_ero.bind(ero_factory);
CustomizedEro.run_custom_ero = ero_factory.run_custom_ero =
  ero_factory.run_custom_ero.bind(ero_factory);

sys_calc_orgasm.init(ero_factory.get_custom_ero, ero_factory.run_custom_ero);
update_orgasms.init(ero_factory.run_custom_ero);
update_marks.init(ero_factory.get_custom_ero);

module.exports = ero_factory;
`;

writeFileSync(join(__dirname, '../../ere/event/ero/ero-factory.js'), output);

console.log(
  `[generate-ero-factory.js] registers ${scripts.length} ero scripts`,
);
