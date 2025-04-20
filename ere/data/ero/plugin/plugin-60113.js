const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60113,
  '一丝不苟',
  601,
  2,
  4,
  '气性转换为「认真」',
  (args) => args.chara !== undefined && args.chara !== -1,
  320,
);
