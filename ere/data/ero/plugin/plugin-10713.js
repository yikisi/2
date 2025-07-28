const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  10713,
  '膣感觉Ⅲ',
  107,
  3,
  16,
  '阴道快感获取+400%。',
  (args) => args.sex !== 1,
  980,
);
