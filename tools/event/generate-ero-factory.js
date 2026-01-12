const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const scripts = readdirSync(join(__dirname, '../../ere/event/ero'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
      !e.endsWith('result.js') &&
      !e.endsWith('child.js'),
  )
  .map((e) => e.substring(4).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const ero_path = join(__dirname, '../../ere/event/ero/ero-factory.js');

writeFileSync(
  ero_path,
  generate_content(
    readFileSync(ero_path, 'utf-8'),
    '//',
    ...scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/ero/ero-${e}');`,
    ),
  ),
);

console.log(
  `[generate-ero-factory.js] registers ${scripts.length} ero scripts`,
);
