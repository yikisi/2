const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60115,
  '血气方刚',
  601,
  2,
  4,
  '气性转换为「热血」',
  (args) => args.chara !== 3,
  320,
);
