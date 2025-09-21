const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60223,
  '直到极限',
  602,
  3,
  19,
  '训练成功率与效果+270%，消耗所有体力与精力并获得1层伤病，声望-1。',
  (args) => args.id > 0,
  1130,
);
