const { readFileSync } = require('fs');
const { join } = require('path');

const { parse: parseYaml } = require('yamljs');

const { read_and_write_generated, stringify } = require('../libs');

const translation = parseYaml(
  readFileSync(join(__dirname, '../../common/i18n/name-dict.yaml'), 'utf-8'),
);

let c_out = [];
let j_out = [];
let e_out = [];

const uma_data = readFileSync(
  join(__dirname, '../../common/uma/uma-data.csv'),
  'utf-8',
)
  .split('\n')
  .filter((l) => l);
uma_data.shift();

const trans_arr = Object.entries(translation);

for (const line of uma_data) {
  const [id, cid, name] = line.split(',');
  if (!cid) {
    continue;
  }
  console.log(cid);
  const obj = trans_arr.find((n) => n[1][0] === name);
  if (obj) {
    c_out.push(`  ${id}01 = ${stringify(name)};`);
    j_out.push(`  ${id}01 = ${stringify(obj[0])};`);
    e_out.push(`  ${id}01 = ${stringify(obj[1][1])};`);
  }
}

read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/chara/names.js'),
  '//',
  ...c_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/ja-JP/chara/names.js'),
  '//',
  ...j_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/en-US/chara/names.js'),
  '//',
  ...e_out,
);
