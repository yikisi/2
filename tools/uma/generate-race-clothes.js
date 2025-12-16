const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const text_data = require('../../common/text_data.json')[14];
const id2suffix = require('../../common/clothe-id2suffix');
const { generate_content } = require('../libs');

const clothe_names = {};
const i18n = {};

for (let i = 1001; i < 2000; ++i) {
  const tmp = {};
  for (let j = 1; j < 99; ++j) {
    const k = `${i}${j.toString().padStart(2, '0')}`;
    if (text_data[k]) {
      tmp[id2suffix[j]] = k;
      i18n[k] = text_data[k];
    }
  }
  if (Object.keys(tmp).length > 0) {
    clothe_names[i - 1000] = tmp;
  }
}

const titles = {};

const uma_lines = readFileSync(
  join(__dirname, '../../common/uma/uma-data.csv'),
  'utf-8',
)
  .replace(/^\ufeff/, '')
  .split('\n')
  .filter((l) => l)
  .map((l) => l.split(','));
const header = uma_lines.shift();
const i_fname = header.findIndex((e) => e === '文件名');
const i_title = header.findIndex((e) => e === '角色Str|称号');
uma_lines.forEach((l) => {
  if (l[i_title]) {
    titles[l[i_fname]] = l[i_title];
  }
});

delete titles[1075];

const res_list = [
  ...readdirSync(join(__dirname, '../../res/others')),
  ...readdirSync(join(__dirname, '../../res/race')),
]
  .filter((n) => n.startsWith('chara_stand_'))
  .map((n) => Number(n.substring(17, 23)))
  .filter((n) => n >= 100000 && n < 200000)
  .map((n) => [Math.floor(n / 100), n % 100]);

let exit = 0;

console.log('[generate-race-clothes.js] missing clothes:');

res_list.forEach(([id, suffix]) => {
  if (!titles[id]) {
    return;
  }
  if (!clothe_names[id - 1000]) {
    console.log('\tmissing cloth object:', id);
    exit = 1;
  } else if (!clothe_names[id - 1000][id2suffix[suffix]]) {
    console.log('\tmissing cloth name:', id, '- suffix:', suffix);
    exit = 1;
  }
});

if (exit === 0) {
  console.log('\tnone');
}

writeFileSync(
  join(__dirname, '../../ere/data/clothe-const.json'),
  JSON.stringify(
    Object.entries(id2suffix).map((a) => [a[0].padStart(2, '0'), a[1]]),
    void 0,
    2,
  ),
);

const i18n_path = join(__dirname, '../../ere/i18n/zh-CN/clothes.js');

writeFileSync(
  i18n_path,
  generate_content(
    readFileSync(i18n_path, 'utf-8'),
    '//',
    ...Object.entries(i18n).map(
      ([key, name]) => `  ${key} = ${JSON.stringify(name)};`,
    ),
  ),
);

process.exit(exit);
