const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const relative_path = join(__dirname, '../../ere/event/check');

const check_scripts = readdirSync(relative_path)
  .filter(
    (e) =>
      e.endsWith('.js') &&
      !e.endsWith('common.js') &&
      !e.endsWith('factory.js') &&
      !e.endsWith('god.js'),
  )
  .map((e) => e.substring(6).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const check_path = join(relative_path, 'check-factory.js');

writeFileSync(
  check_path,
  generate_content(
    readFileSync(check_path, 'utf-8'),
    '//',
    ...check_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/check/check-${e}');`,
    ),
    `cons_dict[340] =
  cons_dict[341] =
  cons_dict[342] =
    require('#/event/check/check-god');`,
  ),
);

console.log(
  `[generate-check-factory.js] registers ${check_scripts.length} check scripts`,
);
