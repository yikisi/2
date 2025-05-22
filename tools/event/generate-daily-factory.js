const { readdirSync, writeFileSync } = require('fs');

const base_scripts = readdirSync('../../ere/event/daily')
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
      !e.endsWith('result.js') &&
      !e.endsWith('child.js') &&
      !e.endsWith('god.js'),
  )
  .map((e) => e.substring(6).replace(/\.js$/, ''))
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

let output = `const DailyChild = require('#/event/daily/daily-child');
const CustomizedDaily = require('#/event/daily/daily-common');
const daily_result = require('#/event/daily/daily-result');
const CommonKojoFactory = require('#/event/factory-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');

/** @type {Record<string,CustomizedDaily>} */
const cons_dict = {};

const current = new Date().getTime();

`;

base_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/daily/daily-${e}');\n`),
);

output += `cons_dict[340] =
  cons_dict[341] =
  cons_dict[342] =
    require('#/event/daily/daily-god');

console.log(
  '[daily-factory.js] constructor dictionary init done!',
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
`;

writeFileSync('../../ere/event/daily/daily-factory.js', output);

console.log(
  `[generate-daily-factory.js] registers ${base_scripts.length} daily scripts`,
);
