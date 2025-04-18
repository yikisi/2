const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10712,
  '膣感觉Ⅱ',
  107,
  2,
  6,
  '阴道快感获取+200%',
  (args) => args.sex !== 1,
  420,
);
