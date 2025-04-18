const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60115,
  '坚强不屈',
  601,
  2,
  4,
  '气性转换为「要强」',
  (args) => args.chara !== 1,
  320,
);
