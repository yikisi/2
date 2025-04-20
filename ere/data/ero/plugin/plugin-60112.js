const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60112,
  '畏首畏尾',
  601,
  2,
  4,
  '气性转换为「胆小」',
  (args) => args.id > 0 && args.chara !== undefined && args.chara !== -2,
  320,
);
