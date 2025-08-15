const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const mec_scripts = readdirSync(join(__dirname, '../../ere/event/mec'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
      !e.endsWith('god.js') &&
      !e.endsWith('child.js') &&
      !e.endsWith('npc.js'),
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

let output = `const MecChild = require('#/event/mec/mec-child');
const CustomizedMec = require('#/event/mec/mec-common');

const CommonKojoFactory = require('#/event/factory-common');

const cons_dict = {};

const current = new Date().getTime();

`;

mec_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/mec/mec-${e}');\n`),
);

output += `cons_dict[201] =
  cons_dict[202] =
  cons_dict[203] =
    require('#/event/mec/mec-uma-npc');
cons_dict[346] =
  cons_dict[347] =
  cons_dict[348] =
    require('#/event/mec/mec-npc');

console.log(
  '角色机制脚本注册完毕！',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class MechanismFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedMec, MecChild);
  }

  /**
   * @param {number} id
   * @returns {CustomizedMec}
   */
  get_custom_mec(id) {
    return this.get(id);
  }
}

const mec_factory = new MechanismFactory();

CustomizedMec.get_custom_mec = mec_factory.get_custom_mec =
  mec_factory.get_custom_mec.bind(mec_factory);

module.exports = mec_factory;
`;

writeFileSync(join(__dirname, '../../ere/event/mec/mec-factory.js'), output);

console.log(
  `[generate-mec-factory.js] registers ${mec_scripts.length} mechanism scripts`,
);
