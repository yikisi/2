const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50222,
  '金枪不倒',
  502,
  2,
  2,
  '永远挺立。',
  (args) => args.sex > 0,
  220,
);
