const { get } = require('#/era-electron');

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
const { ero_hooks, ero_tagged_hooks } = require('#/data/event/ero-hooks');
const HookArg = require('#/data/event/hook-arg');

/** @type {Record<string,CustomizedEro>} */
const cons_dict = {};

let current = new Date().getTime();

// GENERATED START
cons_dict[0] = require('#/event/ero/ero-0');
cons_dict[2] = require('#/event/ero/ero-2');
cons_dict[3] = require('#/event/ero/ero-3');
cons_dict[7] = require('#/event/ero/ero-7');
cons_dict[9] = require('#/event/ero/ero-9');
cons_dict[13] = require('#/event/ero/ero-13');
cons_dict[20] = require('#/event/ero/ero-20');
cons_dict[21] = require('#/event/ero/ero-21');
cons_dict[25] = require('#/event/ero/ero-25');
cons_dict[32] = require('#/event/ero/ero-32');
cons_dict[36] = require('#/event/ero/ero-36');
cons_dict[44] = require('#/event/ero/ero-44');
cons_dict[52] = require('#/event/ero/ero-52');
cons_dict[56] = require('#/event/ero/ero-56');
cons_dict[61] = require('#/event/ero/ero-61');
cons_dict[64] = require('#/event/ero/ero-64');
cons_dict[74] = require('#/event/ero/ero-74');
cons_dict[94] = require('#/event/ero/ero-94');
cons_dict[100] = require('#/event/ero/ero-100');
cons_dict[117] = require('#/event/ero/ero-117');
cons_dict[134] = require('#/event/ero/ero-134');
cons_dict[205] = require('#/event/ero/ero-205');
cons_dict[340] = require('#/event/ero/ero-340');
cons_dict[341] = require('#/event/ero/ero-341');
cons_dict[342] = require('#/event/ero/ero-342');
// GENERATED END

console.log(
  '角色调教口上注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

current = new Date().getTime();

const describers = require('#/event/ero/common/act-describer');

console.log(
  '调教指令通用描述注册完毕!',
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
      if (action > ero_hooks.ACTION_START && action < ero_hooks.ACTION_END) {
        const master = get('tflag:主导权');
        const { attacker: _a, defender: _d } =
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
