const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

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
  .sort(compare_chara_id);

const mec_path = join(__dirname, '../../ere/event/mec/mec-factory.js');

writeFileSync(
  mec_path,
  generate_content(
    readFileSync(mec_path, 'utf-8'),
    '//',
    ...mec_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/mec/mec-${e}');`,
    ),
    `cons_dict[201] =
  cons_dict[202] =
  cons_dict[203] =
    require('#/event/mec/mec-uma-npc');`,
    `cons_dict[346] =
  cons_dict[347] =
  cons_dict[348] =
    require('#/event/mec/mec-npc');`,
  ),
);

console.log(
  `[generate-mec-factory.js] registers ${mec_scripts.length} mechanism scripts`,
);
