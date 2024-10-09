const { execSync } = require('child_process');
const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const base_scripts = readdirSync('../../ere/event/basement')
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

let output = `const { get } = require('#/era-electron');

const common_basement = require('#/event/basement/basement-common');
const script_dict = require('#/event/script-dict.json');

const { first_child_id } = require('#/data/other-const');

const cons_dict = {},
  obj_dict = {};

const current = new Date().getTime();

`;

base_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/basement/basement-${e}');\n`),
);

output += `
console.log(
  '[basement-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} chara_id
   * @returns {CustomizedBase}
   */
  get_custom_basement(chara_id) {
    if (obj_dict[chara_id]) {
      return obj_dict[chara_id];
    }
    const script_name =
        chara_id >= first_child_id ? get(\`callname:$\{chara_id}:-2\`) : chara_id,
      class_cons =
        cons_dict[script_dict[script_name] || script_name] || common_basement;
    return (obj_dict[chara_id] = new class_cons(chara_id));
  },
};
`;

writeFileSync('../../ere/event/basement/basement-factory.js', output);

execSync('npx eslint --fix ./ere/event/basement/basement-factory.js', {
  cwd: join(process.cwd(), '../..'),
});

console.log(
  `[generate-basement-factory.js] registers ${base_scripts.length} basement scripts`,
);
