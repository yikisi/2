const { readdirSync, writeFileSync } = require('fs');

const relative_path = '../../ere/utils/chara-talk-extended';

const scripts = readdirSync(relative_path)
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

let output = `const CharaTalk = require('#/utils/chara-talk');

const cons_dict = {};

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
   * @param {number} chara_id
   * @param {string} [color]
   * @returns {CharaTalk}
   */
  get_chara_talk(chara_id, color) {
    if (!chara_id) {
      return CharaTalk.me;
    }
    if (cons_dict[chara_id]) {
      return new cons_dict[chara_id](chara_id, color);
    }
    return new CharaTalk(chara_id, color);
  },
  say_by_passer_by: CharaTalk.say_by_passer_by,
  say_by_passer_by_and_wait: CharaTalk.say_by_passer_by_and_wait,
};`;

writeFileSync('../../ere/utils/chara-talk-factory.js', output);

console.log(
  `[generate-chara-talk-factory.js] registers ${scripts.length} chara talk constructors`,
);
