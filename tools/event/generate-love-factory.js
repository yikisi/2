const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const love_scripts = readdirSync(join(__dirname, '../../ere/event/love'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js'),
  )
  .map((e) => e.substring(5).replace(/\.js$/, ''))
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

let output = `const CustomizedLove = require('#/event/love/love-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const CommonKojoFactory = require('#/event/factory-common');

/** @type {Record<string,CustomizedLove>} */
const cons_dict = {};

const current = new Date().getTime();

`;

love_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/love/love-${e}');\n`),
);

output += `
console.log(
  'constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class LoveFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedLove);
  }

  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {*} extra_flag
   * @param {EventObject} event_object
   */
  async run_custom_love(chara_id, stage, extra_flag, event_object) {
    const ret = await this.get(chara_id).run(stage, extra_flag, event_object);
    await punish_by_yandere(chara_id, stage);
    return ret;
  }
}

const love_factory = new LoveFactory();
love_factory.run_custom_love = love_factory.run_custom_love.bind(love_factory);

module.exports = love_factory;
`;

writeFileSync(join(__dirname, '../../ere/event/love/love-factory.js'), output);

console.log(
  `[generate-love-factory.js] registers ${love_scripts.length} love scripts`,
);
