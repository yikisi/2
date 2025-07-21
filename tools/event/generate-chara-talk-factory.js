const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const relative_path = '../../ere/utils/chara-talk-extended';

const scripts = readdirSync(join(__dirname, relative_path))
  .map((e) => e.substring(11).replace(/\.js$/, ''))
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

let output = `const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const cons_dict = {};

/** @type {Record<string,CharaTalk>} */
const obj_dict = {};

const current = new Date().getTime();

`;

scripts.forEach(
  (e) =>
    (output += `cons_dict[${e}] = require('#/utils/chara-talk-extended/chara-talk-${e}');\n`),
);

output += `
console.log(
  '[chara-talk-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} id
   * @param {string} [color]
   * @returns {CharaTalk}
   */
  get_chara_talk(id, color) {
    if (id === 0) {
      return CharaTalk.me;
    }
    CharaTalk.init_chara(id);
    if (!color && obj_dict[id] !== undefined) {
      return obj_dict[id];
    }
    if (cons_dict[id] !== undefined) {
      return (obj_dict[id] = new cons_dict[id](id, color));
    }
    return (obj_dict[id] = new CharaTalk(id, color));
  },
  say_by_passer_by: CharaTalk.say_by_passer_by,
  say_by_passer_by_and_wait: CharaTalk.say_by_passer_by_and_wait,
  get uma_sex_title() {
    return era.get('flag:角色性别') === 1 ? '马郎' : '马娘';
  },
};
`;

writeFileSync(join(__dirname, '../../ere/utils/chara-talk-factory.js'), output);

console.log(
  `[generate-chara-talk-factory.js] registers ${scripts.length} chara talk constructors`,
);
