const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40112,
  '忠贞不二',
  401,
  3,
  26,
  '每周结束时好感度恢复最大值。',
  (args) => args.id > 0,
  1480,
);
