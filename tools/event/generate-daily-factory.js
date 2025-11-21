const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const base_scripts = readdirSync(join(__dirname, '../../ere/event/daily'))
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
      !e.endsWith('result.js') &&
      !e.endsWith('child.js') &&
      !e.endsWith('god.js'),
  )
  .map((e) => e.substring(6).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const daily_path = join(__dirname, '../../ere/event/daily/daily-factory.js');

writeFileSync(
  daily_path,
  generate_content(
    readFileSync(daily_path, 'utf-8'),
    '//',
    ...base_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/daily/daily-${e}');`,
    ),
    `cons_dict[340] =
  cons_dict[341] =
  cons_dict[342] =
    require('#/event/daily/daily-god');`,
  ),
);

console.log(
  `[generate-daily-factory.js] registers ${base_scripts.length} daily scripts`,
);
