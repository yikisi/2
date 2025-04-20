const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60116,
  '刚愎自用',
  601,
  2,
  4,
  '气性转换为「顽固」',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== 2,
  320,
);
