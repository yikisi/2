const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const arr = readFileSync('./inmon-plugins.csv', 'utf-8')
  .replace(/^\ufeff/, '')
  .split('\n')
  .map((e) => e.replace(/(^\s+)|(\s+$)/, '').split(','));

arr.shift();

for (const plug of arr) {
  const level = Number(plug[3]),
    price = Number(plug[4]);
  const content = `const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  ${plug[0]},
  '${plug[2]}',
  ${plug[1]},
  ${plug[3]},
  ${plug[4]},
  '${plug[5].endsWith('。') ? plug[5] : plug[5] + '。'}',
  ${plug[6] ? `(args)=>${plug[6]}` : '() => true'},
  ${price * 50 + level * 60},
);\n`;
  writeFileSync(`../../ere/data/ero/plugin/plugin-${plug[0]}.js`, content);
}

writeFileSync(
  '../../ere/data/ero/plugin/plugin-const.js',
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

try {
  process.stdout.write(
    execSync('npx eslint --fix ./ere/data/ero/plugin', {
      cwd: join(process.cwd(), '../..'),
    }),
  );
} catch (e) {
  process.stdout.write(e.stdout);
}
