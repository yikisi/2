const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40131,
  '宽以待人',
  401,
  2,
  10,
  '对所有角色的好感度损失-50%。',
  (args) => args.id > 0,
  620,
);
