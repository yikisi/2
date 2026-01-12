const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40121,
  '将信将疑',
  401,
  2,
  10,
  '对所有角色的好感度获取-50%。',
  (args) => args.id > 0,
  620,
);
