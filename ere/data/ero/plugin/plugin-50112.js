const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50112,
  '高潮操纵Ⅱ',
  501,
  2,
  12,
  '每隔两回合允许高潮一回合',
  (args) => args.id > 0,
  720,
);
