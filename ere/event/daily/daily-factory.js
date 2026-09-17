const DailyChild = require('#/event/daily/daily-child');
const CustomizedDaily = require('#/event/daily/daily-common');
const daily_result = require('#/event/daily/daily-result');
const CommonKojoFactory = require('#/event/factory-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');

/** @type {Record<string,CustomizedDaily>} */
const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[0] = require('#/event/daily/daily-0');
cons_dict[2] = require('#/event/daily/daily-2');
cons_dict[3] = require('#/event/daily/daily-3');
cons_dict[4] = require('#/event/daily/daily-4');
cons_dict[6] = require('#/event/daily/daily-6');
cons_dict[7] = require('#/event/daily/daily-7');
cons_dict[13] = require('#/event/daily/daily-13');
cons_dict[17] = require('#/event/daily/daily-17');
cons_dict[19] = require('#/event/daily/daily-19');
cons_dict[20] = require('#/event/daily/daily-20');
cons_dict[21] = require('#/event/daily/daily-21');
cons_dict[24] = require('#/event/daily/daily-24');
cons_dict[25] = require('#/event/daily/daily-25');
cons_dict[30] = require('#/event/daily/daily-30');
cons_dict[32] = require('#/event/daily/daily-32');
cons_dict[35] = require('#/event/daily/daily-35');
cons_dict[37] = require('#/event/daily/daily-37');
cons_dict[44] = require('#/event/daily/daily-44');
cons_dict[46] = require('#/event/daily/daily-46');
cons_dict[50] = require('#/event/daily/daily-50');
cons_dict[52] = require('#/event/daily/daily-52');
cons_dict[56] = require('#/event/daily/daily-56');
cons_dict[60] = require('#/event/daily/daily-60');
cons_dict[61] = require('#/event/daily/daily-61');
cons_dict[64] = require('#/event/daily/daily-64');
cons_dict[68] = require('#/event/daily/daily-68');
cons_dict[71] = require('#/event/daily/daily-71');
cons_dict[74] = require('#/event/daily/daily-74');
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
// GENERATED END

console.log(
  '角色日常口上注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class DailyFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedDaily, DailyChild);
  }

  /**
   * @param {number} id
   * @returns {CustomizedDaily}
   */
  get_custom_daily(id) {
    return this.get(id);
  }

  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {*} [extra_flag]
   * @param {EventObject} [event_object]
   */
  async run_custom_daily(chara_id, stage, extra_flag, event_object) {
    const hook = new HookArg(stage),
      _extra = extra_flag || {};
    let ret = await this.get(chara_id).run(hook, _extra, event_object);
    if (!hook.override) {
      ret = (await daily_result(chara_id, hook, _extra)) || ret;
    }
    await punish_by_yandere(chara_id, stage);
    return ret;
  }
}

const daily_factory = new DailyFactory();
daily_factory.get_custom_daily =
  daily_factory.get_custom_daily.bind(daily_factory);
daily_factory.run_custom_daily =
  daily_factory.run_custom_daily.bind(daily_factory);

module.exports = daily_factory;
