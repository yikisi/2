const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60221,
  '信任彼此',
  602,
  1,
  6,
  '训练成功率与效果+10%。',
  (args) => args.id > 0 && args.edu,
  360,
);
