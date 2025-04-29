const { get } = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const edu_result = require('#/event/edu/edu-result');
const script_dict = require('#/event/script-dict.json');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');
const { first_child_id } = require('#/data/other-const');

/** @type {Record<string,CustomizedEdu>} */
const cons_dict = {};
/** @type {Record<string,CustomizedEdu>} */
const obj_dict = {};

const current = new Date().getTime();

cons_dict[0] = require('#/event/edu/edu-0');
cons_dict[3] = require('#/event/edu/edu-3');
cons_dict[7] = require('#/event/edu/edu-7');
cons_dict[13] = require('#/event/edu/edu-13');
cons_dict[17] = require('#/event/edu/edu-17');
cons_dict[19] = require('#/event/edu/edu-19');
cons_dict[24] = require('#/event/edu/edu-24');
cons_dict[25] = require('#/event/edu/edu-25');
cons_dict[30] = require('#/event/edu/edu-30');
cons_dict[32] = require('#/event/edu/edu-32');
cons_dict[33] = require('#/event/edu/edu-33');
cons_dict[37] = require('#/event/edu/edu-37');
cons_dict[49] = require('#/event/edu/edu-49');
cons_dict[52] = require('#/event/edu/edu-52');
cons_dict[56] = require('#/event/edu/edu-56');
cons_dict[60] = require('#/event/edu/edu-60');
cons_dict[67] = require('#/event/edu/edu-67');
cons_dict[68] = require('#/event/edu/edu-68');
cons_dict[71] = require('#/event/edu/edu-71');
cons_dict[85] = require('#/event/edu/edu-85');
cons_dict[100] = require('#/event/edu/edu-100');
cons_dict[201] = require('#/event/edu/edu-201');
cons_dict[205] = require('#/event/edu/edu-205');
cons_dict[301] = require('#/event/edu/edu-301');
cons_dict[302] = require('#/event/edu/edu-302');
cons_dict[303] = require('#/event/edu/edu-303');
cons_dict[304] = require('#/event/edu/edu-304');
cons_dict[306] = require('#/event/edu/edu-306');
cons_dict[308] = require('#/event/edu/edu-308');
cons_dict[343] = require('#/event/edu/edu-343');
cons_dict[400] = require('#/event/edu/edu-400');

console.log(
  '[edu-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number} chara_id
 * @returns {CustomizedEdu}
 */
function get_custom_edu(chara_id) {
  if (!obj_dict[chara_id]) {
    const { n: script_name } =
      chara_id >= first_child_id
        ? { n: get(`callname:${chara_id}:-2`) }
        : { n: chara_id };
    obj_dict[chara_id] = new (cons_dict[
      script_dict[script_name] || script_name
    ] || CustomizedEdu)(chara_id);
  }
  return obj_dict[chara_id].get_this();
}

module.exports = {
  get_custom_edu,
  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {*} [extra_flag]
   * @param {EventObject} [event_object]
   */
  async run_custom_edu(chara_id, stage, extra_flag, event_object) {
    const hook = new HookArg(stage),
      _extra = extra_flag || {};
    let ret = await get_custom_edu(chara_id)
      .get_this()
      .run(hook, _extra, event_object);
    if (!hook.override) {
      ret = (await edu_result(chara_id, hook, _extra)) || ret;
    }
    await punish_by_yandere(chara_id, stage);
    return ret;
  },
};
