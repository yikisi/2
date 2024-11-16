const { readdirSync, writeFileSync } = require('fs');

const love_scripts = readdirSync('../../ere/event/love')
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

let output = `const { get } = require('#/era-electron');

const common_love = require('#/event/love/love-common');
const script_dict = require('#/event/script-dict.json');

const { first_child_id } = require('#/data/other-const');

/** @type {Record<string,function>} */
const love_dict = {};

const current = new Date().getTime();

`;

love_scripts.forEach(
  (e) =>
    (output += `love_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/love/love-${e}');\n`),
);

output += `
console.log(
  '[love-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /** @param {number} chara_id */
  get_custom_love(chara_id) {
    const script_name =
      chara_id >= first_child_id ? get(\`callname:\${chara_id}:-2\`) : chara_id;
    return love_dict[script_dict[script_name] || script_name] || common_love;
  },
};
`;

writeFileSync('../../ere/event/love/love-factory.js', output);

console.log(
  `[generate-love-factory.js] registers ${love_scripts.length} love scripts`,
);
