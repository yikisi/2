const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const relative_path = join(__dirname, '../../ere/event/check');

const check_scripts = readdirSync(relative_path)
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
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

let output = `const CustomizedCheck = require('#/event/check/check-common');
const CommonKojoFactory = require('#/event/factory-common');

const cons_dict = {};

const current = new Date().getTime();

`;

check_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/check/check-${e}');\n`),
);

output += `cons_dict[340] =
  cons_dict[341] =
  cons_dict[342] =
    require('#/event/check/check-god');

console.log(
  '角色检查脚本注册完毕！',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class CheckFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedCheck);
  }

  /**
   * @param {number} id
   * @returns {CustomizedCheck}
   */
  get_custom_check(id) {
    return this.get(id);
  }
}

const check_factory = new CheckFactory();
check_factory.get_custom_check =
  check_factory.get_custom_check.bind(check_factory);

module.exports = check_factory;
`;

writeFileSync(join(relative_path, 'check-factory.js'), output);

console.log(
  `[generate-check-factory.js] registers ${check_scripts.length} check scripts`,
);
