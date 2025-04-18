const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60111,
  '唯唯诺诺',
  601,
  2,
  4,
  '气性转换为「弱气」',
  (args) => args.chara !== -3,
  320,
);
