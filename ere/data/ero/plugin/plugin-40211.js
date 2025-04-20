const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40211,
  '爱我',
  402,
  2,
  12,
  '爱慕获取+100%',
  (args) => args.id > 0,
  720,
);
