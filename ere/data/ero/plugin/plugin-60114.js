const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60114,
  '普普通通',
  601,
  2,
  4,
  '气性转换为「普通」。',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== 0,
  320,
);
