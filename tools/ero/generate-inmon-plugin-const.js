const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const { join } = require('path');

const { read_and_write_generated } = require('../libs');

const arr = readFileSync(join(__dirname, './inmon-plugins.csv'), 'utf-8')
  .replace(/^\ufeff/, '')
  .split('\n')
  .map((e) => e.replace(/(^\s+)|(\s+$)/, '').split(','));

arr.shift();

let n_out = '';
let d_out = '';

for (const plug of arr) {
  const level = Number(plug[3]);
  const price = Number(plug[4]);
  n_out += `${plug[0]} = ${JSON.stringify(plug[2])};`;
  d_out += `${plug[0]} = ${JSON.stringify(plug[5] + '。')};`;
  const content = `const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  ${plug[0]},
  ${plug[1]},
  ${plug[3]},
  ${plug[4]},
  ${plug[6] ? `(args)=>${plug[6]}` : '() => true'},
  ${price * 50 + level * 60},
);`;
  read_and_write_generated(
    join(__dirname, `../../ere/data/ero/plugin/plugin-${plug[0]}.js`),
    '//',
    content,
  );
}

read_and_write_generated(
  join(__dirname, '../../ere/data/ero/plugin/plugin-const.js'),
  '//',
  `/** @type {Record<string,InmonPlugin>} */
const plugins = {};

${arr
  .map((e) => `plugins[${e[0]}] = require('#/data/ero/plugin/plugin-${e[0]}');`)
  .join('\n')}

module.exports = {
  inmon_plugin_dict: plugins,
  plugin_enum: {
${arr.map((e) => `    // ${e[2]}: ${e[5]}\n    ${e[7]}: ${e[0]},`).join('\n')}
  },
};`,
);

read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/sex/inmons.js'),
  '//',
  n_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/sex/inmon-desc.js'),
  '//',
  d_out,
);

try {
  process.stdout.write(
    execSync(
      'npx eslint --fix ./ere/data/ero/plugin ./ere/i18n/zh-CN/sex/inmon*.js',
      { cwd: join(__dirname, '../..') },
    ),
  );
} catch (e) {
  process.stderr.write(e.stdout);
}

console.log('done!');
