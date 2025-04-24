const { readdirSync, writeFileSync } = require('fs');

const mec_scripts = readdirSync('../../ere/event/mec')
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
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

let output = `const { get } = require('#/era-electron');

const MecChild = require('#/event/mec/mec-child');
const CustomizedMec = require('#/event/mec/mec-common');
const script_dict = require('#/event/script-dict.json');

const { first_child_id } = require('#/data/other-const');

const cons_dict = {},
  obj_dict = {};

const current = new Date().getTime();

`;

mec_scripts.forEach(
  (e) =>
    (output += `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/mec/mec-${e}');\n`),
);

output += `cons_dict[201] =
  cons_dict[202] =
  cons_dict[203] =
    require('#/event/mec/mec-npc-uma-common');
cons_dict[207] = cons_dict[345] = require('#/event/mec/mec-npc');

console.log(
  '[mec-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number} chara_id
 * @returns {CustomizedMec}
 */
function get_custom_mec(chara_id) {
  if (!obj_dict[chara_id]) {
    const { n: script_name, c: cons } =
      chara_id >= first_child_id
        ? { n: get(\`callname:$\{chara_id}:-2\`), c: MecChild }
        : { n: chara_id, c: CustomizedMec };
    obj_dict[chara_id] = new (cons_dict[
      script_dict[script_name] || script_name
    ] || cons)(chara_id);
  }
  return obj_dict[chara_id].get_this();
}

CustomizedMec.get_custom_mec = get_custom_mec;

module.exports = {
  get_custom_mec,
};
`;

writeFileSync('../../ere/event/mec/mec-factory.js', output);

console.log(
  `[generate-mec-factory.js] registers ${mec_scripts.length} mechanism scripts`,
);
