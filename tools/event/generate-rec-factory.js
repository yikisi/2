const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const rec_scripts = readdirSync(join(__dirname, '../../ere/event/rec'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js'),
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

const CommonKojoFactory = require('#/event/factory-common');
const CustomizedRec = require('#/event/rec/rec-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const recruit_flags = require('#/data/event/recruit-flags');

/** @type {Record<string,CustomizedRecruit>} */
const cons_dict = {};

const current = new Date().getTime();

`;

rec_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/rec/rec-${e}');\n`),
);

output += `
console.log(
  'constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class RecFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedRec);
  }

  /**
   * @param {number} chara_id
   * @returns {boolean}
   */
  check_rec_script(chara_id) {
    return this.check(chara_id);
  }

  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param [_]
   * @param {EventObject} [event_object]
   * @returns {Promise<boolean|void>}
   */
  run_custom_rec(chara_id, stage, _, event_object) {
    const kojo = this.get(chara_id);
    return kojo.recruit(stage, event_object).then((r) => {
      if (get(\`cflag:\${chara_id}:招募状态\`) === recruit_flags.yes) {
        return kojo
          .recruit_result()
          .then(() => punish_by_yandere(chara_id, stage))
          .then(() => r);
      }
      return r;
    });
  }
}

const rec_factory = new RecFactory();
rec_factory.check_rec_script = rec_factory.check_rec_script.bind(rec_factory);
rec_factory.run_custom_rec = rec_factory.run_custom_rec.bind(rec_factory);

module.exports = rec_factory;
`;

writeFileSync(join(__dirname, '../../ere/event/rec/rec-factory.js'), output);

console.log(
  `[generate-rec-factory.js] registers ${rec_scripts.length} recruit scripts`,
);
