const { readFileSync, readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const text_data = require('../../common/text_data.json')[14];
const id2suffix = require('../../common/clothe-id2suffix');

const output = {
  clothe_names: {},
  race_clothe_list: [
    { n: '决胜服', s: '' },
    { n: '第二套决胜服', s: 2 },
    { n: '新年装', s: '_春' },
    { n: '侍从礼服', s: '_仆' },
    { n: '游戏角色Cosplay', s: '_游' },
    { n: '礼服', s: '_礼' },
    { n: '夏装', s: '_夏私' },
    { n: '婚纱', s: '_婚' },
    { n: '泳装', s: '_泳' },
    { n: '万圣节整蛊装', s: '_万圣' },
    { n: '祭典装', s: '_江户' },
    { n: '圣诞礼服', s: '_圣诞' },
    { n: '应援服', s: '_应援' },
  ],
};

for (let i = 1001; i < 2000; ++i) {
  const tmp = {};
  for (let j = 1; j < 99; ++j) {
    const k = `${i}${j.toString().padStart(2, '0')}`;
    if (text_data[k]) {
      tmp[id2suffix[j]] = text_data[k];
    }
  }
  if (Object.keys(tmp).length > 0) {
    output.clothe_names[i - 1000] = tmp;
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

const res_list = [
  ...readdirSync(join(__dirname, '../../res/others')),
  ...readdirSync(join(__dirname, '../../res/race')),
]
  .filter((n) => n.startsWith('chara_stand_'))
  .map((n) => Number(n.substring(17, 23)))
  .filter((n) => n >= 100000 && n < 200000)
  .map((n) => [Math.floor(n / 100), n % 100]);

res_list.forEach(([id, suffix]) => {
  if (!titles[id]) {
    return;
  }
  if (!output.clothe_names[id - 1000]) {
    console.log('[WRAN] missing cloth object:', id);
  } else if (!output.clothe_names[id - 1000][id2suffix[suffix]]) {
    console.log('[WRAN] missing cloth name:', id, '- suffix:', suffix);
  }
});

output.clothe_names[345] = { '': 'ST2', 2: '从零到零' };

writeFileSync(
  join(__dirname, '../../ere/data/clothe-const.json'),
  `${JSON.stringify(output, undefined, 2)}`,
);
