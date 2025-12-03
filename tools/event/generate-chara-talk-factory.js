const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const { compare_chara_id, generate_content } = require('../libs');

const relative_path = '../../ere/utils/chara-talk-extended';

const scripts = readdirSync(join(__dirname, relative_path))
  .map((e) => e.substring(11).replace(/\.js$/, ''))
  .sort(compare_chara_id);

const talk_path = join(__dirname, '../../ere/utils/chara-talk-factory.js');

writeFileSync(
  talk_path,
  generate_content(
    readFileSync(talk_path, 'utf-8'),
    '//',
    ...scripts.map(
      (e) =>
        `cons_dict[${isNaN(Number(e)) ? `'${e}'` : e}] = require('#/utils/chara-talk-extended/chara-talk-${e}');`,
    ),
  ),
);

console.log(
  `[generate-chara-talk-factory.js] registers ${scripts.length} chara talk constructors`,
);
