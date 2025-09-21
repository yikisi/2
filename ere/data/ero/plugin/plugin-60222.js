const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60222,
  '爱之奇迹',
  602,
  2,
  16,
  '训练成功率与效果+20%。',
  (args) => args.id > 0 && args.edu && args.love >= 75,
  920,
);
