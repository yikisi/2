const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50111,
  '高潮操纵Ⅰ',
  501,
  1,
  4,
  '每隔一回合允许高潮一回合',
  () => true,
  260,
);
