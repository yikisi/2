const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const base_scripts = readdirSync(join(__dirname, '../../ere/event/edu'))
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

const edu_path = join(__dirname, '../../ere/event/edu/edu-factory.js');

writeFileSync(
  edu_path,
  generate_content(
    readFileSync(edu_path, 'utf-8'),
    '//',
    ...base_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/edu/edu-${e}');`,
    ),
  ),
);

console.log(
  `[generate-edu-factory.js] registers ${base_scripts.length} edu scripts`,
);
