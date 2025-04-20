const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  70211,
  '常识转换',
  702,
  3,
  30,
  '暂无效果。',
  (args) => args.id > 0,
  1680,
);
