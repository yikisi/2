const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40401,
  '受虐狂',
  404,
  2,
  2,
  '将所有痛苦因子转换为受虐快感。',
  (args) => args.id > 0,
  220,
);
