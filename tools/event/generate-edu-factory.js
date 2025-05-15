const { readdirSync, writeFileSync } = require('fs');

const base_scripts = readdirSync('../../ere/event/edu')
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

let output = `const CustomizedEdu = require('#/event/edu/edu-common');
const edu_result = require('#/event/edu/edu-result');
const CommonKojoFactory = require('#/event/factory-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');

/** @type {Record<string,CustomizedEdu>} */
const cons_dict = {};

const current = new Date().getTime();

`;

base_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/edu/edu-${e}');\n`),
);

output += `
console.log(
  '[edu-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class EduFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedEdu, CustomizedEdu);
  }

  /**
   * @param {number} id
   * @returns {CustomizedEdu}
   */
  get_custom_edu(id) {
    return this.get(id);
  }

  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {*} [extra_flag]
   * @param {EventObject} [event_object]
   */
  async run_custom_edu(chara_id, stage, extra_flag, event_object) {
    const hook = new HookArg(stage),
      _extra = extra_flag || {};
    let ret = await this.get(chara_id).run(hook, _extra, event_object);
    if (!hook.override) {
      ret = (await edu_result(chara_id, hook, _extra)) || ret;
    }
    await punish_by_yandere(chara_id, stage);
    return ret;
  }
}

const edu_factory = new EduFactory();
edu_factory.get_custom_edu = edu_factory.get_custom_edu.bind(edu_factory);
edu_factory.run_custom_edu = edu_factory.run_custom_edu.bind(edu_factory);

module.exports = edu_factory;
`;

writeFileSync('../../ere/event/edu/edu-factory.js', output);

console.log(
  `[generate-edu-factory.js] registers ${base_scripts.length} edu scripts`,
);
