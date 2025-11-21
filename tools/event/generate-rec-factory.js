const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const rec_scripts = readdirSync(join(__dirname, '../../ere/event/rec'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js'),
  )
  .map((e) => e.substring(4).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const rec_path = join(__dirname, '../../ere/event/rec/rec-factory.js');

writeFileSync(
  rec_path,
  generate_content(
    readFileSync(rec_path, 'utf-8'),
    '//',
    ...rec_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/rec/rec-${e}');`,
    ),
  ),
);

console.log(
  `[generate-rec-factory.js] registers ${rec_scripts.length} recruit scripts`,
);
