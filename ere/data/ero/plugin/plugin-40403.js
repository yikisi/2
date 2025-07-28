const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40403,
  '露出癖',
  404,
  2,
  2,
  '将所有羞耻因子转换为受虐快感。',
  (args) => args.id > 0,
  220,
);
