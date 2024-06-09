const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

let csv = readFileSync('./races.csv', 'utf-8');
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

let output =
  "const { bonus_params, id2bonus } = require('#/data/race/race-attr-bonus');\n" +
  'const {\n' +
  '  lane_params,\n' +
  '  slope_params,\n' +
  "} = require('#/data/race/race-params');\n\nconst race_enum = {\n// 出道战\nbegin_race: 0,\n";

csv.forEach((e) => {
  output += `// ${e[5]}\n${e[1]}:0,\n`;
});

output +=
  '};\nObject.keys(race_enum).forEach((e, i) => (race_enum[e] = i));\n\nconst current = new Date().getTime();\n\n/** @type {RaceInfo[]} */\nconst race_infos = [];\n';

const dict = {};

csv.forEach((e) => {
  if (dict[e[6]]) {
    console.log(`duplicate file name! ${e[6]}`);
  } else {
    dict[e[6]] = 1;
  }
  output += `race_infos[race_enum.${
    e[1]
  }] = require('#/data/race/${e[8].toLowerCase()}/race-${e[6]}');\n`;
});

output +=
  '\nrace_infos.forEach((e) => {\n' +
  '  const param_id = e.param_id;\n' +
  '  e.attr_bonus = bonus_params[id2bonus[param_id]] || [];\n' +
  '  e.lanes = lane_params[param_id];\n' +
  '  e.slopes = slope_params[param_id];\n' +
  '  e.phases = [Math.ceil(e.span*4/24),Math.ceil(e.span*16/24),Math.ceil(e.span*20/24)]\n' +
  "});\n\nrace_infos[race_enum.begin_race] = require('#/data/race/race-begin-race')\n\nconsole.log('[race-const.js] race info init done!',(new Date().getTime()-current).toLocaleString(),'ms')\n\nmodule.exports = {\nrace_enum,\nrace_infos,\nrace_rewards: require('#/data/race/race-rewards')};";

writeFileSync('../../ere/data/race/race-const.js', output);

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

csv.forEach((e) => {
  output =
    "const RaceInfo = require('#/data/race/model/race-info');\n\nmodule.exports = new RaceInfo(\n";
  // 英文名
  output += `"${e[7]}",\n`;
  // 中文名
  output += `'${e[5]}',\n`;
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
  output += `${e[15] || 4},\n`;
  // 年龄限制
  output += `RaceInfo.limit_enum.${getValueInDict(limit_dict, e[14], e)},\n`;
  // 时间
  output += `${
    (Number(e[2].replace(/.$/, '')) - 1) * 4 + Number(e[3].replace(/.$/, ''))
  },\n`;
  // 赏金
  output += `${Number(e[17].replace(/\s*$/, '')) / 4},\n`;
  // 参数号
  output += `${e[0]},\n`;
  output += ');';
  writeFileSync(
    `../../ere/data/race/${e[8].toLowerCase()}/race-${e[6]}.js`,
    output,
  );
});

execSync('npx eslint --fix ./ere/data/race', {
  cwd: join(process.cwd(), '../..'),
});
