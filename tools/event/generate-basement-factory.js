const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const base_scripts = readdirSync(join(__dirname, '../../ere/event/basement'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js'),
  )
  .map((e) => e.substring(9).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const base_path = join(
  __dirname,
  '../../ere/event/basement/basement-factory.js',
);

writeFileSync(
  base_path,
  generate_content(
    readFileSync(base_path, 'utf-8'),
    '//',
    ...base_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/basement/basement-${e}');`,
    ),
  ),
);

console.log(
  `[generate-basement-factory.js] registers ${base_scripts.length} basement scripts`,
);
