const { execSync } = require('child_process');
const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const init_scripts = readdirSync('../../ere/event/init')
  .filter(
    (e) =>
      e.startsWith('init') && e.endsWith('.js') && !e.endsWith('factory.js'),
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

let output = `const cons_dict = {};

const current = new Date().getTime();

`;

init_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/init/init-${e}');\n`),
);

output += `
console.log(
  '[init-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} chara_id
   * @returns {function(function(number,number?),boolean?)}
   */
  get_custom_init(chara_id) {
    if (cons_dict[chara_id]) {
      return new cons_dict[chara_id]().init;
    }
    return ()=>{};
  },
};
`;

writeFileSync('../../ere/event/init/init-factory.js', output);

console.log(
  `[generate-init-factory.js] registers ${init_scripts.length} init scripts`,
);
