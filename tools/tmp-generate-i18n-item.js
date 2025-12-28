const { readFileSync } = require('fs');
const { join } = require('path');

const desc = require('../ere/data/desc/items.json');
const { read_and_write_generated } = require('./libs');

const csv = readFileSync(join(__dirname, '../csv/Item.csv'), 'utf-8')
  .split('\n')
  .map((line) => line.replace(/;.*$/, '').split(','))
  .filter((line) => line.length > 1);

let n_out = '';
let d_out = '';

csv.forEach(([id, name]) => {
  n_out += `${id} = ${JSON.stringify(name)};`;
  d_out += `${id} = ${JSON.stringify(desc[name] || '')};`;
});

read_and_write_generated(
  join(__dirname, '../ere/i18n/zh-CN/items.js'),
  '//',
  n_out,
);
read_and_write_generated(
  join(__dirname, '../ere/i18n/zh-CN/item-desc.js'),
  '//',
  d_out,
);
