const { writeFileSync } = require('fs');

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

writeFileSync('../../ere/data/clothe-const.json', `${JSON.stringify(output)}`);
