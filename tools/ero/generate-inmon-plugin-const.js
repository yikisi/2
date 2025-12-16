const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const { generate_content } = require('../libs');

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
  n_out += `${plug[0]} = ${JSON.stringify(plug[2])};\n`;
  d_out += `${plug[0]} = ${JSON.stringify(plug[5] + '。')};\n`;
  const content = `const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  ${plug[0]},
  ${plug[1]},
  ${plug[3]},
  ${plug[4]},
  ${plug[6] ? `(args)=>${plug[6]}` : '() => true'},
  ${price * 50 + level * 60},
);\n`;
  writeFileSync(
    join(__dirname, `../../ere/data/ero/plugin/plugin-${plug[0]}.js`),
    content,
  );
}

writeFileSync(
  join(__dirname, '../../ere/data/ero/plugin/plugin-const.js'),
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
};
`,
);

const i18n_n = join(__dirname, '../../ere/i18n/zh-CN/inmon.js');
const i18n_d = join(__dirname, '../../ere/i18n/zh-CN/inmon-desc.js');

writeFileSync(
  i18n_n,
  generate_content(readFileSync(i18n_n, 'utf-8'), '//', n_out),
);
writeFileSync(
  i18n_d,
  generate_content(readFileSync(i18n_d, 'utf-8'), '//', d_out),
);

try {
  process.stdout.write(
    execSync('npx eslint --fix ./ere/data/ero/plugin', {
      cwd: join(__dirname, '../..'),
    }),
  );
} catch (e) {
  process.stderr.write(e.stdout);
}

console.log('done!');
