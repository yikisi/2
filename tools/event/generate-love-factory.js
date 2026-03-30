const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const love_scripts = readdirSync(join(__dirname, '../../ere/event/love'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
      !e.endsWith('god.js'),
  )
  .map((e) => e.substring(5).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const love_path = join(__dirname, '../../ere/event/love/love-factory.js');

writeFileSync(
  love_path,
  generate_content(
    readFileSync(love_path, 'utf-8'),
    '//',
    ...love_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/love/love-${e}');`,
    ),
  ),
);

console.log(
  `[generate-love-factory.js] registers ${love_scripts.length} love scripts`,
);
