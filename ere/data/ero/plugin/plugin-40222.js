const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40222,
  '只可在此',
  402,
  3,
  18,
  '爱慕获取-100%。',
  (args) => args.id > 0,
  1080,
);
