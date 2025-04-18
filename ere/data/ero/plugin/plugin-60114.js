const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60114,
  '唯唯诺诺',
  601,
  2,
  4,
  '气性转换为「普通」',
  (args) => args.chara !== 0,
  320,
);
