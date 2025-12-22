const { readFileSync } = require('fs');
const { join } = require('path');

const translation = require('../../common/uma/name-dict.json');
const { read_and_write_generated } = require('../libs');

let c_out = '';
let j_out = '';
let e_out = '';

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
  console.log(cid);
  const obj = trans_arr.find((n) => n[1][0] === name);
  if (obj) {
    c_out += `${id}01=${JSON.stringify(name)};`;
    j_out += `${id}01=${JSON.stringify(obj[0])};`;
    e_out += `${id}01=${JSON.stringify(obj[1][1])};`;
  }
}

read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/names.js'),
  '//',
  c_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/ja-JP/names.js'),
  '//',
  j_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/en-US/names.js'),
  '//',
  e_out,
);
