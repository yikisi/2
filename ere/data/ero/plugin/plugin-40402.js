const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40402,
  '惊悚爱好',
  404,
  2,
  2,
  '将所有恐惧因子转换为受虐快感。',
  (args) => args.id > 0,
  220,
);
