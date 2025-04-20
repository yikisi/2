const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50113,
  '高潮操纵Ⅲ',
  501,
  3,
  32,
  '每隔四回合允许高潮一回合',
  (args) => args.id > 0,
  1780,
);
