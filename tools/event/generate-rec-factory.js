const { execSync } = require('child_process');
const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const rec_scripts = readdirSync('../../ere/event/rec')
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

const common_cons = require('#/event/rec/rec-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const recruit_flags = require('#/data/event/recruit-flags');

/** @type {Record<string,CustomizedRecruit>} */
const cons_dict = {};
/** @type {Record<string,CustomizedRecruit>} */
const obj_dict = {};

const current = new Date().getTime();

`;

rec_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/rec/rec-${e}');\n`),
);

output += `

console.log(
  '[rec-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} chara_id
   * @returns {boolean}
   */
  check_rec_script(chara_id) {
    return cons_dict[chara_id] !== undefined;
  },
  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {EventObject} [event_object]
   * @returns {Promise<boolean|void>}
   */
  get_custom_rec(chara_id, stage, event_object) {
    if (!obj_dict[chara_id]) {
      obj_dict[chara_id] = new (cons_dict[chara_id] || common_cons)(chara_id);
    }
    return obj_dict[chara_id].recruit(stage, event_object).then((r) => {
      if (get(\`cflag:$\{chara_id}:招募状态\`) === recruit_flags.yes) {
        return obj_dict[chara_id]
          .recruit_result()
          .then(() => punish_by_yandere(chara_id, stage))
          .then(() => r);
      }
      return r;
    });
  }
};
`;

writeFileSync('../../ere/event/rec/rec-factory.js', output);

execSync('npx eslint --fix ./ere/event/rec/rec-factory.js', {
  cwd: join(process.cwd(), '../..'),
});

console.log(
  `[generate-rec-factory.js] registers ${rec_scripts.length} recruit scripts`,
);
