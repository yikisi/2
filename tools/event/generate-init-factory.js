const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const init_scripts = readdirSync(join(__dirname, '../../ere/event/init'))
  .filter(
    (e) =>
      e.startsWith('init') && e.endsWith('.js') && !e.endsWith('factory.js'),
  )
  .map((e) => e.substring(5).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const init_path = join(__dirname, '../../ere/event/init/init-factory.js');

writeFileSync(
  init_path,
  generate_content(
    readFileSync(init_path, 'utf-8'),
    '//',
    ...init_scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/event/init/init-${e}');`,
    ),
  ),
);

console.log(
  `[generate-init-factory.js] registers ${init_scripts.length} init scripts`,
);
