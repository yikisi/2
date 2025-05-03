const { get } = require('#/era-electron');

const DailyChild = require('#/event/daily/daily-child');
const CustomizedDaily = require('#/event/daily/daily-common');
const daily_result = require('#/event/daily/daily-result');
const script_dict = require('#/event/script-dict.json');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');
const { first_child_id } = require('#/data/other-const');

/** @type {Record<string,CustomizedDaily>} */
const cons_dict = {};
/** @type {Record<string,CustomizedDaily>} */
const obj_dict = {};

const current = new Date().getTime();

cons_dict[0] = require('#/event/daily/daily-0');
cons_dict[3] = require('#/event/daily/daily-3');
cons_dict[7] = require('#/event/daily/daily-7');
cons_dict[13] = require('#/event/daily/daily-13');
cons_dict[17] = require('#/event/daily/daily-17');
cons_dict[19] = require('#/event/daily/daily-19');
cons_dict[24] = require('#/event/daily/daily-24');
cons_dict[25] = require('#/event/daily/daily-25');
cons_dict[30] = require('#/event/daily/daily-30');
cons_dict[32] = require('#/event/daily/daily-32');
cons_dict[35] = require('#/event/daily/daily-35');
cons_dict[37] = require('#/event/daily/daily-37');
cons_dict[52] = require('#/event/daily/daily-52');
cons_dict[56] = require('#/event/daily/daily-56');
cons_dict[60] = require('#/event/daily/daily-60');
cons_dict[64] = require('#/event/daily/daily-64');
cons_dict[68] = require('#/event/daily/daily-68');
cons_dict[71] = require('#/event/daily/daily-71');
cons_dict[85] = require('#/event/daily/daily-85');
cons_dict[86] = require('#/event/daily/daily-86');
cons_dict[100] = require('#/event/daily/daily-100');
cons_dict[119] = require('#/event/daily/daily-119');
cons_dict[205] = require('#/event/daily/daily-205');
cons_dict[400] = require('#/event/daily/daily-400');
cons_dict['av-sister'] = require('#/event/daily/daily-av-sister');
cons_dict[340] =
  cons_dict[341] =
  cons_dict[342] =
    require('#/event/daily/daily-god');

console.log(
  '[daily-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number} chara_id
 * @returns {CustomizedDaily}
 */
function get_custom_daily(chara_id) {
  if (!obj_dict[chara_id]) {
    const { n: script_name, c: cons } =
      chara_id >= first_child_id
        ? { n: get(`callname:${chara_id}:-2`), c: DailyChild }
        : { n: chara_id, c: CustomizedDaily };
    obj_dict[chara_id] = new (cons_dict[
      script_dict[script_name] || script_name
    ] || cons)(chara_id);
  }
  return obj_dict[chara_id].get_this();
}

module.exports = {
  get_custom_daily,
  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {*} [extra_flag]
   * @param {EventObject} [event_object]
   */
  async run_custom_daily(chara_id, stage, extra_flag, event_object) {
    const hook = new HookArg(stage),
      _extra = extra_flag || {};
    let ret = await get_custom_daily(chara_id)
      .get_this()
      .run(hook, _extra, event_object);
    if (!hook.override) {
      ret = (await daily_result(chara_id, hook, _extra)) || ret;
    }
    await punish_by_yandere(chara_id, stage);
    return ret;
  },
};
