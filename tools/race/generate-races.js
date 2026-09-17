const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const { join, resolve } = require('path');

const { read_and_write_generated } = require('../libs');

let csv = readFileSync(join(__dirname, '../../common/race/races.csv'), 'utf-8');
csv = csv
  .replace(/^\ufeff/, '')
  .split('\n')
  .map((e) => {
    const csv_list = e.split(',');
    if (csv_list.length > 6) {
      csv_list[6] = csv_list[6].toLowerCase();
      return csv_list;
    } else {
      return [];
    }
  })
  .filter((e) => e[0]);

csv.shift();

let output = 'const race_enum = {\n// 出道战\nbegin_race: 0,\n';

csv.forEach((r, i) => {
  output += `// ${r[5]}\n${r[1]}:${i + 1},\n`;
});

output +=
  '};\n\nconst current = new Date().getTime();\n\n/** @type {RaceInfo[]} */\nconst race_infos = [];\n';

const dict = {};

csv.forEach((e) => {
  if (dict[e[6]]) {
    console.log(`duplicate file name! ${e[6]}`);
  } else {
    dict[e[6]] = 1;
  }
  output += `race_infos[race_enum.${e[1]}] = require('#/data/race/${e[8].toLowerCase()}/race-${e[6]}');`;
});

read_and_write_generated(
  join(__dirname, '../../ere/data/race/race-const.js'),
  '//',
  output,
);

const distance_dict = {};
distance_dict['短'] = 'short';
distance_dict['英'] = 'mile';
distance_dict['中'] = 'medium';
distance_dict['长'] = 'long';

const track_dict = {};
track_dict['札幌'] = 'sapporo';
track_dict['函館'] = 'hakodate';
track_dict['新潟'] = 'niigata';
track_dict['福島'] = 'fukushima';
track_dict['中山'] = 'nakayama';
track_dict['東京'] = 'tokyo';
track_dict['中京'] = 'chukyo';
track_dict['京都'] = 'kyoto';
track_dict['阪神'] = 'hanshin';
track_dict['小倉'] = 'kokura';
track_dict['大井'] = 'ohi';
track_dict['川崎'] = 'kawasaki';
track_dict['船橋'] = 'funabashi';
track_dict['盛岡'] = 'morioka';
track_dict['隆尚'] = 'longchamp';
track_dict['坝上'] = 'bashang';
track_dict['沙田'] = 'shatin';
track_dict['尚蒂伊'] = 'chantilly';
track_dict['圣克劳德'] = 'st_cloud';
track_dict['丘吉尔园'] = 'kentucky';
track_dict['宾利高'] = 'baltimore';
track_dict['贝蒙园'] = 'new_york';
track_dict['圣安妮塔公园'] = 'santa_anita';
track_dict['迈丹'] = 'meydan';
track_dict['德尔玛'] = 'del_mar';

const rotation_dict = {};
rotation_dict['右'] = 'right';
rotation_dict['左'] = 'left';
rotation_dict['直'] = 'straight';

const limit_dict = {};
limit_dict['2'] = 'exact2';
limit_dict['3'] = 'exact3';
limit_dict['3+'] = 'post3';
limit_dict['4+'] = 'post4';

function getValueInDict(dict, key, l) {
  if (!dict[key]) {
    console.log('error! ', key, l);
  }
  return dict[key];
}

let c_out = '';
let e_out = '';
let j_out = '';

csv.forEach((e, i) => {
  const id = i + 1;
  output =
    "const RaceInfo = require('#/data/race/model/race-info');\n\nmodule.exports = new RaceInfo(\n";
  // ID
  output += `${id},\n`;
  c_out += `${id} = ${JSON.stringify(e[5])};`;
  e_out += `${id} = ${JSON.stringify(e[7])};`;
  j_out += `${id} = ${JSON.stringify(e[4])};`;
  // 比赛类型
  output += `RaceInfo.class_enum.${e[8]},\n`;
  // 场地
  output += `RaceInfo.track_enum.${getValueInDict(track_dict, e[9], e)},\n`;
  // 场地类型
  output += `RaceInfo.ground_enum.${e[10] === '芝' ? 'grass' : 'mud'},\n`;
  // 距离
  output += `${e[11]},\n`;
  // 距离类型
  output += `RaceInfo.distance_enum.${getValueInDict(
    distance_dict,
    e[12],
    e,
  )},\n`;
  // 左回右回
  output += `RaceInfo.rotation_enum.${getValueInDict(
    rotation_dict,
    e[13].substring(0, 1),
    e,
  )},\n`;
  // 参赛人数
  output += `${e[16]},\n`;
  // 传奇人数
  output += `[${(e[15] || '')
    .split(/\s+/)
    .filter((e) => e)
    .map(Number)
    .sort((a, b) => a - b)
    .join(',')}],\n`;
  // 年龄限制
  output += `RaceInfo.limit_enum.${getValueInDict(limit_dict, e[14], e)},\n`;
  // 时间
  output += `${
    (Number(e[2].replace(/.$/, '')) - 1) * 4 + Number(e[3].replace(/.$/, ''))
  },\n`;
  output += `${e[18]},\n`;
  // 赏金
  output += `${Math.floor(
    (Number(e[17].replace(/\s*$/, '')) * (e[8] === 'G1' ? 0.75 : 1.25)) / 4,
  )},\n`;
  // 参数号
  output += `${e[0]},\n`;
  output += ');';
  read_and_write_generated(
    join(
      __dirname,
      `../../ere/data/race/${e[8].toLowerCase()}/race-${e[6]}.js`,
    ),
    '//',
    output,
  );
});

read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/race/races.js'),
  '//',
  c_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/ja-JP/race/races.js'),
  '//',
  j_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/en-US/race/races.js'),
  '//',
  e_out,
);

try {
  process.stdout.write(
    execSync('node generate-race-params.js', { cwd: resolve(__dirname) }),
  );
  process.stdout.write(
    execSync(
      'git add ./ere/data/race/g1 ./ere/data/race/g2 ./ere/data/race/g3 ./ere/data/race/op ./ere/data/race/race-const.js ./ere/data/race/race-params.js ./ere/data/race/race-attr-bonus.js ./ere/i18n/*/races.js && pnpm run lint',
      { cwd: join(__dirname, '../..') },
    ),
  );
} catch (e) {
  process.stdout.write(e.stdout);
}
