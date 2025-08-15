const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const base_scripts = readdirSync(join(__dirname, '../../ere/event/basement'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js'),
  )
  .map((e) => e.substring(9).replace(/\.js$/, ''))
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

let output = `const CustomizedBase = require('#/event/basement/basement-common');
const CommonKojoFactory = require('#/event/factory-common');

const cons_dict = {};

const current = new Date().getTime();

`;

base_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/basement/basement-${e}');\n`),
);

output += `
console.log(
  '角色地下室口上注册完毕！',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class BasementFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedBase);
  }

  /**
   * @param {number} id
   * @returns {CustomizedBase}
   */
  get_custom_basement(id) {
    return this.get(id);
  }
}

const basement_factory = new BasementFactory();
basement_factory.get_custom_basement =
  basement_factory.get_custom_basement.bind(basement_factory);

module.exports = basement_factory;
`;

writeFileSync(
  join(__dirname, '../../ere/event/basement/basement-factory.js'),
  output,
);

console.log(
  `[generate-basement-factory.js] registers ${base_scripts.length} basement scripts`,
);
