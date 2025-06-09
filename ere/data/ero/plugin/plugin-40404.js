const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40404,
  '狂喜感知',
  404,
  3,
  8,
  '将所有负面情感因子转换为受虐快感。',
  (args) => args.id > 0,
  580,
);
