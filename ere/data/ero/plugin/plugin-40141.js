const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40141,
  '疑邻盗斧',
  401,
  2,
  10,
  '对所有角色的好感度损失+100%',
  (args) => args.id > 0,
  620,
);
