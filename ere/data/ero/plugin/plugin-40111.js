const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  40111,
  '耳软心活',
  401,
  2,
  10,
  '对所有角色的好感度获取+100%',
  (args) => args.id > 0,
  620,
);
